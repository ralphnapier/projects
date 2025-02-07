/* THIS IS THE JS TO ADD HTML INTO THE CURRENT HTML */
const htmlToAdd = `    

    <header id="cs-navigation">
        <div class="cs-container">
          <!--Nav Logo-->
          <a href="index.html" class="cs-logo" aria-label="back to home">
            <img
              src="ralphnapier.png"
              alt="logo"
              width="210"
              height="29"
              aria-hidden="true"
              decoding="async"
            />
          </a>
          <!--Navigation List-->
          <nav class="cs-nav" role="navigation">
            <!--Mobile Nav Toggle-->
            <button class="cs-toggle" aria-label="mobile menu toggle">
              
            </button>

          <div class="cs-ul-wrapper">
            <ul id="cs-expanded" class="cs-ul" aria-expanded="false">
              <li class="cs-li">
                <a href="index.html" class="cs-li-link" <!--cs-active--> Home </a>
              </li>
              <li class="cs-li">
                <a href="myHobbies.html" class="cs-li-link"> My Hobbies </a>
              </li>
              <li class="cs-li">
                <a href="professionalSkills.html" class="cs-li-link"> Professional Skills </a>
              </li>
              <li class="cs-li">
                <a href="workHistory.html" class="cs-li-link"> Work History </a>
              </li>
              <li class="cs-li">
                <a href="2025goals.html" class="cs-li-link"> 2025 Goals </a>
              </li>
            </ul>
          </div>
          </nav>
          <a href="contactMePage.html" class="cs-button-solid cs-nav-button">Contact Me</a>
        </div>
      </header>`;

      function addCss(fileName) {

        var head = document.head;
        var link = document.createElement("link");
      
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = fileName;
      
        head.appendChild(link);
      }

document.addEventListener("DOMContentLoaded", (event) => {
    const navigationBox = document.querySelector('#navigation');
    navigationBox.innerHTML += htmlToAdd;
    addCss('navMenu.css');
});