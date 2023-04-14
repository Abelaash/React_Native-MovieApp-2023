import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  ActivityIndicator,
  Modal,
} from "react-native";

import MovieScreen from './MoviesScreen';
import FavoritesScreen from './FavoritesScreen';

function HomeScreen(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0));
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.back(),
        }),
      ]).start();
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        QuickPlay
      </Animated.Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowMovieModal(true)}
      >
        <Text style={styles.buttonText}>View Movies</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowFavoritesModal(true)}
      >
        <Text style={styles.buttonText}>View Favorites</Text>
      </TouchableOpacity>

      <Modal visible={showMovieModal} onRequestClose={() => setShowMovieModal(false)}>
        <MovieScreen />
      </Modal>

      <Modal visible={showFavoritesModal} onRequestClose={() => setShowFavoritesModal(false)}>
        <FavoritesScreen />
      </Modal>

    </View>
  );
}


const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#223343",
  },
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
    backgroundColor: "purple",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    width: "90%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 16,
  },
  closeButtonIcon: {
    fontSize: 24,
  }
});

export default HomeScreen;
