<template>
  <v-app id="home">
    <component :is="isSmallScreen ? 'NavMenu' : 'NavBar'"/>
    <v-container fluid>
      <div class = "head">
        <v-row>
          <v-col cols="6" sm="0">
          </v-col>
          <v-col cols="6" sm="6" class="d-flex flex-column justify-center align-end">
            <div class="intro text-center">
              <h1 class="text-white small-text">Hello, My name is</h1>
              <h1 class="text-white small-name">Thomas Chen</h1>
              <span class="text-white small-text">Software Engineer</span><br/>
              <v-btn tile dark class="text-white mt-8 small-button" variant="outlined" size="x-large" @click = "scroll('contact')">Contact me</v-btn> 
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
                <p>Hi there, this is Jiajun(Thomas) Chen. I am from China, and came to the United States 10 years ago to attend sixth grade. As an individual who bridges two cultures, I possess a valuable perspective that enables me to deeply appreciate and understand diverse customs, beliefs, and ways of life.
                <br><br>
                I am an incoming Masters Student in Computer Science in the Graduate College of Arts and Sciences at New York University.Technology is my true passion, encompassing all aspects of computers and the internet.
                <br><br>
                Throughout my academic journey, I have gained proficiency in multiple programming languages, both in and outside of class, and acquired hands-on experience in both frontend and backend development, as well as some research opportunities. I have had the privilege of working in a real-world environment where I actively contributed to the creation of practical software and webpages.
                <br><br>
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
              <v-col cols="12" md="6" sm="12">
                <v-tabs v-model="tab" direction="vertical" color = "blue">
                  <v-tab value="exp1" class = "tab">
                    New York University
                  </v-tab>
                  <v-tab value="exp2" class = "tab">
                    666Life 
                  </v-tab>
                  <v-tab value="exp3"  class = "tab">
                    NYU Abu Dhabi
                  </v-tab>
                  <v-tab value="exp4"  class = "tab">
                    Mini-inventors Lab
                  </v-tab>
                  <v-tab value="exp5"  class = "tab">
                    Renewable Urban Pioneers
                  </v-tab>
                  <v-tab value="exp6"  class = "tab">
                    UCLA Sepulveda Lab 
                  </v-tab>
                </v-tabs>
              </v-col>
              <v-col cols="12" md="6" sm = "12">
                <v-window v-model="tab" >
                  <v-window-item value="exp1">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          May 2024 - Present <br>
                          Student Research Assistant<br>
                          New York University, NY, Hybrid.<br><br>
                          
                          - Conduct research project on utilizing interval arithmetic in root finding within 2-dimensions and above under the supervision of Doctor Yap Chee <br><br>
                          - Employ the Julia Coding language for efficient mathematical computing <br><br>
                          - Organize regular progress report meetings with Doctor Yap and incorporated feedback <br><br>
                          
                          May 2025 - Present 
                          <br>
                          Full-time Student Research Assistant<br>
                          New York University, NY, On-Site.<br><br>
                          
                          - Developed a novel range-function computation algorithm, achieving a 2x speedup over the traditional Taylor-series method. <br><br>
                          - Implemented a Straight-Line Program (SLP) auto-differentiation engine for highly efficient derivative calculations.<br><br>
                          - Reconstructed polynomials via isotopic‐curve extraction and produced detailed visualizations of the results.<br><br>
                          - Collaborated closely with Dr. Yap Chee, Prof. Kai Hormann, and Postdoc Bingwei Zhang through weekly strategy and review meetings.<br><br>


                          Skills: 
                          <ul>
                            <li>Julia</li>
                            <li>Interval Arithmetic</li>
                          </ul>
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  <v-window-item value="exp2">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          May 2023 - July 2023 <br>
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
                  <v-window-item value="exp3">
                    <v-card flat>
                      <v-card-text>
                        <p>
                          Jan 2024 - May 2024 <br>
                          Undergraduate Researcher <br>
                          New York University Abu Dhabi. On-Site.<br><br>

                          - Conducted research project on Deadcode Remover web extension under the supervision of Professor Yasir Zaki<br><br>
                          - Implemented the extension using Javascript, Webpack, and Babel<br><br>
                          - Facilitated communications with Professor Yasir on specifications and successfully executed suggestions<br><br>
                          
                          Skills: 
                          <ul>
                            <li>Javascript</li>
                            <li>Webpack</li>
                            <li>Babel</li>
                          </ul>
                        </p>
                      </v-card-text> 
                    </v-card>
                  </v-window-item>
                  <v-window-item value="exp4">
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
                  <v-window-item value="exp5">
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
                  <v-window-item value="exp6">
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
                <v-img src="../assets/hb-count-money.jpg" class="project-image" ></v-img>
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
                <v-img src="../assets/hb-web-admin.png" class="project-image"></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class = "project3">
          <v-row>
            <v-col :cols="isSmallScreen ? 12 : 5">
              <h1 style="font-size:48px; margin-left: 10vw; margin-top: 5vh">Maze Solver</h1>
              <p style="margin-left: 10vw"> A program utilizing the Laplace Equation to solve mazes.</p> <br>
              <h3 style="margin-left: 10vw"> Development Tools</h3>
              <ul>
                <li>Python</li>
                <li>Numerical Analysis</li>
                <li>Laplace Transform</li>
              </ul>
              <v-btn tile dark class="mt-8" variant="outlined" size="large" style="margin-left:10vw" @click="openNewTab('https://github.com/ThomasChen0717/MazeSolver')">View Project </v-btn>
            </v-col>
            <v-col :cols="isSmallScreen ? 12 : 7">
              <div style="position: relative; margin-bottom: 10vh;" class="mt-16">
                <v-img src="../assets/maze_solver.png" class="project-image" ></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class = "project4">
          <v-row>
            <v-col :cols="isSmallScreen ? 12 : 5">
              <h1 style="font-size:48px; margin-left: 10vw; margin-top: 5vh">Dead Code Remover</h1>
              <p style="margin-left: 10vw"> An extension that detects and cleans unused(dead)javascipt code for more efficient web browsing.</p> <br>
              <h3 style="margin-left: 10vw"> Development Tools</h3>
              <ul>
                <li>Javascript</li>
                <li>Babel</li>
                <li>Webpack</li>
              </ul>
              <v-btn tile dark class="mt-8" variant="outlined" size="large" style="margin-left:10vw" @click="openNewTab('https://github.com/ThomasChen0717/deadCodeRemover')">View Project </v-btn>
            </v-col>
            <v-col :cols="isSmallScreen ? 12 : 7">
              <div style="position: relative; margin-bottom: 10vh;" class="mt-16">
                <v-img src="../assets/icon-48.png" class="project-image" ></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class = "project5">
          <v-row>
            <v-col :cols="isSmallScreen ? 12 : 5">
              <h1 style="font-size:48px; margin-left: 10vw; margin-top: 5vh">Isotopic Curve Visualizer</h1>
              <p style="margin-left: 10vw"> A program that visualizes the isotopic distribution of a given 2D polynomial using our split method. </p> <br>
              <h3 style="margin-left: 10vw"> Development Tools</h3>
              <ul>
                <li>Julia</li>
                <li>Interval Arithmetic</li>
              </ul>
            </v-col>
            <v-col :cols="isSmallScreen ? 12 : 7">
              <div style="position: relative; margin-bottom: 10vh;" class="mt-16">
                <v-img src="../assets/iso_curve.png" class="project-image" ></v-img>
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
                      label = "Email Address" 
                      persistent-hint variant="outlined"
                      ref="EmailAddress"
                      v-model="contactForm.EmailAddress"
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
      EmailAddress: '',
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
    async submitForm(){
      this.loading = true;
      try{
        const response = await fetch('https://my-website-mailbox.vercel.app/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.contactForm),
        });
        if(response.ok){
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message');
        }
      } catch(error) {
        console.error('Error: ', error);
        alert('An error occurred while sending the message.');
      } finally {
        this.loading = false;
      }
    }
  }
})
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
.text-center {
  text-align: center;
}

.text-sm-right {
  text-align: right;
}

.align-sm-end {
  align-items: flex-end;
}

.small-text {
  font-size: 2rem;
}
.small-name {
  font-size: 4rem;
}
.small-btn {
  font-size: 1rem;
}

.intro{
  position: absolute; 
  text-align: right;
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

.project1, .project3{
  background-color:azure
}

.project2, .project4{
  background-color:rgb(249, 199, 142)
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

  .project-image {
    width:80%;
    aspect-ratio:1;
    object-fit: cover;
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
      text-align: right !important;
    }
    .head .v-col {
      justify-content: flex-start !important;
    }
    .small-text {
      font-size: 1rem;
    }
    .small-name {
      font-size: 2rem;
    }
    .small-btn {
      font-size: 0.8rem;
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
