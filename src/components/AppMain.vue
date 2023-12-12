x<script>
import axios from 'axios';
import AppFoundResults from './AppFoundResults.vue';
import AppCardsList from './AppCardsList.vue';
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    name: 'Main',
    components : {
        AppFoundResults,
        AppCardsList,
        AppCard,
    },
    data() {
        return {
            store,
            cards: [],
            apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
        }
    },
    created() {
        axios.get(store.apiUrl).then((data) => {
            store.cards = data.data.data;
        });
    },
};
</script>

<template>
    <AppFoundResults :found="store.cards.length"></AppFoundResults>
    <AppCardsList :cards="store.cards">
        <AppCard></AppCard>
    </AppCardsList>
</template>

<style scoped>
</style>
