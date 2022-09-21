import { createStore } from "vuex";

const store=createStore({
    state:
    {
        user:{
            data:{
                // first_name:'',
                // middle_name:'',
                // last_name:'',
                // username: '',
                // email: '',
                // password: ''
            },
            token: null,
        },
    },
    getters: {},
    actions:{},
    mutations:{
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
        }
    },
    modules: {},
});

export default store;