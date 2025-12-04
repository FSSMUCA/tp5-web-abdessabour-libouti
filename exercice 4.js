function Multiples3et5 (){
   let min = Number(prompt("Entrez le nombre minimal : "));
   let max = Number(prompt("Entrez le nombre maximal : "));
   if (isNaN(min) || isNaN(max)) {
       console.log("Veuillez entrer des nombres valides !");
       return;
   }
   
   if (min > max) {
       console.log("Le minimum doit être inférieur ou égal au maximum !");
       return;
   }
   console.log("Les multiples de 3 ou 5 entre " + min + " et " + max + " sont :");
   for (let i = min; i <= max; i++) {
       if (i % 3 === 0  && i % 5 === 0) {
           console.log(i,":Five&Three");
       }else if(i % 3 === 0){
              console.log(i,":Three");
       }else if(i % 5 === 0 ){
              console.log(i,":Five");
        }
   }
}
Multiples3et5 ();