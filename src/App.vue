<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    name: 'AppYuGiOh',
    components: {
        AppHeader,
        AppMain,
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
</template>

<style lang="scss">
@use './assets/styles/partials/mixin' as *;

.container {
    @include my-container;
}
</style>