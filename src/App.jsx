import CardTrilhas from "./componentes/cardtrilhas"

function App() {

  const listaDeTrilhas = [{
    nomeTrilhas: "Costa da lagoa",
    cidade : 'florianopolis',
    estado : "sc",
    duracao : 120,
    trajeto : 4,
    dificuldade : "iniciante",
    tipo : "caminhada/trekking",
    nomeUsuario : "gabriela",
    urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg"

  }]

  return (
    <>
    {
      listaDeTrilhas.map((trilha,index) => (

        <CardTrilhas dadosTrilhas={trilha} key={index} />


      ))
    }
  
   </>
  )
}

export default App
