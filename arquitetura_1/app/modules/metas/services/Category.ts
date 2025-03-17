import Database from '../../../database/Db';
import Category from '../model/Category';

class Service {
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

const CategoryService = new Service();

export default CategoryService;