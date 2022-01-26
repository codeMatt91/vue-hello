console.log('Vue OK!', Vue);

/*

Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/


Vue.config.devtools = true;

const root = new Vue(
   {
      el: '#root',
      data: {
         message: 'Sono Massimo Decimo Meridio, comandante delle legioni Phenix',
         font: 'roman-style',
         immagine: "img/Il-gladiatore.webp",
         foto: 'background'
      },
      

   }
);