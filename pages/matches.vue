<template>
    <h1>Hej</h1>
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