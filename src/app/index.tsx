import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

import { products } from "./data/products";

export default function HomeScreen() {
  const [feedback, setFeedback] = useState("");
  const [search, setSearch] = useState("");

  // Component Lifecycle
  useEffect(() => {
    console.log("Home screen loaded!");

    return () => {
      console.log("Home screen closed!");
    };
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  function submitFeedback() {
    if (feedback.trim() === "") {
      Alert.alert("Please enter your feedback.");
      return;
    }

    Alert.alert("Thank you!", "Your feedback has been submitted.");
    setFeedback("");
  }

  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <LinearGradient
        colors={["#53c7e8", "#ed69c8"]}
        style={styles.header}
      >
        <Text style={styles.logo}>🍩 LITOL MUNCHIES 🍩</Text>

        <View style={styles.nav}>
          <Pressable onPress={() => router.push("/")}>
            <Text style={styles.navText}>HOME</Text>
          </Pressable>

          <Pressable onPress={() => router.push("/menu")}>
            <Text style={styles.navText}>MENU</Text>
          </Pressable>
        </View>
      </LinearGradient>

      {/* HERO */}
      <LinearGradient
        colors={["#ef73c7", "#58c9e7"]}
        style={styles.hero}
      >
        <Text style={styles.heroTitle}>Litol</Text>
        <Text style={styles.heroTitle}>Munchies</Text>

        <Text style={styles.heroSubtitle}>
          "Big Taste in Every Little Bite!"
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/menu")}
        >
          <Text style={styles.buttonText}>SHOP NOW →</Text>
        </Pressable>
      </LinearGradient>

      
      <View style={styles.searchContainer}>
        <Text style={styles.sectionTitle}>Find Your Favorite</Text>

        <TextInput
          style={styles.input}
          placeholder="Search donuts..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* FEATURED PRODUCTS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>

        <View style={styles.productRow}>
          {filteredProducts.map((product) => (
            <Pressable
              key={product.id}
              style={styles.card}
              onPress={() =>
                router.push({
                  pathname: "/product/[id]",
                  params: {
                    id: product.id,
                  },
                })
              }
            >
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />

              <Text style={styles.productName}>
                {product.name}
              </Text>

              <Text style={styles.price}>
                ₱{product.price}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* MENU PROMO */}
      <LinearGradient
        colors={["#57c9e8", "#e978cb"]}
        style={styles.menuPromo}
      >
        <Text style={styles.promoTitle}>
          LITOL MUNCHIES MENU
        </Text>

        <Text style={styles.promoText}>
          Discover your new favorite treat!
        </Text>

        <Pressable
          style={styles.menuButton}
          onPress={() => router.push("/menu")}
        >
          <Text style={styles.menuButtonText}>
            EXPLORE MENU →
          </Text>
        </Pressable>
      </LinearGradient>

      {/* BIRTHDAY PROMO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          BIRTHDAY PROMO
        </Text>

        <View style={styles.promoCard}>
          <Text style={styles.promoEmoji}>🎂 🍩 🎉</Text>

          <Text style={styles.promoText}>
            Buy any box of 12 mini donuts
          </Text>

          <Text style={styles.promoPrice}>
            for only ₱200
          </Text>
        </View>

        <View style={styles.promoCard}>
          <Text style={styles.promoEmoji}>🍩🍩🍩</Text>

          <Text style={styles.promoText}>
            Buy any donut tower cake
          </Text>

          <Text style={styles.promoPrice}>
            and get a free box of 6 mini donuts
          </Text>
        </View>
      </View>

      {/* FEEDBACK */}
      <View style={styles.feedback}>
        <Text style={styles.sectionTitle}>
          Feedback
        </Text>

        <Text style={styles.feedbackText}>
          We would love to hear from you!
        </Text>

        <TextInput
          style={styles.feedbackInput}
          placeholder="Write your feedback..."
          multiline
          value={feedback}
          onChangeText={setFeedback}
        />

        <Pressable
          style={styles.button}
          onPress={submitFeedback}
        >
          <Text style={styles.buttonText}>
            SUBMIT FEEDBACK
          </Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  header: {
    paddingTop: 45,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  logo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  nav: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    marginTop: 15,
  },

  navText: {
    color: "white",
    fontWeight: "bold",
  },

  hero: {
    minHeight: 300,
    justifyContent: "center",
    padding: 30,
  },

  heroTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
  },

  heroSubtitle: {
    marginTop: 15,
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignSelf: "flex-start",
    marginTop: 20,
  },

  buttonText: {
    color: "#d758ae",
    fontWeight: "bold",
  },

  searchContainer: {
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    padding: 12,
    marginTop: 10,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222",
  },

  productRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    padding: 10,
    elevation: 3,
  },

  productImage: {
    width: "100%",
    height: 130,
    borderRadius: 12,
  },

  productName: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 8,
  },

  price: {
    color: "#d858ad",
    fontWeight: "bold",
    marginTop: 5,
  },

  menuPromo: {
    padding: 30,
    margin: 20,
    borderRadius: 20,
    alignItems: "center",
  },

  promoTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  promoText: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 16,
  },

  menuButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 25,
    marginTop: 15,
  },

  menuButtonText: {
    fontWeight: "bold",
  },

  promoCard: {
    backgroundColor: "#f8d8ec",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: "center",
  },

  promoEmoji: {
    fontSize: 45,
    marginBottom: 10,
  },

  promoPrice: {
    fontWeight: "bold",
    marginTop: 5,
  },

  feedback: {
    padding: 20,
    marginBottom: 40,
  },

  feedbackText: {
    marginBottom: 10,
  },

  feedbackInput: {
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    textAlignVertical: "top",
  },
});