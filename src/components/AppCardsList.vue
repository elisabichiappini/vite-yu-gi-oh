<script>
import AppCard from './AppCard.vue';
export default {
    name: 'CardsList',
    components: {
        AppCard,
    },
    props: ['cards'],
    data() {
        return {
        };
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
