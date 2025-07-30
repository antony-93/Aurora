import { IRepository } from "./RepositoryInterfaces"

export type TMutation<T> = {
    repository: IRepository<T>
    queryKey: string
}