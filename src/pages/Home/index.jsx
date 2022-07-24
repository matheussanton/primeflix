import { useEffect, useState } from 'react';

import api from '../../services/api'
import { Link } from "react-router-dom"

import "./home.css"

//https://api.themoviedb.org/3/movie/550?api_key=264a9eb2eee55515a1b4a676b34d9a52

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "264a9eb2eee55515a1b4a676b34d9a52",
                    //language: "pt-BR",
                    page: Math.random() * 10,
                }
            });

            setMovies(response.data.results.slice(0, 10))
            setLoading(false);
        }

        loadMovies();
    }, [])


    if (loading) {
        return (
            <div className="loading">
                <h2>Loading movies...</h2>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="movieList">
                {movies.map((movie) => {
                    return (
                        <article key={movie.id}>
                            <strong>{movie.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}></img>
                            <Link to={`/filme/${movie.id}`}>Go to details</Link>
                        </article>
                    )
                })}
            </div>
        </div >
    );
}

export default Home;
