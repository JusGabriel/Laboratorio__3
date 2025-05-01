// Tipos de datos primitivos
let nombreProducto = "Teclado para juegos SteelSeries Apex 3 TKL"; // string
let marca = "SteelSeries"; // string
let precio = 34.98; // number
let precioOriginal = 44.99; // number
let disponible = true; // boolean
let color = "Negro"; // string
let numeroTeclas = 87; // number
let descuento = null; // null
let stock; // undefined
let estilo = "Silencioso – Táctil y silencioso"; // string
let conectividad = "con cable"; // string
let descripcion = "Multimedia, Juegos"; // string
let retroiluminacion = "RGB"; // string
let resistenteAguaPolvo = true; // boolean
let antiGhosting = true; // boolean
let ruedaVolumen = true; // boolean
let calificacion = 4.6; // number
let numeroCalificaciones = 13097; // number
let comprasMensuales = 1000; // number
let envioInternacional = true; // boolean
let envioCosto = 13.48; // number

// Otros tipos de datos
let idProducto = Symbol("tecladoSteelSeries"); // Symbol
let pulsacionesMax = 20000000000000000000n; // BigInt

// Array - características
let caracteristicas = [
    "Diseño compacto sin teclado numérico",
    "Interruptores ultrasilenciosos con anti-ghosting",
    "Resistente al agua y al polvo (IP32)",
    "Iluminación RGB de 8 zonas",
    "Rodillo de volumen y teclas multimedia"
];

// Array - usos recomendados
let usos = ["Juegos", "Multimedia"];

// Array - dispositivos compatibles
let dispositivosCompatibles = ["Consola de videojuegos"];

// Array - colores disponibles
let coloresDisponibles = ["Negro", "Azul Híbrido"];

// Array - modelos disponibles
let opcionesModelos = ["Apex 3", "Apex 3 TKL", "Apex 5"];

// Objeto - compatibilidad
let compatibilidad = {
    sistemasOperativos: ["Windows", "Mac OS X"],
    consolas: ["Xbox Series S", "Xbox Series X", "PS4", "PS5"]
};

// Objeto - teclado completo
let teclado = {
    id: idProducto,
    nombre: nombreProducto,
    marca: marca,
    precio: precio,
    precioOriginal: precioOriginal,
    descuento: descuento,
    disponible: disponible,
    stock: stock,
    color: color,
    coloresDisponibles: coloresDisponibles,
    numeroTeclas: numeroTeclas,
    estilo: estilo,
    conectividad: conectividad,
    descripcion: descripcion,
    retroiluminacion: retroiluminacion,
    colorRetroiluminacion: retroiluminacion,
    resistenteAguaPolvo: resistenteAguaPolvo,
    antiGhosting: antiGhosting,
    ruedaVolumen: ruedaVolumen,
    caracteristicas: caracteristicas,
    usos: usos,
    dispositivosCompatibles: dispositivosCompatibles,
    opcionesModelos: opcionesModelos,
    compatibilidad: compatibilidad,
    calificacion: calificacion,
    numeroCalificaciones: numeroCalificaciones,
    comprasMensuales: comprasMensuales,
    envioInternacional: envioInternacional,
    envioCosto: envioCosto,
    pulsacionesGarantizadas: pulsacionesMax
};

// Función para mostrar resumen del producto
function mostrarResumen(teclado) {
    console.log(`Teclado: ${teclado.nombre}`);
    console.log(`Marca: ${teclado.marca}`);
    console.log(`Precio actual: $${teclado.precio} (Antes: $${teclado.precioOriginal})`);
    console.log(`Disponible: ${teclado.disponible ? "Sí" : "No"}`);
    console.log(`Estilo: ${teclado.estilo}`);
    console.log(`Compatible con: ${teclado.compatibilidad.sistemasOperativos.join(", ")} y consolas`);
}

mostrarResumen(teclado);
