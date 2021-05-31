import { ADD_TO_CART } from "./Action";


const initialState = {
    cart : 0
};
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART: return{
            ...state,
            cart :state.cart  + 1
        }
        default:return state;
    }
}

export default reducer