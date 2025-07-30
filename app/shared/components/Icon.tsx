import { View } from 'react-native';
import { TViewStyles } from '@shared/types/ComponentTypes';
import { icons } from 'lucide-react-native';

type IconProps = TViewStyles & {
    name: string;
    size?: number;
    color?: string;
}

export function Icon({ name, size, color, ...props }: IconProps) {
    const IconComponent = icons[name as keyof typeof icons];
    
    return (
        <View {...props}>
            <IconComponent size={size} color={color} />
        </View>
    )
}