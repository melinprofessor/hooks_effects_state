import React, { useState, useEffect} from 'react';


// component App
function App() {

  // camelcase -> carroBranco
  const [contador, setContador] = useState(0)

  // similar ao componentDidMout e
  // componentDidUpdate
  //  componentWillUnmount

  useEffect(()=> {
    //condição pular o efeitos
    if( contador !== 6) {
      document.title = `Você clicou ${contador} vezes`;
    }
  //  correta -> [variavel]
  // somente uma vez na montagem componente e na 
  // desmontagem do componente -> []

  },[contador])


  return (
    <div>
    <p>Você clicou {contador} vezes</p>
    <button onClick={()=> setContador(contador + 1)}>Cliqui Aqui</button>
    </div>
  );
}

export default App;
