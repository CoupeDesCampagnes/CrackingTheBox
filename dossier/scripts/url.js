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
    if (hash===474269515){
        return "https://docs.google.com/spreadsheets/d/1VkdV95-"+chaine+"-gPU7VOcmJGITTzZ0tGexYBY/edit?usp=sharing"
    }
    else if (hash===501820114){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/salle/couloir.html"
    }
    else if(hash===980574260){
        return "http://coupedescampagnes.github.io/CrackingTheBox/dossier/salle/"+chaine+".html"
    }
    else if(hash===288073393){
        color_mixer(225,80,42)
        return "Easter Egg"
    }else if(hash===517202362){
        color_mixer(168,233,255)
        return "Easter Egg"
    }else if(hash===361866239){
        color_mixer(134,1,17)
        return "Easter Egg"
    }else if(hash===41587392){
        color_mixer(255,215,0)
        return "Easter Egg"
    }else if(hash===236477960){
        color_mixer(219,0,132)
        return "Easter Egg"
    }else if(hash===689272931){
        color_mixer(239,239,239)
        return "Easter Egg"
    }else if(hash===122118945){
        color_mixer(255,0,0)
        return "Easter Egg"
    }else if(hash===1548920){
        color_mixer(240,219,255)
        return "Easter Egg"
    }else if(hash===989825398){
        color_mixer(176,38,255)
        return "Easter Egg"
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