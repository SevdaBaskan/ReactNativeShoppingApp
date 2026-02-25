import React from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const kullaniciKayit = async () => {
    if (!name || !email || !password) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      console.log("Kayıt isteği gönderiliyor...");
      
      const response = await fetch('http://10.0.2.2:3000/kayit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ad_soyad: name,
          email: email,
          sifre: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Başarılı", "Kayıt işleminiz tamamlandı!", [
          { text: "Tamam", onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        Alert.alert("Hata", data.error || "Kayıt yapılamadı.");
      }

    } catch (error) {
      console.error("Bağlantı hatası:", error);
      Alert.alert("Bağlantı Hatası", "Sunucuya bağlanılamadı. Node.js backend'in açık olduğundan emin ol.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      
      <TextInput
        placeholder="Ad Soyad"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={kullaniciKayit}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
        <Text style={styles.linkText}>Zaten hesabınız var mı? Giriş Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#4A90E2",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterScreen;