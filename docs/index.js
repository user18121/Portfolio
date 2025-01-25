
const body = document.body;
const toggleButton = document.getElementById('toggleButton');
const mainContent = document.getElementById('main-content');


toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
});


window.onload = () => {
  body.classList.add('light');
  loadContent('bio'); 
};


function loadContent(section) {
  let content = '';

  switch (section) {
    //Bio>
    case 'bio':
      content = `
        <section id="bio">
          <h1>Bio</h1>
          <p>
          Hi there! I'm a passionate and versatile developer with a strong foundation in both frontend and backend development. I specialize in creating seamless, efficient, and user-friendly applications, leveraging a wide range of technologies including C++, Java, Kotlin, C#, and MongoDB.
I also have solid experience with Git for version control, ensuring smooth collaboration and project management. My goal is to combine technical expertise with creative problem-solving to build impactful solutions that drive results.
While I’m actively seeking my first opportunity in the industry, I’ve been honing my skills through personal projects, continuous learning, and staying up-to-date with the latest industry trends.
If you're looking for a dedicated developer with a hunger to learn, grow, and contribute to meaningful projects, let's connect!


          </p>
          <img src="profile.jpg" alt="Profile Picture" />
        </section>
      `;
      break;
    //<bio
    //Projects>
      case 'projects':
        content = `
          <section id="projects">
            <h1>Projects</h1>
            <div id="carousel">
              <a href="https://github.com/user18121/Binary-Search-Tree-webiste.git" target="_blank">
            <img src="project1.jpg" alt="Binary Search Tree" class="project-img" />
            </a>
            <a href="https://github.com/user18121/BSTs-and-Sorting-algoriThms-.git" target="_blank">
            <img src="project2.png" alt="data structures and algorithms" class="project-img" />
            </a>
            <a href="https://github.com/user18121/Weather-App.git" target="_blank">
              <img src="project3.png" alt="Data Structures and algorithms" class="project-img" />
              </a >
              <a href="https://github.com/user18121/Recipe-app.git" target="_blank">
              <img src="project4.png" alt="Recipe app" class="project-img" />
              </a >
               <a href="https://github.com/user18121/delete-temp-.git" target="_blank">
              <img src="project5.png" alt="Bash project" class="project-img" />
              </a >

            </div>
          </section>
        `;
        break;
      //<projects
      //skills>
      case 'skills':
        content = `
          <section id="skills">
            <h1>Skills</h1>
            <p>Here are some of the programming languages I specialize in:</p>
            <div class="skills-list">
              <div class="skill">
                <h3>C++</h3>
                <p>Advanced proficiency in C++ for system-level and performance-critical applications.</p>
                <div class="progress-bar">
                  <span style="width: 90%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>C#</h3>
                <p>Experienced with object-oriented programming in C#, including .NET frameworks and game development with Unity.</p>
                <div class="progress-bar">
                  <span style="width: 80%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>Java</h3>
                <p>Proficient in Java for building cross-platform applications, with knowledge of popular frameworks like Spring.</p>
                <div class="progress-bar">
                  <span style="width: 75%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>JavaScript</h3>
                <p>Strong understanding of JavaScript for front-end and back-end development (Node.js, React, etc.).</p>
                <div class="progress-bar">
                  <span style="width: 70%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>Bash</h3>
                <p>Experienced with Bash scripting for automation, server management, and system administration tasks.</p>
                <div class="progress-bar">
                  <span style="width: 85%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>MySQL</h3>
                <p>Knowledgeable in database design, SQL queries, and optimization with MySQL and relational databases.</p>
                <div class="progress-bar">
                  <span style="width: 80%"></span>
                </div>
              </div>
              <div class="skill">
                <h3>Kotlin</h3>
                <p>Familiar with Kotlin, for Android development and other JVM-based applications.</p>
                <div class="progress-bar">
                  <span style="width: 60%"></span>
                </div>
              </div>
            </div>
          </section>
        `;
        break;
      //<skills

      //contact>
    case 'contact':
      content = `
        <section id="contact">
          <h1>Contact</h1>
          <p>Email: sabasajaia42@gmail.com</p>
          <p>contact Email: sabasajaia42@proton.me</p>
          <p>Phone: (+995)<img src="flag.png" class="flag" /> 591-93-54-42 </p>
        </section>
      `;
      break;
    case 'education':
      content = `
        <section id="education">
          <h1>Education</h1>
          <div class="education-tab">
            <h3>Completed Courses</h3>
            <ul>
                <li>Introduction to Programming - FreeCodeCamp (2023)</li>
                <li>Advanced JavaScript - Udemy (2024)</li>
                <li>Responsive Web Design - FreecodeCamp (2024)</li>
                <li>JavaScript Algorithms and Data Structures  - freecodecamp (2024)</li>
                <li>data visualisation - freecodecamp (2024)</li>
                <li>coding algebra with python - freecodecamp (2024)</li>
                
                <!-- Add your completed courses here -->
            </ul>
          </div>
          <div class="education-tab">
            <h3>Ongoing Courses</h3>
            <ul>
                <li>Web Development Bootcamp - Coursera (2024)</li>
                <li>Data Structures & Algorithms - EdX (2024)</li>
                <li>Tbilisi state university - computer science(2023-2027)</li>
                <!-- Add your ongoing courses here -->
            </ul>
          </div>
        </section>
      `;
      break;
    default:
      content = `<section><h1>404 Not Found</h1></section>`;
      break;
  }
//<contact
  
  mainContent.innerHTML = content;
}


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = e.target.dataset.section;
    loadContent(section); 
  });
});
