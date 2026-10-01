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
    let vastus4=document.getElementById("vastus4");

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
    vastus4.innerHTML="Kas sa kuulad raadiot: " + valik;

    return valik.value;
}

function raadioJaam(){
    let vastus5=document.getElementById("vastus5");
    let radiojaam=document.getElementById("radiojaam");

    vastus5.innerHTML="Nimetatud raadiojaamad: " + radiojaam.value;

    return radiojaam.value;
}

function muusikastiilid(){

    let vastus6=document.getElementById("vastus6");
    let pop=document.getElementById("pop");
    let rock=document.getElementById("rock");
    let rapp=document.getElementById("rapp")
    let klassikaline=document.getElementById("klassikaline");
    let jazz=document.getElementById("jazz");
    let elektrooniline=document.getElementById("elektrooniline");

    let stiil=""
    if(pop.checked){
        stiil+=pop.value + ", ";
    }
    if(rock.checked){
        stiil+=rock.value + ", ";
    }
    if(rapp.checked){
        stiil+=rapp.value + ", ";
    }
    if(klassikaline.checked){
        stiil+=klassikaline.value + ", ";
    }
    if(jazz.checked){
        stiil+=jazz.value + ", ";
    }
    if(elektrooniline.checked){
        stiil+=elektrooniline.value + ", ";
    }
    if(stiil==""){
        stiil = "vali mingi stiil";
    }
    vastus6.innerHTML=stiil;
    return stiil;
}

function tervitus(){
    let vastus7=document.getElementById("vastus7");
    let muusika = Muusikud();
    let nimi = kool();
    let tund = muusikatunnid();
    let valik = raadiokuulamine();
    let raadiojaam = raadiokuulamine();
    let stiil = muusikastiilid();



    vastus7.innerHTML="Valitud muusikud on "+muusika+"<br>"
        +"Arvamus muusika kuulamisest koolis: "+nimi+"<br>"
        +"Kuulad päevas nii palju tunde muusikat: "+tund+"<br>"
        +"Kas sa kuulad raadiot: "+valik+"<br>"
        +"Nimetatud raadiojaamad: "+raadiojaam+"<br>"
        +"Meeldivad muusika stiilid: "+stiil;
    vastus7.style.backgroundColor="yellow";
}


function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
}