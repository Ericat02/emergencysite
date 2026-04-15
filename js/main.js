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
    "Her er en kort gennemgang af hvordan du udover korekt hjerte-lunge-redning ";
  document.querySelector("#efficiency").innerHTML =
    "<h3> 1 Step</h3> <p>Tjek om personen er ved bevisthed, det gøt du ved at tale og rusk i personen</p> <h3>2 Step</h3> <p>Er der frier luftveje?<br>Er der en normal vejrtrækning. Lig personen i afløst sideleje hvis nødvenligt </P> <h3>Step 3</h3> <p>hvis der ikke er normal vejrtræning, ring 112 hurtigts muligt.</p><h3>Step4</h3><p>På begynd hjertemassage ved skiftevis at lave 30 tryk og 2 indblæsninger. Fortsæt sådan til der kommer tegn på bedring hos personen, eller til den professionelle hjælp dukker op </p><h3>Step 5</h3><p>Kommer personen kommer ved bevidsthed, ligges personen i stabil sideleje.</p>";
  document.querySelector("#requirement").innerHTML = "";
}

function infoKasse() {
  console.log("InfoKasse");
  document.querySelector(".info-text >h2").textContent = "FØRSTHJÆLPSKASSE";
  document.querySelector(".placeholder").textContent =
    "Køber du en førstehjælpskasse fra Falck, får du en førstehjælpskasse som indeholder det mest vigtig og nødvendige";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Førstehjælpskassens indhold </h3><ul><li>Kompresforbindinger</li><li>Gazebind</li><li> plaster</li><li> Kølende gelé samt kølepose (gel til brandsår)</li><li> Støttebind (elastisk forbinding)</li><li> Servietter til sårrens</li><li>Saks, pincet og rulletape</li></ul>";
  document.querySelector("#requirement").innerHTML =
    "Når du køber din førstehjælps kasse hos falck, får du adgang til fri genopfyldning hvilket vil sige, at når du løber tør, skal du blot går ind på falcks hjemmeside under genopfyld her her udfylder du dit kundenummer, og vælger hvad du er løbet tør for. Du vil dernæst få tilsendt dit manglene udstyr.";
}

function infoHjertestarter() {
  console.log("InfoHjertestarter");
  document.querySelector(".info-text >h2").textContent = "HJERTE STARTER";
  document.querySelector(".placeholder").textContent =
    "En hjerte starter er et transpotabelt redskab, som bruges ved hjertestop. Hjertestarteren hjælper med at genskabe hjertets normale rytme, ved at afgive elektriske stød";
  document.querySelector("#efficiency").innerHTML = "";
  document.querySelector("#requirement").innerHTML =
    "Se videoen her som viser step by step hvordan du bruger en hjerte starter";
}
