import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//c032e2d7

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=cf46033d";



const App = () => {
  const [movies, setMovies ] = useState([]);
  const [searchTerm, setSearchTerm ] = useState([])

  const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("Top Gun");
    }, []);

    return (
        <div className="app">
            <h1>Obed's Movieland</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}></input>

                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
            </div>

            {
              movies?.length > 0
              ? (
                <div className="container">
                  {movies.map((movie) => <MovieCard movie={movie} /> )}
                </div>
              ) : (
                <div className="empty">
                  <h2>No movies found</h2>  
                </div>
              )

            }



            
        </div>
    );
};

export default App;
