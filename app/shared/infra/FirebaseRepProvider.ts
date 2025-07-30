import { IDataProvider } from "@shared/types/RepositoryInterfaces";
import { TFilter, TSort } from "@shared/types/RequestTypes";
import { chunkArray } from "@shared/utils/Array";
import { ErrorFactory } from "@shared/utils/Error";
import { db } from "FirebaseConfig";
import { getAuth } from "firebase/auth";
import {
    collection,
    query,
    where,
    orderBy,
    documentId,
    getDocs,
    getDoc,
    getAggregateFromServer,
    addDoc,
    updateDoc,
    deleteDoc,
    writeBatch,
    WhereFilterOp,
    doc,
    count
} from "firebase/firestore";


export default class FirebaseRepProvider<T> implements IDataProvider<T> {
    private userId: string | undefined;

    constructor(
        private collectionName: string,
        filterByUserId: boolean = true
    ) {
        if (filterByUserId) this.userId = getAuth().currentUser?.uid;
    }

    protected getCollection() {
        return collection(db, this.collectionName);
    }

    protected getQuery(filters?: TFilter<T>[], sort?: TSort<T>[]) {
        let dataQuery = this.userId ? query(this.getCollection(), where('userId', '==', this.userId)) : this.getCollection();

        if (!sort?.length && !filters?.length) return dataQuery;

        if (filters?.length) {
            filters.forEach(filter => {
                dataQuery = query(
                    dataQuery,
                    where(
                        filter.field === 'id' ? documentId() : filter.field,
                        filter.operator as WhereFilterOp,
                        filter.value
                    )
                );
            });
        }

        if (sort?.length) {
            sort.forEach(s => {
                dataQuery = query(
                    dataQuery,
                    orderBy(
                        s.field === 'id' ? documentId() : s.field,
                        s.direction
                    )
                );
            });
        }

        return dataQuery;
    }

    async get(filters?: TFilter<T>[], sort?: TSort<T>[]): Promise<T[]> {
        try {
            const querySnapshot = await getDocs(this.getQuery(filters, sort));

            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            return data as T[] ?? [];
        } catch (error) {
            console.log(error);
            throw ErrorFactory.create(error);
        }
    }

    async getById(id: string): Promise<T> {
        try {
            const docRef = doc(db, this.collectionName, id),
                docSnap = await getDoc(docRef);

            return {
                id: docSnap.id,
                ...docSnap.data()
            } as T;
        } catch (error) {
            throw ErrorFactory.create(error);
        }
    }

    async getCount(filters?: TFilter<T>[]): Promise<number> {
        try {
            const querySnapshot = await getAggregateFromServer(this.getQuery(filters), {
                count: count()
            });

            return querySnapshot.data().count || 0;
        } catch (error) {
            throw ErrorFactory.create(error);
        }
    }

    async create(data: Omit<T, 'id'>): Promise<T> {
        try {
            const docData = {
                ...data,
                createdAt: new Date()
            };

            const docRef = await addDoc(this.getCollection(), docData);

            return { id: docRef.id, ...data } as T;
        } catch (error) {
            throw ErrorFactory.create(error);
        }
    }

    async update(id: string, data: Omit<Partial<T>, 'id'>): Promise<Partial<T>> {
        try {
            const docRef = doc(db, this.collectionName, id);

            await updateDoc(docRef, {
                ...data,
                updatedAt: new Date()
            });

            return { id, ...data } as unknown as Partial<T>;
        } catch (error) {
            throw ErrorFactory.create(error);
        }
    }

    async updateMany(data: Array<{ id: string, data: Omit<Partial<T>, 'id'> }>): Promise<Partial<T>[]> {
        try {
            const batches = chunkArray(data, 500);

            for (const batchData of batches) {
                const batch = writeBatch(db);

                batchData.forEach(item => {
                    const docRef = doc(db, this.collectionName, item.id);
                    batch.update(docRef, item.data);
                });

                await batch.commit();
            }

            return data.map(item => ({ id: item.id, ...item.data })) as unknown as Partial<T>[];
        } catch (error) {
            throw ErrorFactory.create(error);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const docRef = doc(db, this.collectionName, id);
            await deleteDoc(docRef);
        } catch (error) {
            throw ErrorFactory.create(error);
        }
    }

    async deleteMany(ids: string[]): Promise<void> {
        try {
            const batches = chunkArray(ids, 500);

            for (const batchIds of batches) {
                const batch = writeBatch(db);

                batchIds.forEach(id => {
                    const docRef = doc(db, this.collectionName, id);
                    batch.delete(docRef);
                });

                await batch.commit();
            }
        } catch (error) {
            throw ErrorFactory.create(error);
        }
    }
}