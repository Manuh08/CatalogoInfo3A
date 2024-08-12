// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

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
         <button onClick={()=> adicionarItemPedidos(produtos)}>Selecionar</button>
         </div>
         )
          }
          {
            listaPedidos.map((produto)=>
            <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preço}</p>
            </div>
            )
          }
    </div>
   
  );
}