const citations = ["De monde meilleur on ne parle plus. Tout juste sauver celui là celui là.","Pourquoi vivre à deux si c'est pour vivre à moitié ?", "On choisit pas ses parents, on choisit pas sa famille. On choisit pas non plus les trottoirs de Manille, De Paris ou d'Alger Pour apprendre à marcher.","Porter secours c'est défendu. Le monde autour est sourd, bien entendu.","Que tu lui donnes un crayon Et l'enfant bâtit sa maison."]
const auteur = ["De Daniel Balavoine / Petit homme mort au combat","De Jean-Louis Aubert / Temps à nouveau","De Luc Plamondon / Starmania","De Jean-Jacques Goldman / Chanson d'amour","De Daniel Balavoine / Aimer est plus fort que d'être aimé"];
let aleatoire = null;
let tweet = "";
let hashtag = "citation";


document.getElementById('btncitation').addEventListener("click", function() {
    aleatoire = Math.floor(Math.random() * citations.length);
    document.querySelector('#cit').innerHTML = citations[aleatoire];
    document.querySelector('#auteur').innerHTML = auteur[aleatoire];
});
document.getElementById('btncitation').addEventListener('mouseover',()=>{
    document.getElementById("btncitation").style.cursor= "pointer";
});

document.getElementById('btncitation2').addEventListener("click", function(){
    let cit = prompt("Souhaitez vous ajouter une citation ?");
    if(cit == ""){
        let cit = prompt("Souhaitez vous ajouter une citation ? (Rentrez une citation complète)");
        return citations.push(cit);
    }else{
        return citations.push(cit);
    }   
});
document.getElementById('btncitation2').addEventListener('mouseover',()=>{
    document.getElementById("btncitation2").style.cursor= "pointer";
});
