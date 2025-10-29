

 function comprobaredad() {
      const fechaInput = document.getElementById("fecha").value;
      const fechaNacimiento = new Date(fechaInput);
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const mes = hoy.getMonth() - fechaNacimiento.getMonth();
      
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
      }
      
      const mensaje = document.getElementById("mensaje1");
      if (edad >= 18) {
        mensaje1.textContent = "Eres mayor de edad.";
      } else {
        mensaje1.textContent = "No eres mayor de edad.";
      }
 }

 function proximocumpleaños(){

    var fechaActual = new Date();
    fechaActual.setUTCHours(0, 0, 0, 0);

    var fechaCumple= new Date(document.getElementById("cumpleannos").value);

    fechaCumple.setFullYear(fechaActual.getFullYear());


    if (fechaCumple > fechaActual) {

    var diferencia = fechaCumple.getTime() - fechaActual.getTime();

    var dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("mensaje2").textContent = "Faltan " + dias + " días para tu próximo cumpleaños.";
    } else {
    fechaCumple.setFullYear(fechaActual.getFullYear() + 1);

    var diferencia = fechaCumple.getTime() - fechaActual.getTime();
    console.log (diferencia);
    var dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    console.log(dias)

    document.getElementById("mensaje2").textContent = "Faltan " + dias + " días para tu próximo cumpleaños.";
    }
  }
