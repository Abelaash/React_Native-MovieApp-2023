import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";

export default Movie = ({ title, poster  }) => {
    return (
      <View style={styles.container}>
        
        <View style={styles.detailsContainer}>
        <Image style={styles.moviePoster} source={{ uri: poster }} />
          <Text style={styles.movieTitle}>{title}</Text>
          {/* <Text style={styles.details}>{year}</Text>
          <Text style={styles.details}>{rated}</Text>
          <Text style={styles.details}>{runtime}</Text>
          <View style={styles.ratingsContainer}>
            {ratings.map((rating, index) => (
              <View key={index} style={styles.rating}>
                <Text style={styles.ratingSource}>{rating.Source}</Text>
                <Text style={styles.ratingValue}>{rating.Value}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.details}>{genres}</Text>
          <Text style={styles.details}>{director}</Text>
          <Text style={styles.details}>{actors}</Text> */}
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#223343",
      padding: 8,
    },
    detailsContainer:{
      flex: 1,
      padding: 16,
    },
    movieTitle: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    moviePoster: {
      width: "100%",
      height: 500,
      resizeMode: "cover",
      marginBottom: 16,
    },
  });

  