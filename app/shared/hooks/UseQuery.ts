import { useQuery as useRQQuery } from "@tanstack/react-query";
import { TParams } from "@shared/types/RequestTypes";
import { IRepository } from "@shared/types/RepositoryInterfaces";

type TQueryBase<T> = {
    repository: IRepository<T>
    queryKey: string
}

type TQuery<T> = TQueryBase<T> & TParams<T>

export function useQuery<T>(config: TQuery<T>) {
    const query = useRQQuery({
        queryKey: [config.queryKey, config.filters, config.sort],
        queryFn: () => config.repository.get(config.filters, config.sort)
    })

    return {
        ...query,
        data: query.data ?? []
    }
}

export function useQueryCount<T>(config: TQuery<T>) {
    const query = useRQQuery({
        queryKey: [config.queryKey, 'count', config.filters],
        queryFn: () => config.repository.getCount(config.filters)
    });

    return query;
}

type TQueryById<T> = TQueryBase<T> & {
    id: string
}

export function useQueryById<T>(config: TQueryById<T>) {
    return useRQQuery({
        queryKey: [config.queryKey, config.id],
        queryFn: () => config.repository.getById(config.id)
    });
}