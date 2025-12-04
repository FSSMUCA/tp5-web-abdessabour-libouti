function SommeNombresPairsetImpairs(){
    let sommePairs=0;
    let sommeImpairs=0;
    for(let i=1;i<=50;i++){
        if(i%2===0){
            sommePairs+=i;
        }else{
            sommeImpairs+=i;
        }
    }
    console.log("La somme des nombres pairs de 1 à 50 est :",sommePairs);
    console.log("La somme des nombres impairs de 1 à 50 est :",sommeImpairs);
}
SommeNombresPairsetImpairs();