<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
console.log(supabase)
</script>

<template>
  <main>
    <router-view/>
  </main>
  
</template>

<style scoped>

</style>
