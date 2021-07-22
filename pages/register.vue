<template>
    <div class="h-screen flex items-center py-16">
        <div
            class="container max-w-md m-auto xl:max-w-3xl flex bg-white rounded-lg shadow overflow-hidden flex"
        >
            <div class="relative hidden xl:block xl:w-1/2 h-full">
            <img
                class="absolute h-auto w-full object-cover"
                src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
                alt="my zomato"
            />
            </div>
            <div class="w-full xl:w-1/2 p-8">
                <!-- Prevent form for doing default action when submitting -->
                <!-- Instead run the function: submitForm -->
                <form @submit.prevent="submitForm">
                    <h1 class=" text-2xl font-bold">Create an account</h1>
                    <div class="mb-4 mt-6">
                        <label
                            class="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="email"
                        >
                        Email
                        </label>
                        <input
                            id="email"
                            v-model="email"
                            class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                            type="text"
                            placeholder="Your email address"
                        />
                    </div>
                    <div class="mb-6 mt-6">
                        <label
                            class="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="password"
                        >
                        Password
                        </label>
                        <input
                            id="password"
                            v-model="password"
                            class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                            type="password"
                            placeholder="Your password"
                        />
                    </div>
                    <div class="mb-4 mt-6">
                        <label
                            class="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="firstName"
                        >
                        Fornavn
                        </label>
                        <input
                            id="firstName"
                            v-model="firstName"
                            class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                            type="text"
                            placeholder="Your first name"
                        />
                    </div>
                    <div class="mb-4 mt-6">
                        <label
                            class="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="lastName"
                        >
                        Efternavn
                        </label>
                        <input
                            id="lastName"
                            v-model="lastName"
                            class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                            type="text"
                            placeholder="Your last name"
                        />
                    </div>
                    <div class="mb-4 mt-6">
                        <label
                            class="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="age"
                        >
                        Alder
                        </label>
                        <input
                            id="age"
                            v-model="age"
                            class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                            type="number"
                            placeholder="Your age"
                        />
                    </div>
                    <div class="mb-4 mt-6">
                        <label
                            class="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="gender"
                        >
                        Køn
                        </label>
                        <select id="gender" v-model="gender" class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                            >
                            <option disabled value="">Vælg dit køn</option>
                            <option value="Mand">Mand</option>
                            <option value="Kvinde">Kvinde</option>
                        </select>
                    </div>
                    <div class="flex w-full mt-8">
                        <button class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            gender: ''
        }
    },
    fetch({ store, redirect }) {
        if (
            store.state.user
        ) {
            return redirect('/profile');
        }
    },
    methods: {
        async submitForm() {
            try {
                // Use axios to make HTTP requests
                const response = await this.$axios.
                    post('/api/users', {
                        // Declare which data should be sent
                        email:      this.email,
                        password:   this.password,
                        firstName:  this.firstName,
                        lastName:   this.lastName,
                        age:        this.age,
                        gender:     this.gender
                    // If everything is successfull
                    })
                    this.$store.commit( // Get SET_USER call from ../store/index.js
                        'SET_USER',  
                        response.data
                    );
                    this.$router.push('/profile'); // After registration redirect to Profile Page
            // If there was an error         
            } catch (err) {
                throw new Error(err);
            }      
        }
    }
}
</script>
