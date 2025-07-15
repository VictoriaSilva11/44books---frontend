import './Home.css';
import Header from './Header.tsx';
import Footer from './Footer.tsx'


function Home() {
  return (
    <>
    <Header />

      <section className="imagem-section">
        <img
          src="https://www.iamag.co/wp-content/uploads/2023/01/kieran-belshaw-dragonpitentrance-frontview-v002-scaled.jpg"
        />
      </section>

      <div className="mais-vendidos">
        <h1>Mais vendidos</h1>
      </div>
      <div className="livros">
        
        <div className="card">
          onde fica os livros
        </div>

      </div>
      <Footer />
    </>
  )
}


export default Home