export const makeTheHTMLFile= (formData) => {

  const projects = JSON.parse(formData.projects)

  let startOfFile = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${formData.websiteTitle}</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <!--Top banner of the page, will stay in place as you scroll or navigate pages-->
      <header>
          <nav>
              <div class="nav_left">
                  <ul>
                      <li><p>${formData.name}</p></li>
                      <li><a href="#project-ds">Projects</a></li>
                      <li><a href="#contact">Contact Me</a></li>
                  </ul>
              </div>
          </nav>
      </header>
    <div class="main">
      <div class = "description">
        <div class="description_sub">
          <img class= "profile" src="images/${formData.profilePicturePath}"/>
        </div>
        <div class="description_sub" id ="about_me">
          <h2>
            About Me
          </h2>
          <br>
          <p>${formData.aboutMe}</p>
        </div>
      </div>
  </div>
  <div id = "project-ds">
      <h1>
        Projects
      </h1>
  </div>
  <div class="project-box">
  `;

projects.forEach((project) => {
let projectBox = `<div class ="project">
<img src="./images/${project.picturePath}" />
  <h3>
    ${project.projectName}
  </h3>
  <p>
    ${project.description}
  </p>
<div class = "projectLinks">
  <a class= "logo_link" href = "${project.liveLink}">
    <img class="logo" src="images/player.svg"/>
  </a>
  <a class= "logo_link" href = "${project.githubLink}">
    <img class="logo" src="images/github.svg"/>
  </a>
</div>
</div>
`;

startOfFile+=projectBox;
});






const endOfFile = `</div>
<footer >
<div class = "contact">
  <h1>
    Contact Me!
  </h1>
</div>
<div class = "logoBox">
  <h3 class= "logo_link">${formData.email}</h3>
  <a class= "logo_link" href = "${formData.linkedIn}">
    <img class="logo" src="images/linkedin.svg"/>
  </a>
  <a class= "logo_link" href = "${formData.github}">
    <img class="logo" src="images/github.svg"/>
  </a>
</div>
</footer>
</body>
</html> 
`;

startOfFile+=endOfFile;


return startOfFile;

};

