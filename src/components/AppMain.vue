x<script>
import AppFoundResults from './AppFoundResults.vue';
import AppCardsList from './AppCardsList.vue';
import AppCard from './AppCard.vue';
export default {
    name: 'Main',
    components : {
        AppFoundResults,
        AppCardsList,
        AppCard,
    }
};
</script>

<template>
    <AppFoundResults></AppFoundResults>
    <AppCardsList>
        <AppCard></AppCard>
    </AppCardsList>
</template>

<style scoped>
</style>
