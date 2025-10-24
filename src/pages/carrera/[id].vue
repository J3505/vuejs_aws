<template>
    <div>
        <h1>Carrera numero {{ route.params.id }}</h1>
        <RouterLink :to="{name:'/'}"> Ir al dashboard </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style scoped>

</style>