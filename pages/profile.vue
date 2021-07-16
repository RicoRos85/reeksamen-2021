<template>
  <section v-if="$store.state.user" class="container mx-auto py-3">
    <div class="ml-4">
      <div class="text-sm leading-5 font-medium text-gray-900">
        Account Email
      </div>
      <div class="text-sm leading-5 text-gray-500">{{ $store.state.user.email }}</div>
    </div>
  </section>
</template>

<script>
export default {
    fetch({ store, redirect }) {
        if (
            // If a User is not in our Store
            !store.state.user ||
            // OR if there is a User and isAuthenticated is equal to false
            (store.state.user && store.state.user.isAuthenticated === false)
        ) {
            // THEN rediect to registration
            return redirect('/')
        }
        
    }
}
</script>