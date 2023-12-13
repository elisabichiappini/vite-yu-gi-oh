<script>
import { store } from '../store';
export default {
    name: 'Search',
    data () {
        return {
            store,
        }
    },
};
</script>

<template>
<div class="container">
    <label for="filter"></label>
    <select id="filter" class="content-filter" name="archetype" v-model="store.searchValueType" @keyup.enter="$emit('search')">
        <option selected value="">Filtra archetype</option>
        <option value="Alien">Alien</option>
        <option value="Gold">Gold</option>
    </select>
</div>
</template>

<style lang="scss" scoped>
.content-filter {
    padding: 5px 10px 5px 0;
    margin: 10px 0;
}
</style>