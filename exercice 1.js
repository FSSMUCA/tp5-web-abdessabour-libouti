function TypeVariables(){
    x="150";
    y=150;
    z=true;
    console.log("type:",typeof x); // affiche le type de la varible
    console.log("type:",typeof y);
    console.log("type:",typeof z);
    x=Number(x);   // conversion de la variable x en nombre
    console.log("type apres la conversion:",typeof x);
    
}
// JavaScript peut changer dynamiquement le type d’une variable car il est faiblement typé et il doit gérer les données entrées par l’utilisateur qui sont souvent sous forme de chaine de caractères.
TypeVariables();