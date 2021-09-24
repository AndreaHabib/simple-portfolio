const init_contact = () => {
  const contact = document.getElementById("contact");
  const container = contact.appendChild(document.createElement("div"));
  container.setAttribute("id", "container");
  const form = container.appendChild(document.createElement("form"));
  form.setAttribute("method", "GET");
  form.setAttribute("id", "form");

  const header = form.appendChild(document.createElement("h2"));
  header.innerHTML = "Get In Touch!";
  header.style.textAlign = "center";

  const first_nameInput = form.appendChild(document.createElement("input"));
  first_nameInput.setAttribute("tabindex", "1");
  first_nameInput.setAttribute("required", "true");
  first_nameInput.setAttribute("placeholder", "First Name");
  first_nameInput.setAttribute("type", "text");
  first_nameInput.setAttribute("id", "first-name");
  first_nameInput.setAttribute("name", "first-name");

  const last_nameInput = form.appendChild(document.createElement("input"));
  last_nameInput.setAttribute("tabindex", "2");
  last_nameInput.setAttribute("required", "true");
  last_nameInput.setAttribute("placeholder", "Last Name");
  last_nameInput.setAttribute("type", "text");
  last_nameInput.setAttribute("id", "last-name");
  last_nameInput.setAttribute("name", "last-name");

  const emailInput = form.appendChild(document.createElement("input"));
  emailInput.setAttribute("tabindex", "3");
  emailInput.setAttribute("required", "true");
  emailInput.setAttribute("placeholder", "Email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");

  const linkedinInput = form.appendChild(document.createElement("input"));
  linkedinInput.setAttribute("tabindex", "4");
  linkedinInput.setAttribute("required", "true");
  linkedinInput.setAttribute(
    "placeholder",
    "Let's connect! Add your linkedin profile link here!"
  );
  linkedinInput.setAttribute("type", "text");
  linkedinInput.setAttribute("id", "linkedin");
  linkedinInput.setAttribute("name", "linkedin");

  const messageInput = form.appendChild(document.createElement("textarea"));
  messageInput.setAttribute("tabindex", "5");
  messageInput.setAttribute("rows", "4");
  messageInput.setAttribute("required", "true");
  messageInput.setAttribute("id", "message");
  messageInput.setAttribute("name", "message");
  messageInput.innerHTML = "Message";

  const submit = form.appendChild(document.createElement("input"));
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.setAttribute("value", "Submit");
};

init_contact();
