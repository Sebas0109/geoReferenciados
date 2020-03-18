formulario.addEventListener('submit', e => {
  //Prevenir recarga de pagina
  e.preventDefault();

  var registro = new Registro(null, formulario.nombre.value, formulario.codigo.value);
  registro.agregar();

  formulario.nombre.value = '';
  formulario.codigo.value = '';

  $('#ventanaNuevo').modal('hide');
});
