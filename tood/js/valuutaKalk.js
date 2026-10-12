function valuutaKalk() {
    let vastus3=document.getElementById('vastus3');
    let euro=document.getElementById('euro');
    let valuuta=document.getElementById('valuuta');

    const dollar=1.12;
    const juann=7.4992;
    const ruble=94.11;

    if (valuuta.value == "dollar"){
        vastus3.innerHTML= euro.value + "€ = " +
            (euro.value*dollar).toFixed(2) + "$";
    }
    if (valuuta.value == "juann"){
        vastus3.innerHTML= euro.value + "€ = " +
            (euro.value*juann).toFixed(2) + "¥";
    }
    if (valuuta.value == "ruble"){
    vastus3.innerHTML= euro.value + "€ = " +
        (euro.value*ruble).toFixed(2) + "₽";
    }
}