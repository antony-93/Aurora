import Database from '../../../database/Db';
import Category from '../model/Category';

export class CategoryService {
    async getCategories(): Promise<Category[]> {
        try {
            return await Database.getDatabase().getAllAsync<Category>(
                `SELECT * FROM category ORDER BY sequence ASC;`
            )
        } catch (e) {
            console.log(e)
            return [];
        }
    }
}