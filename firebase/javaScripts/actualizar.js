formularioEditar.addEventListener('submit', e => {
  e.preventDefault();

  let id = formularioEditar.idEditar.value;
  let nombre = formularioEditar.nombreEditar.value;
  let codigo = formularioEditar.codigoEditar.value;

  var registro = new Registro(id, nombre, codigo);

  registro.actualizar();

  var idRegistro = document.getElementById(id);
  idRegistro.querySelector('.nombre').value = nombre + ' ';
  idRegistro.querySelector('.codigo').value = codigo + ' ';

  formularioEditar.nombreEditar.value = '';
  formularioEditar.codigoEditar.value = '';
});
