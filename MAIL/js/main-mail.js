// CHIEDERE ALL UTENTE LA MAIL
const userMail = prompt("inserisci la tua E-MAIL")
// CREARE UN ARRAY CON DENTRO DELLE MAIL
const listaMailAccesso = ["ciao@gmail.com","miao@gmail.com" ,"fragola@gmail.com", "pippo@gmail.com",  "pluto@gmail.com"]

const messaggio = document.querySelector(".container-xxl")

let itemTrovato = -1;

console.log("messaggio");

// CREARE IL CICLO CHE CONTROLLA SE LA MAIL INSERITA COINCIDE CON UNA DELL'  ARRAY CREATO IN PRECEDENZA
debugger

for ( let i=0; i<listaMailAccesso.length; i++){

       // CREARE LE CONDIZIONI IN CUI SE LA MAIL INSERITA COINCIDE IL LA LET itemTrovato PRENDE IL VALORE DELL INDICE DEL CICLO

    if(userMail === listaMailAccesso[i]){
        itemTrovato = i;

        console.log(listaMailAccesso[i]);
        console.log(itemTrovato);
    }
}
// SE COINCIDE IL VALORE  DELL ITEM TROVATO SARA MAGGIORE  DI -1 QUINDI SIA AVVERA LA  PRIMA CONDIZIONE
if(itemTrovato > -1){

    messaggio.innerHTML=(`<h3>${userMail}</h3><h4>la mail e tra gli utenti registrati, login effettutato con successo!</h4>`)

// SE  IL VALORE RIMANE  -1  SIGNIFICA  CHE LA MAIL NON  COINCIDE CON NESSUN  ELEMENTO DELL ARRAY CREATO  IN PRECEDENZA
}else{
    messaggio.innerHTML=(`<h1>!ATTENZIONE!</h1><h3 style="color:red">${userMail}</h3><h4>Questa mail non e ancora stata registrata!</h4>`)

}