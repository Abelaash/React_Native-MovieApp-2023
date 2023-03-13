import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


function HomeScreen(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>QuickPlay</Text>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Movies')}>
            <Text style={styles.buttonText}>View Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Favorites')}>
            <Text style={styles.buttonText}>View Favorites</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#223343",
    padding: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default HomeScreen;
