export default {
    async setActivePage(context, payload){
        context.commit('STORE_ACTIVE', payload)
    },
}