import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from "./components/BottomBar";
import Icon from 'react-native-vector-icons/Ionicons';

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
              
              <View style={styles.info}>
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>{urun.ad}</Text>
                  <Text style={styles.fiyat}>{urun.fiyat}</Text>
                </View>

                <View style={styles.actionRow}>
                  <TouchableOpacity 
                    style={styles.favButton} 
                    onPress={() => navigation.navigate('Favoriler')}
                  >
                    <Image source={require('../../assets/heart.png')} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('KategoriDetay', { 
                      urunAd: urun.ad, 
                      urunFiyat: urun.fiyat,
                      urunResim: urun.resim
                    })}
                  >
                    <Text style={styles.buttonText}>Detay</Text>
                  </TouchableOpacity>
                </View>
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
    padding: 10,
    paddingBottom: 80, // BottomBar'ın üstünü kapatmaması için
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
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  info: {
    padding: 10,
  },
  infoContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  fiyat: {
    fontSize: 13,
    color: "#27ae60",
    fontWeight: "700",
    marginTop: 2,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  favButton: {
    padding: 5,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HomeScreen;