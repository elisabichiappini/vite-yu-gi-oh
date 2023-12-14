<script>
//rendo esportabile il file.vue: identifico con un nome, eventuali componenti registrati, data, methods e relativi cicli di vita
export default {
    name: 'FoundResults',
    props: ['found'],
};
</script>

<template>
<div class="result-content">
    Found {{ found }} cards
</div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.result-content {
    background-color: $dark;
    padding: 10px;
    color: $white;
}
</style>
