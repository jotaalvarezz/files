import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nodo: {},
        data: {}
    },
    getters: {},
    mutations: {
        getNodo(nodo, data) {
            this.state.nodo = nodo
            this.state.data = data
            console.log('cucho => ', nodo)
        },

        /* append(data) {
            console.log("data ->",this.state.data)
            const newChild = { id: 25, label: 'nuevo', children: [] };
            if (!this.state.data.children) {
                this.$set(this.state.data, 'children', []);
            }
            data.children.push(newChild);
        }, */
    },
    actions: {},
    modules: {}
})