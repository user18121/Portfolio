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
    case 'bio':
      content = `
        <section id="bio">
          <h1>აღწერა</h1>
          <p>გამარჯობა! მე ვარ მონდომებული და მრავალმხრივი დეველოპერი, რომელსაც აქვს ძლიერი ცოდნა როგორც Frontend-ში, ასევე Backend-ში. მე ვქმნი გამართულ, ეფექტურ და მომხმარებლისთვის მოსახერხებელ აპლიკაციებს, ვიყენებ ტექნოლოგიებს, როგორიცაა C++, Java, Kotlin, C# და MongoDB.

ასევე მაქვს კარგი გამოცდილება Git-თან მუშაობაში, რაც უზრუნველყოფს პროექტების ეფექტიან მართვას და თანამშრომლობის სიმარტივეს. ჩემი მიზანია ტექნიკური უნარებისა და კომპლექსური პრობლემების გადაჭრა, მნიშვნელოვანი და ღირებული პროექტების შექმნით.
ამ ეტაპზე ვეძებ პირველ შესაძლებლობას IT ინდუსტრიაში, თუმცა დრო არ დავკარგე და ვმუშაობდი პირად პროექტებზე, ვსწავლობდი და ვვითარდებოდი უახლესი ტექნოლოგიური ტენდენციების გათვალისწინებით.
თუ გჭირდებათ მოტივირებული და მონდომებული დეველოპერი, რომელიც მზად არის სწავლასა და ზრდისთვის, დავუკავშირდეთ!
          </p>
          <img src="profile.jpg" alt="პროფილის სურათი" />
        </section>
      `;
      break;
    case 'projects':
      content = `
        <section id="projects">
          <h1>პროექტები</h1>
          <div id="carousel">
            <a href="https://github.com/user18121/Binary-Search-Tree-webiste.git" target="_blank">
            <img src="project1.jpg" alt="ბინარული ძებნის ხე" class="project-img" />
            </a>
            <a href="https://github.com/user18121/BSTs-and-Sorting-algoriThms-.git" target="_blank">
            <img src="project2.png" alt="მონაცემთა სტრუქტურები და ალგორითმები" class="project-img" />
            </a>
            <a href="https://github.com/user18121/Weather-App.git" target="_blank">
              <img src="project3.png" alt="მონაცემთა სტრუქტურები და ალგორითმები" class="project-img" />
              </a >
              <a href="https://github.com/user18121/Recipe-app.git" target="_blank">
              <img src="project4.png" alt="რეცეპტების აპლიკაცია" class="project-img" />
              </a >
               <a href="https://github.com/user18121/delete-temp-.git" target="_blank">
              <img src="project5.png" alt="bash ის პროექტი" class="project-img" />
              </a >
          </div>
        </section>
      `;
      break;
    case 'skills':
      content = `
        <section id="skills">
          <h1>უნარები</h1>
          <p>აქ არის რამდენიმე პროგრამირების ენა, რომელშიც ვმუშაობ:</p>
          <div class="skills-list">
            <div class="skill">
              <h3>C++</h3>
              <p>გადაჭარბებული დონე C++-ში სისტემის დონეზე და შესრულების კრიტიკული აპლიკაციებისათვის.</p>
              <div class="progress-bar">
                <span style="width: 90%"></span>
              </div>
            </div>
            <div class="skill">
              <h3>C#</h3>
              <p>გამოცდილება ობიექტებზე ორიენტირებული პროგრამირებით C#-ში, .NET ფრეიმვორკებთან და Unity-სთან მუშაობით.</p>
              <div class="progress-bar">
                <span style="width: 80%"></span>
              </div>
            </div>
            <div class="skill">
              <h3>Java</h3>
              <p>გამოცდილება Java-ში პლატფორმის დანიშნულების აპლიკაციების შექმნაში, Spring ფრეიმვორკთან მუშაობით.</p>
              <div class="progress-bar">
                <span style="width: 75%"></span>
              </div>
            </div>
            <div class="skill">
              <h3>JavaScript</h3>
              <p>მკაფიო გაგება JavaScript-ში როგორც ფრონტ-ენდის ასევე ბექ-ენდის განვითარებისთვის (Node.js, React და სხვ.).</p>
              <div class="progress-bar">
                <span style="width: 70%"></span>
              </div>
            </div>
            <div class="skill">
              <h3>Bash</h3>
              <p>გამოცდილება Bash სკრიპტებში ავტომატიზაციის, სერვერის მართვისა და სისტემის ადმინისტრაციის დავალებებში.</p>
              <div class="progress-bar">
                <span style="width: 85%"></span>
              </div>
            </div>
            <div class="skill">
              <h3>MySQL</h3>
              <p>მხოლოდ MySQL-ისა და ურთიერთკავშირული ბაზების დიზაინით და SQL კითხვებით.</p>
              <div class="progress-bar">
                <span style="width: 80%"></span>
              </div>
            </div>
            <div class="skill">
              <h3>Kotlin</h3>
              <p>გამოცდილება Kotlin-თან Android აპლიკაციების შექმნისა და JVM-პლატფორმის აპლიკაციებში.</p>
              <div class="progress-bar">
                <span style="width: 60%"></span>
              </div>
            </div>
          </div>
        </section>
      `;
      break;
    case 'contact':
      content = `
        <section id="contact">
          <h1>კონტაქტი</h1>
          <p>ელ. ფოსტა: sabasajaia42@gmail.com</p>
          <p>პირადი ელ. ფოსტა: sabasajaia42@proton.me</p>
          <p>ტელეფონი: (+995)<img src="flag.png" class="flag" /> 591-93-54-42 </p>
        </section>
      `;
      break;
    case 'education':
      content = `
        <section id="education">
          <h1>განათლება</h1>
          <div class="education-tab">
            <h3>დასრულებული კურსები</h3>
            <ul>
                <li>პროგრამირების შესავალი - FreeCodeCamp (2023)</li>
                <li>მაღალი დონის javascript - Udemy (2024)</li>
                 <li>Responsive Web Design - FreecodeCamp (2024)</li>
                <li>მონაცემთა სტრუქტურები და ალგორითმები  - freecodecamp (2024)</li>
                <li>მონაცემთა ვიზუალიზაცია - freecodecamp (2024)</li>
                <li>მაღალი დონის ალგებრა python ით - freecodecamp (2024)</l
            </ul>
          </div>
          <div class="education-tab">
            <h3>მიმდინარე კურსები</h3>
            <ul>
                <li>ვებ-დეველოპერების ბუტკამპი - Coursera (2024)</li>
                <li>მონაცემთა სტრუქტურები და ალგორითმები - EdX (2024)</li>
                <li>თბილისის სახელმწიფო უნივერსიტეტი - კომპიუტერული მეცნიერებები (2023-2027)</li>
            </ul>
          </div>
        </section>
      `;
      break;
    default:
      content = `<section><h1>404 ვერ მოიძებნა</h1></section>`;
      break;
  }

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
