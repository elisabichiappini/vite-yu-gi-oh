<script>
//importazioni file dei componenti
import AppLogo from './AppLogo.vue';
//rendo esportabile il file.vue: identifico con un nome, eventuali componenti registrati, data, methods e relativi cicli di vita
export default {
    name: 'Header',
    components: {
    AppLogo,
    AppLogo
}
};
</script>

<template>
    <header id="intestation" class="d-flex align-center">
        <AppLogo></AppLogo>
        <h1>Yu-Gi-Oh API</h1>
    </header>
</template>

<style lang="scss" scoped>

#intestation {
    padding: 10px 20px;
}
.d-flex {
    display: flex;
    gap: 10px
}
</style>