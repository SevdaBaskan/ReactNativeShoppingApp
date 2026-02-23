import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from "./components/BottomBar";
const Ayarlar = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.optionCard}>
                    <Text style={styles.optionText}>Hesap Bilgileri</Text>
                </View>
                <View style={styles.optionCard}>
                    <Text style={styles.optionText}>Bildirimler</Text>
                </View>
                <View style={styles.optionCard}>
                    <Text style={styles.optionText}>Gizlilik</Text>
                </View>
                <View style={styles.optionCard}>
                    <Text style={styles.optionText}>Yardım & Destek</Text>
                </View>
                <View style={styles.optionCard}>
                    <Text style={styles.optionText}>Hakkımızda</Text>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={() => Alert.alert("Çıkış Yapıldı", "Hesabınızdan çıkış yapıldı.")}>
                    <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
                </TouchableOpacity>
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
    optionCard: {
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    optionText: {
        fontSize: 16,
        color: "#333",
    },
    logoutButton: {
        backgroundColor: "#e74c3c",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
export default Ayarlar;