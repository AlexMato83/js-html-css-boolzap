$(document).ready(function(){
   $("#invia").click(
     function(){
       var messaggio = $("#mex").val();
       if (messaggio != "") {
         var mexInChat = $(".mex-stampato");
         var rowMex = $("#chat-main-margini");
         rowMex.append('<div class="chat-main-blocchimex-invio"><div class="chat-main-bloc-int-invio"><p class=".mex-stampato">' + messaggio + '</p></div></div>');
         $("#mex").val("");
         setTimeout(risposta,1000);
         function risposta() {
           rowMex.append('<div class="chat-main-blocchimex"><div class="chat-main-bloc-int"><p class=".mex-stampato">' + "ok" + '</p></div></div>');

         }


       }
     }
   )
    //cerco un determinato profilo utilizzando l'input search sovrastante
    $("#contatti-fissa-cerca").keypress(function (e) {
        var key = e.which;
        if(key == 13){
          $( ".cont-utenti-singoli" ).each(function( cerca ) {
            console.log(cerca);
            // assegno valore alle lettere inserite
            var ricerca = $("#search").val().toLowerCase();
            console.log(ricerca);
            // collego i nomi dei profili (.cont-ut-sing-dati h3)
            var nomiProfili = $(this).find(".cont-utenti-singoli .cont-ut-sing-dati h3").text().toLowerCase();
            console.log(nomiProfili);
            if (nomiProfili.includes(ricerca)) {
              $(this).show();
            } else {
              $(this).hide();
            }


          });

        }
    });



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
