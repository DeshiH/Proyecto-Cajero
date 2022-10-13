// Mini Proyecto: Cajero Automático
let cuentas = [
    { nombre: "Ted mosby", saldo: 200, password: 'casarme' },
    { nombre: "Barney", saldo: 290, password: 'dinero' },
    { nombre: "Marshall", saldo: 67, password: 'lily' }
];

function ingresar() {
    // Tomar datos de los inputs
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById('contrasenia').value;

    // alert('El usuario del input es: ' + usuario + ' y la contraseña es: ' + contrasenia);

    // Validar los datos de los inputs
    validarUsuarioLogin(usuario, contrasenia);
}

function validarUsuarioLogin(usuario, contra) {
    let usuarioValido = false;
    for (let i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].nombre && contra === cuentas[i].password) {
            // Definir qué pasará si son correctos
            alert('DATOS CORRECTOS');
            usuarioValido = true;
            mostrarMenuHTML(i)
            return
        }
    }
    // Definir qué pasará si son incorrectos
    if (!usuarioValido) {
        alert('Datos incorrectos');
    }
}

function mostrarMenuHTML(posicionUsuario) {

    // Ocultar Login
    document.getElementById("inicio").style.display = "none";

    // Mostrar menú opciones
    document.getElementById("acciones").style.display = "block";

    // Mostrar nombre en el saludo
    // 1. obtener elemento a modificar a través de su id e insertar el nombre del usuario actual
    document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre


    document.getElementById('consultar').addEventListener('click', function() {

        document.getElementById('info').innerText = 'Tu saldo es de : $' + cuentas[posicionUsuario].saldo
    });
  
    document.getElementById('deposito').addEventListener('click', function() {





        let ingreso = document.getElementById('depositar').value
        ingreso = Number(ingreso); {
            if (cuentas[posicionUsuario].saldo + ingreso > 990) {
                alert('ERROR - No se puede tener mas de 990');
                return
            } else {
                cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + ingreso;
                alert('Tu deposito fue de: $' + ingreso);
                document.getElementById('depositar').style.display = "none";
                return
            }
        }
    });

    document.getElementById("retirar").addEventListener('click', function() {

        let retiro = document.getElementById('retiro').value
        retiro = Number(retiro); {

            if (cuentas[posicionUsuario].saldo - retiro < 10) {
                alert('ERROR - No puedes tener menos de 10');
                return
            } else {

                cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;

                alert('Tu retiro fue de: $' + retiro)

                document.getElementById('retiro').style.display = "none";
                return
            }
        }
    });
}