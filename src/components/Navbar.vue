<script setup>
import logo from '@/assets/images/logo.png'
import { RouterLink,useRoute } from 'vue-router';

const isActiveLink = (routePath) =>{
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <nav class="bg-pink-700 border-b border--500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue 相关工作</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/"
                :class="[isActiveLink('/') ? 'bg-pink-900':'hover:bg-pink-900 hover:text-white','text-white','px-3','py-2','rounded-md']">
                首页</RouterLink>
              <RouterLink to="/jobs"
                :class="[isActiveLink('/jobs') ? 'bg-pink-900' : 'hover:bg-pink-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                工作岗位</RouterLink>
              <RouterLink to="/jobs/add"
                :class="[isActiveLink('/jobs/add') ? 'bg-pink-900' : 'hover:bg-pink-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">
                添加职位
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>