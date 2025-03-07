import { View } from "react-native";
import Toast, { ErrorToast } from "react-native-toast-message";

export default function Notification() {
    return (
        <View style={{ zIndex: 9999 }}>
            <Toast
                config={{
                    error: (props) => (
                        <ErrorToast
                            {...props}
                            style={{
                                borderLeftColor: '#FF6F6F',
                                height: 55,
                                backgroundColor: '#FF6F6F',
                                borderRadius: 8,
                            }}
                            text1Style={{
                                color: 'white',
                                fontSize: 14,
                                fontFamily: "LexendDeca_500Medium",
                            }}
                        />
                    )
                }}
                visibilityTime={6000}
                autoHide={true}
                topOffset={50}
                position="top"
            />
        </View>
    )
}