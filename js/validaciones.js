let arrayLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

let Expresiones = {
  
        'nombre': /^[A-Z][a-z]{3,}$/,
        'apellido': /^[A-Z][a-z]{3,}\s[A-Z][a-z]{3,}$/,
        'dni': /^(\d){8}([A-z])$/,
        'correo': /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/i
    
}


let comprobarLetraDni = function () {
    let numeroDni = $('#dni').val().substr(0, 8);
    let letraDni = $('#dni').val().substr(8, 1);
    letraDni = letraDni.toUpperCase();
    if(!Expresiones.dni.test($('#dni').val())){
        $('#errDni').html("No ha introducido un dni correcto");
        return
    }
    else if (arrayLetras[numeroDni % 23] != letraDni){
        $('#errDni').html("la letra no es correcta");
        return
    }
 $('#errDni').html("");
  
}

let comprobarNombre = function () {
    if (!Expresiones.nombre.test($('#nombre').val())){
        $('#errNombre').html("No es un nombre correcto (Al menos 3 letras y la primera en mayúscula)");
        return;
    }
    $('#errNombre').html("");
}

let comprobarApellidos = function(){
    if (!Expresiones.apellido.test($('#apellidos').val())){
        $('#errApellido').html("No es un apellido correcto correcto (Al menos 3 letras y la primera en mayúscula de ambos apellidos)");
        return;
    }
    $('#errApellido').html("");

}

let comprobarCorreo = function(){
    if (!Expresiones.correo.test($('#correo').val())){
        $('#errCorreo').html("No es un correo válido.");
        return;
    }
    $('#errCorreo').html("");

}
let comprobarProcedencia = function(){
    if ($('#procedencia').val()== ""){
        $('#errProcedencia').html("No puedes dejar el campo vacío.");
        return;
    }
    $('#errProcedencia').html("");

}

let loguear = function(){
    alert("hola");
    if($('#user').val()==="ponente" && $('#pass').val()==="ponente"){
        alert("hola");
        location.href ="index2.html";
        return;
    }
       
    $('#errProcedencia').val('Error al introducir el usuario o la contraseña.');
}