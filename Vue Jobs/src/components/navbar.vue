<script setup>
import logo from '/images/logo.png'
import { RouterLink, useRoute } from 'vue-router';
const activelink =(routepath)=>{
const route=useRoute();
return route.path === routepath;
}
</script>
<template>
 <nav class="bg-green-700 border-b border-green-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" href="index.html">
              <img class="h-10 w-auto" v-bind:src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >Vue Jobs</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[activelink('/') ?  'bg-green-900' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md']"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/jobs"
                  :class="[activelink('/jobs') ?  'bg-green-900' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md']"
                  >Jobs</RouterLink
                >
                <RouterLink
                  to="//jobs/add"
                  :class="[activelink('/jobs/add') ?  'bg-green-900' : 'hover:bg-gray-900', 'text-white', 'py-2', 'px-3', 'rounded-md']"
                  > Add Jobs</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>