import * as PropTypes from 'prop-types'
import { string } from 'prop-types';
function CardTrilhas({dadosTrilhas}){
    return(
        <>
          <h1>{dadosTrilhas.nomeTrilhas}</h1>
          <span>{dadosTrilhas.cidade}/{dadosTrilhas.estado}</span>
          <img width={200} src={dadosTrilhas.urlImagem} alt="imagem trilha"/>
        </>
    )

  }
  CardTrilhas.propTypes= {
    dadosTrilhas: PropTypes.exact({
      nomeTrilhas: PropTypes.string.isRequired,
      cidade: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
      duracao :PropTypes.number.isRequired,
      trajeto :PropTypes.number.isRequired,
      dificuldade:PropTypes.string.isRequired ,
      tipo : PropTypes.oneOf(['caminhada/trekking','ciclismo']),
      nomeUsuario : PropTypes.string,
      urlImagem: PropTypes.string
      

    })

}

export default CardTrilhas;

