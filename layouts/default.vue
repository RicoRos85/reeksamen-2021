<template>
    
  <div>
      <nav class="bg-white shadow-sm">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex">
                    <div class="hidden sm:ml-6 sm:flex">
                    <nuxt-link
                        to="/"
                        class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Home
                    </nuxt-link>
                    <nuxt-link
                        v-if="!$store.state.user"
                        to="/register"
                        
                        class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Register
                    </nuxt-link>
                    <nuxt-link
                        v-if="!$store.state.user"
                        to="/login"
                        
                        class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Login
                    </nuxt-link>
                    <!-- Only show the Log Out and Matches buttons if the 'store user' property exsist (v-if="$store.state.user") -->
                    <!-- @click is used to create an Add Event Handler to destroy the session and log a User out -->
                    <nuxt-link
                        v-if="$store.state.user"
                        to="/matches"
                        
                        class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Matches
                    </nuxt-link>
                    <a
                        v-if="$store.state.user"
                        @click="logout"
                        class="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                    >
                        Logout
                    </a>
                    </div>
                </div>
                <nuxt-link to="/profile" v-if="$store.state.user" class="text-gray-500 hover:text-gray-700">
                    <p class="inline-flex items-center pt-2 mr-1 text-sm font-medium ">Min profil</p>
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="mt-0 w-8 h-8 text-gray-500 inline-flex items-center"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </nuxt-link>
            </div>
        </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
        try {
            await this.$axios.post('/api/logout');
            // Set SET_USER session to null to log User out
            this.$store.commit('SET_USER', null);

            if(this.$route.path  === '/profile') {
                this.$router.push('/');
            }
        } catch (err) {
            throw new Error(err)
        }
    }
  }
}
</script>

<style>

</style>