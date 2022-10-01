import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    console.log(movie);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.data.movie.medium_cover_image}/>
                    <h1>{movie.data.movie.title}</h1>
                    <ul>
                        {movie.data.movie.genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                    <p>
                        {movie.data.movie.description_full}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Detail;