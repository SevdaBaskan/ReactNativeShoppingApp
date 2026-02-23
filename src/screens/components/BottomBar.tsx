import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BottomBar = ({ navigation }: any) => {
  return (
    <View style={styles.altbar}>
      <TouchableOpacity style={styles.altbarButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.altbarText}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altbarButton} onPress={() => navigation.navigate('Kategori')}>
        <Text style={styles.altbarText}>Kategoriler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altbarButton} onPress={() => navigation.navigate('Favoriler')}>
        <Text style={styles.altbarText}>Favoriler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altbarButton} onPress={() => navigation.navigate('Sepet')}>
        <Text style={styles.altbarText}>Sepet</Text>
      </TouchableOpacity>     
      <TouchableOpacity style={styles.altbarButton} onPress={() => navigation.navigate('Ayarlar')}>
        <Text style={styles.altbarText}>Ayarlar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  altbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
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

export default BottomBar;