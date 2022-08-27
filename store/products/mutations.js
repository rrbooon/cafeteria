export default {
    STORE_FOODS(state, payload){
        state.foods = payload;
    },
    STORE_DRINKS(state, payload){
        state.drinks = payload;
    },
    STORE_OFFERS(state, payload){
        state.offers = payload.first_name;
    }
}