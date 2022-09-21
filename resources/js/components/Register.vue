<template>
    <div class="container">
        <div class="card m-4">
            <div class="card-body">
                <h1 class="display-6 text-center m-2">Register</h1>
                <form class="row g-3 align-items-center" @submit="register">
                    <div class="col-md-4">
                        <label class="visually-hidden" for="first_name">Firstname</label>
                        <div class="input-group">
                            <div class="input-group-text">FN</div>
                            <input type="text" name="first_name" id="first_name" v-model="user.first_name" class="form-control" placeholder="First Name">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label class="visually-hidden" for="middle_name">Middle Name</label>
                        <div class="input-group">
                            <div class="input-group-text">MN</div>
                            <input type="text" name="middle_name" id="middle_name" v-model="user.middle_name" class="form-control" placeholder="Middle Name">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label class="visually-hidden" for="last_name">Last Name</label>
                        <div class="input-group">
                            <div class="input-group-text">LN</div>
                            <input type="text" name="last_name" id="last_name" v-model="user.last_name" class="form-control" placeholder="Last Name">
                        </div>
                    </div>

                    
                    <div class="col-md-12">
                        <label class="visually-hidden" for="user_name">Username</label>
                        <div class="input-group">
                            <div class="input-group-text">@</div>
                            <input type="text" class="form-control" name="username" id="username" v-model="user.username" placeholder="Username">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label class="visually-hidden" for="user_name">Email</label>
                        <div class="input-group">
                            <div class="input-group-text"><i class="fa fa-envelope"></i></div>
                            <input type="text" class="form-control" name="email" id="email" v-model="user.email" placeholder="email">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label class="visually-hidden" for="user_name">Password</label>
                        <div class="input-group">
                            <div class="input-group-text"><i class="fa fa-key"></i></div>
                            <input type="text" class="form-control" name="password" id="password" v-model="user.password" placeholder="password">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label class="visually-hidden" for="role">Role</label>
                        <div class="input-text">
                            Role
                           <select class="form-select" id="role" name="role" v-model="user.role">
                                <option selected>Choose...</option>
                                <option value="1">Admin</option>
                                <option value="2">Customer</option>
                                <option value="3">Supplier</option>
                            </select> 
                        </div>
                        
                    </div>

                    <div class="col-md-12">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="token" name="token" v-model="user.token">
                        <label class="form-check-label" for="token">
                            Remember me
                        </label>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../router';
import store from '../store';
import { useRouter } from 'vue-router';
export default({
    name: 'Register',
    setup(){
        const router = useRouter();
    },
    data()
    {
        return{
            user:
            {
                first_name:'',
                middle_name:'',
                last_name:'',
                username:'',
                email: '',
                password: '',
                role: '',
                token: ''
            }
        }
    },
    methods:
    {
        register()
        {
            this.$store.dispatch('register', this.user)
            .then(()=>{
                router.push({
                    name: 'Dashboard'
                })
            })
        }
    },
})
</script>
<style scoped>

</style>
