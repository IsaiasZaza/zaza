import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons'; // Usando Feather para o ícone de câmera

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Octicons name="Octicons" size={64} color="#000" style={styles.icon} />

      <TextInput
        placeholder="Nome de usuario"
        style={styles.input}
        placeholderTextColor="#aaa"
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signup}>
        <Text style={styles.signupText}>
          Esqueceu a senha? <Text style={styles.signupLink}>Criar uma conta</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '100%',
    backgroundColor: '#00777ff',
    borderWidth: 1,
    borderColor: '#00777ff',
    borderRadius: 5,
    paddingHorizontal: 10,  
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signup: {
    marginTop: 20,
  },
  signupText: {
    color: '#888',
  },
  signupLink: {
    color: '#007aff',
  },
});
