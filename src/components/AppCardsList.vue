<script>
//importazioni dei componenti
import { store } from '../store';
import AppCard from './AppCard.vue';
//rendo esportabile il file.vue: identifico con un nome, eventuali componenti registrati, data, methods e relativi cicli di vita
export default {
    name: 'CardsList',
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
<div class="cards-list d-flex flex-wrap g-10">
    <AppCard 
        class="card"
        v-for="card in store.cards" 
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
