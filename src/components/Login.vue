<template>
    <div class="flex h-screen items-center justify-center">
        <div class="w-2/5 m-auto rounded-2xl bg-white p-8 px-12 transition">
            <h3 class="text-black font-bold text-lg text-center">Login Here</h3>
            <div class="mt-8">
                <form class="w-full" @submit.prevent="loginAction()">
                    <div class="my-4">
                        <label class="text-gray-800 text-sm">Email Address: </label>
                        <input v-model="state.loginObject.email" type="email"
                            class="bg-transparent border border-gray-400 h-12 w-full rounded-md px-4"
                            placeholder="Email address" @keyup="clearError()" name="email" />
                        <p v-if="state.hasError" class="text-red-600 text-sm pt-1">{{ state.error.email }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="text-gray-800 text-sm">Password: </label>
                        <input v-model="state.loginObject.password" type="password"
                            class="bg-transparent border border-gray-400 h-12 w-full rounded-md px-4"
                            placeholder="Password" name="password" />
                        <p v-if="state.hasError" class="text-red-600 text-sm pt-1">{{ state.error.password }}</p>
                    </div>
                    <div class="mt-6">
                      <Button
                          text="Login"
                          :disabled="state.loading"
                          :processing="state.loading"
                      />
                    </div>
                    <p class="py-2 text-center">
                        Do not have an account? <router-link to="/register"><span
                                class="text-slate-500 font-bold">Register Here</span></router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Button from "../components/Button.vue";

export default defineComponent({
  name: 'Login',
  components: {Button},
  setup: () => {
        const router = useRouter();

        const state = reactive({
            loginObject: {
                email: '',
                password: ''
            },
            loading: false,
            error: {},
            hasError: false,
        });

        const isLoggedIn = onMounted(() => {
            const checkToken = localStorage.getItem('token');
            if (checkToken) {
                router.push('/');
            }
        })
        //methods
        const clearError = () => {
            if (state.loginObject.email !== '') {
                state.hasError = false;
                state.error.email = '';
            } else if (state.loginObject.password) {
                state.hasError = false;
                state.error.password = '';
            }
        };

        const loginAction = () => {
            console.log(state.loginObject);
            if (state.loginObject.email === '') {
                state.hasError = true;
                state.error.email = 'Please, enter your email'
            }
            if (state.loginObject.password === '') {
                state.hasError = true;
                state.error.password = 'Please, enter your password'
            }
            if (state.hasError) return;
            state.loading = true;
            const userName = state.loginObject.email + state.loginObject.password;
            const loginToken = btoa(userName);
            localStorage.setItem('token', loginToken);
            setTimeout(() => {
                state.loading = false;
                router.push('/');
            }, 4000);
        }

        return { loginAction, clearError, isLoggedIn, state }
    }
});
</script>

<style>

</style>