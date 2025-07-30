import { TComponent, TTextStyles, TViewStyles, TViewStyle } from "@shared/types/ComponentTypes";
import { cn } from "@shared/utils/Styles";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "./Icon";
import { Card } from "./Card";
import { useMemo } from "react";

type TCheckboxProps = TComponent<TViewStyle> & {
    checked: boolean;
    onPress: () => void;
    checkedColor?: string;
    size?: number;
    iconSize?: number;
    icon?: string;
    radio?: boolean;
    square?: boolean;
    disabled?: boolean;
    checkboxPosition?: 'left' | 'right';
    checkboxStyle?: TViewStyles;
}

export function Checkbox({
    checked,
    onPress,
    radio,
    square,
    disabled,
    checkboxStyle,
    checkedColor,
    size = 6,
    icon = 'Check',
    iconSize = radio ? 12 : 16,
    className,
    checkboxPosition = 'left',
    children,
    ...props
}: TCheckboxProps) {
    const sizeClasses = {
        4: 'w-4 h-4',
        5: 'w-5 h-5',
        6: 'w-6 h-6',
        7: 'w-7 h-7',
        8: 'w-8 h-8',
        10: 'w-10 h-10',
        12: 'w-12 h-12',
        16: 'w-16 h-16',
        20: 'w-20 h-20',
        24: 'w-24 h-24',
    };

    const checkboxClassName = cn(`
        ${sizeClasses[size as keyof typeof sizeClasses] || 'w-6 h-6'} 
        rounded-full items-center justify-center
        ${square ? 'rounded-md' : 'rounded-full'} 
        ${checked ? 'border-0' : 'border-2 border-gray-300'}`,
        checkboxStyle?.className
    )

    const checkboxElement = useMemo(() => (
        <View
            className={checkboxClassName}
            style={[
                checkboxStyle?.style,
                {
                    backgroundColor: checked
                        ? checkedColor ?? '#4f46e5'
                        : 'white'
                }
            ]}
        >
            {checked && !radio && <Icon name={icon} size={iconSize} color={'white'} />}

            {checked && radio && (
                <View 
                    className="rounded-full bg-white" 
                    style={{ width: iconSize, height: iconSize }} 
                />
            )}
        </View>
    ), [checked, radio, icon, iconSize, checkedColor, checkboxClassName, checkboxStyle]);

    return (
        <TouchableOpacity 
            onPress={onPress} 
            disabled={disabled} 
            className={cn('flex-row gap-2', className)}
            {...props}
        >
            {checkboxPosition === 'left' && checkboxElement}
            {children}
            {checkboxPosition === 'right' && checkboxElement}
        </TouchableOpacity>
    );
}

type TCheckboxCardProps = TCheckboxProps & {
    checkboxContentStyle?: TViewStyles;
}

export function CheckboxCard({ 
    onPress, 
    disabled, 
    checkboxStyle,
    className, 
    style, 
    checkboxContentStyle,
    ...props 
}: TCheckboxCardProps) {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Card className={className} style={style}> 
                <Checkbox
                    checkboxStyle={{
                        ...checkboxStyle,
                        className: cn('mt-[2px]', checkboxStyle?.className)
                    }}
                    {...checkboxContentStyle}
                    onPress={onPress}
                    disabled={disabled}
                    {...props}
                />
            </Card>
        </TouchableOpacity>
    )
}