/* 
Activité : gestion des contacts
*/

class Contact {

    constructor (nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    decrire(){
        return `Nom : ${this.nom}, Prénom : ${this.prenom}`;
    }

}

// Génération des objets de la classe Contact

const levisse = new Contact ("Lévisse","Carol");
const nelsonne = new Contact ("Nelsonne", "Mélodie");

// Création du tableau contenant les méthodes de la class Contact

const contacts = [levisse.decrire(), nelsonne.decrire()];

// Début du programme

console.log("Bienvenue dans le gestionnaire de contact !");

let option;

// Tant que l'utilisateur n'entre pas "0" le programme continue

while (option != 0){
    
    // A chaque fin de contition retour ici

    console.log("1 : Lister les contacts");

    console.log("2 : Ajouter un contact");
    
    console.log("0 : Quitter");

    option = Number(prompt("Choisissez une option : "));
       
    if (option === 1){

        console.log("Voici la liste de vos contacts !");
        
        // Pour chaque objet du tableau on applique la méthode decrire
        
        for (let i = 0; i< contacts.length; i++){
           
            console.log(contacts[i]);
        
        }
        
        // Sortie de la condition

        option = 3;
        
    }

    if (option === 2){

        // Stockage des entrées de l'utilisateur dans de nouvelles variables

        let nouveauNom = prompt("Entrez le nom");

        let nouveauPrenom = prompt("Entrez le prénom");

        // Création d'un nouvel objet avec comme paramètre les nouvelles variables

        const nom = new Contact(nouveauNom,nouveauPrenom);
        
        // Injection de l'objet dans le tableau 
        
        contacts.push(nom.decrire());
       
        console.log("Nouveau contact ajouté");
       
        option = 3;
        
    }
    
}
// Fin du programme

if (option === 0){

    console.log("Au revoir !");
    
    
 }
