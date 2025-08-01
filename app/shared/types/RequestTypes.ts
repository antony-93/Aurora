import { EnumFilterOperator } from "@shared/enums/EnumFilterOperator";

export type TParams<T> = {
    sort?: TSort<T>[];
    filters?: TFilter<T>[];
}

export type TSort<T> = {
    field: keyof T & string;
    direction: 'asc' | 'desc';
};

export type TFilter<T> = {
    field: keyof T & string;
    operator: EnumFilterOperator;
    value: T[keyof T & string] | T[keyof T & string][];
};