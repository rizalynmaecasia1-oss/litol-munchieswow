import { useState } from "react";

import {
    Alert,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import { products } from "../../data/products";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  function addToOrder() {
    Alert.alert(
      "Added!",
      `${quantity} ${product.name} added to your order.`
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <Text style={styles.price}>
        ₱{product.price}
      </Text>

      <Text style={styles.quantityTitle}>
        Quantity
      </Text>

      <View style={styles.quantityContainer}>
        <Pressable
          style={styles.quantityButton}
          onPress={() =>
            setQuantity(Math.max(1, quantity - 1))
          }
        >
          <Text style={styles.quantityText}>−</Text>
        </Pressable>

        <Text style={styles.quantity}>
          {quantity}
        </Text>

        <Pressable
          style={styles.quantityButton}
          onPress={() =>
            setQuantity(quantity + 1)
          }
        >
          <Text style={styles.quantityText}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.total}>
        Total: ₱{product.price * quantity}
      </Text>

      <Pressable
        style={styles.orderButton}
        onPress={addToOrder}
      >
        <Text style={styles.orderText}>
          ADD TO ORDER
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 280,
    borderRadius: 20,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },

  description: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },

  price: {
    fontSize: 25,
    color: "#d858ad",
    fontWeight: "bold",
    marginTop: 15,
  },

  quantityTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  quantityButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#e978cb",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityText: {
    color: "#fff",
    fontSize: 25,
  },

  quantity: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },

  orderButton: {
    backgroundColor: "#d858ad",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },

  orderText: {
    color: "#fff",
    fontWeight: "bold",
  },
});