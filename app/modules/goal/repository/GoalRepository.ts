import Repository from "@shared/infra/Repository";
import { TGoal } from "../types/Goal";
import FirebaseRepProvider from "@shared/infra/FirebaseRepProvider";

export default class GoalRepository extends Repository<TGoal> {
    constructor() {
        super(new FirebaseRepProvider<TGoal>('goals'));
    }
}