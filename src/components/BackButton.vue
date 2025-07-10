<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink to="/jobs" class="text-pink-500 hover:text-pink-600 flex items-center">
        <i class="pi pi-arrow-circle-left mr-3"></i> 返回职位列表
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>