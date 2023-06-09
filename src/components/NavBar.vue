<template>
    <v-app-bar app color="white" dark flat class="px-12 sticky" elevation = "3">
        <v-btn>
            <v-icon color ="blue" left class="mr-2">fas fa-signature</v-icon> Thomas Chen
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click = "scroll('home')" class="text-black">Home</v-btn>
        <v-btn text @click = "scroll('about')" class="text-black">About</v-btn>
        <v-btn text @click = "scroll('experiences')" class="text-black">Experiences</v-btn>
        <v-btn text @click = "scroll('projects')" class = "text-black">Projects</v-btn>
        <v-btn text @click = "scroll('contact')" class="text-black">Contact</v-btn>
    </v-app-bar>
</template>
<script>
export default {
    methods:{
        scroll(refName){
            const element = document.getElementById(refName);
            element.scrollIntoView({behavior:"smooth"});
        },
    }

}
</script>
<style scoped>

.sticky {
  position: fixed !important;
  top: 0;
  z-index: 999;
}
</style>