import Card from "./componentes/Card";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <header>
        <div className="content-fundacion">
          <h1>
            Artes<br></br>
            <span>Visuales</span>
          </h1>
          <p>
            "Desbloquea tu potencial creativo y haz realidad tus sueños
            artísticos. Apoyamos y potenciamos la gestión y producción cultural,
            brindando un escenario vibrante para artistas y procesos artísticos.
          </p>
          <div class="middle">
            <a href="" class="btn btn4">
              Hover Me
            </a>
            <a href="" class="btn btn1">
              Hover Me
            </a>
          </div>
        </div>
      </header>

      <article className="article-section-1">
        <div className="content-tarject">
          <div className="content-tarject-left">
            <img src="pexels-pixabay-209948.jpg" alt="" />
          </div>
          <div className="content-tarject-center">
            <img src="pexels-pixabay-209948.jpg" alt="" />
            <h2>Keet Cafe</h2>
          </div>
          <div className="content-tarject-right">
            <img src="pexels-pixabay-209948.jpg" alt="" />
          </div>
        </div>
        <div className="content-tarject-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            iste sunt. Laborum exercitationem, non corrupti amet dicta commodi
            ea repellat? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Veritatis, iste sunt. Laborum exercitationem, non corrupti
            amet dicta commodi ea repellat?
          </p>
        </div>
        <div class="text-box">
          <a href="#" class="btn3 btn3-white btn3-animate">
            click me
          </a>
        </div>
        <section className="section-1-tarjetas">
          <Card imgCard="img1.jpg" nombre="Articulo 1"></Card>
          <Card imgCard="img2.jpg" nombre="Articulo 2"></Card>
          <Card imgCard="img3.jpg" nombre="Articulo 3"></Card>
          <Card imgCard="img4.jpg" nombre="Articulo 4"></Card>
          <Card imgCard="img5.jpg" nombre="Articulo 5"></Card>
          <Card imgCard="img6.jpg" nombre="Articulo 6"></Card>
        </section>
      </article>
    </>
  );
}

export default App;
