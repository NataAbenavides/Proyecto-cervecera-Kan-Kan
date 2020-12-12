/* función hace que se cierre el mensaje de alerta */
$(document).ready(function(){
    $(".close").click(function(){
        $("#myAlert").alert('close');
    });
});