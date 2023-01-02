<template>
    <div>
        <div class="border border-white rounded-md transition">
            <div class="bg-white h-[50px] flex items-center px-4">
                <div class="flex-1 text-slate-800 font-bold">
                  <h3>ESG Dashboard</h3>
                </div>
                <div class="cursor-pointer font-bold" @click="logoutUser()">Logout</div>
            </div>
            <div class="p-4 bg-gray-50">
                <h4 class="py-4">Welcome to your Dashboard</h4>
                <div class="grid grid-cols-3 gap-5">
                    <div class="bg-white rounded-md p-4 shadow-md">
                        <p class="py-4">Duplicate Array: {{ state.dupArr }}</p>
                        <p class="font-bold py-3">Answer: {{ state.answerArr }}</p>
                        <button
                            class="flex items-center justify-center bg-gray-600 px-4 py-3 rounded-md text-white text-sm shadow-sm p-2"
                            @click="removedDuplicateAction(state.dupArr)">Removed
                            Duplicate</button>
                    </div>

                    <div class="bg-white rounded-md p-4 shadow-md">
                        <h2>Sort Alphabetically</h2>
                        <p class="py-4">Original Name: {{ state.names }}</p>
                        <p v-for="(item, index) in state.sorted" :key="index" class="font-bold py-3">Answer: {{ item.name }}</p>
                        <button
                            class="flex items-center justify-center bg-gray-600 px-4 py-3 rounded-md text-white text-sm shadow-sm p-2"
                            @click="sortAction(state.names)">Sort Data
                        </button>
                    </div>
                    <div class="bg-white rounded-md p-4 shadow-md">
                        <h2>Sort Asc Order</h2>
                        <p class="py-4">Original Number: {{ state.userNumbers }}</p>
                        <p v-for="(item, index) in state.sorted" :key="index" class="font-bold py-3">Answer: {{ item.name }}</p>
                        <button
                            class="flex items-center justify-center bg-gray-600 px-4 py-3 rounded-md text-white text-sm shadow-sm p-2"
                            @click="sortAction(state.names)">Sort Data
                        </button>
                    </div>
                  <div class="bg-white rounded-md p-4 shadow-md">
                    <h2>Capitalize String</h2>
                    <div class="py-4">
                      <input v-model="state.capitalizeString" type="text"
                             class="bg-transparent border border-gray-400 h-12 w-full rounded-md px-4"
                             placeholder="Enter String" />
                    </div>
                    <p class="font-bold py-3">Answer: {{ state.capitalAns }}</p>
                    <button
                        class="flex items-center justify-center bg-gray-600 px-4 py-3 rounded-md text-white text-sm shadow-sm p-2"
                        @click="camelCapitalize()">Validate
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { isArray } from '@vue/shared';
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'Dashboard',
    setup: (() => {
        const state = reactive({
            dupArr: [3, 3, 9, 1, 3, 0, 3],
            answerArr: [],
            names: [
                {
                    name: 'Osin Doe'
                },
                {
                    name: 'Tola Ola'
                },
                {
                    name: 'Wale Oke'
                },
                {
                    name: 'Fola Iye'
                }
            ],
            sorted: [],
            userNumbers: [9,89,10,0,1,20,2,3],
            sortedNumber: [],
          capitalizeString: '',
          capitalAns: '',
        })
        const router = useRouter();
        const loadUser = onMounted(() => {
            const isLoggedIn = localStorage.getItem('token')
            if (!isLoggedIn) {
                router.push('/login');
            }
        });

        // const watchLogin = watchEffect()

        const logoutUser = () => {
            localStorage.removeItem('token');
            router.push('/login');
        }

        const removedDuplicateAction = (list) => {
            if (!isArray(list)) return;
            return state.answerArr = list.filter((value, index) => list.indexOf(value) === index);
        };

        const sortAction = (list) => {
            return state.sorted = list.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1
                }
                return 0;
            });
        }

        const sortAcsn = (list) => {
            return state.sorted = list.sort((a, b) => {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1
                }
                return 0;
            });
        }

        const camelCapitalize = () => {
          const string = state.capitalizeString;
          console.log(string);
          for (let i = 0; i < string.length; i++) {
            if (i % 2 === 0) {
              state.capitalAns += string[i].toUpperCase();
            } else {
              state.capitalAns += string[i].toLowerCase();
            }
          }
          return state.capitalAns;
        }

        return { loadUser, logoutUser, removedDuplicateAction, sortAcsn, sortAction, camelCapitalize, state }
    })

}
</script>