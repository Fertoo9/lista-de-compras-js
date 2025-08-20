

// Ponemos un mensaje de Bienvenida

const BIENVENIDA = "📝 Bienvenido a tu lista de compras";

// Creamos una variable array para guardar los productos

let listaCompras = [];

// HAcemos una funcion para agregar los productos

function agregarProductos() {
    let producto;

    while (true) {
        producto = prompt("Anota un producto (o escribe 'salir' para terminar):");

        if (producto === null || producto.toLowerCase() === "salir") {
            break;
        }

        listaCompras.push(producto);
        alert("✅ " + producto + " agregado a la lista.");
    }
}

// Aca creamos una funcion para mostrar la lista actual

function mostrarLista() {
    if (listaCompras.length === 0) {
        alert("Tu lista de compras está vacía.");
    } else {
        let lista = "📌 Lista de compras:\n";
        for (let i = 0; i < listaCompras.length; i++) {
            lista += (i + 1) + ". " + listaCompras[i] + "\n";
        }
        alert(lista);
    }
}


function iniciar() {
    alert(BIENVENIDA);

    let seguirAnotando = true;

    while (seguirAnotando) {
        agregarProductos();
        mostrarLista();

        seguirAnotando = confirm("¿Quieres seguir anotando productos?");
    }

    if (listaCompras.length > 0) {
        alert("✅ Tu lista de compras final quedó anotada.");
        console.log("Lista de compras:", listaCompras);
    } else {
        alert("No anotaste ningún producto. 📭");
    }
}
