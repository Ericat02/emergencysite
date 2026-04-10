const outputFirst = document.querySelector("#first_output");
const outputLast = document.querySelector("#last_output");
const outputEmail = document.querySelector("#email_output");
const outputTerms = document.querySelector("#terms_output");

function handleSubmit(event) {
  event.preventDefault();
  // 1. saml formularens værdier i FormData
  const formData = new FormData(form);
  // 2. vis værdierne i de rigtige output-felter
  outputFirst.textContent = formData.get("first_name");
  outputLast.textContent = formData.get("last_name");
  outputEmail.textContent = formData.get("email");
  outputTerms.textContent = formData.get("accept_terms");
}

form.addEventListener("submit", handleSubmit);
