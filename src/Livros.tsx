import { Link } from 'react-router-dom';
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './Livros.css'

function Livros() {
  return (
    <>
      <Header />
      <section className="imagem-section">
        <img
          src="https://preview.redd.it/i-made-a-stormlight-arc-1-4k-wallpaper-by-combining-all-the-v0-gmanmn7emisd1.png?auto=webp&s=3fdf7e3fc4b41ab549d556705a1ba9dd057b5ebb"
        />
      </section>

      <div className="livros">
        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71KrPChpFXL.jpg"
          />
          <h3>Não é como nos filmes</h3>
          <h4>Lynn Painter</h4>
          <p>
            <u>R$ 45,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81aMTz266YL._UF894,1000_QL80_.jpg"
          />
          <h3>Herdeiro das trevas</h3>
          <h4>C. S. Pacat</h4>
          <p>
            <u>R$ 55,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81vTk3hdXEL._UF894,1000_QL80_.jpg"
          />
          <h3>Manual de assassinato para boas garotas</h3>
          <h4>Holly Jackson</h4>
          <p>
            <u>R$ 59,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91G2hnAVQgL._UF1000,1000_QL80_.jpg"
          />
          <h3>Alchemised</h3>
          <h4>SenLinYu</h4>
          <p>
            <u>R$ 97,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71xbS00EUUL._UF1000,1000_QL80_.jpg"
          />
          <h3>Manual das donas de casa caçadoras de vampiros</h3>
          <h4>Grady Hendrix</h4>
          <p>
            <u>R$ 59,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81FH6q0EqYS.jpg"
          />
          <h3>O príncipe cruel</h3>
          <h4>Holly Black</h4>
          <p>
            <u>R$ 45,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81Q4iEvgkSL.jpg"
          />
          <h3>Aprendiz do vilão</h3>
          <h4>Hannah Nicole Maehrer</h4>
          <p>
            <u>R$ 48,99</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71Jt2eJxI6L._UF1000,1000_QL80_.jpg"
          />
          <h3>Morte no Nilo</h3>
          <h4>Agatha Christie</h4>
          <p>
            <u>R$ 35,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/816Udvs9O7L.jpg"
          />
          <h3>Tudo é rio</h3>
          <h4>Carla Madeira</h4>
          <p>
            <u>R$ 59,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81Jz5PrvZFL.jpg"
          />
          <h3>Ninguém vai te ouvir gritar</h3>
          <h4>Mark Miller</h4>
          <p>
            <u>R$ 44,50</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/8137g6aoSgL.jpg"
          />
          <h3>Um experimento de amor em Nova York</h3>
          <h4>Elena Armas</h4>
          <p>
            <u>R$ 59,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71X245OYRBL._UF1000,1000_QL80_.jpg"
          />
          <h3>A vida invisível de Addie Larue</h3>
          <h4>V. E. Schawb</h4>
          <p>
            <u>R$ 69,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81w-GCfqtjL.jpg"
          />
          <h3>Eu e esse meu coração</h3>
          <h4>C. C. Hunter</h4>
          <p>
            <u>R$ 34,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91rOgmnZpJS.jpg"
          />
          <h3>Mrs. Dalloway</h3>
          <h4>Virginia Woolf</h4>
          <p>
            <u>R$ 36,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81qMLIEhMYL._UF1000,1000_QL80_.jpg"
          />
          <h3>Corte de espinhos e rosas</h3>
          <h4>Sarah J. Maas</h4>
          <p>
            <u>R$ 55,70</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91ocgbfq55L.jpg"
          />
          <h3>Misery</h3>
          <h4>Stephen King</h4>
          <p>
            <u>R$ 68,30</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91gtU+6jHjL.jpg"
          />
          <h3>O horizonte mora em um dia cinza</h3>
          <h4>Tatielle Katluryn</h4>
          <p>
            <u>R$ 44,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81E-GVkEsrL._UF894,1000_QL80_.jpg"
          />
          <h3>O deus e a raposa</h3>
          <h4>Sophie Kim</h4>
          <p>
            <u>R$ 79,80</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/61zgVBVoqqL.jpg"
          />
          <h3>A morte de Ivan Ilitch</h3>
          <h4>Lev Tolstói</h4>
          <p>
            <u>R$ 31,45</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81LMf5x28kL._UF894,1000_QL80_.jpg"
          />
          <h3>Coisas óbvias sobre o amor</h3>
          <h4>Elayne Baeta</h4>
          <p>
            <u>R$ 56,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/9142NRRNO9L.jpg"
          />
          <h3>A sombra da Rainha</h3>
          <h4>E. K. Johnston</h4>
          <p>
            <u>R$ 55,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71L28YvPobL._UF1000,1000_QL80_.jpg"
          />
          <h3> Os Miseráveis</h3>
          <h4>Victor Hugo</h4>
          <p>
            <u>R$ 115,99</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81O6eWVPaiL.jpg"
          />
          <h3>Xeque-mate</h3>
          <h4>Ali Hazelwood</h4>
          <p>
            <u>R$ 44,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91dON4cD4dL._UF1000,1000_QL80_.jpg"
          />
          <h3>Mansão Gallant</h3>
          <h4>V. E. Schwab</h4>
          <p>
            <u>R$ 76,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81mxxQTX0wL.jpg"
          />
          <h3>Um amor problemático de verão</h3>
          <h4>Ali Hazelwood</h4>
          <p>
            <u>R$ 44,59</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://www.planetadelivros.com.br/usuaris/libros/fotos/391/m_libros/portada_quarta-asa_rebecca-yarros_202401101822.jpg"
          />
          <h3>Quarta asa</h3>
          <h4>Rebecca Yarros</h4>
          <p>
            <u>R$ 97,50</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91L6DCEfDuL._UF1000,1000_QL80_.jpg"
          />
          <h3>Era uma vez um coração partido</h3>
          <h4>Stephanie Garber</h4>
          <p>
            <u>R$ 49,90</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81nTLN-kz7L.jpg"
          />
          <h3>Harry Potter e o cálice de fogo</h3>
          <h4>J. K. Rowling</h4>
          <p>
            <u>R$ 55,70</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81XvsucSLVL.jpg"
          />
          <h3>No fundo é amor</h3>
          <h4>Ali Hazelwood</h4>
          <p>
            <u>R$ 45,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/815bfY-u6-L.jpg"
          />
          <h3>O massacre da família Hope</h3>
          <h4>Riley Sager</h4>
          <p>
            <u>R$ 37,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81JPLgU-EgS._UF1000,1000_QL80_.jpg"
          />
          <h3>O castelo animado</h3>
          <h4>Diana Wynne Jones</h4>
          <p>
            <u>R$ 60,51</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71i-HM1ZrlL.jpg"
          />
          <h3>Não é amor</h3>
          <h4>Ali Hazelwood</h4>
          <p>
            <u>R$ 45,99</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/8149sHa46sL.jpg"
          />
          <h3>Trono de vidro</h3>
          <h4>Sarah J. Maas</h4>
          <p>
            <u>R$ 59,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/916WkSH4cGL.jpg"
          />
          <h3>Crime e Castigo</h3>
          <h4>Fiódor Dostoiévski</h4>
          <p>
            <u>R$ 65,23</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/810NKENMWoL._UF1000,1000_QL80_.jpg"
          />
          <h3>Divinos rivais</h3>
          <h4>Rebecca Ross</h4>
          <p>
            <u>R$ 36,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81F956bHBgL.jpg"
          />
          <h3>Warbreaker: O sopro dos deuses</h3>
          <h4>Brandon Sanderson</h4>
          <p>
            <u>R$ 120,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81-m2B4F9hL._UF1000,1000_QL80_.jpg"
          />
          <h3>Casa estranhas</h3>
          <h4>Uketsu</h4>
          <p>
            <u>R$ 33,97</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71p66yY4htL.jpg"
          />
          <h3>Caraval</h3>
          <h4>Stephanie Garber</h4>
          <p>
            <u>R$ 56,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/81wl2xIOPUL._UF894,1000_QL80_.jpg"
          />
          <h3>Herdeiros do tempo</h3>
          <h4>Adrian Tchaikovsky</h4>
          <p>
            <u>R$ 47,00</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71pw2IDO+7L.jpg"
          />
          <h3>Vou te receitar um gato</h3>
          <h4>Ishida Syou</h4>
          <p>
            <u>R$ 36,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71MJemvdfPL._UF894,1000_QL80_.jpg"
          />
          <h3>Amanhecer na colheita</h3>
          <h4>Suzanne Collins</h4>
          <p>
            <u>R$ 59,99</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/71y3p559-TL.jpg"
          />
          <h3>Intermezzo</h3>
          <h4>Sally Rooney</h4>
          <p>
            <u>R$ 53,80</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91mNdryjTlL.jpg"
          />
          <h3>Heartstoper 3: Um passo adiante</h3>
          <h4>Alice Oseman</h4>
          <p>
            <u>R$ 44,50</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/618fXbK+OkL._UF1000,1000_QL80_.jpg"
          />
          <h3>Crepúsculo</h3>
          <h4>Stephenie Meyer</h4>
          <p>
            <u>R$ 45,40</u>
          </p>
        </div>

        <div className="card">
          <img
            src="https://m.media-amazon.com/images/I/91A88pW0+CL._UF1000,1000_QL80_.jpg"
          />
          <h3>Alice no Páis das Maravilhas</h3>
          <h4>Lewis Carroll</h4>
          <p>
            <u>R$ 55,89</u>
          </p>
        </div>

      </div>
      
      <Footer />
    </>
  )
}


export default Livros