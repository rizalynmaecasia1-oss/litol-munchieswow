import { useState } from "react";

import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput
} from "react-native";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (!name || !message) {
      Alert.alert("Please complete the form.");
      return;
    }

    Alert.alert(
      "Message Sent!",
      `Thank you, ${name}!`
    );

    setName("");
    setMessage("");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Contact Us 💌
      </Text>

      <Text style={styles.subtitle}>
        Have questions? Send us a message!
      </Text>

      <Text style={styles.label}>
        Your Name
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Message
      </Text>

      <TextInput
        style={styles.message}
        placeholder="Write your message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Pressable
        style={styles.button}
        onPress={sendMessage}
      >
        <Text style={styles.buttonText}>
          SEND MESSAGE
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#d858ad",
  },

  subtitle: {
    marginTop: 5,
    marginBottom: 30,
    color: "#666",
  },

  label: {
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
  },

  message: {
    height: 150,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#d858ad",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});