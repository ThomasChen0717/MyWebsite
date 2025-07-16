<template>
    <v-app-bar app color="white" dark flat class="px-12 sticky" elevation = "3" ref="appBar">
        <v-btn>
            <v-icon color ="blue" left class="mr-2">fas fa-signature</v-icon> Thomas Chen
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click = "scroll('home')">Home</v-btn>
        <v-btn text @click = "scroll('about')">About</v-btn>
        <v-btn text @click = "scroll('experiences')">Experiences</v-btn>
        <v-btn text @click = "scroll('projects')">Projects</v-btn>
        <v-btn text @click = "scroll('contact')">Contact</v-btn>
    </v-app-bar>
</template>
<script>
export default {
    methods:{
        scroll(refName){
            const element = document.getElementById(refName);
            const appBarHeight = this.$refs.appBar.$el.offsetHeight;
            window.scrollTo({
                top: element.offsetTop - appBarHeight,
                behavior: 'smooth'
            });
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