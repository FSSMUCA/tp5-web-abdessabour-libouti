function  factorielle(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n * factorielle(n - 1);
    }
}
let nombre = Number(prompt("Veuillez entrer un nombre pour calculer sa factorielle : "));
console.log("La factorielle de " + nombre + " est : " + factorielle(nombre));