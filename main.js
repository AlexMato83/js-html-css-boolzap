$(document).ready(function(){

  // INIZIO FUNZIONE PER GESTIRE LA CHAT DI DESTRA
  // collego evento click all'icona dell'input messaggio
   $("#invia").click(
     function(){
       // creo var corrispondente a valore messaggio inserito nell'input
       var messaggio = $("#mex").val();
       // condizione per la quale se il mex è diverso da "vuoto" faccio partire la funzione
       if (messaggio != "") {
         // creo var corrispondente a padre delle caselle messaggio
         var rowMex = $(".chat-main-margini");
         // appendo al padre delle caselle messaggio una casella messaggio con il messaggio acquisito dentro
         rowMex.append('<div class="chat-main-blocchimex-invio"><div class="chat-main-bloc-int-invio"><p class=".mex-stampato">' + messaggio + '</p></div></div>');
         // cancello il testo inserito nell'input
         $("#mex").val("");
         // imposto il tempo dopo il quale deve avvenire la risposta
         setTimeout(risposta,1000);
         function risposta() {
           // appendo al padre delle caselle messaggio una casella messaggio "ricevuta"
           rowMex.append('<div class="chat-main-blocchimex"><div class="chat-main-bloc-int"><p class=".mex-stampato">' + "ok" + '</p></div></div>');
         }
       }
     }
   )
   // FINE FUNZIONE PER GESTIRE LA CHAT DI DESTRA

   // INIZIO FUNZIONE PER GESTIRE HOVER SUI PROFILI
   $(".cont-utenti-singoli").hover(
     function() {
       $( this ).css('background-color', '#cffafa');
     }, function() {
       $( this ).css('background-color', '');
     }
   );
   // FINE FUNZIONE PER GESTIRE HOVER SUI PROFILI


   // INIZIO FUNZIONE PER SELEZIONARE I PROFILI DAl SEARCH
    //cerco un determinato profilo utilizzando l'input search sovrastante
    $("#search").keyup(function () {
      // assegno var al valore delle lettere inserite
      var ricerca = $(this).val().toLowerCase();
        console.log(ricerca);
          // ciclo ogni singolo div profilo
          $(".cont-utenti-singoli").each(function() {
            // assegno var ai nomi dei profili e trasformo tutto in minuscolo
            var nomiProfili = $(this).find(".cont-ut-sing-dati h3").text().toLowerCase();
               console.log(nomiProfili);
            // creo condizione (se nomi dei profili contengono le lettere inserite)
            if (nomiProfili.includes(ricerca)) {
              // mostro il div corrispondente
              $(this).show();
              // altrimenti lo nascondo
            } else {
              $(this).hide();
            }
          });
    });
    // FINE  FUNZIONE PER SELEZIONARE I PROFILI DAl SEARCH

    // INIZIO FUNZIONE PER SELEZIONARE LE VARIE CHAT CORRISPONDENTI AI PROFILI

      //creo evento click sui profili
    $(".cont-utenti-singoli").click(
      function() {
        // rimuovo display block da tutte le chat
        $(".chat-main").removeClass("active");
        // aggiungo una classe vuota ad ogni profilo cliccato
        $(this).addClass("cliccato");
        // azzero il colore di sfondo ad ogni profilo
        $(".cont-utenti-singoli").css("background-color", "");
        // aggiungo colore sfondo grigio al profilo cliccato
        $(this).css('background-color', '#84fafa');
        // prove


        // $( "li.fade" ).hover(function() {
        //   $( this ).fadeOut( 100 );
        //   $( this ).fadeIn( 500 );
        // });
      console.log(($(".cont-utenti-singoli.cliccato")));
        // ciclo tutte le chat
        $(".chat-main").each(
          function(){
            // se la chat ciclata ha lo stesso "numero data" del profilo cliccato
            if ($(".cont-utenti-singoli.cliccato").data("profilo")==$(this).data("chat") ) {
              // allora quella chat verrà messa in display block
              $(this).addClass("active");
            }
         }
        )
        // uscito dal ciclo each rimuovo la classe vuota "cliccato" dal profilo cliccato
        $(this).removeClass("cliccato");
        }
    )
    // FINE FUNZIONE PER SELEZIONARE LE VARIE CHAT CORRISPONDENTI AI PROFILI






  // è possibile inserire nuovi messaggi per ogni conversazione [attiva]


  // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
    // son riuascito ad agganciarte l'evento sul "delete" potrò dirgli una roba tipo this.padre.cancella();
    $('.right-messages').on("click", ".message",
       function () {
      //   alert("hai cliccato su di me!");
        $(this).hide();
      })
    //
    // );
});
