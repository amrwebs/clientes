document.getElementById('form-compra').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const direccion = e.target.direccion.value;
    const localidad = e.target.localidad.value;
    const codigoPostal = e.target.codigoPostal.value;
    const telefono = e.target.telefono.value;
    const talle = e.target.talle.value;
  
    const cliente = {
      nombre,
      email,
      direccion,
      localidad,
      codigoPostal,
      telefono,
      talle
    };
  
    // Guardar en localStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientes));
  
    alert('Compra confirmada!');
  
    // Limpiar formulario
    e.target.reset();
  });
  
