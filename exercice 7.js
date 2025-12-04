   function validationMotPasse(mdp){
    let rep=false;
  for(let i=0;i<mdp.length;i++){
       if(mdp[i]==="@"){
            rep=true;
       }
} 
   if(mdp.length>=8 && rep===true){
         return true;
     }else{
           return false;
}
}
   let motDePasse=prompt("Veuillez entrer votre mot de passe : ");
    if(validationMotPasse(motDePasse)){
        console.log("Mot de passe valide");
    }else{
        console.log("Mot de passe invalide");
    }
