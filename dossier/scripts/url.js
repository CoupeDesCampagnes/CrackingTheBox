async function truc(key) {
    var value = document.getElementById("value");
    const feur = await fetch("https://cdc.ginfo.centrale-med.fr/api/"+key);
    const data = await feur.text();
    value.innerHTML = data;
}

document.querySelector("#button").addEventListener("click", async (event) => {
    const key = document.querySelector("#code").value;
    await truc(key);
    event.preventDefault();
})
