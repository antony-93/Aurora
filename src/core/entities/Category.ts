export default class CategoryEntity {
    constructor(id: number, description: string, icon: string, color: string, backgroundColor: string, sequence: number) {
        this.id = id;
        this.description = description;
        this.icon = icon;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.sequence = sequence;
    }

    id: number;

    description: string;

    icon: string;

    color: string;

    backgroundColor: string;

    sequence: number;
}