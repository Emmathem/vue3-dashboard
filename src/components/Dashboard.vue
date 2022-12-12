<template>
    <div>
        <div class="border border-white rounded-md transition">
            <div class="bg-white h-[50px] flex items-center px-4">
                <div class="flex-1 text-slate-800 font-bold">ESG Dashboard</div>
                <div class="cursor-pointer font-bold" @click="logoutUser()">Logout</div>
            </div>
            <div class="p-4 bg-gray-50">
                <h4>Welcome to your Dashboard</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'Dashboard',
    setup: (() => {
        const router = useRouter();
        const loadUser = onMounted(() => {
            const isLoggedIn = localStorage.getItem('token')
            console.log('router', router);
            if (!isLoggedIn) {
                router.push('/login');
            }
        });

        // const watchLogin = watchEffect()

        const logoutUser = () => {
            localStorage.removeItem('token');
            router.push('/login');
        }

        return { loadUser, logoutUser }
    })

}
</script>