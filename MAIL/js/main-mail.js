// CHIEDERE ALL UTENTE LA MAIL
const userMail = prompt("inserisci la tua E-MAIL")
// CREARE UN ARRAY CON DENTRO DELLE MAIL
const listaMailAccesso = ["ciao@gmail.com","miao@gmail.com" ,"fragola@gmail.com", "pippo@gmail.com",  "pluto@gmail.com"]

const messaggio = document.querySelector(".container-xxl")

let itemTrovato = -1;

console.log("messaggio");

// CREARE IL CICLO CHE CONTROLLA SE LA MAIL INSERITA COINCIDE CON UNA DELL'  ARRAY CREATO IN PRECEDENZA
for ( let i=0; i<listaMailAccesso.length; i++){

debugger
    

       // CREARE LE CONDIZIONI IN CUI SE LA MAIL INSERITA COINCIDE STAMPO UN ESITO POSITIVO

    //    let itemNellaLista = listaMailAccesso[i]
    


    if(userMail === listaMailAccesso[i]){
        itemTrovato = i;

        // messaggio.innerHTML=(`<h3>${userMail}</h3><h4>la mail e tra gli utenti registrati, login effettutato con successo!</h4>`)

        console.log(itemTrovato);
    }
}

if(itemTrovato > -1){

    messaggio.innerHTML=(`<h3>${userMail}</h3><h4>la mail e tra gli utenti registrati, login effettutato con successo!</h4>`)


}else{
    messaggio.innerHTML=(`<h1>!ATTENZIONE!</h1><h3 style="color:red">${userMail}</h3><h4>Questa mail non e ancora stata registrata!</h4>`)

}