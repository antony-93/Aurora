import Repository from "@shared/infra/Repository";
import { TGoalCategory } from "../types/GoalCategory";
import FirebaseRepProvider from "@shared/infra/FirebaseRepProvider";

export default class GoalCategoryRepository extends Repository<TGoalCategory> {
    constructor() {
        super(new FirebaseRepProvider<TGoalCategory>('goalcategories'));
    }
}