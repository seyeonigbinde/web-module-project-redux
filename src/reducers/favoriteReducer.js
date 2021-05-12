import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE} from '../actions/movieActions.js';
import movies from '../data.js';

const initialState = {
    favorite: [],
    displayFavorites: false,
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
            case ADD_FAVORITES:
                console.log(action.payload)
            return {
                ...state,
                favorite: [...state.favorite, {...action.payload, id: Date.now()} ]
            }
            case REMOVE_FAVORITE:
            return {
                favorite: state.favorite.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoriteReducer;

