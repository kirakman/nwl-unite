import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, StyleSheet, View } from "react-native";

type Props = TouchableOpacityProps & {
    title?: string;
    isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
        <View style={styles.container}>
        <TouchableOpacity 
            {...rest}
            activeOpacity={0.7}
            disabled={isLoading}
            style={[styles.button, isLoading && styles.disabledButton]}
        >
            {isLoading ? (
                <ActivityIndicator color="green" />
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )}
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: "#F48F56",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: 200
    },
    buttonText: {
        color: "#00292E",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    disabledButton: {
        opacity: 0.5,
    },
    container: {
        alignItems: 'center'
    }
});
