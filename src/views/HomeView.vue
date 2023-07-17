<template>
  <v-app id="home">
    <component :is="isSmallScreen ? 'NavMenu' : 'NavBar'"/>
    <v-container fluid>
      <div class = "head">
        <v-row>
          <v-col cols="6" sm="0">
          </v-col>
          <v-col cols="6" sm="6">
            <div class="intro">
              <h1 class="text-white">Hello, My name is</h1>
              <h1 class="text-white" style="font-size:72px;">Thomas Chen</h1>
              <span class="text-white">Software Engineer</span><br />
              <v-btn tile dark class="text-white mt-8" variant="outlined" size="x-large" @click = "scroll('contact')">Contact me</v-btn> 
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col col="12" class="mt-16" id = "about">
        <div>
          <v-row>
            <v-col cols="12">
              <div class="aboutme">
                <h1 class="text-blue" style="font-size:48px;">About me</h1>
                <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Pulvinar etiam non quam lacus suspendisse faucibus.</p>
                <a href="Jiajun Chen Resume.pdf" download style="font: 700 2rem Raleway, sans-serif"> Download Resume</a> 
              </div>
            </v-col>
          </v-row>
          <div class="skills">
            <h2 class="text-blue">Skills</h2>
            <v-row>
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-brands fa-python</v-icon>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-brands fa-java</v-icon>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-sharp fa-solid fa-c</v-icon>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-brands fa-unity</v-icon>
                </div>
              </v-col>
           </v-row>
          </div>
        </div>  
      </v-col>
      <div id = "experiences" class = "experiences">
        <h1 class="text-blue" style="font-size:48px;">Experiences</h1>
        <v-card elevation="0">
          <div class="d-flex flex-row">
            <v-row>
              <v-col cols="12" sm="3">
                <v-tabs v-model="tab" direction="vertical" color = "blue">
                  <v-tab value="exp1" class = "tab">
                    Loremsajdsajkdhakj
                  </v-tab>
                  <v-tab value="exp2"  class = "tab">
                    Lorem
                  </v-tab>
                  <v-tab value="exp3"  class = "tab">
                    Lorem
                  </v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="12" sm = "9">
                <v-window v-model="tab" >
                  <v-window-item value="exp1">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi
                          ac felis. Etiam feugiat lorem non metus. Sed a libero.
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  <v-window-item value="exp2">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi
                          ac felis. Etiam feugiat lorem non metus. Sed a libero.
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  <v-window-item value="exp3">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi
                          ac felis. Etiam feugiat lorem non metus. Sed a libero.
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  </v-window>
              </v-col>
            </v-row>  
        </div>
        </v-card>
      </div>
      <div class="projects" style="margin-top: 10vh" id = "projects">
        <h1 class="text-blue" style="font-size:48px; margin-left: 10vw; margin-bottom:2vh">Projects</h1>
        <div class = "project1">
          <v-row>
            <v-col :cols="isSmallScreen ? 12 : 5">
              <h1 class="text-black" style="font-size:48px; margin-left: 10vw; margin-top: 5vh">Project 1</h1>
              <p class="text-black" style="margin-left: 10vw"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h3 class="text-black" style="margin-left: 10vw"> Developement Tools</h3>
              <ul style = "list-style-type:square">
                <li class="text-black" style="margin-left:15vw">tool1</li>
                <li class="text-black" style="margin-left:15vw">tool2</li>
              </ul>
              <v-btn tile dark class="text-black mt-8" variant="outlined" size="large" style="margin-left:10vw">View Project </v-btn>
            </v-col>
            <v-col :cols="isSmallScreen ? 12 : 7">
              <div style="position: relative" class="mt-16">
                <v-img src="../assets/sample_project.jpg" contain max-height="300px"></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class = "project2">
          <v-row>
            <v-col :cols="isSmallScreen ? 12 : 5">
              <h1 class="text-black" style="font-size:48px; margin-left: 10vw; margin-top: 5vh">Project 2</h1>
              <p class="text-black" style="margin-left: 10vw"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <h3 class="text-black" style="margin-left: 10vw"> Developement Tools</h3>
              <ul style = "list-style-type:square">
                <li class="text-black" style="margin-left:15vw">tool1</li>
                <li class="text-black" style="margin-left:15vw">tool2</li>
              </ul>
              <v-btn tile dark class="text-black mt-8" variant="outlined" size="large" style="margin-left:10vw">View Project </v-btn>
            </v-col>
            <v-col :cols="isSmallScreen ? 11 : 7">
              <div style="position: relative" class="mt-16">
                <v-img src="../assets/sample_project.jpg" contain max-height="300px"></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class = "contact" id = "contact">
        <v-row>
          <v-col :cols="isSmallScreenContact ? 12 : 5" class="info">
            <h1 class="text-blue" style = "margin-bottom: 2vh">Contact</h1>
            <ul style= "list-style-type: none">
              <li>
                <v-icon size="60px">fa-brands fa-github</v-icon>
                <a href="https://github.com/ThomasChen0717" target = "_blank">Github </a>
              </li> <br />
              <li>
                <v-icon size="60px">fa-brands fa-linkedin</v-icon>
                <a href="" target = "_blank">Linkedin </a>
              </li>  <br />
              <li>
                <v-icon size="60px">fa-brands fa-instagram</v-icon>
                <a href="" target = "_blank">Instagram </a>
              </li>  <br />

              <li>
                <v-icon size="60px">fa-brands fa-discord</v-icon>
                <a href="" target = "_blank">Discord </a>
              </li>  <br />
            </ul>
          </v-col>
          <v-col :cols="isSmallScreenContact ? 12 : 7" class="contact_prompt">
              <h1 class = "text-blue mt-8">Get in Touch</h1>
              <v-divider></v-divider>
              <v-row class="mt-10">
                <v-col cols="12">
                  <v-text-field label = "Name" persistent-hint variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label = "Phone No." persistent-hint variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-textarea label="Message" perssitent-hint variant="outlined"></v-textarea>
              <v-btn color = "blue" class = "mt-2">Submit Now</v-btn>
            </v-col>
        </v-row>
      </div>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import NavMenu from '@/components/NavMenu.vue';
