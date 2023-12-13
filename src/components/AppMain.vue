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
        }
    },
    methods: {
        search (){
            console.log(this.store.searchValueType);
            axios
                .get(this.store.apiUrl,
                {
                    params: {
                        archetype: this.store.searchValueType,
                    },
                }
            )
            .then((data) => {
            store.cards = data.data.data;
        });
    }
},
    created() {
        this.search();
    },
};
</script>

<template>
<main>
    <AppSearch @search="search"></AppSearch>
    <div class="container container-main">
        <AppFoundResults :found="store.cards.length"></AppFoundResults>
        <AppCardsList>
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