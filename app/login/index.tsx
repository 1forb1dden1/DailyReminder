import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../../firebase/firebase-config';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [signedUser, setSignedUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(""); // New state for error message

  useEffect(() => {
    const check = authentication.onAuthStateChanged(() => {
      if (signedUser === true) {
        router.replace('/(tabs)/1');
      }
    });
    return check;
  }, [signedUser]);

  const Register = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re: any) => {
        console.log(re);
        setSignedUser(true);
      })
      .catch((err: any) => {
        console.log("error");
      });
  };

  const Login = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re: any) => {
        console.log(re);
        setSignedUser(true);
        setError(""); // Reset error on successful login
      })
      .catch((err: any) => {
        console.log("error");
        setError('Invalid email or password'); // Set error message on failed login
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.Subheading}>To Do App</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
        <TextInput placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} style={styles.input} secureTextEntry />
      </View>
      {error !== "" && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={Login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Register} style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    Subheading: {
        color: 'white',
        fontSize: 33,
        bottom: "15%",
    },
    inputContainer: {
        width: '80%',
        padding: 0,
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#1a1918',
        color: 'white',
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '80%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 15,
        borderColor: 'black',
        borderWidth: 0,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontWeight: '700',
        fontSize: 16,
    }
    })
