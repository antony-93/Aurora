export default class GoalEntity {
    constructor(description: string, category_id: number, checked: boolean, id?: number) {
        this.description = description;
        this.category_id = category_id;
        this.id = id;
        this.checked = checked;
    }

    id?: number;
                
    description: string;

    checked: boolean

    category_id: number;
}