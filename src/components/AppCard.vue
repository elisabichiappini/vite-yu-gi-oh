<script>
export default {
    name: 'Card',
    props: ['name', 'image', 'archetype'],
};
</script>

<template>
    <div class="content-card d-flex flex-column justify-between">
        <div class="box-img">
            <img 
            class="img-content"
            :src="image" 
            :alt="name">
        </div>
        <h4 class="text-center">{{ name }}</h4>
        <h5 class="text-center">{{ archetype }}</h5>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.content-card {
    height: 400px;

    h4 {
        color: $white;
        text-transform: uppercase;
    }
}
</style>
