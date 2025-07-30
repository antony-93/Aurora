import { TTextStyles, TViewStyles } from "@shared/types/ComponentTypes";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { cn, formatColorByPerc } from "@shared/utils/Styles";
import { Icon } from "./Icon";
import { TBottomModal } from "@shared/types/ModalTypes";
import { useCallback } from "react";
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

type TBadgeProps = TViewStyles & {
    text?: string;
    textStyle?: TTextStyles;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
}

export function Badge({
    text,
    className,
    textStyle,
    icon,
    iconSize = 16,
    iconColor,
    ...props
}: TBadgeProps) {
    return (
        <View
            className={cn("flex-row items-center gap-2 px-4 py-2 rounded-full bg-gray-100", className)}
            {...props}
        >
            {text && (
                <Text
                    className={cn("", textStyle?.className)}
                    style={textStyle?.style}
                >
                    {text}
                </Text>
            )}

            {icon && <Icon name={icon} size={iconSize} color={iconColor} />}
        </View>
    )
}

type TBadgeButtonProps = TBadgeProps & {
    onPress: () => void;
}

export function BadgeButton({ onPress, ...props }: TBadgeButtonProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Badge {...props} />
        </TouchableOpacity>
    )
}

type TBadgeActiveProps = TBadgeButtonProps & {
    active?: boolean;
    activeColor?: string;
}

export function BadgeActive({
    active,
    activeColor = '#4f46e5',
    ...props
}: TBadgeActiveProps) {
    return (
        <BadgeButton
            {...props}
            style={{
                backgroundColor: active ? formatColorByPerc(activeColor, 0.1) : '#f3f4f6',
            }}
            textStyle={{
                style: {
                    color: active ? activeColor : undefined,
                }
            }}
            iconColor={active ? activeColor : undefined}
        />
    )
}

type TBadgeModalProps = Omit<TBadgeActiveProps, 'onPress'> & {
    refModal: React.RefObject<TBottomModal | null>;
    title?: string;
    snapPoints?: string[];
    disableBackdrop?: boolean;
    children?: React.ReactNode;
}

export function BadgeModal({
    children,
    snapPoints = ['40%'],
    title,
    refModal,
    disableBackdrop = false,
    icon = 'ChevronDown',
    ...props
}: TBadgeModalProps) {
    const handlePresentModalPress = useCallback(() => {
        refModal.current?.present();
    }, []);

    const renderBackdrop = useCallback((props: any) => (
        <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            opacity={0.5}
        />
    ), []);

    return (
        <View>
            <BadgeActive
                onPress={handlePresentModalPress}
                icon={icon}
                {...props}
            />

            <BottomSheetModal
                ref={refModal}
                snapPoints={snapPoints}
                index={1}
                enablePanDownToClose={true}
                backdropComponent={disableBackdrop ? undefined : renderBackdrop}
            >
                <BottomSheetView className="flex-1 p-6">
                    {title && (
                        <View className="mb-4">
                            <Text className="text-xl font-semibold text-center">
                                {title}
                            </Text>
                        </View>
                    )}

                    {children}
                </BottomSheetView>
            </BottomSheetModal>
        </View>
    )
}