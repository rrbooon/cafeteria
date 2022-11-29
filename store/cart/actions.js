export default {
    addProduct(context, payload){
        context.commit('STORE_PRODUCT', payload)
    },

    removeProduct(context, payload){
        context.commit('DELETE_PRODUCT', payload)
    },

    removeAllProduct(context, payload){
        context.commit('DELETE_ALL_PRODUCT', payload)
    }
}