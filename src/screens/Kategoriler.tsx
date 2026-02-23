import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from "./components/BottomBar";

const KategorilerScreen = ({ navigation }: any) => {
    const kategoriler = [
        { id: 1, ad: "Kadın", resim: require('../../assets/1.jpg') },
        { id: 2, ad: "Erkek", resim: require('../../assets/2.jpg') },
        { id: 3, ad: "Çocuk", resim: require('../../assets/3.jpg') },
        { id: 4, ad: "Aksesuar", resim: require('../../assets/1.jpg') },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>                
                <View style={styles.grid}>
                    {kategoriler.map((kategori) => (
                        <TouchableOpacity 
                            key={kategori.id} 
                            style={styles.card} 
                            onPress={() => navigation.navigate('KategoriDetay', { 
                                urunAd: kategori.ad + " Koleksiyonu",
                                urunResim: kategori.resim,
                                urunFiyat: "Kategoriyi İncele" 
                            })}
                        >
                            <Image source={kategori.resim} style={styles.image} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>{kategori.ad}</Text>
                                <Text style={styles.linkText}>Ürünleri Gör →</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <BottomBar navigation={navigation} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
        width: "48%",
        marginBottom: 20,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    image: {
        width: "100%",
        height: 140,
        resizeMode: "cover",
    },
    infoContainer: {
        padding: 12,
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2c3e50",
    },
    linkText: {
        color: "#4A90E2",
        fontSize: 12,
        marginTop: 5,
        fontWeight: "600",
    },
    altbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#eee",
        marginTop: 20,
        borderRadius: 15,
        elevation: 5,
    },
    altbarText: {
        fontSize: 13,
        color: "#4A90E2",
        fontWeight: "bold",
    },
});

export default KategorilerScreen;