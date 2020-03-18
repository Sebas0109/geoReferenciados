db.collection('productos').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderProductos(change.doc);
    } else if (change.type == 'removed') {
      //console.log(change.doc.id);
      let valorId = document.getElementById(change.doc.id);
      productosLista.removeChild(valorId);
    }
  });
});
