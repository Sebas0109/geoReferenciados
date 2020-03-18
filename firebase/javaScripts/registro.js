class Registro {
  constructor(id, nombre, codigo) {
    this.id = id;
    this.nombre = nombre;
    this.codigo = codigo;
  }

  borrar(id) {
    db.collection('productos')
      .doc(id)
      .delete();
  }

  agregar() {
    db.collection('productos').add({
      nombre: this.nombre,
      codigo: this.codigo
    });
  }

  editar(id) {
    formularioEditar.nombreEditar.value = this.nombre;
    formularioEditar.codigoEditar.value = this.codigo;
    formularioEditar.idEditar.value = this.id;
  }

  actualizar() {
    db.collection('productos')
      .doc(this.id)
      .update({
        nombre: this.nombre,
        codigo: this.codigo
      });
  }
}
