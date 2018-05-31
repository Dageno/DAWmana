let datepickerConDrop = function() {
    var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
}

let ponencia = function(){
    $('main').append("<h3>Actividad a Realizar</h3>"+
    "<div class='form'>"+
    "<label>Introduce Nombre </label>"+
    "<input type='text' id=nombre regex='^[A-Z][a-z0-9ü_]{3,14}' required />"+
    "<p id=errNombre></p>"+
    "<label>Descripcion breve</label>"+
    "<input type='text' id=apellidos regex='^[A-Z][a-z0-9ü_]{3,}' required/>"+
    "<p id=errApellido></p>"+
    "<label>Descripcion extensa</label>"+
    "<textarea id=dni regex='^[A-Z][a-z0-9ü_]{20,}' required></textarea>"+
    "<p id=errDni></p>"+
    "<label>Introduce tu URL de imagen</label>"+
    "<input type='text' id=correo regex='^[a-z0-9ü_]{1,}' required/>"+
    "<p id=errCorreo></p>"+
    "<label>Material de Ponente</label>"+
    "<textarea  required></textarea>"+
    "<label>Material de Asistentes</label>"+
    "<textarea  required></textarea>"+
    "<label>Nº Asistentes</label>"+
    "<input regex='^[0-9]{1,}'type='number'  required/>"+
    "<input type='button' id='validar' value='Enviar'/>"+
    "</div>");
    $('.form input[type="text"]').validar();
}

let menu = function(){
    $('footer').attr("style", "display:none");
    $('main').empty();
    $('main').toggle("slide");
    $('main').delay(500).toggle("slide");
    $('footer').delay(800).fadeIn("slow");
    switch($(this).attr('id')){
        case 'perfil':
            $('main').append("<h3>Actividad a Realizar</h3>"+
                "<div class='form'>"+
                "<label>Introduce tu Nombre </label>"+
                "<input type='text' id=nombre required />"+
                "<p id=errNombre></p>"+
                "<label>Introduce tus Apellidos</label>"+
                "<input type='text' id=apellidos required/>"+
                "<p id=errApellido></p>"+
                "<label>Empresa u organismodocente</label>"+
                "<textarea id=dni required></textarea>"+
                "<p id=errDni></p>"+
                "<label>Posibilidad de patrocinio</label>"+
                "<form action=''>"+
                "<input type='radio' name='gender' value='si'> Sí"+
                "<input type='radio' name='gender' value='no'> No<br>"+
                "</form>"+
                "<p id=errCorreo></p>"+
                "<label>Dias preferibles</label>"+
                "<label for='from'>From</label>"+
                "<input type='text' id='from' name='from'>"+
                "<label for='to'>to</label>"+
                "<input type='text' id='to' name='to'>"+
                "<label>Observaciones</label>"+
                "<textarea  required></textarea>"+
                "<input type='button' id='validar' value='Enviar'/>"+
            "</div>");
            datepickerConDrop();
            break;
        case 'ponencia':
        default:
            ponencia();
            break;
    }
}
$((function () {
    $('.page').toggle("puff");
    $('nav').fadeIn("slow");
    $('main').toggle("slide");
    $('footer').delay(300).fadeIn("slow");
    $("li").click(menu);
    $('.form input[type="text"]').validar();
    $('#Apellidos').on("focusout", comprobarApellidos);
    $('#dni').on("focusout", comprobarLetraDni);
    $('#correo').on("focusout", comprobarCorreo);
    $('#procedencia').on("focusout", comprobarProcedencia);

    
  
}));