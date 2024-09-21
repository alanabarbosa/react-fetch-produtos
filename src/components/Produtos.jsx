import React from 'react'

const Produtos = ({ dados }) => {
  return (
    <div className='produtosContainer'>
      <h1>{dados.nome}</h1>
      <img src={dados.fotos[0].src} alt="" />
      <p>R$ {dados.preco}</p>
      <p>{dados.descricao}</p>
      <p>Foi vendido? {dados.vendido}</p>
      <p>Vendedor: {dados.usuario_id}</p>
    </div>
  )
}

export default Produtos
