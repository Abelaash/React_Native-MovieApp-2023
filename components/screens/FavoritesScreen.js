import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Movie from './Movie';
import { addmovie, deletemovie, editmovie, searchmovie } from "../../redux/actions";

const FavoritesScreen = ({ favoritesList, ...props }) => {
  // console.log(favoritesList)
  // return {
  // const renderMovies = ({ item }) => (
  //   // <Movie
  //   //   title={item.Title}
  //   //   poster={item.Poster}
  //   //   // year={item.Year}
  //   //   // rated={item.Rated}
  //   //   // runtime={item.Runtime}
  //   //   // ratings={item.Ratings}
  //   //   // genres={item.Genre}
  //   //   // director={item.Director}
  //   //   // actors={item.Actors}
  //   // />

  // )
  // }
  // console.log(favoritesList)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      
      <View style={styles.moviesContainer}>
        <ScrollView>
        <FlatList
        
          style={{ flex: 1 }}
          data={favoritesList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => props.deletemovie(item)}>
            <View style={styles.movieContainer}>
              <Image style={styles.moviePoster} source={{ uri: item.Poster }} />
              <View style={styles.detailsContainer}>
                <Text style={styles.movieTitle}>{item.Title}</Text>           
              </View>
              
            </View>
            
          </TouchableOpacity>
          
          )}
          keyExtractor={(item) => item.imdbID}

        />
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  favoritesList: state.movies.favorites
});

const mapDispatchToProps = (dispatch) => {
  return {
    deletemovie: (movie) => dispatch(deletemovie(movie))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#223343',
    padding: 8,
  },
  moviesContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
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
});
