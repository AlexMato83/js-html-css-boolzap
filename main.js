$(document).ready(function(){
   $("#invia").click(
     function(){
       var messaggio = $("#mex").val();
       var mexInChat = $(".mex-stampato");
       var rowMex = $("#chat-main-margini");
       rowMex.append('<div class="chat-main-blocchimex"><div class="chat-main-bloc-int"><p class=".mex-stampato">' + mexInChat + '</p></div></div>');
     }
   )


});
// filtro contatti
  //gestirte evento su tastiera (oppure su click di bottone di input ricerca)

  // salvarmi input utente in campo del filtro (stringa1)

  // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
    //salvo in una var il valore del testo del nome nel contatto (stringa2)

    // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto
      //stringa2.includes(stringa1)
      //se l'occorenza è stata trovata lascio il blocco di contatto visibile
      // altrimenti lo rendo non visibile (this)
