import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";

import { addmovie, deletemovie, editmovie, searchmovie } from "../../redux/actions";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FavoritesScreen from "./FavoritesScreen";
import { connect } from "react-redux";
import Movie from "./Movie";



// const API_KEY = "94e64f01";
// const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const Stack = createStackNavigator();

const MoviesScreen = ({ navigation, searchedMovies, dispatch, ...props}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const fetchMovies = async () => {
  //   try {
  //     const response = await fetch(`${MOVIE_API_URL}&s=${searchTerm}`);
  //     const json = await response.json();
  //     console.log(json)
  //     // dispatch(searchmovie(searchTerm, json.Search));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    props.searchmovie(searchTerm);
    console.log(props.movies.movies);
  }, [searchTerm]);


  const handleSearch = () => {
    props.searchmovie(searchTerm);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    // dispatch(searchmovie("", []));
  };
  // const handleMoviePress = (movieId) => {
  //   navigation.navigate("Movie Details", { imdbID: movieId });
  // };

  return (
    
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetSearch}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <FlatList
        data={props.movies.movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.addmovie(item)}>
            <View style={styles.movieContainer}>
              <Image style={styles.moviePoster} source={{ uri: item.Poster }} />
              <View style={styles.detailsContainer}>
                <Text style={styles.movieTitle}>{item.Title}</Text>
                <Text style={styles.movieDetails}>{item.Year}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      </ScrollView>
    </View>
  );
};

const MovieStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          title: 'Movie Search',
          headerStyle: {
            backgroundColor: '#223343',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorite Movies',
          headerStyle: {
            backgroundColor: '#223343',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#223343',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#fff',
        }}
      />
      
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchmovie: (searchTerm) => dispatch(searchmovie(searchTerm)),
    addmovie: (movie) => dispatch(addmovie(movie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScreen);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MovieStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223343",
    padding: 8,
  },
  emptyMessage: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
    marginTop: 50,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  resetButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    marginLeft: 10,
  },
  backButtonIcon: {
    color: "white",
    fontSize: 20,
  },
  movieDetailsContainer: {
    flex: 1,
    padding: 16,
  },
  moviePoster: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    marginBottom: 16,
  },
  movieTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  movieDetails: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
  movieRatingsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  movieRatingsText: {
    color: "white",
    fontSize: 16,
    marginRight: 8,
  },
  movieRatingsValue: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  moviePlot: {
    color: "white",
    fontSize: 16,
  },
 
});