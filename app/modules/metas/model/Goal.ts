export default class Goal {
    constructor(description: string, category_id: number, id?: number) {
        this.description = description;
        this.category_id = category_id;
        this.id = id;
    }

    id?: number;
                
    description: string;

    category_id: number;
}