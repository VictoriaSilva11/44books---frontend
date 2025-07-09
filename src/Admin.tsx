import { useState, useEffect } from 'react';

interface Livro {
  id: number;
  titulo: string;
  preco: number;
  genero: string;
  ano_publicacao: number;
  autor_id: number;
  autor_nome: string;
  nacionalidade: string;
}

interface Autor {
  id: number;
  nome: string;
  nacionalidade: string;
}

export default function Livros() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [autores, setAutores] = useState<Autor[]>([]);
  const [relatorio, setRelatorio] = useState<Livro[]>([]);
  const [form, setForm] = useState({
    titulo: '',
    preco: '',
    genero: '',
    ano_publicacao: '',
    autor_id: ''
  });

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const [livrosRes, autoresRes, relatorioRes] = await Promise.all([
        fetch('http://localhost:3000/livros'),
        fetch('http://localhost:3000/autores'),
        fetch('http://localhost:3000/relatorio')
      ]);
      
      setLivros(await livrosRes.json());
      setAutores(await autoresRes.json());
      setRelatorio(await relatorioRes.json());
    } catch (erro) {
      console.error('Erro ao carregar dados:', erro);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          preco: parseFloat(form.preco),
          ano_publicacao: parseInt(form.ano_publicacao),
          autor_id: parseInt(form.autor_id)
        })
      });
      
      if (response.ok) {
        setForm({
          titulo: '',
          preco: '',
          genero: '',
          ano_publicacao: '',
          autor_id: ''
        });
        carregarDados();
      }
    } catch (erro) {
      console.error('Erro ao adicionar livro:', erro);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Gerenciamento de Livros</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>Adicionar Livro</h2>
        <div style={{ marginBottom: '10px' }}>
          <label>Título: </label>
          <input
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Preço: </label>
          <input
            type="number"
            name="preco"
            value={form.preco}
            onChange={handleChange}
            step="0.01"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Gênero: </label>
          <input
            type="text"
            name="genero"
            value={form.genero}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Ano: </label>
          <input
            type="number"
            name="ano_publicacao"
            value={form.ano_publicacao}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Autor: </label>
          <select
            name="autor_id"
            value={form.autor_id}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="">Selecione um autor</option>
            {autores.map(autor => (
              <option key={autor.id} value={autor.id}>
                {autor.nome} ({autor.nacionalidade})
              </option>
            ))}
          </select>
        </div>
        
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
          Adicionar Livro
        </button>
      </form>

      <div style={{ marginBottom: '30px' }}>
        <h2>Lista de Livros</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Título</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Autor</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Preço</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Gênero</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ano</th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livro => (
              <tr key={livro.id} style={{ border: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{livro.titulo}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{livro.autor_nome}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>R$ {livro.preco}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{livro.genero}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{livro.ano_publicacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Relatório Completo (INNER JOIN)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Título</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Autor</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nacionalidade</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Gênero</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ano</th>
            </tr>
          </thead>
          <tbody>
            {relatorio.map(item => (
              <tr key={item.id} style={{ border: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.titulo}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.autor_nome}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.nacionalidade}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.genero}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.ano_publicacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}