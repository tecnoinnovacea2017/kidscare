$(document).ready(function()
{
  $.ajaxSetup({
          contentType: "application/json; charset=utf-8",
          dataType: "json"
      });
      /**
        Tomado de http://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery
      */
      function objectifyForm(formArray) {
        var returnArray = {};
        for (var i = 0; i < formArray.length; i++)
        {
          returnArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return returnArray;
}

      $(document).ready(function() {
          $('form').submit(function(e) {
              var send = JSON.stringify(objectifyForm($(this).serializeArray()));
              console.log(send);
              $.ajax({
                  url: "http://couchdb.contraslash.com/kids_care/",
                  type: "POST",
                  data: send,
                  success: function (sreg, status, jqXHR) {
                      alert("Se han enviado tus datos con éxito");
                  },
                  error: function (jqXHR, status) {
                      alert(JSON.stringify(jqXHR)+"Hubo un error");
                  }
              });
              return false;
          });
      });

});