export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const toggleFavorite = ()=>{
    return({type: TOGGLE_FAVORITES});
}
export const addFavorite = (movies)=>{
    return({type: ADD_FAVORITES, payload:movies});
}
export const  removeFavorite = (id)=>{
    return({type: REMOVE_FAVORITE, payload:id});
}