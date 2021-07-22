<template>

    <section v-if="$store.state.user" class="container mx-auto px-4 sm:px-6 lg:px-8  py-3">

        <div class="container w-full flex flex-wrap mx-auto px-10 pt-4 lg:pt-2 mt-6 ">
            <div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
                <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
                <div class="block lg:hidden sticky inset-0">
                    <button id="menu-toggle" class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none">
                        <svg class="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                    </button>
                </div>
                <div id="menu-content" class="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"  style="top:6em;" >
                    <ul class="list-reset py-2 md:py-0">
                        <li class="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-yellow-600">
                            <a href="#section1" class="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                <span class="pb-1 md:pb-0 text-sm">Profil</span>
                            </a>
                        </li>
                        <li class="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                            <a href="#section2" class="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                <span class="pb-1 md:pb-0 text-sm">Interesser</span>
                            </a>
                        </li>
                        <li class="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                            <a href="#section3" class="block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600">
                                <span class="pb-1 md:pb-0 text-sm">Slet profil</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        <!--Section container-->
        <section class="w-full lg:w-4/5">

            <!--Title-->
            <h1 class="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-0 lg:mt-0 md:text-2xl">
                Hej {{ $store.state.user.firstName }}!
            </h1>
            <p class="flex items-center font-sans mt-12 lg:mt-2 px-2">Herunder finde du dine profiloplysninger:</p>

            <!--divider-->
            <hr class="bg-gray-300 my-12">

            <!--Title-->
            <h2 id="section1" class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Profiloplysninger</h2>

            <!--Card-->
            <div class="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white">
                <p class="text-gray-600 mb-2"><strong>Email:</strong> {{ $store.state.user.email }}</p>
                <p class="text-gray-600 mb-2"><strong>Fornavn:</strong> {{ $store.state.user.firstName }}</p>
                <p class="text-gray-600 mb-2"><strong>Efternavn:</strong> {{ $store.state.user.lastName }}</p>
                <p class="text-gray-600 mb-2"><strong>Køn:</strong> {{ $store.state.user.gender }}</p>
                <p class="text-gray-600 mb-2"><strong>Alder:</strong> {{ $store.state.user.age }}</p>

            </div>
            <!--/Card-->

            <!--divider-->
            <hr class="bg-gray-300 my-12">

            <!--Title-->
            <h2 id="section2"  class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Interesser</h2>

      
            <!--Card-->
            <div class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                <form>

                    <div class="md:flex mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-checkbox">
                                Jeg går op i:
                            </label>
                        </div>


                        <div class="md:w-2/3">
                            <div v-for="interest in interests" :key="interest.id" class="border-b border-gray-200 hover:bg-gray-100">
                                <label class="inline-flex items-center">
                                    <input :id="interest.id" type="checkbox" class="form-checkbox text-indigo-600" checked="">
                                    <span class="ml-2">{{interest.interests}}</span>
                                </label>
                            </div>
                       
                            <p class="py-2 text-sm text-gray-600">sæt kryds ud for dine interesser</p>
                        </div>
                    </div>

                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button @click="saveInterests" class="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Gem
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <!--/Card-->   

            <!--divider-->
            <hr class="bg-gray-300 my-12">

            <!--Title-->
            <h2 id="section3" class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Slet profil</h2>

            <!--Card-->
            <div class="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white mb-12 ">
                <div class="md:flex mb-12">
                <p class="text-gray-600 mb-2">
                    Ønsker du at slette din profil, skal du blot trykke på "SLET" herunder.<br>
                    <strong>OBS:</strong> Vær opmærksom på at denne handling ikke kan fortrydes.
                </p>
                </div>
                <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button @click="deleteUser" class="shadow bg-red-700 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Slet profil
                            </button>
                        </div>
                    </div>

            </div>
            <!--/Card-->    

             <!--divider-->
            <hr class="bg-gray-300 my-12">    

        </section>
        <!--/Section container-->

    </div>


    </section>
</template>

<script>
export default {
    data() {
        return {
            interests: [],
        };
    },
    fetch({ store, redirect }) {
        if (
            // If a User is not in our Store
            !store.state.user ||
            // OR if there is a User and isAuthenticated is equal to false
            (store.state.user && store.state.user.isAuthenticated === false)
        ) {
            // THEN rediect to register
            return redirect('/')
        }
        
    },
    methods: {
        async deleteUser() {
            try {
                await this.$axios.get('/api/users/deleteUser');
                await this.$router.push('/register')
            } catch (err) {
                throw new Error(err)
            }
        },
        async saveInterests() {
            try {
                await this.$axios.post('/api/userInterest/saveUserInterest', {
                    // Declare which data should be sent
                    id_user:      "id_user her",
                    id_pass:      "id_pass her"
                });      
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    mounted() {
        this.$axios
        .get('/api/interests/all') // Get Interests from the API
        .then(response => {
            this.interests = response.data;
        })
        .catch(err => {
            throw err;
        });
    }
}
</script>