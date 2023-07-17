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
      <v-col col="12" id = "about">
        <div>
          <v-row>
            <v-col cols="12">
              <div class="aboutme">
                <h1 class="text-blue" style="font-size:48px;">About me</h1>
                <p>My name is Jiajun(Thomas) Chen. I am from China, and came to the United States 9 years ago to attend sixth grade. 
                  As an individual who bridges two cultures, I possess a valuable perspective that enables me to deeply appreciate and understand diverse customs, beliefs, and ways of life. <br><br>
                  
                  Currently, I am a student in the College of Arts and Sciences at New York University, pursuing a joint major in Mathematics and Computer Science. Technology is my true passion, encompassing all aspects of computers and the internet.<br><br>
                  
                  Throughout my academic journey, I have gained proficiency in multiple programming languages, both in and outside of class, and acquired hands-on experience in both frontend and backend development. I have had the privilege of working in a real-world company where I actively contributed to the creation of practical software and webpages.<br><br>
                  
                  Looking ahead, I am eagerly excited to actively participate in impactful projects and connect with like-minded individuals who share the same passion and enthusiasm as I do.
                </p>
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
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-brands fa-js</v-icon>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-brands fa-html5</v-icon>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-brands fa-css3</v-icon>
                </div>
              </v-col>
              <v-col cols="3">
                <div>
                  <v-icon size="60px">fa-brands fa-vuejs</v-icon>
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
                    666Life 
                  </v-tab>
                  <v-tab value="exp2"  class = "tab">
                    Mini-inventors Lab
                  </v-tab>
                  <v-tab value="exp3"  class = "tab">
                    Renewable Urban Pioneers
                  </v-tab>
                  <v-tab value="exp4"  class = "tab">
                    UCLA Sepulveda Lab 
                  </v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="12" sm = "9">
                <v-window v-model="tab" >
                  <v-window-item value="exp1">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          May 2023 - Present <br>
                          Intern<br>
                          Ningbo,China. On-site.<br><br>
                          
                          -Contributed to the development process of a game, “count money”, published on the chinese Tiktok platform<br><br>
                          -Understood and implemented functionalities on the backend component of the game using SpringBoot framework of the Java Language<br><br>
                          -Participated in the development of a web service using Vue.js in the frontend for the game to retrieve data from the database<br><br>
                          -Facilitated communications and achieved goals set by the company mentor-Contributed to the development process of a game, “count money”, published on the chinese 
                          Tiktok platform <br><br>
                          -Understood and implemented functionalities on the backend component of the game using SpringBoot framework of the Java Language <br><br>
                          -Participated in the development of a web service using Vue.js in the frontend for the game to retrieve data from the database <br><br>
                          -Facilitated communications and achieved goals set by the company mentor <br><br>
                          
                          Skills: 
                          <ul>
                            <li>Spring Boot</li>
                            <li>Vue.js</li>
                            <li>Java Database Connectivity (JDBC)</li>
                            <li>Microsoft SQL Server</li>
                            <li>Java</li>
                          </ul>
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  <v-window-item value="exp2">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          May 2019 - Jun 2021 <br>
                          Co-Founder and Vice President<br>
                          Irvine, California, United States. On-site.<br><br>
                          
                          -Taught classes to teenage kids on the topics of STEM, mainly focusing on the assembly of DIY toys<br><br>
                          -Created and executed a business plan and conducted market research<br><br>
                          -Maintained accurate cash balances for all programs, departments and projects<br><br>
                          -Coordinated work across departments to keep teams on track to meet company goals<br><br>
                          -Strategized long-term business needs by generating customer feedback-Created and executed a business plan and conducted market research<br><br>
                          
                          Skills: 
                          <ul>
                            <li>Teaching</li>
                            <li>Leadership</li>
                            <li>Market Research</li>
                            <li>Teamwork</li>
                          </ul>
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  <v-window-item value="exp3">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          Jun 2020 - Mar 2021 <br>
                          Co-Founder and Vice President of Marketing <br>
                          Remote.<br><br>
                          -Founded organization to collaborate with and support NGOs working to combat and mitigate the impacts of deforestation, including Rainforest Trust and Greenpeace International<br><br>
                          -Conducted research on deforestation causes and global impacts <br><br>
                          -Contributed articles on deforestation to <i>Research and Development in Engineering</i><br><br>
                          -Organized webinar featuring speakers from NGO partners to raise awareness <br><br>
                          -Raised funds via t-shirt sales and online campaigns via GoFundMe and Bonfire <br><br>
                          
                          Skills: 
                          <ul>
                            <li>Research</li>
                            <li>Leadership</li>
                            <li>Project Organization</li>
                            <li>Fundraising</li>
                          </ul>
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  <v-window-item value="exp4">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          May 2020 - Jul 2020 <br>
                          Intern <br>
                          Remote.<br><br>

                          -Contributed to cutting-edge spin wave research at the UCLA Sepulveda Lab<br><br>
                          -Built numerical models in COMSOL to simulate spin wave propagation through magnetic buses and transmit signals encoding binary to a logical gate <br><br>
                          -Developed high level understanding of atomic spin waves and wave characteristics<br><br>
                          -Achieved goals set by Dr. Sepulveda and team and delivered presentation on key findings<br><br>
                          
                          Skills: 
                          <ul>
                            <li>3D Modeling</li>
                            <li>Presentation Skill</li>
                            <li>Physics</li>
                          </ul>
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
      <div class="projects" id = "projects">
        <h1 class="text-blue" style="font-size:48px; margin-left: 10vw; margin-bottom:2vh">Projects</h1>
        <div class = "project1">
          <v-row>
            <v-col :cols="isSmallScreen ? 12 : 5">
              <h1 style="font-size:48px; margin-left: 10vw; margin-top: 5vh">Hb-Count-Money</h1>
              <p style="margin-left: 10vw"> Game published on the chinese Tiktok platform. <br> Contributed to building functionalities of the game.</p> <br>
              <h3 style="margin-left: 10vw"> Development Tools</h3>
              <ul>
                <li>Java</li>
                <li>SpringBoot</li>
                <li>JDBC</li>
                <li>MySQL</li>
              </ul>
              <v-btn tile dark class="mt-8" variant="outlined" size="large" style="margin-left:10vw" @click="openNewTab('https://github.com/ThomasChen0717/backend-server-hb-count-money')">View Project </v-btn>
            </v-col>
            <v-col :cols="isSmallScreen ? 12 : 7">
              <div style="position: relative; margin-bottom: 10vh;" class="mt-16">
                <v-img src="../assets/hb-count-money.jpg" contain max-height="500px" ></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class = "project2">
          <v-row>
            <v-col :cols="isSmallScreen ? 12 : 5">
              <h1 style="font-size:48px; margin-left: 10vw; margin-top: 5vh">Hb-Web-Admin</h1>
              <p style="margin-left: 10vw"> Frontend administrative webpage for "Hb-Count-Money" that communicates with the backend/database. Helps developers modify gamedata without directly accessing the database. Includes a basic login and permission system. </p>
              <h3 style="margin-left: 10vw"> Development Tools</h3>
              <ul>
                <li>Vue.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <v-btn tile dark class="mt-8" variant="outlined" size="large" style="margin-left:10vw" @click="openNewTab('https://github.com/ThomasChen0717/admin-panel-hb-countmoney')">View Project </v-btn>
            </v-col>
            <v-col :cols="isSmallScreen ? 11 : 7">
              <div style="position: relative; margin-bottom: 5vh;" class="mt-16">
                <v-img src="../assets/hb-web-admin.png" contain max-height="500px"></v-img>
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
                <a href="https://www.linkedin.com/in/jiajun-chen-080824188/" target = "_blank">Linkedin </a>
              </li>  <br />
              <li>
                <v-icon size="60px">fa-brands fa-discord</v-icon>
                <a href="https://discordapp.com/users/930276806853025823" target = "_blank">Discord </a>
              </li>  <br />
            </ul>
          </v-col>
          <v-col :cols="isSmallScreenContact ? 12 : 7" class="contact_prompt">
              <h1 class = "text-blue mt-8">Get in Touch</h1>
              <v-divider></v-divider>
              <el-form ref="contactForm" :model="contactForm" class="contact-Form">
                <v-row class="mt-10">
                  <v-col cols="12">
                    <v-text-field 
                      label = "Name" 
                      persistent-hint variant="outlined"
                      ref="Name"
                      v-model="contactForm.Name"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field 
                      label = "Phone No." 
                      persistent-hint variant="outlined"
                      ref="PhoneNumber"
                      v-model="contactForm.PhoneNumber"
                    />
                  </v-col>
                </v-row>
                  <v-textarea 
                  label="Message" 
                  perssitent-hint variant="outlined"
                  ref="Message"
                  v-model="contactForm.Message"
                  />
                <v-btn color = "blue" class = "mt-2" @click="submitForm" :loading="loading">Submit Now</v-btn>
              </el-form>
            </v-col>
        </v-row>
      </div>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';

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
    isSmallScreenContact:false,
    contactForm:{
      Name: '',
      PhoneNumber: '',
      Message: ''
    },
    loading: false
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
    openNewTab(url) {
      window.open(url, '_blank');
    },
    submitForm(){
      axios({
        method: 'post',
        url: 'https://formspree.io/f/mleydrvl',
        data: this.contactForm
      }).then(() => {
          console.log('Form submitted successfully');
          this.$notify({
            title: 'Form submitted successfully',
            dangerouslyUseHTMLString: true,
            type: 'success'
          })
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          this.$notify({
            title: 'Error submitting form:',
            dangerouslyUseHTMLString: true,
            type: 'error'
          })
        })
    }
  }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Agdasima&family=Josefin+Sans&family=Victor+Mono:wght@100&display=swap');
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
  background-image: url(../assets/background.jpg);
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

  p {
    font-family: 'Victor Mono', monospace;
  }

  ul{
    list-style-type:square;
    padding-left: 2vw;
  }

  .projects ul{
    margin-left:10vw; 
    font-family: 'Victor Mono', monospace;
  }

 
  @media screen and (max-width: 1100px) {
    .head{
      position:relative;
      text-align:left;
      padding:12px;
      margin-bottom:6px;
      height:800px;
      width:100%;
      background-image: url(../assets/background_sm.jpg);
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
