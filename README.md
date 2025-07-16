# 📚 44Books

Projeto **44Books**, desenvolvido com **React**, **Fastify** e **MySQL**. O sistema permite o cadastro, visualização, edição e exclusão de livros e autores.

##  Tecnologias Utilizadas

### Frontend
- **React** com TypeScript
- **React Router Dom** para navegação
- CSS puro com design responsivo

### Backend
- **Fastify** (servidor HTTP)
- **MySQL** (banco de dados relacional)
- **mysql2** para comunicação com o banco de dados

##  Estrutura de Pastas

```
44books/
├── public/
├── src/
│   ├── Admin.tsx         
│   ├── Home.tsx          
│   ├── Livros.tsx        
│   ├── Header.tsx        
│   ├── Footer.tsx        
│   ├── main.tsx          
│   ├── App.css           
│   ├── Admin.css         
│   ├── Home.css          
│   ├── Livros.css        
│   ├── Header.css        
│   └── Footer.css        
├── index.html            
├── vite.config.ts        
├── tsconfig.json         
├── package.json          
└── README.md             
```

## Funcionalidades

###  Admin (`/Admin`)
- Cadastrar, editar e excluir **autores**
- Cadastrar, editar e excluir **livros**
- Exclusão de autor remove seus livros

###  Home (`/Home`)
- Banner em tela cheia
- Exibição dos autores cadastrados

###  Livros (`/Livros`)
- Banner em tela cheia
- Lista de livros com capa, título, autor, gênero e preço

## ⚙ Instruções de Uso

### Requisitos
- Node.js
- MySQL
- Vite

### Instalação

1. Clone o projeto ou faça donwload:
```bash
git clone https://github.com/seu-usuario/44books.git
cd 44books
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
```sql
CREATE DATABASE books44;

USE books44;

CREATE TABLE autores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  nacionalidade VARCHAR(100),
  imagemUrl TEXT
);

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  preco DECIMAL(10, 2),
  genero VARCHAR(50),
  ano_publicacao INT,
  imagemUrl TEXT,
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES autores(id) ON DELETE CASCADE
);

-- Inserção de autores
INSERT INTO autores (id, nome, nacionalidade, imagemUrl) VALUES 
(3, 'Ali Hazelwood', 'Italiana', 'https://alihazelwood.com/wp-content/uploads/2022/01/IMG_3527-scaled.jpeg'),
(4, 'Allison Saft', 'Estadunidense', 'https://t1.bookpage.com/wp-content/uploads/2022/02/25115313/MUG-Allison-Saft-CREDIT-Lisa-DeNeffe_WEB.jpg'),
(7, 'Lynn Painter', 'Estadunidense', 'https://images.gr-assets.com/authors/1577135205p8/19322026.jpg'),
(12, 'Holly Black', 'Estadunidense', 'https://blackholly.com/wp-content/uploads/2014/05/Holly-Black1-683x1024.jpg'),
(14, 'Agatha Christie', 'Britânica', 'https://m.media-amazon.com/images/M/MV5BMTU3OTYzMzY4NV5BMl5BanBnXkFtZTcwMDIxOTIyOA@@._V1_.jpg'),
(23, 'Sophie Kim', 'Estadunidense', 'https://cdn1.booknode.com/author_picture/5366/sophie-kim-5366476-330-540.jpg'),
(25, 'Elayne Baeta', 'Brasileira', 'https://revistabellas.com.br/wp-content/uploads/2024/04/Elayne-Baeta.jpg'),
(29, 'Stephanie Garber', 'Estadunidense', 'https://www.yabookscentral.com/wp-content/uploads/2023/10/AUTHOR-PHOTO_StephanieGarber_c-Etched-in-Time-Photography-scaled.jpg'),
(34, 'Rebecca Ross', 'Estadunidense', 'https://images.gr-assets.com/authors/1655904642p8/14926516.jpg'),
(40, 'Sally Rooney', 'Irlandesa', 'https://thekit.ca/wp-content/uploads/2021/08/2021-sally-thekit.ca-feature-705x849.jpg');


INSERT INTO livros (id, titulo, preco, genero, ano_publicacao, imagemUrl, autor_id) VALUES 
(3, 'Noiva', 59.90, 'Romance', 2024, 'https://m.media-amazon.com/images/I/812RDxFDd8L._SL1500_.jpg', 3),
(4, 'Asas reluzentes', 65.00, 'Romance', 2025, 'https://m.media-amazon.com/images/I/813BWVj4ATL._SL1500_.jpg', 4),
(6, 'Não é como nos filmes', 45.90, 'Romance', 2025, 'https://m.media-amazon.com/images/I/71KrPChpFXL.jpg', 7),
(11, 'O príncipe cruel', 45.00, 'Fantasia', 2018, 'https://m.media-amazon.com/images/I/81FH6q0EqYS.jpg', 12),
(13, 'Morte no Nilo', 35.90, 'Mistério', 2020, 'https://m.media-amazon.com/images/I/71Jt2eJxI6L._UF1000,1000_QL80_.jpg', 14),
(23, 'O deus e a raposa', 79.80, 'Fantasia', 2025, 'https://m.media-amazon.com/images/I/81E-GVkEsrL._UF894,1000_QL80_.jpg', 23),
(25, 'Coisas óbvias sobre o amor', 56.40, 'Romance', 2024, 'https://m.media-amazon.com/images/I/81LMf5x28kL._UF894,1000_QL80_.jpg', 25),
(28, 'Xeque-mate', 44.90, 'Romance', 2024, 'https://m.media-amazon.com/images/I/81O6eWVPaiL.jpg', 3),
(30, 'Um amor problemático de verão', 44.59, 'Romance', 2025, 'https://m.media-amazon.com/images/I/81mxxQTX0wL.jpg', 3),
(32, 'Era uma vez um coração partido', 49.90, 'Fantasia', 2021, 'https://m.media-amazon.com/images/I/91L6DCEfDuL._UF1000,1000_QL80_.jpg', 29),
(34, 'No fundo é amor', 45.40, 'Romance', 2025, 'https://m.media-amazon.com/images/I/81XvsucSLVL.jpg', 3),
(37, 'Não é amor', 45.99, 'Romance', 2025, 'https://m.media-amazon.com/images/I/71i-HM1ZrlL.jpg', 3),
(40, 'Divinos rivais', 36.40, 'Romance', 2024, 'https://m.media-amazon.com/images/I/810NKENMWoL._UF1000,1000_QL80_.jpg', 34),
(43, 'Caraval', 56.40, 'Fantasia', 2023, 'https://m.media-amazon.com/images/I/71p66yY4htL.jpg', 29),
(47, 'Intermezzo', 68.30, 'Drama', 2024, 'https://m.media-amazon.com/images/I/71y3p559-TL.jpg', 40);




```

4. Inicie o backend Fastify:
```bash
npm run dev
```

5. Inicie o frontend:
```bash
npm run dev
```

##  Rotas da API

- `GET /autores`
- `POST /autores`
- `PUT /autores/:id`
- `DELETE /autores/:id`

- `GET /livros`
- `POST /livros`
- `PUT /livros/:id`
- `DELETE /livros/:id`

##  Desenvolvedora

**Victória de Almeida Silva**  
