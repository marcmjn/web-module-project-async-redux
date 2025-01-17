import axios from 'axios'

export const FETCH_DOG_START = 'FETCH_DOG_START'
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const FETCH_DOG_FAILURE = 'FETCH_DOG_FAILURE'

export const getDog = () => dispatch => {
dispatch({
    type: FETCH_DOG_START
})
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        const imageUrl = res.data.message
        dispatch({ type: FETCH_DOG_SUCCESS, payload: imageUrl })
        console.log(imageUrl)
    })
    .catch(err => {
        dispatch({ type: FETCH_DOG_FAILURE, payload: `${err.response.status} ${err.response.data}`})
    })
}