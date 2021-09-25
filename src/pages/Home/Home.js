const init_home = () => {
  const home = document.getElementById("home");
  const container = home.appendChild(document.createElement("div"));
  container.setAttribute("id", "container");
  const header = container.appendChild(document.createElement("h2"));
  header.innerHTML = "Hey! I'm Andrea Habib!";
  const image = container.appendChild(document.createElement("img"));
  image.setAttribute("id", "profile__image");
  image.setAttribute("alt", "my picture");
  image.setAttribute(
    "src",
    "https://res.cloudinary.com/andreahabib/image/upload/v1629141375/236003965_6272724826086174_6549502244216007258_n_il6fe9.jpg"
  );
  const about_me = container.appendChild(document.createElement("p"));
  about_me.style.textAlign = "center";
  about_me.innerHTML =
    "<strong>GitHub Campus Expert <span>&#183;</span> President of Hack-A-Project <span>&#183;</span> Frontend Developer</strong>";
  const extend = container.appendChild(document.createElement("p"));
  extend.style.textAlign = "center";
  extend.innerHTML = "And mostly importantly, a passionate student!";
  const website = container.appendChild(document.createElement("a"));
  website.setAttribute("id", "personal__portfolio");
  website.setAttribute("href", "https://andreahabib.netlify.app/");
  website.setAttribute("rel", "noreferrer noopener");
  website.setAttribute("target", "_blank");
  website.innerHTML = "> My Personal Portfolio <";
};

init_home();
