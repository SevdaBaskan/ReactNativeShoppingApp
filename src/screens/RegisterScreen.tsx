import React from 'react';
import { Text,ScrollView, 
  TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const RegisterScreen = ({ navigation }: any) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const kullaniciKayit = () => {
    if (!name || !email || !password) {
      Alert.alert("Lütfen tüm alanları doldurun.");
      return;
    }
    navigation.navigate('Login');
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
        style={styles.input}
      />

      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      
      <TouchableOpacity onPress={kullaniciKayit}>
        <Text style={styles.linkText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </ScrollView>
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