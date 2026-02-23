import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from "./components/BottomBar";
const Sepet = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Sepetiniz şu anda boş.</Text>
                    <TouchableOpacity style={styles.exploreButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.exploreButtonText}>Alışverişe Başla</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <BottomBar navigation={navigation} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        padding: 20,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },
    emptyText: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    exploreButton: {
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    exploreButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    buyButton: {
        backgroundColor: "#28a745",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginTop: 20,
    },
    buyButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
export default Sepet;