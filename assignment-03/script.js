// [1] get english text
let english_text = document.querySelector("#english_content");
// get portuguese text
let portuguese_text = document.querySelector("#portuguese_content");
// get english button
let en_btn = document.querySelector(".en");
// get portuguese button
let pt_btn = document.querySelector(".pt");

function translateToEnglish() {
  // grab the title
  let h1 = document.querySelector("h1");
  // translate the title
  h1.textContent = "houses or museums?";

  // hide the portuguese text, show english text
  portuguese_text.style.display = "none";
  english_text.style.display = "flex";
}

function translateToPortuguese() {
  // grab the title
  let h1 = document.querySelector("h1");
  // translate the title
  h1.textContent = "casas ou museus?";

  english_text.style.display = "flex";
  portuguese_text.style.display = "flex";
}

// [2] add event listener
en_btn.addEventListener("click", translateToEnglish);
pt_btn.addEventListener("click", translateToPortuguese);
