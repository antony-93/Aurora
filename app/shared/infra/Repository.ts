import { IDataProvider, IRepository } from '@shared/types/RepositoryInterfaces';
import { TFilter, TSort } from '@shared/types/RequestTypes';

export default abstract class Repository<T> implements IRepository<T> {
    constructor(
        private readonly dataProvider: IDataProvider<T>
    ) {
    }

    async get(filters?: TFilter<T>[], sort?: TSort<T>[]): Promise<T[]> {
        return this.dataProvider.get(filters, sort);
    }

    async getById(id: string): Promise<T | null> {
        return this.dataProvider.getById(id);
    }

    async getCount(filters?: TFilter<T>[]): Promise<number> {
        return this.dataProvider.getCount(filters);
    }

    async create(data: Omit<T, 'id'>): Promise<T> {
        return this.dataProvider.create(data);
    }

    async update(id: string, data: Partial<T>): Promise<Partial<T>> {
        return this.dataProvider.update(id, data);
    }

    async updateMany(data: Array<{ id: string, data: Partial<T> }>): Promise<Partial<T>[]> {
        return this.dataProvider.updateMany(data);
    }

    async delete(id: string): Promise<void> {
        return this.dataProvider.delete(id);
    }

    async deleteMany(ids: string[]): Promise<void> {
        return this.dataProvider.deleteMany(ids);
    }
}