export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    FooterView,
    NavMenu
  },
  data :() => ({
    tab: 'exp1',
    isSmallScreen:false,
    isSmallScreenContact:false
  }),

  mounted(){
    window.addEventListener('resize',this.handleScreenResize);
    this.handleScreenResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize',this.handleScreenResize);
  },
  methods:{
    handleScreenResize(){
      this.isSmallScreen = window.innerWidth <= 750;
      this.isSmallScreenContact = window.innerWidth <= 950;
    },
    scroll(refName){
        const element = document.getElementById(refName);
        element.scrollIntoView({behavior:"smooth"});
    },
  }
});
</script>

<style scoped>
.v-container{
  padding:16px 0;
}
.head{
  position:relative;
  text-align:center;
  padding:12px;
  margin-bottom:6px;
  height:800px;
  width:100%;
  background-image: url(../assets/profilePic.png);
  background-repeat:no-repeat;
  background-size:cover;
  background-position: left;

}

.intro{
  position: absolute; 
  top:30vh;
  left: 60vw;
}

.aboutme{
  text-align:left;
  position:relative;
  margin: 5vh 20vw 5vh;
}

#home{
  background-color: white;
}

.experiences{
  text-align:left;
  position:relative;
  margin: 5vh 20vw 5vh;
}

.tab{
  overflow:auto;
}

.project1{
  background-color:azure
}

.project2{
  background-color:rgb(233, 127, 5)
}

.skills{
  text-align:center;
  margin: 2vh 20vw 5vh;
}

.contact{
  text-align:left;
  position:relative;
}

.info{
  padding-left: 10vw; 
  padding-top: 5vh;
}

.contact_prompt{
  padding-right:5vw;
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
      transition: 0.3s linear;
  }
  a:hover{
    background-size: 100%;
  }


 
  @media screen and (max-width: 1100px) {
    .head{
      position:relative;
      text-align:left;
      padding:12px;
      margin-bottom:6px;
      height:800px;
      width:100%;
      background-image: url(../assets/profilePic_sm.png);
      background-repeat:no-repeat;
      background-size:cover;
      background-position: center;
    }
  .intro{
      position: absolute; 
      top:10vh;
      left:5vw;
      right: 10vw;
    }
  }

  @media screen and (max-width: 950px) {
  .info{
    text-align: center;
    padding-left: 10vw; 
    padding-top: 5vh;
  }

  .contact_prompt{
    text-align: center;
    padding-left:5vw;
    padding-right:5vw;
  }
}
</style>
