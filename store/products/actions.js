export default {
    async getProducts(context, payload){
        const data = await this.$axios.$get("http://localhost:1337/product/get")
        context.commit('STORE_FOODS', data.payload.foods)
        context.commit('STORE_DRINKS', data.payload.drinks)
        context.commit('STORE_OFFERS', data.payload.offers)
    },


}