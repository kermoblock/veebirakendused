function nimiLugemine(){
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
    //innerHTML- dünaamiliselt genereerib teksti html-ina
        vastus.innerHTML="Tere hommikust, " + nimi.value;
        vastus.style.color="red";

        return nimi.value;
}

function suguValik(){
    let vastus2=document.getElementById("vastus2");
    let naine=document.getElementById("naine");
    let mees=document.getElementById("mees");
    let muu=document.getElementById("muu");

    //radio valikud //

    let sugu="";
    if(naine.checked){
         sugu=naine.value;
        }
        else if(mees.checked){
             sugu=mees.value;
        }
        else if(muu.checked){
             sugu=muu.value;
        }
        else{
             sugu="palun vali sugu";
        }
        vastus2.innerHTML="Valitud sugu on " +sugu;
        vastus2.style.color="green";

        return sugu;
}

//checkbox valik
function sportValik(){
    let vastus3=document.getElementById("vastus3");
    let jooksmine=document.getElementById("jooksmine");
    let ujumine=document.getElementById("ujumine");
    let uisutamine=document.getElementById("uisutamine");
    let suusatamine=document.getElementById("suusatamine");
    let jalgpall=document.getElementById("jalgpall");

    let sport=""
    if(jooksmine.checked){
        sport +=jooksmine.value + ", ";
    }
    if (ujumine.checked){
        sport +=ujumine.value + ", ";
    }
    if (uisutamine.checked){
        sport +=uisutamine.value + ", ";
    }
    if (suusatamine.checked){
        sport +=suusatamine.value + ", ";
    }
    if (jalgpall.checked){
        sport +=jalgpall.value + ", ";
    }
    if (sport==""){
        sport ="sa ei tee sporti"
    }
    vastus3.innerHTML=sport;
    return sport;
}

function klubiValik(){
    let vastus5=document.getElementById("vastus5");
    let klubi=document.getElementById("klubi");

    //1. rida loenids - see on 0.rida
    if(klubi.selectedIndex !== 0){
        vastus5.innerHTML="Valitud spordiklub on "+ klubi.value;
        vasstus5.style.color="red";
    }
    return klubi.value;

}

function tervitus(){
    let vastus4=document.getElementById("vastus4");
    let nimi= nimiLugemine();
    let sugu = suguValik();
    let spordiala = sportValik();
    let klubi = klubiValik();

    vastus4.innerHTML="Sisestatud nimi on "+nimi+"<br>"
        +"Valitud sugu on "+sugu+"<br>"
        +"Valitud spordialad: "+spordiala+"<br>"
        + "Valitud klub: "+klubi;
    vastus4.style.backgroundColor="yellow";
}


function puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
}

