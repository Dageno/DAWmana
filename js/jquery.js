let vaciarForm = function(){
    $(':input').val('');
    $('#validar').val('Enviar');

}
let validarFormIngreso = function(){
   comprobarNombre()
   comprobarApellidos()
   comprobarLetraDni()
   comprobarCorreo()
   comprobarNombre()
    if( $('#errNombre').text() == "" && $('#errApellido').text()=="" && $('#errDni').text()=="" &&  $('#errCorreo').text()=="" && $('#errProcedencia').text()==""){
        alert("Gracias por su ingreso");
        vaciarForm();
    }
       
}

let llamarFormAsistentes= function(){
    $('main').empty()
    $('main').append("<h3>Formulario de Ingreso de Asistente</h3>"+
    "<div class='form'>"+
    "<label>Introduce tu Nombre </label>"+
    "<input type='text' id=nombre required/>"+
    "<p id=errNombre></p>"+
    "<label>Introduce tus Apellidos</label>"+
    "<input type='text' id=apellidos required/>"+
    "<p id=errApellido></p>"+
    "<label>Introduce tu DNI</label>"+
    "<input type='text' id=dni required/>"+
    "<p id=errDni></p>"+
    "<label>Introduce tu Correo</label>"+
    "<input type='text' id=correo required/>"+
    "<p id=errCorreo></p>"+
    "<label>Introduce tu Procedencia</label>"+
    "<input type='text' id='procedencia' required/>"+
    "<p id=errProcedencia></p>"+
    "<input type='button' id='validar' value='Enviar'/>"+
    "</div>");

    $('#nombre').on("focusout", comprobarNombre);
    $('#apellidos').on("focusout", comprobarApellidos);
    $('#dni').on("focusout", comprobarLetraDni);
    $('#correo').on("focusout", comprobarCorreo);
    $('#procedencia').on("focusout", comprobarProcedencia);

    $('#validar').click(validarFormIngreso);
}

let login = function(){
    $('main').append("<h3>Formulario de Log In</h3>"+
    "<div class='form'>"+
    "<label>Usuario</label>"+
    "<input type='text' id='user' required/>"+
    "<label>Contraseña</label>"+
    "<input type='password' id='pass' required/>"+
    "<p id=errProcedencia></p>"+
    "<input type='button' id='log' value='Log in'/>"+
    "</div>");

    $('#log').click(loguear);


}
let llamarPonentes = function(){
    $.getJSON("php/comunicador.php", {"datos": "ponentes"})
    .done(function(data){
            let array = data
            for(let i = 0; i<array.length;i++){
                $('#tarjetas').append("<div class='card'>"+
                    "<a href='"+array[i].foto+"' data-lightbox='Ponentes' data-title='Ponentes' ><img name='carrusel' src='"+array[i].foto+"' class='card-media' /></a>"+
                    "<div class='card-details'>"+
                        "<h2 id='nombre' class='card-head'>"+array[i].nombre+"</h2>"+
                        "<p id='organizacion'>"+array[i].organizacion+"</p>"+
                        "<div class='redes'>"+
                            "<a href='#'>t</a>"+
                            "<a href='#'>v</a>"+
                            "<a href='#'>Ć</a>"+
                            "<a href='#'>ļ</a>"+
                        "</div>"+
                    "</div>"+
                "</div>");
            }
            
        })
    

       
  
}
let asignarEventosCalendar = function($id){
    $('footer').attr("style", "display:none");
    
    llamarActividades($(this).attr('id'));
    $('#contenedor_activity').fadeIn();
    $('footer').fadeIn("fast");
}

let llamarActividades = function($id){
    $.getJSON("php/comunicador.php", {"datos": $id})
    .done(function(data){
            let array = data
            $('#contenedor_activity').empty();
            for(let i = 0; i<array.length;i++){
                
                $('#contenedor_activity').append("<div class='actividad'>"+
                    "<img src="+array[i].foto+" />"+
                    "<div id='datos'>"+
                        "<h3>"+array[i].nombre+"</h3>"+
                        "<h5 style='text-align:center;'>"+array[i].ponente+" "+array[i].hora+"</h5>"+
                        "<p>"+array[i].descripcion+"</p>"+
                    "</div>"+
                "</div>");
                
            }
          
        })   
}
let menu = function(){
    $('footer').attr("style", "display:none");
    $('main').empty();
    $('main').toggle("slide");
    $('main').delay(500).toggle("slide");
    $('footer').delay(800).fadeIn("slow");
    switch($(this).attr('id')){
        case 'actividades':
                $('main').html("<div class='actividades'>"+
                "<h2>Calendario de Actividades</h2>"+
                    "<div class='botones'>"+
                        "<input type='button' name=calendario id='lunes' value='Lunes'/>"+
                        "<input type='button' name=calendario id='martes' value='Martes'/>"+
                        "<input type='button' name=calendario id='miercoles' value='Miércoles'/>"+
                        "<input type='button' name=calendario id='jueves' value='Jueves'/>"+
                        "<input type='button' name=calendario id='viernes' value='Viernes'/>"+
                    "</div>"+
                    "<div id='contenedor_activity'>"+
                    "</div>"+
                "</div>");
                llamarActividades($(this).attr('id'));
                $("[name=calendario]").click(asignarEventosCalendar);

            break;
        case 'ponentes':
            $('main').html("<h3>Ponentes DAWmana X</h3>"+
            "<div id='tarjetas'>"+
            "</div>");
            
            llamarPonentes();
            break;
        case 'asistentes':
            
            llamarFormAsistentes();
            break;
        case 'login':
        default:
            login();
            break;
    }
}

$((function () {
    $('.principal').delay(1000).toggle("puff");
    $('.page').delay(2000).toggle("puff");
    $('header').delay(3000).toggle("blind");
    $('nav').delay(3500).fadeIn("slow");
    $('main').delay(4000).toggle("slide");
    $('footer').delay(4300).fadeIn("slow");
    $("li").click(menu);
    $('#nombre').on("focusout", comprobarNombre);
    $('#apellidos').on("focusout", comprobarApellidos);
    $('#dni').on("focusout", comprobarLetraDni);
    $('#correo').on("focusout", comprobarCorreo);
    $('#procedencia').on("focusout", comprobarProcedencia);

    $('#validar').click(validarFormIngreso);
  
}));