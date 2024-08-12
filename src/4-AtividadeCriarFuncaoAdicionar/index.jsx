// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Produto A', preco: 'R$ 10,000' },
    { id: 2, nome: 'Produto B', preco: 'R$ 20,000' },
    { id: 3, nome: 'Produto C', preco: 'R$ 30,000' },
    { id: 4, nome: 'Produto D', preco: 'R$ 40,000' },
    { id: 5, nome: 'Produto E', preco: 'R$ 50,000' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
  }

  return (
    <div>
         <h1>MotoFlow</h1>

          {
         listaProdutos.map((produto)=>
         <div key={produto.id}>
         <p>{produto.nome}</p>
         <p>{produto.preço}</p>
         </div>
         )
          }
    </div>
   
  );
}