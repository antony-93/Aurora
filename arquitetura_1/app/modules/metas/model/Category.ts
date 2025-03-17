import * as Icons from 'lucide-react-native';

export default class Category {
    constructor(id: number, description: string, icon: keyof typeof Icons, color: string, backgroundColor: string, sequence: number) {
        this.id = id;
        this.description = description;
        this.icon = icon;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.sequence = sequence;
    }

    id: number;

    description: string;

    icon: keyof typeof Icons;

    color: string;

    backgroundColor: string;

    sequence: number;
}