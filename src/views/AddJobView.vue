<template>


  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">添加职位</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">工作类型</label>
            <select v-model="form.type" id="type" name="type" class="border rounded w-full py-2 px-3" required>
              <option value="Full-Time">全职</option>
              <option value="Part-Time">兼职</option>
              <option value="Remote">远程</option>
              <option value="Internship">实习</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">职位招聘名称</label>
            <input v-model="form.title" type="text" id="name" name="name" class="border rounded w-full py-2 px-3 mb-2"
              placeholder="例如：高级 Vue 前端工程师" required />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">描述</label>
            <textarea v-model="form.description" id="description" name="description"
              class="border rounded w-full py-2 px-3" rows="4" placeholder="任何工作职责、期望、要求等"></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">工资</label>
            <select v-model="form.salary" id="salary" name="salary" class="border rounded w-full py-2 px-3" required>
              <option value="Under $50K">
                < $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K"> > $200K</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              位置
            </label>
            <input v-model="form.location" type="text" id="location" name="location"
              class="border rounded w-full py-2 px-3 mb-2" placeholder="公司地址" required />
          </div>

          <h3 class="text-2xl mb-5">公司信息</h3>

          <div class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2">公司名称</label>
            <input v-model="form.company.name" type="text" id="company" name="company"
              class="border rounded w-full py-2 px-3" placeholder="公司名称" />
          </div>

          <div class="mb-4">
            <label for="company_description" class="block text-gray-700 font-bold mb-2">公司描述</label>
            <textarea v-model="form.company.description" id="company_description" name="company_description"
              class="border rounded w-full py-2 px-3" rows="4" placeholder="你们公司是做什么的？"></textarea>
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-bold mb-2">联系邮箱</label>
            <input v-model="form.company.contactEmail" type="email" id="contact_email" name="contact_email"
              class="border rounded w-full py-2 px-3" placeholder="申请人的电子邮件地址" required />
          </div>
          <div class="mb-4">
            <label for="contact_phone" class="block text-gray-700 font-bold mb-2">联系电话</label>
            <input v-model="form.company.contactPhone" type="tel" id="contact_phone" name="contact_phone"
              class="border rounded w-full py-2 px-3" placeholder="申请人可选填的电话号码" />
          </div>

          <div>
            <button
              class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit">
              添加职位
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import {reactive} from 'vue'
import axios from 'axios'
import router from '@/router'
import { useToast } from 'vue-toastification'

const toast = useToast();

const form = reactive({
  type:'Full-Time',
  title:'',
  description:'',
  salary:'',
  location:'',
  company:{
    name:'',
    description:'',
    contactEmail:'',
    contactPhone:'',
  }
})

const handleSubmit = async () =>{
  const newJob = {
    title:form.title,
    type:form.type,
    location:form.location,
    description:form.description,
    salary:form.salary,
    company:{
      name:form.company.name,
      description:form.company.description,
      contactEmail:form.company.contactEmail,
      contactPhone:form.company.contactPhone,
    }
  }

  try {
    const response = await axios.post('/api/jobs',newJob);
    toast.success('工作职位已成功添加', { timeout: 2000 ,dismissOnPageChange: false })
    router.push(`/jobs/${response.data.id}`);
  } catch (error) {
    console.error("获取错误：", error);
    toast.error('工作职位添加失败', { timeout: 2000, dismissOnPageChange: false })
  }
}
</script>