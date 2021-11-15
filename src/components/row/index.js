import React, { useState, useEffect } from 'react'
import './index.css';
import { axiosInstance } from '../../services/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const BASE_URL = "https://image.tmdb.org/t/p/original/";
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
};

function Index({ title, url, isLarge }) {
    const [movies, setMovies] = useState([]);
    const [videoId, setVideoId] = useState("");
    useEffect(() => {
        (async function(){
            try {
                let result = await axiosInstance.get(url);
                setMovies(result.data.results);
                // console.log(result);
                return result
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);
    const handleMovieClick = (movie) => {
        console.log("movie click ", movie);
        movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then((url) => {
                console.log("Url is ", url);
                url = new URLSearchParams((new URL(url)).search);
                console.log(url.get("v"));
                if (videoId) {
                    setVideoId("");
                } else {
                    setVideoId(url.get("v"));
                }
            })
            .catch(err => {
                console.log("eror in movie trailer fetching", err);
            })
    }

    console.log(movies)
    return (
        <div className="Row">
            <h1>{title}</h1>
            <div className="RowPosters">
                {movies.map(movie => <img key={movie.id} src={`${BASE_URL}${isLarge ? movie.poster_path : movie.backdrop_path}`} className={isLarge ? "RowPoster RowPosterLarge" : "RowPoster"} onClick={() => handleMovieClick(movie)} />)}
            </div>
            {videoId ? <YouTube videoId={videoId} opts={opts} /> : ""}
        </div>
    )
}

export default Index
