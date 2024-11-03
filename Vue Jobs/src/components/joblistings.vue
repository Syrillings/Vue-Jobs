<script setup>
import { RouterLink } from 'vue-router';
import joblisting from './joblisting.vue';
import axios from 'Axios'; 
import { ref, defineProps, onMounted } from 'vue';

defineProps({
    limit: Number,
    showbutton:{
        type:Boolean,
        default:false
    }
})
const jobs = ref([]);
onMounted(async() => {
    try{
        const response = await axios.get('http://localhost:3000/jobs');
        jobs.value=response.data;
        }catch (error){
console.error('Error fetching Jobs')
        }
    }
);
</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
<div class="container-xl  lg:container m-auto">
<h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
    Browse Jobs
</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
   <joblisting v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job"/>
    </div>
</div>

    </section>
    <section v-if="showbutton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs
        </RouterLink>
    </section>

</template>