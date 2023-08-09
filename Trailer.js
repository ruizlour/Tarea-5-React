let trailersPeliculas = [
  { titulo: "Back to the future", link: "https://www.youtube.com/embed/kKkag5TyLDk" },
  { titulo: "Top Gun", link: "https://www.youtube.com/embed/qqWox8bBB8E" },
  { titulo: "Star Wars", link: "https://www.youtube.com/embed/8Qn_spdM5Zg" },
  { titulo: "Revenge of the Nerds", link: "https://www.youtube.com/embed/kIZH5TKnEeg" },
];
let trailerElegido = trailersPeliculas[Math.floor(Math.random() * 5)];
let tituloPelicula = trailerElegido.titulo;
let linkPelicula = trailerElegido.link;

function TrailerAzar() {
  return (
    <div className="TrailerAzar">
      <hr></hr>
      <h2>Consigna 3</h2>
      <h3>
        {tituloPelicula}
      </h3>
      <iframe
        width="560"
        height="315"
        src={linkPelicula}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div >
  );
}


export default TrailerAzar;
