// JavaScript source code
"use strict";
//Les dif�rentes informations sur les personnages
let tueur = "Jason";
let Pdv = 100;
let caracteristiques = ["le radin", "nerd", "le geek", "Police"];
let personnages = [
    { name: "Keanu", caracteristiques: getRandomCaracteristiques() },
    { name: "Rayan", caracteristiques: getRandomCaracteristiques() },
    { name: "Arthur", caracteristiques: getRandomCaracteristiques() },
    { name: "Leandre", caracteristiques: getRandomCaracteristiques() },
    { name: "Christophe", caracteristiques: getRandomCaracteristiques() }
];


//Donne une caract�ristique random
function getRandomCaracteristiques() {
    const randomIndex = Math.floor(Math.random() * caracteristiques.length);
    return caracteristiques[randomIndex];
}
//donne le nom du personnages + une caract�ristiques
personnages.forEach(personnages => {
    console.log(personnages.name + " " + personnages.caracteristiques);
});
//permet de faire une action
function Action(personnages) {
    while (true) {
        const Random_Number = Math.floor(Math.random() * 3);
        switch (Random_Number) {
            case 0:
                // Cette case esquive les d�g�ts
                const Damage_chance = Math.random();
                if (Damage_chance > 0.8) {
                    Pdv -= 10;
                    console.log(personnages.name + " a attaqu�, il reste " + Pdv + " points de vie au tueur.");
                    return;
                }
                break;

            case 1:
                // Cette case tue un joueur
                const Dead_chance = Math.random();
                if (Dead_chance > 0.1) {
                    personnages.Alive = false;
                    console.log("Jason a tu� " + personnages.name + ".");
                    return;
                }
                break;

            default:
                // Cette case est pour l'esquive
                const Sacrifice_Chance = Math.random();
                if (Sacrifice_Chance > 0.5) {
                    Pdv -= 15;
                    personnages.Alive = false;
                    console.log(personnages.name + " est mort mais a attaqu� le tueur. Il lui reste " + Pdv + " points de vie au tueur.");
                    return;
                }
                break;
        }
    }
}

//affiche les actions
personnages.forEach(personnages => {
    if (personnages.Alive !== false) {
        Action(personnages);
    }
})

//Cela affiche le r�sultat du combat
if (personnages.Pdv <= 0) {
    console.log("Les personnages ont �t� vaincu par le tueur. Le tueur gagne !");
} else if (tueur.Pdv <= 0) {
    console.log("Le tueur a �t� vaincu par les personnages ! Les personnages gagne !");
} else {
    console.log("Le combat se termine en match nul. Le tueur et les personnages sont tous les deux �puis�s !");
}