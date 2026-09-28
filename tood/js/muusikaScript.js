function Muusikud(){
    let vastus1=document.getElementById("vastus1");
    let KanyeWest=document.getElementById("KanyeWest");
    let Diddy=document.getElementById("Diddy");
    let LaurynHill=document.getElementById("LaurynHill");
    let Creo=document.getElementById("Creo");
    let JayZ=document.getElementById("JayZ");

    let muusika=""
    if(KanyeWest.checked){
        muusika +=KanyeWest.value + ", ";
    }
    if (Diddy.checked){
        muusika +=Diddy.value + ", ";
    }
    if (LaurynHill.checked){
        muusika +=LaurynHill.value + ", ";
    }
    if (Creo.checked){
        muusika +=Creo.value + ", ";
    }
    if (JayZ.checked){
        muusika +=JayZ.value + ", ";
    }
    if (muusika==""){
        muusika ="Sa ei kuula muusikat"
    }
    vastus1.innerHTML=muusika;
    return muusika;
}

function kool(){
    let nimi=document.getElementById("nimi");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Sinu arvamus: " + nimi.value;

    return nimi.value;
}

function muusikatunnid(){
    let tund=document.getElementById("tund");
    let vastus3=document.getElementById("vastus3");

    vastus3.innerHTML="Sa kuulad päevas: " + tund.value + " tundi muusikat";

    return tund.value;
}

function raadiokuulamine(){
    let Ja=document.getElementById("Ja");
    let Ei=document.getElementById("Ei");
    let vastus4=document.getElementById("Vastus4");

    let valik="";
    if(Ja.checked){
        valik=Ja.value;
    }
    else if(Ei.checked){
        valik=Ei.value;
    }
    else{
        valik="palun tee valik";
    }
    vastus4.innerHTML="Kas sa kuulad raadiot: " +valik;

    return valik;
}