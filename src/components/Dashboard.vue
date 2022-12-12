<template>
    <div>
        <div class="border border-white rounded-md p-4 transition">
            <h4>Dashboard</h4>
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

        return { loadUser }
    })

}
</script>