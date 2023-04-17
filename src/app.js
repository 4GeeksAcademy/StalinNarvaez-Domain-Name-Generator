/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello World");
  let listaPronombre = ["mi", "la", "el", "tu"];
  let listaAdjetivo = ["gran", "genial", "impecable", "educativa"];
  let listaSustantivo = ["escuela", "centro", "espacio", "empresa"];
  let listaDominio = [".com", ".io", ".edu", ".org"];

  for (let x in listaPronombre) {
    for (let y in listaAdjetivo) {
      for (let z in listaSustantivo) {
        for (let i in listaDominio) {
          console.log(
            listaPronombre[x] +
              listaAdjetivo[y] +
              listaSustantivo[z] +
              listaDominio[i]
          );
        }
      }
    }
  }
};
