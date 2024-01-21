// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

// window.addEventListener("scroll", () => {
//   if(window.scrollY > 0){
//     navbar.style.height = "30px";
//   } else {
//     navbar.style.height = "90px";
//   }
//   if(window.scrollY > 250){
//     imgImprovise.style.opacity = 1;
//     imgImprovise.style.transform = "translate(-50px)";
//   } else {
//     imgImprovise.style.opacity = 0;
//     imgImprovise.style.transformTranslateX = "-200px";
//   }
//   if(window.scrollY > 900) {
//     popup.style.opacity = 1;
//     popup.style.transform = "translate(0px)";
//   } else {
//     popup.style.opacity = 0;
//     popup.style.transform = "translate(400px)";
//   }
// })

// popup.addEventListener("click", () => {
//   popup.remove()
// })


// CORRECTION

window.addEventListener("scroll", () => {
  // Navbar effect
  if(window.scrollY > 50){
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }
})