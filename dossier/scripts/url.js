function nombre(chaine) {
    var somme = 0
    for (var i=0; i < chaine.length; i++) {
        somme += chaine.charCodeAt(i)
        somme *= 13
        somme = somme%1000000000
    }
    return somme
}

function somme(nombre) {
    var somme = 0
    chaine = String(nombre)
    for (var i=0; i < chaine.length ; i++) {
        somme += parseInt(chaine.charAt(i))
    }
    return somme
}

function chiffreAssocie(chaine) {
    valeur = nombre(chaine)

    while (valeur > 9) {
        valeur = somme(valeur)
    }
    return valeur
}

function color_mixer(r,g,b){
    document.querySelector("#container").style.backgroundColor="rgba("+r+","+g+","+b+",0.73)";
}

function getUrl(chaine){
    const hash=nombre(chaine)
    if (hash===39962494){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/salle/couloir.html"
    }
    else if (hash===44285436){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/enigma/notch.html"
    }
    else if (hash===20089550){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/final/transformateur.html"
    }
    else if (hash===96825789){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/final/extincteur.html"
    }
    else if (hash===28006732){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/final/grue.html"
    }
    else if (hash===27272284){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/final/egout.html"
    }
    else {
        return hash
    }
}

document.querySelector("#button").addEventListener("click", (event) => {
    chaine = document.querySelector("#code").value;
    texte = getUrl(chaine);
    document.querySelector("#value").textContent = texte;
    event.preventDefault();
})
