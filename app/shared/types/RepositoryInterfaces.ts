import { TFilter, TSort } from "./RequestTypes";

export interface IRepository<T> {
    get(filters?: TFilter<T>[], sort?: TSort<T>[]): Promise<T[]>;
    getById(id: string): Promise<T | null>;
    getCount(filters?: TFilter<T>[]): Promise<number>;
    create(data: Omit<T, 'id'>): Promise<T>;
    update(id: string, data: Partial<T>): Promise<Partial<T>>;
    updateMany(updates: Array<{ id: string, data: Partial<T> }>): Promise<Partial<T>[]>;
    delete(id: string): Promise<void>;
    deleteMany(ids: string[]): Promise<void>;
}

export interface IDataProvider<T> {
    get(filters?: TFilter<T>[], sort?: TSort<T>[]): Promise<T[]>;
    getById(id: string): Promise<T | null>;
    getCount(filters?: TFilter<T>[]): Promise<number>;
    create(data: Omit<T, 'id'>): Promise<T>;
    update(id: string, data: Omit<Partial<T>, 'id'>): Promise<Partial<T>>;
    updateMany(updates: Array<{id: string, data: Omit<Partial<T>, 'id'>}>): Promise<Partial<T>[]>;
    delete(id: string): Promise<void>;
    deleteMany(ids: string[]): Promise<void>;
}