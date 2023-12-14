<script>
//importazioni dei componenti
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
//rendo esportabile il file.vue: identifico con un nome, eventuali componenti registrati, data, methods e relativi cicli di vita
export default {
    name: 'AppYuGiOh',
    components: {
        AppHeader,
        AppMain,
    }
};
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