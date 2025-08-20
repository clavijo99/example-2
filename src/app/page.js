export default function Home() {

  const name = "juan";
  var num = 1;

  function suma(a, b) {

  }

  const resta = () => { }

  suma(1, 2)



  const nums = [1, 2, 3, 4]

  const string = ['camilo', 'julian', 'andres', 'esteban', 'jose']

  const personas = [{ nombre: "juan", apellido: "mendez" },
  { nombre: "carlos", apellido: "hernandez" },
  { nombre: "brayan", apellido: "claros" }]

  const animales = [{ nombre: "lucas", raza: "criollo", categoria: { nombre: "lalalalalal", calificacion: 3 } },
  { nombre: "pedro", raza: "pitbull", categoria: { nombre: "m&ms", calificacion: 5 }, }]

  const productos = [{ id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
  { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
  { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
  { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
  { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },];

  const usuarios = [{ id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
  { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
  { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
  { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
  { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },];

  const cursos = [{ id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
  { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
  { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
  { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
  { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "StateManagement" }] },];

  const pedidos = [{ id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
  { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
  { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
  { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
  { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },];

  const blogs = [{
    id: 1,
    titulo: "Aprendiendo React",
    autor: { nombre: "Ana", pais: "Colombia" },
    categorias: ["JavaScript", "Frontend"],
    comentarios: [{
      usuario: "Luis", texto: "Muy útil",
      respuestas: [{
        usuario: "Marta", texto: "Totalmente de acuerdo",
        reacciones: [{ tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } }, { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } }]
      }]
    }]
  },
  {
    id: 2,
    titulo: "Next.js SSR",
    autor: { nombre: "Luis", pais: "México" },
    categorias: ["JavaScript", "SSR"],
    comentarios: [{
      usuario: "Marta", texto: "Interesante",
      respuestas: [{
        usuario: "Ana", texto: "Lo probaré",
        reacciones: [{ tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } }]
      }]
    }]
  },
  {
    id: 3,
    titulo: "Node.js API",
    autor: { nombre: "John", pais: "USA" },
    categorias: ["Backend", "API"],
    comentarios: [{
      usuario: "Pedro", texto: "Me sirvió mucho",
      respuestas: [{
        usuario: "Luis", texto: "Gracias por compartir",
        reacciones: [{ tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } }]
      }]
    }]
  },
  {
    id: 4,
    titulo: "Django ORM",
    autor: { nombre: "Marta", pais: "España" },
    categorias: ["Backend", "Python"],
    comentarios: [{
      usuario: "Ana", texto: "Claro y conciso",
      respuestas: [{
        usuario: "John", texto: "Lo usaré en mi proyecto",
        reacciones: [{ tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } }]
      }]
    }]
  },
  {
    id: 5,
    titulo: "Flutter Widgets",
    autor: { nombre: "Pedro", pais: "Portugal" },
    categorias: ["Mobile", "UI"],
    comentarios: [{
      usuario: "Luis", texto: "Genial explicación",
      respuestas: [{
        usuario: "Marta", texto: "Muy claro todo",
        reacciones: [{ tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } }]
      }]
    }]
  }];


  resta()


  return (
    <div>
      <p className=" text-blue-100" >hola</p>
      <h1>hello</h1>

      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAeFBMVEX33x4AAAD/6B/85B/CshiIfBH64R7/5h/n0RwtLAX/7CD/7iD/6h/Uwhr03R7u2R3JuBlEQQlyag44NQepnBVhWgxqYg3hzRyDeBC5qhdPSgqShxK0pRYZGAPbyBt+dBAkIgWcjxMmJwUeHwQPEQNbVAwHBwGjlRQWFzcqAAAEeklEQVR4nO2a24KqIBRABQyoxHtZak23qf//w2OdqQQRzaSZh70eesjbEja42eo4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAbWsewG8He/IqHmWm/UQh4nUB/Ocr8LNzHeTJNosUqFdzBNr2Ie5g+ORZYpzTjxQLVOSwvgWdPi7jS1SZNKUq230hDkelu4DNSBH/plCp2pa3G6pLCImlxqlj4dqw6pLA4tTshlLcMDKtSzG2xuXO00lZGKeofO6TQknxaytEOO5mV91kptu52Qigcv61MUvjcRyrhn5Tq11AoyUaPdVNLLZXL50XpuulqWv9vU1iYQdulKD9Im85pgBkhmATF888o++zoI0Jup/Xsbuvdt5xKO8lCuxRLpS2rWpPg/wctMmZDySTlraQt0sjHlfChnNtKXgxSUpxv5OeJlyx9G9HUKSXldRu5VWhgqee6pOSWUvIBq1m6QSqWtrg2m6a3FC6kLUvbK5heUqyUtqD9/A9I0a0shQqL462vlMPV7HwhZp/pQ4MUaS5jFsL5RLybpHSpy9L1mPXmMqUu86nGCu1SbltrSDqcrLi1x16nlOPEeiuEvgWxOBTNS6ygTaoKrszeUOxYjJoWyNbSqa5lOwnbpdBubym0OgscoWmRHAkr5aDuUlCmnRh+OLoWFsh9imZ4b7BCewtt1S3lUCZyg9Vl/HDvIVXtNF8bSh3p6D3YS6qaG3y3taJ32o49j/aUqnachW3Fz3xkp/5S1a40KzZaq3LksHpB6rpgd1JdzCcj999LUteiuuM2tc7uuFYvSlUwb93QKn5b6hpchSIV+b8u9Si7PAn+gJSjPnrEqP3X49mnPS6IpOPWH5Uigb6AqFSv0ndmKjpT3lso6yhFinoiP2lLiEqd751cAWfLWL5x5eTyS0jGr+WgWNdUSqVhuBTB6RGd5Zhk8uiudwPD+93/P2fqmaruaz/uFSgRtxzyIHWHL7+HfVY2CV0/Uk5NbcqXJ9CBUzp+LOLqTU0z6dxo+yNMZ1mtkLdZq2Ugr9Qf9xLEqcXO5ZGVUSwnbwmnP67y4EKTQA42ZZFzGjJ5zoV08YvHbl8hMCUy0PLeEOobEJS7c3z7bqH68eZ7JYVZDHDylftGm1JkPBOpmh7de5ZyzQusItzyIODbcNLYlA4IKdrMGU9JkjQv/AgNoj5yb+yiPI8Ozf83Q0KKBvqMUSV6xjM2LWBU4kHlUHzpdfLawCZb42t2mUFjr2qrRuRqkMJVHWAGhq78enWgvFTCZfcRN6LBGQLJdp03rCwqcb+2St74YKIzSFaNG8ah4ZOSO1P+TjmIZZHp5F+aEUT81vrinTh4L70j7SXMaj2pPTeloWZaerJJydtlMy9sqVN8ZW1FCkLK1hnrpDwRB0J88d0I+F0sqKEPmC+WmrrZJtoH7zfTj5bH08kzuM75pORdZV4y891LXI/I/CsV3pjVMkqoH3DhuutQ8MCnfW6XEuLcDlqXpXs7ilkoo1dXqXjx08jrQYyRsToNAAAA+Ov8A4DIOPd0zau5AAAAAElFTkSuQmCC"></img>

      {num}

      <p>{1 + 2}</p>

      <h2>{name}</h2>

      -----------------------------------
      {
        nums.map((v, i) => (
          <h1 key={i}> {v}</h1>
        )
        )
      }

      -----------------------------------
      {
        string.map((v, i) => (
          <h1 key={i}>{v}</h1>
        )
        )
      }

      -----------------------------------
      {
        personas.map((v, i) => (
          <h1 key={i}> {v.nombre} {v.apellido}</h1>
        )
        )
      }

      -----------------------------------
      {
        animales.map((v, i) => (
          <h1 key={i}>{v.nombre} {v.raza} {v.categoria.nombre} {v.categoria.calificacion}</h1>
        )
        )
      }

      -----------------------------------
      {
        productos.map((v, i) => (
          <h1 key={i}>{v.id} {v.nombre} - ${v.precio} - {v.categoria.id} "{v.categoria.nombre}"</h1>
        )
        )
      }

      -----------------------------------
      {
        usuarios.map((v, i) => (
          <h1 key={i}>{v.id} {v.nombre} - {v.direccion.calle} "{v.direccion.ciudad}" "{v.direccion.pais}"</h1>
        )
        )
      }

      -----------------------------------
      {
        cursos.map((v, i) => (
          <h1 key={i}>{v.id} {v.nombre} {v.modulos.map((modulos, j) => (
            <p key={j}> - {modulos.nombre} </p>
          ))}</h1>
        )
        )
      }

      -----------------------------------
      {pedidos.map((v, i) => (
        <div key={i}>
          <h1>{v.id} - {v.cliente}</h1>

          {v.productos.map((m, i) => (
            <h2 key={i}> {m.nombre} - {m.cantidad}</h2>
          ))}
        </div>
      ))}

      -----------------------------------
      {blogs.map((v, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h1>Título: {v.titulo}</h1>

          <p>Aut@r: {v.autor.nombre} - nacionalidad: {v.autor.pais}</p>

          <h3>Categorías:</h3> <ul> {v.categorias.map((cat, j) => (<li key={j}>{cat}</li>))}</ul>

          <h3>Comentarios:</h3>
          {v.comentarios.map((coment, k) => (
            <div key={k} style={{ marginLeft: "20px" }}>
              <p> {coment.usuario}: {coment.texto}</p>

              {coment.respuestas.map((Res, r) => (
                <div key={r} style={{ marginLeft: "20px" }}>
                  <p> {Res.usuario}: {Res.texto}</p>

                  {Res.reacciones.map((rea, x) => (
                    <p key={x} style={{ marginLeft: "20px" }}>
                      {rea.tipo} por {rea.usuario.nombre} "{rea.usuario.rol}"
                    </p>
                  )
                  )
                  }
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}


    </div>
  );
}