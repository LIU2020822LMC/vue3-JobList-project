<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">面向开发者</h2>
          <p class="mt-2 mb-4">
            浏览我们的Vue相关工作，即刻开启你的职业生涯
          </p>
          <RouterLink to="/jobs" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            浏览工作
          </RouterLink>
        </Card>
        <Card bg="bg-pink-100">
          <h2 class="text-2xl font-bold">面向雇主</h2>
          <p class="mt-2 mb-4">
            列出你的工作，为该职位找到完美的开发人员
          </p>
          <RouterLink to="/jobs/add" class="inline-block bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-600">
            添加工作
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from './Card.vue';
import { RouterLink } from 'vue-router';
</script>

<style>

</style>