function SommeIterative(n){
    let somme=0;
    for(let i=1;i<=n;i++){
          somme+=i;
    }
    return somme;
}
 let n = Number(prompt("Entrez un nombre : "));
console.log("La somme des entiers de 1 à " + n + " est : " + SommeIterative(n));
function SommeRecursive(n){
    if(n===1){
        return 1;
    }else{
        return n+SommeRecursive(n-1);
    }
}
console.log("La somme des entiers de 1 à " + n + " est : " + SommeRecursive(n));
// la recursion pose des problèmes de performance et de dépassement de pile(Boucle infinie) si le cas trivial n'est pas bien défini ou si la profondeur de récursion est trop grande.