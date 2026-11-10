//sirge joon
function sirgeJoon() {
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle = "red";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }
}

function puhasta() {
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
    t.clearRect(0,0,300,400);
    }
}

//kolmnurk
function kolmnurk() {
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //kolmnurk
        t.beginPath();
        t.strokeStyle = "red";
        t.fillStyle = "green"; //täidab seest tausta
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50,50); //lõpppunkt
        t.stroke();
        t.fill(); //on vaja kui fill on ka
    }
}

function ristkyylik() {
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "red";
        t.fillRect(100,50,laius.value,korgus.value); //alguspunkt x, y, laius, kõrgus
    }
}

function ring(){
    const tahvel=document.getElementById("tahvel");
    const raadius=document.getElementById("raadius");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = varv.value;
        t.arc(100,50,raadius.value,0, 2*Math.PI, true); //alguspunkt x, y, raadius, 2*180 kraadi
        t.fill();
    }
}

function silm1() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 1;
        t.arc(100, 175, 20, 0, 2 * Math.PI);
        t.stroke();
    }
}

function silm2() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 1;
        t.arc(200, 175, 30, 0, 2 * Math.PI);
        t.stroke();
    }
}

function nina() {
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "red";
        t.fillRect(135,200,20,50); //alguspunkt x, y, laius, kõrgus
    }
}

function pea() {
    const tahvel = document.getElementById("tahvel");

    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 1;
        t.arc(150, 200, 115, 0, 2 * Math.PI);
        t.stroke();
    }
}

function suu() {
    const tahvel=document.getElementById("tahvel");

    if (tahvel.getContext){
        let t=tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "red";
        t.lineWidth = 2;
        t.moveTo(110,275); //alguspunkt
        t.lineTo(180,275); //lõpppunkt
        t.stroke();

    }
}

function korv1() {

    const tahvel=document.getElementById("tahvel");

    if (tahvel.getContext){
        let t=tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "brown";
        t.lineWidth = 2;
        t.moveTo(10,150);
        t.lineTo(35,150);
        t.lineTo(35,250);
        t.lineTo(10,250);
        t.lineTo(10,150);
        t.stroke();
    }
}

function korv2() {

    const tahvel=document.getElementById("tahvel");

    if (tahvel.getContext){
        let t=tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "brown";
        t.lineWidth = 2;
        t.moveTo(265,150);
        t.lineTo(290,150);
        t.lineTo(290,250);
        t.lineTo(265,250);
        t.lineTo(265,150);
        t.stroke();
    }
}

function silmamuna1() {
    const tahvel=document.getElementById("tahvel");
    if (tahvel.getContext){
        let t=tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 1;
        t.fillStyle = "black";
        t.arc(100, 175, 10, 0, 2 * Math.PI);
        t.stroke();
        t.fill();
    }
}

function silmamuna2() {
    const tahvel=document.getElementById("tahvel");
    if (tahvel.getContext){
        let t=tahvel.getContext("2d");

        t.beginPath();
        t.strokeStyle = "black";
        t.lineWidth = 1;
        t.fillStyle = "black";
        t.arc(200, 175, 15, 0, 2 * Math.PI);
        t.stroke();
        t.fill();
    }
}

function pilt() {
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        const fail=new Image();
        fail.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLhI0OWMvvwiJJtntMWJ06WGEIKdQp59m-A4wwfN9xQ&s=10"
        fail.onload=() =>{
            t.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

function smile(){
    puhasta();
    silm1();
    silm2();
    nina();
    pea();
    suu();
    korv1();
    korv2();
    silmamuna1();
    silmamuna2();
}