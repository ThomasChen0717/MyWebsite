<template>
        <v-app-bar app :color="drawer ? 'blue' : 'white'" dark flat clipped-left class="sticky" elevation = "3" ref="appBar">
            <v-btn>
                <v-icon :color="drawer ? 'white' : 'blue'" left class="mr-2">fas fa-signature</v-icon> Thomas Chen
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="drawer = !drawer" > 
                <v-icon :color = "drawer ? 'white' : 'black'"> {{drawer ? 'fa-sharp fa-solid fa-xmark' : 'fa-solid fa-bars' }} </v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" location="right" temporary style= "width: 100vw" class="sticky">
            <v-list>
                <v-list-item class="list-item">
                    <a @click = "scroll('home')">Home</a>
                </v-list-item>
                <v-list-item class="list-item">
                    <a @click = "scroll('about')">About</a>
                </v-list-item>
                <v-list-item class="list-item">
                    <a @click = "scroll('experiences')">Experiences</a>
                </v-list-item>
                <v-list-item class="list-item">
                    <a @click = "scroll('projects')">Projects</a>
                </v-list-item>
                <v-list-item class="list-item">
                    <a @click = "scroll('contact')">Contact</a>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>

<script>
export default {
    data(){
        return{
            drawer:null
        }
    },
    methods: {
        scroll(refName) {
            const element = document.getElementById(refName);
            const appBarHeight = this.$refs.appBar.$el.offsetHeight;

            // Calculate the target position with an offset and accounting for the app bar
            const targetPosition = element.offsetTop - appBarHeight;

            // Scroll to the element with the adjusted position
            window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
            });

            this.drawer = false; // Close the navigation drawer after scrolling
        }
}
}
</script>
<style scoped>
.list-item{
    margin-bottom: 10vh;
}

a {
      --fill-color: #198CE6;
      position: relative;
      display: block;
      padding: 4px 0;
      font: 700 3rem Raleway, sans-serif;
      text-decoration: none;
      text-transform: uppercase;
      -webkit-text-stroke: 2px var(--fill-color);
      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;
  }
  a:hover{
    background-size: 100%;
  }

  .sticky {
  position: fixed !important;
  top: 0;
  z-index: 999;
}

</style>