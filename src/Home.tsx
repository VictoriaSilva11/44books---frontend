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
          <img
            src="https://m.media-amazon.com/images/I/81zN7udGRUL.jpg"
            alt="Livro Duna I de Frank Herbert"
          />
          <h3>Duna</h3>
          <h4>Frank Herbert</h4>
          <p>
            <u>R$ 80,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/818yNY0mMZL._UF1000,1000_QL80_.jpg"
            alt="Livro Fogo & Sangue do George R. R. Martin"
          />
          <h3>Fogo & Sangue</h3>
          <h4>George R. R. Martin</h4>
          <p>
            <u>R$ 95,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/812RDxFDd8L.jpg"
            alt="Livro Noiva da Ali Hazelwood"
          />
          <h3>Noiva</h3>
          <h4>Ali Hazelwood</h4>
          <p>
            <u>R$ 59,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/813BWVj4ATL._UF894,1000_QL80_.jpg"
            alt="Livro Asas Reluzentes da Allison Saft"
          />
          <h3>Asas Reluzentes</h3>
          <h4>Allison Saft</h4>
          <p>
            <u>R$ 65,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/811jwwcitKL._UF1000,1000_QL80_.jpg"
            alt="Livro Ascenção das Trevas da C. S. Pacat"
          />
          <h3>Ascenção das Trevas</h3>
          <h4>C. S. Pacat</h4>
          <p>
            <u>R$ 59,90</u>
          </p>
        </div>
      </div>
      <div className="destaque">
        <div className="card-livro">
          <img
            className="produto-img"
            src="https://m.media-amazon.com/images/I/81k8w1bmXLL._UF894,1000_QL80_.jpg"
            alt="Box de Trono de Vidro da Sarah J. Maas"
          />
          <h2>Box Trono de Vidro</h2>
          <h4>Sarah J. Maas</h4>
          <p>
            <u>R$ 389,00</u>
          </p>
        </div>

        <div className="card-pessoa">
          <img
            className="modelo-img"
            src="https://indicandolivros.com.br/wp-content/uploads/2022/08/Sarah-J-Maas.jpeg"
            alt="Imagem da Sarah J. Maas, autora de Trono de Vidro, Acotar e outros best sellers"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}


export default Home