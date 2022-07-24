
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { toast } from "react-toastify"


import "./movieDetails.css"

import api from '../../services/api'


const Filme = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movieData, setMovieData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadMovieDetails() {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: "264a9eb2eee55515a1b4a676b34d9a52",
                    //language: "pt-BR",
                }
            })
                .then((response) => {
                    setMovieData(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    navigate("/", { replace: true });
                    return;
                })

        }

        loadMovieDetails();
    }, [navigate, id])

    function addMovie() {
        const myList = localStorage.getItem("@primeflixFavorites");

        let favoriteMovieList = JSON.parse(myList) || [];

        const hasMovie = favoriteMovieList.some((savedMovie) =>
            savedMovie.id === movieData.id)

        if (hasMovie) {
            toast.warn("Movie has already been added")
            return;
        }

        favoriteMovieList.push(movieData);
        localStorage.setItem("@primeflixFavorites", JSON.stringify(favoriteMovieList));

        toast.success("Movie added")
    }


    if (loading) {
        return (
            <div className="filmeData">
                <h2>Loading movie data...</h2>
            </div>
        )
    }

    return (
        <div>
            <div className="movieData">
                <h1>{movieData.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`} alt={movieData.title} />
                <h3>Synopsis</h3>
                <span>{movieData.overview}</span>

                <strong>Rate: {movieData.vote_average.toFixed(1)} /10</strong>
                <br />

                <div className="buttonsArea">
                    <div>
                        <button onClick={() => addMovie()}>+ Add to favorites</button>
                        <button>
                            <a
                                href={`https://www.youtube.com/results?search_query=${movieData.title} Trailer`}
                                target="_blank">Trailer</a>
                        </button>

                        <button style={{ float: 'right' }}>
                            <Link to="/">&lt; Home</Link>
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Filme;
