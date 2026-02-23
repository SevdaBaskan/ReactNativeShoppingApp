import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from "./components/BottomBar";

const KategoriDetay = ({ route, navigation }: any) => {
    const { urunAd, urunFiyat, urunResim } = route.params || {
        urunAd: "Ürün Bilgisi Bulunamadı",
        urunFiyat: "0 TL",
        urunResim: require('../../assets/1.jpg') 
    };

    const sepeteEkle = () => {
        Alert.alert("Başarılı", `${urunAd} sepete eklendi!`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>                
                <View style={styles.detailCard}>
                    <Image source={urunResim} style={styles.mainImage} />
                    
                    <View style={styles.infoSection}>
                        <Text style={styles.title}>{urunAd}</Text>
                        <Text style={styles.fiyatText}>{urunFiyat}</Text>
                        
                        <Text style={styles.description}>
                            Bu ürün el emeği ile özenle hazırlanmıştır. %100 pamuk ipliği kullanılarak üretilen bu tasarım, hem şıklığı hem de konforu bir arada sunar.
                        </Text>

                        <TouchableOpacity
                            style={styles.buyButton}
                            onPress={sepeteEkle}
                        >
                            <Text style={styles.buyButtonText}>Sepete Ekle</Text>
                        </TouchableOpacity>
                    </View>
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
        paddingBottom: 40,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    detailCard: {
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: "#f0f0f0",
    },
    mainImage: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
    },
    infoSection: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2c3e50",
        marginBottom: 8,
    },
    fiyatText: {
        fontSize: 20,
        color: "#27ae60",
        fontWeight: "700",
        marginBottom: 15,
    },
    description: {
        fontSize: 15,
        color: "#666",
        lineHeight: 22,
        marginBottom: 25,
    },
    buyButton: {
        backgroundColor: "#4A90E2",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: "center",
    },
    buyButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    altbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: "#eee",
        marginTop: 30,
    },
    altbarText: {
        fontSize: 13,
        color: "#4A90E2",
        fontWeight: "bold",
    },
});

export default KategoriDetay;