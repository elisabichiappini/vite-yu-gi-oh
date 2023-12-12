<script>
export default {
    name: 'Card',
    props: ['name', 'image', 'archetype'],

}
</script>

<template>
    <div>
        <div>
            <img :src="image" alt="name">
        </div>
        <h4>{{ name }}</h4>
        <h5>{{ archetype }}</h5>
    </div>
</template>

<style scoped>
</style>
