import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../../services/axios';
import { requests } from '../../services/externalUrl';
import './index.css';

function Index() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        (async function(){
            try {
                let result = await axiosInstance.get(requests['netflixOriginals']);
                setMovie(result.data.results[Math.floor(Math.random() * result.data.results.length)]);
            } catch (err) {
                console.log(err);
            }
        })();
    }, [])
    console.log(movie);
    return (
        <div className="Banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, backgroundSize: "cover" }}>
            <div className="BannerContent">
                <h1 className="BannerTitle">{movie?.title || movie?.name}</h1>
                <div>
                    <button className="BannerButton">Play</button>
                    <button className="BannerButton">List</button>
                </div>
                <p className="BannerDescription">{movie?.overview}</p>
            </div>
            <div className="BannerBottom">
            </div>
        </div>
    )
}

export default Index
