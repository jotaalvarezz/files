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
        getNode(state, nodo) {
            state.nodo = nodo[0]
            state.data = nodo[1]
            console.log('Node => ', nodo)
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