//let auto = {
// mark: "Toyota",
//   mudel: "Corolla",
// aasta: 2022,
//  varv: "punane",
//    lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
//};

//console.log(auto);

// let auto = {
//     //omadused
//     mark: "Toyota",
//     mudel: "Corolla L",
//     aasta: 2022,
//     varv: "punane",
//     omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],
//
//     //meetodid
//     taisnimi() {
//         return this.mark + " " + this.mudel;
//     }
// };
//
// console.log(auto.taisnimi());
// let auto = {
//     //omadused
//     mark: "Toyota",
//     mudel: "Corolla L",
//     aasta: 2022,
//     varv: "punane",
//     omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],
//
//     //meetodid
//     taisnimi() {
//         return this.mark + " " + this.mudel;
//     }
// };

// let auto = {
//     //omadused
//     mark: "Toyota",
//     mudel: "Corolla L",
//     aasta: 2022,
//     varv: "punane",
//     omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],
//
//     //meetodid
//     taisnimi() {
//         return this.mark + " " + this.mudel;
//     },
//
//     kuvaOmadused() {
//         this.omadused.forEach(omadus => console.log(omadus));
//     }
// };
//
// auto.kuvaOmadused();

// let autod = [
//     { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//     { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//     { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];
//
// console.log(autod);

// let autod = [
//     { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//     { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//     { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];
//
//
// autod.forEach((auto) => {
//     console.log(`
//     Mark: ${auto.mark},
//     Mudel: ${auto.mudel},
//     Aasta: ${auto.aasta}
//     `);
// });

// let autod = [
//     { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//     { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//     { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];
//
// //Lisab uue objekti massiivi lõppu
// autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
// autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });
// console.log(autod);

// let autod = [
//     { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//     { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//     { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];

// autod.splice(1, 1, { mark: 'BMW', mudel: '320i', aasta: 2015 });
// autod.splice(1,0,{ mark: 'Tesla', mudel: 'Cybertruck', aasta: 2023 });

//  let autod = [
//     { mark: 'BMW', mudel: 'X5', aasta: 2020 },
//     { mark: 'Audi', mudel: 'A4', aasta: 2017 },
//     { mark: 'Ford', mudel: 'Focus', aasta: 2022 }
//  ];
//
// //Otsimine
// // let otsing = autod.find(auto => auto.aasta > 2018);
// // console.log(otsing);
//
// // let otsing = autod.find(auto => auto.aasta > 2018 && auto.mark === "Ford");
// // console.log(otsing);
//
// // let otsing = autod.find(auto=>auto.aasta > 2018 && auto.mark === "Tesla");
// // console.log(otsing);
// // let filter = autod.filter(auto => auto.aasta > 2018);
// // console.log(filter);
// autod.sort((a, b) => a.aasta - b.aasta);
// console.log(autod);

// let raamat = {
//     pealkiri: "Harry Potter",
//     autor: "J. K. Rowling",
//     aasta: 1997,
//
//     kirjeldus() {
//         return raamat.pealkiri + " " + raamat.autor + " " + raamat.aasta;
//     },
//
//     muudaAastat(uusAasta) {
//         raamat.aasta = uusAasta;
//     }
// };
//
// console.log(raamat.kirjeldus());
//
// raamat.muudaAastat(2001);
// console.log(raamat.kirjeldus());

let raamatukogu = {
    raamatud: [
        { pealkiri: "Harry Potter", autor: "J. K. Rowling", aasta: 1997 },
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Väike prints", autor: "Antoine de Saint-Exupéry", aasta: 2005 }
    ],

    //Kõikide raamatute kuvamine
    kuvaRaamatud() {
        this.raamatud.forEach(raamat => {
            console.log(raamat.pealkiri, raamat.autor, raamat.aasta);
        });
    },

    //Uue raamatu lisamine
    lisaRaamat(uusRaamat) {
        raamatukogu.raamatud.push(uusRaamat);
    },

    //Raamatute koguarv
    koguArv() {
        return raamatukogu.raamatud.length;
    },

    //Pärast 2000. aastat ilmunud raamatud
    parast2000() {
        return raamatukogu.raamatud.filter(raamat => raamat.aasta > 2000).length;
    },

    //Autorite kuvamine
    kuvaAutorid() {
        raamatukogu.raamatud.forEach(raamat => console.log(raamat.autor));
    }
};

//Kõikide raamatute kuvamine
raamatukogu.kuvaRaamatud();

//Uue raamatu lisamine
raamatukogu.lisaRaamat({
    pealkiri: "1984",
    autor: "George Orwell",
    aasta: 1949
});

//Raamatute koguarv
console.log(raamatukogu.koguArv());

//Pärast 2000. aastat ilmunud raamatute arv
console.log(raamatukogu.parast2000());

//Autorite kuvamine
raamatukogu.kuvaAutorid();

document.getElementById("vastus1").innerHTML = raamatukogu.raamatud[0].pealkiri;
document.getElementById("vastus2").innerHTML = raamatukogu.koguArv();
document.getElementById("vastus3").innerHTML = raamatukogu.parast2000();
document.getElementById("vastus4").innerHTML = raamatukogu.raamatud[0].autor;
document.getElementById("vastus5").innerHTML = raamatukogu.raamatud[0].aasta;