const init_footer = () => {
  const footer = document.getElementById("footer");
  const copyright = footer.appendChild(document.createElement("p"));
  copyright.innerHTML = "&copy Copyright 2021 Andrea Habib";
};

init_footer();
