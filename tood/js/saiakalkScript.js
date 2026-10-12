function saiaKalk() {
    let vastus = document.getElementById("vastus");
    let saiatyyp = document.getElementById("saiatyyp");

    const juustu = 2.00;
    const mooni = 1.50;
    const pontsik = 3.00;
    const kaneeli = 1.30;
    let kogus=document.getElementById("kogus")
    let pilt=document.getElementById("pilt")

    if (saiatyyp.selectedIndex === 0) {
        vastus.innerHTML = "Pole midagi valitud.";
        vastus.style.color = "red";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJ5yZ5TSfv4ZnNpx4XZYgADEIbohxG8I-GeNkvLOYwA&s=10"
        //toFixed(ümardab 2 koha peale koma)
    } if (saiatyyp.selectedIndex === 1) {
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + '<br>' +
            "valitud kogus on " + kogus.value +"tk" + '<br>' +
            "Kokku hind on " + (mooni*kogus.value).toFixed(2) + " €";
        vastus.style.color = "blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9mcKhSTkqPjfyIR731sPO7atE2R4fpI6yqcuxcYe9g&s=10"

    } if (saiatyyp.selectedIndex === 2) {
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + '<br>' +
            "valitud kogus on " + kogus.value +"tk" + '<br>' +
            "Kokku hind on " +  (juustu*kogus.value).toFixed(2) + " €";
        vastus.style.color = "blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFGRFlLgAh3gyRMlMuLQ5AtsLgLhMRNmyfR8tjGjaEA&s=10"

    } if (saiatyyp.selectedIndex === 3) {
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + '<br>' +
            "valitud kogus on " + kogus.value +"tk" + '<br>' +
            "Kokku hind on " +  (pontsik*kogus.value).toFixed(2) + " €";
        vastus.style.color = "blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp6ic6_w0IRwrz77B79wphT1w8uY2FlRIj18G6uNu_g&s=10"

    } if (saiatyyp.selectedIndex === 4) {
        vastus.innerHTML =
            "Sa valisid " + saiatyyp.value + '<br>' +
            "valitud kogus on " + kogus.value +"tk" + '<br>' +
            "Kokku hind on " +  (kaneeli*kogus.value).toFixed(2) + " €";
        vastus.style.color = "blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-uhFvMF_2RhMMG52ARQ1ux89TWZzpfMs8QsrCHAPtA&s=10"

    }
}