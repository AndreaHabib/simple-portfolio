const init_navbar = () => {
  let home,
    about,
    contact = false;
  const page = function () {
    if (document.getElementById("home")) {
      home = true;
    } else if (document.getElementById("about")) {
      about = true;
    } else {
      contact = true;
    }
  };
  const nav = document.getElementById("nav");
  const link_text = {
    Home: home === true ? "index.html" : "../Home/index.html",
    About: about === true ? "about.html" : "../About/about.html",
    Contact: contact === true ? "contact.html" : "../Contact/contact.html",
  };
  const ul = nav.appendChild(document.createElement("ul"));
  ul.setAttribute("id", "navbar");
  for (let i = 0; i < Object.keys(link_text).length; i++) {
    let li = ul.appendChild(document.createElement("li"));
    li.setAttribute("class", "nav__item");
    let a = li.appendChild(document.createElement("a"));
    a.innerHTML = Object.keys(link_text)[i];
    a.setAttribute("href", Object.values(link_text)[i]);
    a.setAttribute("rel", "noreferrer noopener");
    a.setAttribute("target", "_self");
  }
};

init_navbar();
