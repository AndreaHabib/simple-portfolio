const init_about = () => {
  const about = document.getElementById("about");
  const skills = about.appendChild(document.createElement("div"));
  const experience = about.appendChild(document.createElement("div"));
  const hobbies = about.appendChild(document.createElement("div"));

  skills.setAttribute("id", "skills");
  let header = skills.appendChild(document.createElement("h2"));
  header.innerHTML = "Skills";
  header.style.textAlign = "center";

  const react = document.createElement("img");
  const html = document.createElement("img");
  const css = document.createElement("img");
  const js = document.createElement("img");
  const php = document.createElement("img");
  const python = document.createElement("img");
  Object.assign(react, {
    src: "https://img.icons8.com/carbon-copy/100/000000/react.png",
    alt: "React.js",
  });

  Object.assign(html, {
    src: "https://img.icons8.com/ios/100/000000/html-5--v2.png",
    alt: "HTML5",
  });
  Object.assign(css, {
    src: "https://img.icons8.com/ios/100/000000/css3.png",
    alt: "CSS",
  });
  Object.assign(js, {
    src: "https://img.icons8.com/ios/100/000000/javascript--v1.png",
    alt: "Javascript",
  });
  Object.assign(php, {
    src: "https://img.icons8.com/ios/100/000000/php.png",
    alt: "PHP",
  });

  Object.assign(python, {
    src: "https://img.icons8.com/ios/100/000000/python--v1.png",
    alt: "python",
  });

  skills.appendChild(react);
  skills.appendChild(html);
  skills.appendChild(css);
  skills.appendChild(js);
  skills.appendChild(php);
  skills.appendChild(python);

  experience.setAttribute("id", "experience");
  header = experience.appendChild(document.createElement("h2"));
  header.innerHTML = "Experiences";
  header.style.textAlign = "center";
  const text_exp = experience.appendChild(document.createElement("h3"));
  text_exp.innerHTML =
    "Bridging Tech <span>&#183;</span> Develop for Good <span>&#183;</span> Major League Hacking <span>&#183;</span> NYC Tech Talent Pipeline";
  text_exp.style.textAlign = "center";

  hobbies.setAttribute("id", "hobbies");
  header = hobbies.appendChild(document.createElement("h2"));
  header.innerHTML = "Hobbies";
  header.style.textAlign = "center";
  const text_hob = hobbies.appendChild(document.createElement("h3"));
  text_hob.innerHTML =
    "Playing video games <span>&#183;</span> Developing Websites <span>&#183;</span> Exercising <span>&#183;</span> Watching Youtube";
};

init_about();
