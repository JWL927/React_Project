import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/Movie.module.css"

const Movie = ({id, coverImg, title, summary, genres}) => {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.img} />
            <div className={styles.detail}>
                <h2>
                    <Link to={`/movie/${id}`}  className={styles.h2}>{title}</Link>
                </h2>
                <p>{summary.length > 150 ? `${summary.slice(0, 150)}...` : summary}</p>
            </div>
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;