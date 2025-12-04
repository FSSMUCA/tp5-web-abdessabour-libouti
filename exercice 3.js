function  classificationNombre(){
    let valeur =Number( prompt("Veuillez entrer un nombre : "));
    if(valeur <0){
        console.log("Nombre négatif");
    } else if(valeur<=10){
          console.log("Petit");
    }else if( valeur<=50){
            console.log("Moyen");
    }else if(valeur <=100){
        console.log("Grand");
     }else {
    console.log("Très grand");
}
}
classificationNombre();