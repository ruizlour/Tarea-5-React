import './Peliazar.css';

let postersPeliculas = [
  {titulo:"Back to the future", link:"https://www.imdb.com/title/tt0088763/"},
  {titulo:"Top Gun", link:"https://www.imdb.com/title/tt0092099/"},
  {titulo:"Star Wars", link:"https://www.imdb.com/title/tt2930604"},
  {titulo:"Revenge of the Nerds", link:"https://www.imdb.com/title/tt0088000/"},
  {titulo:"Police Academy", link:"https://www.imdb.com/title/tt0087928/"},
  {titulo:"Avatar", link:"https://www.imdb.com/title/tt1630029"}
];
let peliculaElegida = postersPeliculas[Math.floor(Math.random() * 5)];
let tituloPelicula = peliculaElegida.titulo;
let linkPelicula = peliculaElegida.link;

function Peliazar () {
  return (
    <div className="PeliAzar">
    <h2>Consigna 1</h2>
        <h3>
          {tituloPelicula}
        </h3>
        <a
          className=""
          href = {linkPelicula}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </a>
    </div>
  );
}
export default Peliazar;
