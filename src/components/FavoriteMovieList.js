import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams} from 'react-router-dom';
import { addFavorite} from '../actions/movieActions';

const FavoriteMovieList = (props) => {
    const favorites = [props];
    const displayFavorites = true;
   
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>

        {   props.displayFavorites && (
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`} >
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                        
                    </Link> 
                </div>
            })
        )}
    </div>);
    
}

const mapStateToProps = state => {
    return({
        favorite: state.favorite.favorites,
        displayFavorites: state.favorite.displayFavorites
    });
  }

export default connect(mapStateToProps)(FavoriteMovieList);
