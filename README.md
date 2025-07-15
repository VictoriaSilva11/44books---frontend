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
  img TEXT
);

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100),
  preco DECIMAL(10, 2),
  genero VARCHAR(50),
  ano_publicacao INT,
  img TEXT,
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES autores(id) ON DELETE CASCADE
);
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
