<template>
    <div class="flex h-screen items-center justify-center">
        <div class="w-2/5 m-auto rounded-2xl bg-white p-8 px-12 transition">
            <h3 class="text-black font-bold text-lg text-center">Register Here</h3>
            <div class="mt-8">
                <form class="w-full" @submit.prevent="loginAction()">
                    <div class="my-4">
                        <label class="text-gray-800 text-sm">Full Name: </label>
                        <input v-model="state.loginObject.fullname" type="text"
                            class="bg-transparent border border-gray-400 h-12 w-full rounded-md px-4"
                            placeholder="Full Name" @keyup="clearError()" />
                        <p v-if="state.hasError" class="text-red-600 text-sm pt-1">{{ state.error.email }}</p>
                    </div>
                    <div class="my-4">
                        <label class="text-gray-800 text-sm">Email Address: </label>
                        <input v-model="state.loginObject.email" type="email"
                            class="bg-transparent border border-gray-400 h-12 w-full rounded-md px-4"
                            placeholder="Email address" @keyup="clearError()" />
                        <p v-if="state.hasError" class="text-red-600 text-sm pt-1">{{ state.error.email }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="text-gray-800 text-sm">Password: </label>
                        <input v-model="state.loginObject.password" type="password"
                            class="bg-transparent border border-gray-400 h-12 w-full rounded-md px-4"
                            placeholder="Password" />
                        <p v-if="state.hasError" class="text-red-600 text-sm pt-1">{{ state.error.password }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="text-gray-800 text-sm">Confirm Password: </label>
                        <input v-model="state.loginObject.confirmPassword" type="password"
                            class="bg-transparent border border-gray-400 h-12 w-full rounded-md px-4"
                            placeholder="Confirm Password" />
                        <p v-if="state.hasError" class="text-red-600 text-sm pt-1">{{ state.error.password }}</p>
                    </div>
                    <div class="mt-6">
                        <button :disabled="state.loading"
                            class="h-12 flex rounded-md bg-slate-800 justify-center text-white font-bold w-full items-center uppercase disabled:bg-slate-500">{{
        state.loading ? 'Processing...' : 'Create Account'
                            }}</button>
                    </div>
                    <p class="py-2 text-center">
                        Already have an account? <router-link to="/login"><span class="text-slate-500 font-bold">Login Here</span></router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, defineComponent } from 'vue';

export default defineComponent({
    name: 'Register',
    setup: () => {
        const state = reactive({
            loginObject: {
                email: '',
                password: ''
            },
            loading: false,
            error: {},
            hasError: false,
        });

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
            setTimeout(() => {
                state.loading = false
            }, 4000);
        }

        return { loginAction, clearError, state }
    }
});
</script>

<style>

</style>