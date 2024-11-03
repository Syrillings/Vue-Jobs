<script setup>
import hero from '../components/hero.vue';
import homecards from '../components/homecards.vue';
import joblistings from '../components/joblistings.vue';
</script>
<template>
    <hero title="Get a Vue Job" subtitle="Learn Vue.js and become a Developer"/>
<homecards/>
<joblistings limit="3" showbutton="true"/>
</template>