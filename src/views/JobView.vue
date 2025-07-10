<template>
  <BackButton />
  <section class="bg-pink-50" v-if="!state.isLoading">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-pink-800 text-lg font-bold mb-6">
              职位描述
            </h3>

            <p class="mb-4">
              {{ state.job.description }}
            </p>

            <h3 class="text-pink-800 text-lg font-bold mb-2">工资</h3>

            <p class="mb-4">{{ state.job.salary }} / 年</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">公司信息</h3>

            <h2 class="text-2xl">{{ state.job.company.name }}</h2>

            <p class="my-2">
              {{ state.job.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">联系邮箱：</h3>

            <p class="my-2 bg-pink-100 p-2 font-bold">
              {{ state.job.company.contactEmail }}
            </p>

            <h3 class="text-xl">联系电话：</h3>

            <p class="my-2 bg-pink-100 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">管理工作</h3>
            <RouterLink :to="`/jobs/edit/${state.job.id}`"
              class="bg-pink-500 hover:bg-pink-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">编辑
              工作</RouterLink>
            <button @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              删除工作
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader color="#ff4d6d" />
  </div>
</template>

<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios';
import {reactive,onMounted} from 'vue';
import {useRoute,RouterLink,useRouter} from 'vue-router';
import BackButton from '../components/BackButton.vue';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const jobId = route.params.id;
const state = reactive({
  job:{
    company: {} 
  },
  isLoading:true
})

onMounted(async () => {
  try {
    state.isLoading = true; // 开始加载
    const response = await axios.get(`/api/jobs/${jobId}`);
    state.job = response.data;
  } catch (error) {
    console.error("获取错误：", error);
  } finally {
    state.isLoading = false; // 加载完成或出错时都更新状态
  }
});

const deleteJob = async () => {
  try{
    const confirm = window.confirm('你确定要删除这个工作吗？');
    if(confirm){
      await axios.delete(`/api/jobs/${jobId}`);
      toast.success('工作职位已删除', { timeout: 2000, dismissOnPageChange: false })
      router.push('/jobs')
    }
  }catch(error) {
    console.error('删除职位时出错:',error)
    toast.error('工作职位删除失败', { timeout: 2000, dismissOnPageChange: false })
  }
}
</script>