export default {
    STORE_PRODUCT(state, payload){
        const count = Object.keys(state.cart).length;
        payload.id = count;
        state.cart[count] = payload;
        state.finalValue += payload.finalValue;
    },

    DELETE_PRODUCT(state, payload){
        delete state.cart[payload]
    }
    
}