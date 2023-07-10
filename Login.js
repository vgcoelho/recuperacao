import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Text, StyleSheet, Alert } from "react-native";


export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [logo] = useState(new Animated.ValueXY({ x: 150, y: 170 }));
  const [usuario, setusuario] = useState("");
  const [senha, setSenha] = useState("");
}

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true
    }).start();
  }, []);

  const handleLogin = (navigation) => {
    const usuario = ["vanessa"];
    const senha = ["recuperação"];
    
    
    if (index !== -1 && senha.trim() === senha[index]) {
      navigation.navigate("Menu");
    } else {
      Alert.alert("Erro", "usuario ou senha incorretos.");
      setSenha(""); 
    }
  };

  const handleLogout = (navigation) => {
    navigation.navigate("Login");
  };

  
    
              