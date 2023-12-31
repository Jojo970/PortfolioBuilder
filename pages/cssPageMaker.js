export const cssString = `
*{
  margin: 0px;
  padding: 0px;
  font-family: monospace;
}

.main {
  display: flex;
  flex-direction: row;
  
}

body {
  background-color: black;
}

header{
  position: relative;
  top: 0px;
}

nav{
  padding: 20px 10%;
  display: flex;
  justify-content: space-between;

}

.nav_left ul{
  display: flex;
  gap: 5em;
}
.nav_left p, .nav_left a{
  color: white;
  text-decoration: none;
  font-size: 15pt;
}

.nav_left p:hover{
  cursor: pointer;
}

.profile {
  max-width: 100%;
  height: auto;
  border-radius: 10%;
}

.description{
  color: white;
  text-align: center;
  font-size: 15pt;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 100px;
  height: 100vh;
  margin-top: 10%;
}
.description_sub {
  grid-column: span 2;
}
.skills {
  grid-column: span 4;
  text-align: center;
}

#about_me {
  padding: 0 10%;
}

.project-box {
  padding: 6% 5%;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  text-align: center;
}

.project{
  grid-column: span 2;
  color: aliceblue;
}

.project p {
  margin-top: 4%;
}
.project h3 {
  margin-top: 4%;
}

.projectLinks {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .project {
    grid-column: span 4;
  }
  .description_sub {
      grid-column: span 4;
    }

    .nav_left p, .nav_left a {
      font-size: 10pt;
    }
  
  nav {
      padding: 20px 5%;
      width: 100vw;
  }

  }
.project img{
  width: 100%;
  border-radius: 10%;
}

#project-ds {
  color: white;
  text-align: center;
}

footer {
  color: white;
  display: flex;
  align-items: center;
}

.contact {
  margin: 5%;
}

.logo {
  height: 35px;
}
.logoBox {
  display: flex;
  width: 100%;
  align-items: center;
}

.logo_link {
  margin-right: 5%;
}`;

