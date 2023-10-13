import React, { Component } from 'react';
import Navbar from '../Header/navbar';
import Footer from '../Footer/footer'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    border:'1px solid black',
  };

class MovieRecommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'All', // Default genre
      searchTerm: '', // Movie search term
      movies: [
        { title: 'Movie 1', genre: 'Action' },
        { title: 'Movie 2', genre: 'Comedy' },
        { title: 'Movie 3', genre: 'Drama' },
        // Add more movies with various genres
      ],
    };
  }

  handleGenreChange = (event) => {
    this.setState({ genre: event.target.value });
  };

  handleSearchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  filterMovies = () => {
    const { genre, searchTerm, movies } = this.state;

    // Filter movies based on selected genre and search term
    return movies.filter((movie) => {
      return (
        (genre === 'All' || movie.genre === genre) &&
        (searchTerm === '' ||
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  };

  componentDidMount() {
    fetch('/api/movies') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  render() {
    const { genre, searchTerm } = this.state;
    const filteredMovies = this.filterMovies();

    return (
        <section >
            <Navbar/>
      <div style={containerStyle}>
        <h1>Movie Recommendations</h1>
        <div >
          <label>Filter by Genre:</label>
          <select onChange={this.handleGenreChange} value={genre}>
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            {/* Add more genre options */}
          </select>
        </div>
        <div>
          <label>Search Movies:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={this.handleSearchTermChange}
          />
        </div>
        <ul>
          {filteredMovies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      </div>
      <Footer/>
      </section>
    );
  }
}

export default MovieRecommendations;
