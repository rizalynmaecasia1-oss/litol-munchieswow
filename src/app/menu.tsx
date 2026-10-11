import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { router } from "expo-router";

import { products } from "../data/products";

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Our Menu 🍩</Text>

      <Text style={styles.subtitle}>
        Choose your favorite Litol Munchies!
      </Text>

      {products.map((product) => (
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
            style={styles.image}
          />

          <View style={styles.info}>
            <Text style={styles.name}>
              {product.name}
            </Text>

            <Text style={styles.description}>
              {product.description}
            </Text>

            <Text style={styles.price}>
              ₱{product.price}
            </Text>

            <Text style={styles.details}>
              View Details →
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#d858ad",
    marginBottom: 5,
  },

  subtitle: {
    color: "#666",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 20,
    elevation: 4,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },

  description: {
    marginTop: 5,
    color: "#666",
  },

  price: {
    fontSize: 20,
    color: "#d858ad",
    fontWeight: "bold",
    marginTop: 10,
  },

  details: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#55bcd7",
  },
});