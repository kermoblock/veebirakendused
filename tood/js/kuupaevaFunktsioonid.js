
function naitaKuupaev() {
    const now = new Date();

    const paev = now.getDate();
    const kuu = now.getMonth();
    const aasta = now.getFullYear();

    const tunnid = now.getHours();
    const minutid = now.getMinutes();

    let vastus=document.getElementById("vastus")
    vastus.innerHTML =
        "täna on " + paev +"." + kuu + "." + aasta + "<br>" +
        "Kellaaeg on " + tunnid + ":" + minutid;
}

function arvutaSunnipaev() {

    const synnipaev = new Date(2027, 2, 23); //aasta, kuu, päev

    const tana = new Date();

    const vahe =  tana.getTime() - synnipaev.getTime();
    const paevad = Math.ceil(vahe / (1000 * 60 * 60 * 24 * -1));

    let vastus2 = document.getElementById("vastus2")

    vastus2.innerHTML = "Sünnipäevani on jäänud " + paevad.toFixed() + " päeva!";

}