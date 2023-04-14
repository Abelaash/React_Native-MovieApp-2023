import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Button
} from "react-native";

import { addmovie, deletemovie, editmovie, searchmovie } from "../../redux/actions";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FavoritesScreen from "./FavoritesScreen";
import { connect } from "react-redux";
import Movie from "./Movie";




const Stack = createStackNavigator();

const MoviesScreen = ({ navigation, searchedMovies, dispatch, ...props}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    props.searchmovie(searchTerm);
    console.log(props.movies.movies);
  }, [searchTerm]);


  const handleSearch = () => {
    props.searchmovie(searchTerm);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    
  };
 
  const handleModalClose = () => {
    setModalVisible(false);
  };

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
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Close</Text>
          <Button title="Close" onPress={handleModalClose} />
        </View>
      </Modal>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    backgroundColor: "#f2f2f2",
    marginTop: 65, // Add margin top of 20
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
},
searchButtonText: {
color: "#fff",

fontWeight: "bold",
},
resultsContainer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  },
  resultText: {
  fontSize: 20,
  marginBottom: 10,
  },
  errorText: {
  color: "red",
  fontSize: 20,
  marginBottom: 10,
  },
resetButton: {
backgroundColor: "gray",
padding: 10,
borderRadius: 5,
},
resetButtonText: {
color: "#fff",
fontSize: 16,
fontWeight: "bold",
},
movieContainer: {
flexDirection: "row",
alignItems: "center",
marginBottom: 10,
},
moviePoster: {
  width: 150,
  height: 225,
  marginRight: 10,
},
detailsContainer: {
flex: 1,
justifyContent: "center",
alignItems: "flex-start",
},
movieTitle: {
fontSize: 18,
fontWeight: "bold",
marginBottom: 5,
},
movieDetails: {
fontSize: 16,
color: "#666",
},
modalContainer: {
flex: 1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "rgba(0, 0, 0, 0.5)",
},
modalContent: {
backgroundColor: "#fff",
padding: 20,
borderRadius: 10,
elevation: 5,
},
modalTitle: {
fontSize: 20,
fontWeight: "bold",
marginBottom: 10,
},
modalText: {
fontSize: 16,
marginBottom: 10,
},
modalButtonContainer: {
flexDirection: "row",
justifyContent: "flex-end",
},
modalButton: {
padding: 10,
marginHorizontal: 5,
borderRadius: 5,
},
modalButtonText: {
fontSize: 16,
fontWeight: "bold",
},
});