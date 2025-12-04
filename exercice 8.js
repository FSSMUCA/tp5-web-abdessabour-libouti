function  totalAvecRemise(total, remise){
 totalFinal = total - (total * remise / 100);
    return totalFinal;
}
let  totalHT =Number( prompt("Entrez le total HT : "))
let remise = Number(prompt("Entrez le pourcentage de remise : "));
console.log("Total final:", totalAvecRemise(totalHT, remise));