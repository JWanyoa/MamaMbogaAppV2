<template>
    <h1>Register</h1>
    <div class="container">
        <form class="row row-cols-lg-auto g-3 align-items-center">
            <div class="col-md-4">
                <label class="visually-hidden" for="inlineFormInputGroupFirstname">Firstname</label>
                <div class="input-group">
                <div class="input-group-text">FN</div>
                <input type="text" name="first_name" id="first_name" v-model="user.first_name" class="form-control" id="inlineFormInputGroupFirstname" placeholder="First Name">
                </div>
            </div>

            <div class="col-md-4">
                <label class="visually-hidden" for="inlineFormInputGroupMiddlename">Middle Name</label>
                <div class="input-group">
                <div class="input-group-text">MN</div>
                <input type="text" name="middle_name" id="middle_name" v-model="user.middle_name" class="form-control" id="inlineFormInputGroupMiddlename" placeholder="Middle Name">
                </div>
            </div>

            <div class="col-md-4">
                <label class="visually-hidden" for="inlineFormInputGroupLastname">Last Name</label>
                <div class="input-group">
                <div class="input-group-text">LN</div>
                <input type="text" name="last_name" id="last_name" v-model="user.last_name" class="form-control" id="inlineFormInputGroupLastname" placeholder="Last Name">
                </div>
            </div>

            
            <div class="col-12">
                <label class="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                <div class="input-group">
                <div class="input-group-text">@</div>
                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
                </div>
            </div>

            <div class="col-12">
                <label class="visually-hidden" for="inlineFormSelectPref">Role</label>
                <select class="form-select" id="inlineFormSelectPref">
                <option selected>Choose...</option>
                <option value="1">Admin</option>
                <option value="2">Customer</option>
                <option value="3">Supplier</option>
                </select>
            </div>

            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                <label class="form-check-label" for="inlineFormCheck">
                    Remember me
                </label>
                </div>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
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
                token: NULL
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
