$(document).ready(function(){
   $("#invia").click(
     function(){
       var messaggio = $("#mex").val();
       if (messaggio != "") {

         var rowMex = $(".chat-main-margini");
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
    $("#search").keyup(function () {
      // assegno valore alle lettere inserite
      var ricerca = $(this).val().toLowerCase();
        console.log(ricerca);
          // ciclo ogni singolo div
          $(".cont-utenti-singoli").each(function() {
            // collego i nomi dei profili (.cont-ut-sing-dati h3)
            var nomiProfili = $(this).find(".cont-ut-sing-dati h3").text().toLowerCase();
               console.log(nomiProfili);
            if (nomiProfili.includes(ricerca)) {
              $(this).show();
            } else {
              $(this).hide();
            }


          });


    });
    // var prova = $(".chat-main").data(chat);
    // console.log(prova);


    //evento click sui profili
    $(".cont-utenti-singoli").click(
      function() {
        $(".chat-main").removeClass("active");
        $(this).addClass("cliccato");
      console.log(($(".cont-utenti-singoli.cliccato")));
        $(".chat-main").each(
          function(){
            if ($(".cont-utenti-singoli.cliccato").data("profilo")==$(this).data("chat") ) {
              $(this).addClass("active");
            }


          }
        )
        $(this).removeClass("cliccato");





        // scoprire l'indirizzo delle charset
        // var indiceChat = $(".chat-main").index()
        // console.log(indiceChat);
        // var indiceChat =
        // $(".chat-main").removeClass("active")
        // $(this).eq()
      }
    )
    //Click sul contatto mostra la conversazione del contatto cliccato
    // click sul contatto che ha data-attr che corrisponde a stesso data-attr in chat
    // salvo il valore dell'attr e lo usso per dire quale chat è attiva


  // è possibile inserire nuovi messaggi per ogni conversazione [attiva]


  // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
    // son riuascito ad agganciarte l'evento sul "delete" potrò dirgli una roba tipo this.padre.cancella();
    // $('.right-messages').on("click", ".message",
    //    function () {
    //   //   alert("hai cliccato su di me!");
    //     $(this).hide();
    //    }
    //
    // );
});
