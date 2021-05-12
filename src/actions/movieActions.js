export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movies)=>{
    return({type: ADD_MOVIE, payload:movies});
}
export const toggleFavorite = ()=>{
    return({type: TOGGLE_FAVORITES});
}
export const addFavorite = (movies)=>{
    return({type: ADD_FAVORITES, payload:movies});
}
export const  removeFavorite = (movies)=>{
    return({type: REMOVE_FAVORITE, payload:movies});
}