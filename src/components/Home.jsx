import React, { useState } from 'react';
import Produtos from './Produtos';

const Home = () => {  
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const handleClick = async (event) =>  {
    setCarregando(true);
    
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );

    const json = await response.json();
    setDados(json);
    setCarregando(false);    
  }

    return (
        <>
          <main>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <button onClick={handleClick}>tablet</button>
            { carregando && <p>Carregando...</p> }
            { !carregando && dados && <Produtos dados={dados}/>}
          </main>

        </>
    )
}

export default Home;