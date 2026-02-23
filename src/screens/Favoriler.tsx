import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from "./components/BottomBar";
const Favoriler = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Henüz favori ürün eklemediniz.</Text>
                    <TouchableOpacity style={styles.exploreButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.exploreButtonText}>Keşfetmeye Başla</Text>
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
});
export default Favoriler;