document.querySelector("#hjerte").addEventListener("click", infoHjerte);
document
  .querySelector("#førstehjælpskasse")
  .addEventListener("click", infoKasse);
document
  .querySelector("#hjertestarter")
  .addEventListener("click", infoHjertestarter);

function infoHjerte() {
  console.log("infoHjerte");
  document.querySelector(".info-text > h2").textContent = "HJERTE MASSAGE";
  document.querySelector(".placeholder").textContent =
    "Sådan udover du korekt hjertemassage";
  document.querySelector("#efficiency").innerHTML =
    "<h3> 1 Step</h3> <p>Tjek om personen er ved bevisthed, det gøt du ved at tale og rusk i personen</p> <h3>2 Step</h3> <p>Er der frier luftveje?</p><p>Er der en normal vejrtrækning. Lig personen i afløst sideleje hvis nødvenligt </P>";
}

function infoKasse() {
  console.log("InfoKasse");
  document.querySelector(".info-text >h2").textContent = "FØRSTHJÆLPSKASSE";
  document.querySelector(".placeholder").textContent =
    "Førstehjælpskassens indhold";
}

function infoHjertestarter() {
  console.log("InfoHjertestarter");
  document.querySelector(".info-text >h2").textContent = "HJERTE STARTER";
  document.querySelector(".placeholder").textContent =
    "Sådan bruge du hjerte starteren koretk";
}
