import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

//state
const initState = {
    shirts: [],
    cart: []
}

//action
//api call to receive the array of shirts
export const getShirts = () => {
    return (dispatch) => {
        axios.get(`/shirts`).then(res => {
            dispatch({
                type: "GET_SHIRTS",
                shirts: res.data
            })
        })
    }
}
//filtering aspect of data, is this on redux or simply front end???
export const getQueriedData = (queries) => {
    return (dispatch) => {
        const queryStr = queries.reduce((str, query) => {
            str += query + '&'
            return str
        }, "")
        const final = queryStr.slice(0, -1)
        axios.get(`/shirts?${final}`).then(res => {
            dispatch({
                type: "GET_QUERIEDDATA",
                shirts: res.data
            })
        })
    }
}

//remove a specific item from database
export const removeShirts = (_id) => {
    return (dispatch) => {
        axios.delete(`/shirts/${_id}`).then(res => {
            dispatch({
                type: "REMOVE_SHIRTS",
                _id
            })
        })
    }
}

//PUT request to update data within a database
export const updateShirts = (_id, obj) => {
    return (dispatch) => {
        axios.put(`/shirts/${_id}`, obj).then(res => {
            console.log(res.data)
            dispatch({
                type: "UPDATE_SHIRTS",
                shirts: res.data
            })
        })
    }
}

//POST request to add one new item to the shirt db
export const addShirt = (newShirt) => {
    return (dispatch) => {
        axios.post(`/shirts`, newShirt).then(res => {
            dispatch({
                type: "ADD_SHIRTS",
                shirts: res.data
            })
        })
    }
}

// Send an email
export const sendEmail = (msg) => {
    return (dispatch) => {
        axios.post(`/send`, msg).then(res => {
            dispatch({
                type: "SEND_EMAIL",
            })
        })
    }
}

//reducer
const reducer = (prevState = initState, action) => {
    switch(action.type) {
        case "GET_SHIRTS":
            return {
                shirts: action.shirts
            }
        case "ADD_SHIRTS":
            return {
                shirts: [...prevState.shirts, action.shirts]
            }
        case "REMOVE_SHIRTS":
            return {
                shirts: prevState.shirts.filter(shirt => shirt._id !== action._id)
            }
        case "UPDATE_SHIRTS":
            return {
                shirts: prevState.shirts.map(shirt => shirt._id === action.shirts._id ? action.shirts : shirt)
            }
        case "GET_QUERIEDDATA":
            return {
                shirts: action.shirts
            }
        case "SEND_EMAIL":
            return;
        default:
            return prevState
    }
}

//createStore for export
export default createStore(
    reducer,
    applyMiddleware(thunk)
)