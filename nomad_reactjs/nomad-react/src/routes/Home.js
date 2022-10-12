import { useEffect, useState } from "react"
import Movie from "../js/Movie"
import styles from "../css/Home.module.css"
import image from "../img/logo.png"

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <>
            <nav className={styles.navigation}>
                <img src={image} alt="logo" width="134px"/>
                <ul>
                    <li>Home</li>
                    <li>My Movie</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className={styles.top_div}>
                {loading ? (
                    <h1 className={styles.loading}>Loading...</h1>
                ) : (
                    <div className={styles.container}>
                        {movies.map((movie) => (
                            <Movie 
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image} 
                                title={movie.title} 
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
        
    );
};

export default Home;