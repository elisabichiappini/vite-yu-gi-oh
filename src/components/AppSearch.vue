<script>
export default {
    name: 'Search',
};
</script>

<template>
<div class="container">
    <label for="filter"></label>
    <select id="filter" class="content-filter">
        <option selected>Filter</option>
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