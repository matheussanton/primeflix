import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"

import { toast } from "react-toastify"

import "./favorites.css"

const Favorites = () => {

    const navigate = useNavigate();
    const [movieList, setMovieList] = useState([])

    useEffect(() => {

        let myList = localStorage.getItem("@primeflixFavorites");
        setMovieList(JSON.parse(myList) || []);

    }, [])

    function deleteFavorite(movieId) {
        let movieToDelete = movieList.filter((movie) => {
            return (movie.id != movieId);
        });

        setMovieList(movieToDelete);
        localStorage.setItem("@primeflixFavorites", JSON.stringify(movieToDelete));

        toast.success("Movie deleted")
    }

    return (

        <div className="favoritesList">
            <h1>Favorite movies</h1>

            {movieList.length === 0 &&
                <>
                    <span>
                        You don't have any favorited movie :(
                    </span>
                    <button onClick={() => {
                        navigate("/", { replace: true });
                        return;
                    }}>
                        Go add some
                    </button>
                </>
            }

            <ul>
                {movieList.map((movie) => {
                    return (
                        <li key={movie.id} style={
                            {
                                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                            }
                        }>
                            <span>{movie.title}</span>
                            <div>
                                <button>
                                    <Link to={`/filme/${movie.id}`}>Go to details</Link>
                                </button>
                                <button onClick={() => deleteFavorite(movie.id)}>Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div >

    );
}

export default Favorites;
