import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from "./components/BottomBar";
const HomeScreen = ({ navigation }: any) => {
  const urunler = [
    { id: 1, ad: "Mavi Örgü", fiyat: "150 TL", resim: require('../../assets/1.jpg') },
    { id: 2, ad: "Kırmızı Örgü", fiyat: "175 TL", resim: require('../../assets/2.jpg') },
    { id: 3, ad: "Yeşil Örgü", fiyat: "200 TL", resim: require('../../assets/3.jpg') },
    { id: 4, ad: "Sarı Örgü", fiyat: "120 TL", resim: require('../../assets/1.jpg') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <View style={styles.grid}>
          {urunler.map((urun) => (
            <View key={urun.id} style={styles.card}>
              <Image source={urun.resim} style={styles.image} />
              
              <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}>{urun.ad}</Text>
                <Text style={styles.fiyat}>{urun.fiyat}</Text>
                
                <TouchableOpacity 
                  style={styles.button}
                  onPress={() => navigation.navigate('KategoriDetay', { 
                    urunAd: urun.ad, 
                    urunFiyat: urun.fiyat,
                    urunResim: urun.resim
                  })}
                >
                  <Text style={styles.buttonText}>Detaylar</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    backgroundColor: "#f8f9fa",
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 40,
  },
    headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    width: "48%",
    borderRadius: 15,
    marginBottom: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  fiyat: {
    fontSize: 10,
    color: "#27ae60",
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
  },
  altbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  altbarButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  altbarText: {
    color: "#4A90E2",
    fontSize: 12,
      fontWeight: "bold",
  },
});

export default HomeScreen;