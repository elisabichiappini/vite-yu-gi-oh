<script>
import axios from 'axios';
import AppCard from './AppCard.vue';
export default {
    name: 'CardsList',
    components: {
        AppCard,
    },
    data() {
        return {
            cards: [],
            apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
        };
    },
    created() {
        axios.get(this.apiUrl).then((data) => {
            this.cards = data.data.data;
        });
    },
};
</script>

<template>
    <AppCard 
    v-for="card in cards" 
    :image="card.card_images[0].image_url"
    :name="card.name"
    :archetype="card.archetype"></AppCard>
</template>

<style scoped>
</style>
