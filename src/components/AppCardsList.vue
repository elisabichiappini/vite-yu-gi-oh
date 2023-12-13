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
<div class="cards-list d-flex flex-wrap g-10">
    <AppCard 
        class="card"
        v-for="card in cards" 
        :image="card.card_images[0].image_url"
        :name="card.name"
        :archetype="card.archetype"></AppCard>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.cards-list {
    background-color: $white;
    .card {
        width: calc((100% - 40px)/ 5);
        background-color: $bg-color-primary;
    }
}
</style>
