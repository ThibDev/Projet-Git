let prixTotal = document.getElementById("casetotal");
let plusTicket = document.getElementById("plus");
let nbrTicket = document.getElementById("nbrTicket");
let prixTicket = 45.50;
let index = 0;
let prixTicketTotal = 0;
let moinsTicket = document.getElementById("moins")

plusTicket.addEventListener('click',()=>{
    index += 1;
    prixTicketTotal = prixTicket * index + " €";
    prixTotal.innerHTML=prixTicketTotal;
    nbrTicket.innerHTML=index;
    return index;
})

moinsTicket.addEventListener('click',()=>{
    if (index >0){
    index -= 1;
    prixTicketTotal = prixTicket * index + " €";
    prixTotal.innerHTML=prixTicketTotal;
    nbrTicket.innerHTML=index;
    return index;
}})
