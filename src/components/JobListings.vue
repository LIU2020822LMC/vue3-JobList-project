<template>
  <section class="bg-pink-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-pink-500 mb-6 text-center">
        浏览工作
      </h2>
      <!-- 加载时显示加载动画 -->
      <div v-if="isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader color="#ff4d6d" />
      </div>
      <!-- 加载完后显示职位列表 -->
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />

      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">查看所有工作
    </RouterLink>
  </section>
</template>

<script setup>
// import JobData from '@/jobs.json'
import { ref,defineProps,onMounted } from 'vue'
import JobListing from './JobListing.vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from "axios";

const jobs = ref([]);
const isLoading = ref(true); // 添加加载状态变量

defineProps({
  limit:Number,
  showButton:{
    type:Boolean,
    default:false,
  }
})

onMounted(async () => {
  try {
    isLoading.value = true; // 开始加载
    const response = await axios.get('/api/jobs/');
    jobs.value = response.data;
  } catch (error) {
    console.error("获取错误：",error);
  } finally {
    isLoading.value = false; // 加载完成或出错时都更新状态
  }
});
</script>