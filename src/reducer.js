import { 
    FETCH_DOG_START,
    FETCH_DOG_SUCCESS,
    FETCH_DOG_FAILURE
} from './actions'

const initialState = {
    dog: [],
    error: '',
    isFetching: false,
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_DOG_START:
        return {
          ...state,
          error:'',
          isFetching: true,
        };
      case FETCH_DOG_SUCCESS:
        return {
          ...state,
          error: '',
          isFetching: false,
          dog: action.payload,
        };
      case FETCH_DOG_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
        };
      default:
        return state;
    }
  }
  
export default reducer;