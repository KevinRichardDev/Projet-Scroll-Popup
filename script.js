// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

window.addEventListener("scroll", () => {
  if(window.scrollY > 0){
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
  if(window.scrollY > 280){
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transformTranslateX = "200px";
  }
})