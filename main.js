$(document).ready(function(){


   // INIZIO FUNZIONE PER GESTIRE HOVER SUI PROFILI
   // creo funzione hover sui profili
   $(".cont-utenti-singoli").hover(
     function() {
       //cambio background color al profili su ci va il cursore
       $( this ).css('background-color', '#cffafa');
     }, function() {
       // quando il cursore esce da quel profilo metto valore nullo al background
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
        $(".chat-main-margini").removeClass("active");

        // aggiungo una classe vuota ad ogni profilo cliccato
        $(this).addClass("cliccato");
        // azzero il colore di sfondo ad ogni profilo
        $(".cont-utenti-singoli").css("background-color", "");
        // aggiungo colore sfondo celeste al profilo cliccato
        $(this).css('background-color', '#84fafa');
      console.log(($(".cont-utenti-singoli.cliccato")));

        // ciclo tutte le chat
        $(".chat-main").each(
          function(){
            // se la chat ciclata ha lo stesso "numero data" del profilo cliccato
            if ($(".cont-utenti-singoli.cliccato").data("profilo")==$(this).data("chat") ) {
              // allora quella chat verrà messa in display block
              $(this).addClass("active");
              $(this).children().addClass("active");

            }
         }
        )
        // uscito dal ciclo each rimuovo la classe vuota "cliccato" dal profilo cliccato
        $(this).removeClass("cliccato");
        }
    )
    // FINE FUNZIONE PER SELEZIONARE LE VARIE CHAT CORRISPONDENTI AI PROFILI

    // INIZIO FUNZIONE PER POTER CANCELLARE I messaggi
    // quando col mouse vado sopra la casella messaggio compare l'icona
      $('.chat-main-margini').on("mouseenter", ".chat-main-bloc-int, .chat-main-bloc-int-invio",
       function () {
        //trovo l'icona partendo dalla casella e la mostro
        $(this).find("i").show();
        // attribuisco un var all'icona mostrata
        var iTrovata = $(this).find("i");
        // trovo l'ul partendo dalla casella e gli attribuisco una var
        var ulTrovata = $(this).find("ul")
        // creo il click sull'icona
        $(iTrovata).click(
          function(){
            // se clicco sull'icona mostro l'ul del messaggio delete
            $(ulTrovata).show();
            // se clicco sul "cancella-messaggio" scompare l'intero messaggio
            $(this).next().click(
              function(){

                $(this).parents(".chat-main-blocchimex, .chat-main-bloc-int-invio").hide();
              }
            )
          }
        );


        // se esco col cursore dalla casella scompare sia l'icona che il "cancella-messaggio"
        $('.chat-main').on("mouseleave", ".chat-main-bloc-int, .chat-main-bloc-int-invio",
         function () {
        //   alert("hai cliccato su di me!");
        $(this).find("i").hide();
        $(this).find("ul").hide();
        })

      })
      // INIZIO FUNZIONE PER GESTIRE LA CHAT DI DESTRA
      // collego evento click all'icona dell'input messaggio
        // nascondo icona cancella
        $(".fas.fa-angle-down").hide();

       $("#invia").click(
         function(){
           if ($(".chat-main").hasClass("active")){
             // creo var corrispondente a valore messaggio inserito nell'input
             var messaggio = $("#mex").val();
             // condizione per la quale se il mex è diverso da "vuoto" faccio partire la funzione
             if (messaggio != "") {

               console.log("1");
               // creo var corrispondente a padre delle caselle messaggio
               var rowMex = $(".chat-main-margini.active");

               console.log("2", rowMex);
               // appendo al padre delle caselle messaggio una casella messaggio con il messaggio acquisito dentro
               //con aggiunta di icona cancella
               rowMex.append('<div class="chat-main-blocchimex-invio"><div class="chat-main-bloc-int-invio"><p>' + messaggio + '</p><i class="fas fa-angle-down icona-cancella"></i><ul class="cancella"><li>Cancella messaggio</li></ul></div></div>')
               // nascondo icona cancella
               // $(".fas.fa-angle-down").hide();
               // cancello il testo inserito nell'input
               $("#mex").val("");
               // imposto il tempo dopo il quale deve avvenire la risposta
               setTimeout(risposta,1000);
               function risposta() {
                 // appendo al padre delle caselle messaggio una casella messaggio "ricevuta"
                 //con aggiunta di icona cancella
                 rowMex.append('<div class="chat-main-blocchimex"><div class="chat-main-bloc-int"><p class=".mex-stampato">' + "ok" + '</p><i class="fas fa-angle-down icona-cancella"></i><ul class="cancella"><li>Cancella messaggio</li></ul></div></div>');
                 // nascondo icona cancella
                 $(".fas.fa-angle-down").hide();

               }
             }
           }

         }
       )
       // FINE FUNZIONE PER GESTIRE LA CHAT DI DESTRA

       // Funzione per inviare il messaggio premendo invio
         $("#mex").keypress(function(event){
           if (event.which == 13) {
           if ($(".chat-main").hasClass("active")){

             // creo var corrispondente a valore messaggio inserito nell'input
             var messaggio = $("#mex").val();
             // condizione per la quale se il mex è diverso da "vuoto" faccio partire la funzione
             if (messaggio != "") {
               // creo var corrispondente a padre delle caselle messaggio
               var rowMex = $(".chat-main-margini.active");
               // appendo al padre delle caselle messaggio una casella messaggio con il messaggio acquisito dentro
               //con aggiunta di icona cancella
               rowMex.append('<div class="chat-main-blocchimex-invio"><div class="chat-main-bloc-int-invio"><p>' + messaggio + '</p><i class="fas fa-angle-down icona-cancella"></i><ul class="cancella"><li>Cancella messaggio</li></ul></div></div>')
               // nascondo icona cancella
               // $(".fas.fa-angle-down").hide();
               // cancello il testo inserito nell'input
               $("#mex").val("");
               $(".fas.fa-angle-down").hide();
               // imposto il tempo dopo il quale deve avvenire la risposta
               setTimeout(risposta,1000);
               function risposta() {
                 // appendo al padre delle caselle messaggio una casella messaggio "ricevuta"
                 //con aggiunta di icona cancella
                 rowMex.append('<div class="chat-main-blocchimex"><div class="chat-main-bloc-int"><p class=".mex-stampato">' + "ok" + '</p><i class="fas fa-angle-down icona-cancella"></i><ul class="cancella"><li>Cancella messaggio</li></ul></div></div>');
                 // nascondo icona cancella
                 $(".fas.fa-angle-down").hide();

               }
             }
           }
          }
       })



});
