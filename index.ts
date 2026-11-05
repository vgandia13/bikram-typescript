// Ejercicio 1
let nombre: string = "Ana";
let edad: number = 28;
let activo: boolean = true;
console.log(nombre, edad, activo);
// edad = "veintiocho"; // Error: Type 'string' is not assignable to type 'number'.

// Ejercicio 2
const precios: number[] = [12.5, 30, 8.99, 45];

function sumarPrecios(lista: number[]): number {
  return lista.reduce((total, precio) => total + precio, 0);
}
console.log(sumarPrecios(precios).toFixed(2)); // 96.49 (sin toFixed sale 96.49000000000001 por los decimales en coma flotante)

// Ejercicio 3
function presentar(nombre: string, apellido?: string): string {
  return apellido ? `Hola, ${nombre} ${apellido}` : `Hola, ${nombre}`;
}
console.log(presentar("Ana", "Pérez"));
console.log(presentar("Ana"));

// Ejercicio 4
function calcularDescuento(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje) / 100;
}
console.log(calcularDescuento(100, 20)); // 80

// Ejercicio 5
function mostrarId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}
mostrarId("usr-25"); // USR-25
mostrarId(25); // 25.00

// Ejercicio 6
type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string;
};

const teclado: Producto = { nombre: "Teclado", precio: 35, descripcion: "Teclado mecánico" };
const raton: Producto = { nombre: "Ratón", precio: 15 };

// Ejercicio 7
function mostrarProducto(producto: Producto): string {
  return `${producto.nombre}: ${producto.precio} €`;
}
console.log(mostrarProducto(teclado));
console.log(mostrarProducto(raton));

// Ejercicio 8
type EstadoTarea = "pendiente" | "en-proceso" | "completada";

let estado: EstadoTarea = "pendiente";
estado = "completada";
console.log(estado);
// estado = "cancelada"; // Error: Type '"cancelada"' is not assignable to type 'EstadoTarea'.

// Ejercicio 9
interface Persona {
  nombre: string;
  edad: number;
  ciudad?: string;
}

const persona1: Persona = { nombre: "Luis", edad: 30, ciudad: "Valencia" };
const persona2: Persona = { nombre: "Marta", edad: 25 };

function mostrarPersona(persona: Persona): void {
  console.log(`${persona.nombre}, ${persona.edad} años, ciudad: ${persona.ciudad ?? "desconocida"}`);
}
mostrarPersona(persona1);
mostrarPersona(persona2);

// Ejercicio 10
interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
  disponible: boolean;
}

const libros: Libro[] = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 471, disponible: true },
  { titulo: "1984", autor: "George Orwell", paginas: 328, disponible: false },
  { titulo: "El Quijote", autor: "Miguel de Cervantes", paginas: 1056, disponible: true },
];

function estaDisponible(libro: Libro): boolean {
  return libro.disponible;
}
console.log(libros.filter(estaDisponible).map((libro) => libro.titulo));

// Ejercicio 11
function buscarUsuario(id: number): string | undefined {
  return id === 1 ? "Ana" : undefined;
}

const usuarioEncontrado = buscarUsuario(1);
if (usuarioEncontrado) {
  console.log(usuarioEncontrado.toUpperCase());
} else {
  console.log("Usuario no encontrado");
}
console.log(buscarUsuario(2) ?? "Usuario no encontrado");

// Ejercicio 12
let dato: unknown = "hola";

function mostrarDato(valor: unknown): void {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase());
  } else {
    console.log("El dato no es un texto:", valor);
  }
}
mostrarDato(dato); // HOLA
dato = 42;
mostrarDato(dato); // El dato no es un texto: 42

// Ejercicio 13
type Usuario = {
  id: number;
  nombre: string;
  email: string;
  edad: number;
};

const cambios: Partial<Usuario> = { email: "nuevo@correo.com" };
const resumen: Pick<Usuario, "id" | "nombre"> = { id: 1, nombre: "Ana" };
console.log(cambios, resumen);

// Ejercicio 14
type UsuarioPublico = Omit<Usuario, "email">;

const usuarioPublico: UsuarioPublico = { id: 1, nombre: "Ana", edad: 28 };
console.log(usuarioPublico);

// Ejercicio 15
interface Configuracion {
  tema?: string;
  idioma?: string;
}

const configuracionCompleta: Required<Configuracion> = { tema: "oscuro", idioma: "es" };
console.log(configuracionCompleta);

const usuarioFijo: Readonly<Usuario> = { id: 2, nombre: "Luis", email: "luis@correo.com", edad: 30 };
console.log(usuarioFijo);
// usuarioFijo.nombre = "Pedro"; // Error: Cannot assign to 'nombre' because it is a read-only property.

// Ejercicio 16
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  ingresar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
    } else {
      console.log("Solo se pueden ingresar cantidades positivas");
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

const cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);
cuenta.ingresar(-20); // Se rechaza
console.log(cuenta.consultarSaldo()); // 150

// Ejercicio 17
interface Reproducible {
  reproducir(): void;
}

class Cancion implements Reproducible {
  reproducir(): void {
    console.log("🎵 Reproduciendo canción");
  }
}

class Video implements Reproducible {
  reproducir(): void {
    console.log("🎬 Reproduciendo vídeo");
  }
}

const reproducibles: Reproducible[] = [new Cancion(), new Video()];
reproducibles.forEach((elemento) => elemento.reproducir());

// Ejercicio 18
enum EstadoPedido {
  Pendiente,
  Enviado,
  Entregado,
}

function mensajePedido(estado: EstadoPedido): string {
  switch (estado) {
    case EstadoPedido.Pendiente:
      return "Tu pedido está pendiente";
    case EstadoPedido.Enviado:
      return "Tu pedido ha sido enviado";
    case EstadoPedido.Entregado:
      return "Tu pedido ha sido entregado";
  }
}
console.log(mensajePedido(EstadoPedido.Pendiente));
console.log(mensajePedido(EstadoPedido.Enviado));
console.log(mensajePedido(EstadoPedido.Entregado));

// Ejercicio 19
function primero<T>(lista: T[]): T | undefined {
  return lista[0];
}
console.log(primero([10, 20, 30])); // 10
console.log(primero(["a", "b", "c"])); // "a"
console.log(primero([])); // undefined

// Ejercicio 20
type Puntuaciones = Record<string, number>;

const puntuaciones: Puntuaciones = { Ana: 8, Luis: 9.5, Marta: 7 };

async function obtenerMensaje(datos: Puntuaciones): Promise<string> {
  let mejorAlumno = "";
  let mejorNota = -Infinity;
  for (const [alumno, nota] of Object.entries(datos)) {
    if (nota > mejorNota) {
      mejorAlumno = alumno;
      mejorNota = nota;
    }
  }
  return `La puntuación más alta es de ${mejorAlumno} con ${mejorNota}`;
}

obtenerMensaje(puntuaciones).then((mensaje) => console.log(mensaje));
