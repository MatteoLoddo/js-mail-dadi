const numPc = []

const numGiocatore = []

const containerPc = document.querySelector(".pc-number");
const containerPlayer = document.querySelector(".player-number");

containerPc.innerHTML += (`<ul class="list-group"></ul>`)
containerPlayer.innerHTML += (`<ul class="list-group"></ul>`)


// CREARE IL GENERATORE DEL COMPUTER


for(let i=0; i<10; i++){

    let casualNum = Math.random();
    casualNum = Math.floor(casualNum * 6) +1;

    containerPc.innerHTML += (`<li class="list-group-item">${casualNum}</li>`)
    numPc.push(casualNum);
}
console.log(numPc);

// RISULTATO CALCOLO PC
const resultPc = []


let calcPc = 0;


// CREO IL  CICLO PER  SOMMARE GLI  ELEMENTI PUSHATI IN numPc ARRAY
for(let i=0; i<numPc.length; i++){

    calcPc +=numPc[i]
    console.log(calcPc)
}

containerPc.innerHTML += (`<li class="list-group-item" style="font-weight:bold">${calcPc}</li>`)





// CREARE IL GENERATORE DEL GIOCATORE

for(let i=0; i<10; i++){

    let casualNumGioc = Math.random();
    casualNumGioc= Math.floor(casualNumGioc * 6) +1;

    containerPlayer.innerHTML += (`<li class="list-group-item">${casualNumGioc}</li>`)
    numGiocatore.push(casualNumGioc);
}
console.log(numGiocatore);


// RISULTATO CALCOLO PC
const resultGiocatore = []
let calcGiocatore = 0;


// CREO IL  CICLO PER  SOMMARE GLI  ELEMENTI PUSHATI IN numGiocatore ARRAY
for(let i=0; i<numGiocatore.length; i++){

    calcGiocatore +=numGiocatore[i]
    console.log(calcGiocatore)
}

containerPlayer.innerHTML += (`<li class="list-group-item" style="font-weight:bold">${calcGiocatore}</li>`)

if(calcPc > calcGiocatore){

    containerPc.innerHTML += (`<li class="list-group-item" style="font-weight:bold;color:green"><h2>WIN</h2></li>`)
    containerPlayer.innerHTML += (`<li class="list-group-item" style="font-weight:bold;color:red"><h2>LOSE</h2></li>`)

    console.log(containerPc);
}else{
    containerPlayer.innerHTML += (`<li class="list-group-item" style="font-weight:bold;color:green" ><h2>WIN</h2></li>`)
    containerPc.innerHTML += (`<li class="list-group-item" style="font-weight:bold;color:red"><h2>LOSE</h2></li>`)


}
