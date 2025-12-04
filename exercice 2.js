function  ManipulationChaînes(){
    prenom="Sara";
    Age=22;
      let phrase = "Je m'appelle " + prenom + " et j'ai " + Age + " ans";
    console.log("Phrase initiale :", phrase);
    phrase = phrase.replace(22, 23);
     console.log("Phrase Modifiée :", phrase);
}
ManipulationChaînes();