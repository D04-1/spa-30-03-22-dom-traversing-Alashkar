/*
 *
 *
 *
 *
 */

// header auswählen (der erste h1 enthält)=> querySelector
// Aufgabe 1:

const erstesH1Element = document.querySelector("h1");
const headerInDerNaeheElement = erstesH1Element.closest("header");
headerInDerNaeheElement.style.border = "5px solid grey";
//console.log(erstesH1Element, headerInDerNaeheElement);

//Aufgabe 2:
const alleH1PackageTitles = document.querySelectorAll(
  "section.info section.info-package .package-title"
);

alleH1PackageTitles.forEach((element) => {
  const img = element.previousElementSibling;
  img.style.border = "2px solid black";
});
//console.log(alleH1PackageTitles);

// Aufgabe 3
const labelElements = document.querySelectorAll("label");
// wir brauchen alle labels zuerst:

labelElements.forEach((element) => {
  if (element.className.indexOf("mild") !== -1) {
    element.style.borderBottom = "2px solid yellow";
  } else if (element.className.indexOf("intense") !== -1) {
    element.style.borderBottom = "2px solid orange";
  } else {
    element.style.borderBottom = "2px solid red";
  }
});

// Aufgabe 4:

const navLinks = document.querySelectorAll(".nav-list li");

const siteMapList = document.querySelector(".site-map");

navLinks.forEach((element) => {
  siteMapList.append(element);
});
