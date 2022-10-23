import PropTypes from "prop-types";
import { useState } from "react";
import {Link} from "react-router-dom";
import styles from "../css/Movie.module.css"

const Movie = ({id, coverImg, title, summary, genres}) => {
    const [show, setShow] = useState(false);
    const onMouseOver = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };
    return (
        <div className={styles.movie} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title} className={styles.img} />
                <div className={styles.detail}>
                    {show ? (
                        <h2 className={styles.h2}>
                            {title}
                        </h2>
                    ) : (
                        null
                    )}
                </div>
            </Link>
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