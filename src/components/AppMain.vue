x<script>
import axios from 'axios';
import AppFoundResults from './AppFoundResults.vue';
import AppCardsList from './AppCardsList.vue';
import AppCard from './AppCard.vue';
import { store } from '../store';
import AppSearch from './AppSearch.vue';

export default {
    name: 'Main',
    components : {
        AppFoundResults,
        AppCardsList,
        AppCard,
        AppSearch,
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
    <main>
        <AppSearch></AppSearch>
        <div class="container container-main">
                <AppFoundResults :found="store.cards.length"></AppFoundResults>
                <AppCardsList :cards="store.cards">
                    <AppCard></AppCard>
                </AppCardsList>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixin' as *;

main {
    background-color: $bg-color-primary;
    .container-main {

        background-color: $white;
        padding: 50px;
    }

}
    
</style>
