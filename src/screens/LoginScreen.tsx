import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true); 

  const  kullaniciGirisi= () => {
    if (!email || !password) {
      Alert.alert("Hata", "Lütfen e-posta ve şifre alanlarını doldurun.");
      return;
    }
    //navigation.replace('Home');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoşgeldiniz!</Text>

      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isSecure}
          style={styles.passwordInput}
        />

        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Text style={styles.showText}>
            {isSecure ? "Göster" : "Gizle"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={kullaniciGirisi}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
       <Text style={{ textAlign: 'center', marginTop: 15, color: '#4A90E2' }}>
          Hesabın yok mu? Kayıt Ol
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  passwordInput: {
    flex: 1,
    height: 50,
  },

  showText: {
    color: "#4A90E2",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#4A90E2",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    color: "white",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
