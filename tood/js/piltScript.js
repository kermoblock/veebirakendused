//random pilt mis tuleb piltide massivist
function randomPilt() {
    const pildid=[
        '../pildid/kaks.png',
        '../pildid/kolm.png',
        '../pildid/tuhi.png',
        '../pildid/uks.png'
    ];
    //random pilt
    //math.floor - ümardab täisarvuni
    const pilt=Math.floor(Math.random() * pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src=rpilt;
}

function radioValik(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elementi ühe nimega
    let randomPilt=document.getElementById("randomPilt");

    //tsükkel for
    for(let i=0; i<valik.length; i++){
        if(valik[i].checked){
            if(randomPilt.getAttribute("src")==valik[i].value){
                vastus.innerHTML="õige vastus";
                vastus.style.color="green";
            } else {
                vastus.innerHTML="vale vastus";
                vastus.style.color="red";
            }
        }
    }
}