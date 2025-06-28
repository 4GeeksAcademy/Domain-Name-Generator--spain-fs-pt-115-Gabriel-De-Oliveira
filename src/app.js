import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("");
};

const pronoun = ['the', 'our',"back"];
const adj = ['great', 'big',"bitcoin"];
const noun = ['jogger', 'racoon', "USDT"];
const extensions = [`.com`, `.net`, `.us`, `.io`, ".es"]
const grupo = {};

extensions.forEach(ext => grupo[ext] = [])

pronoun.forEach((pron) => {
  adj.forEach((ad) => {
    noun.forEach((nou) => {
      extensions.forEach((ext) => {
        const element = `${pron}${ad}${nou}${ext}`;
        grupo[ext].push(element);
        
      });
    });
  });
});

for (let ext in grupo) {
  for (let i = 0; i < grupo[ext].length; i++) {
   console.log(grupo);
   
  };
};







