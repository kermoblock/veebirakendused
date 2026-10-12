function arvutaVanus() {
    let synniaasta = document.getElementById("synniaasta").value;
    let vastus4 = document.getElementById("vastus4");

    const vanus = 2026 - synniaasta;

    vastus4.innerHTML = "Sinu vanus on " + vanus + " aastat.";
}
