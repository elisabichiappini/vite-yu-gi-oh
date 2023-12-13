<script>
export default {
    name: 'Header',
};
</script>

<template>
    <header id="intestation" class="d-flex">
        <div>image</div>
        <h1>Yu-Gi-Oh API</h1>
    </header>
</template>

<style lang="scss" scoped>

#intestation {
    padding: 10px 20px;
}
.d-flex {
    display: flex;
    gap: 10px
}
</style>