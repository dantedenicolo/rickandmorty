import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card (props) {
  const handleClick = () => {
    props.onClose(props.id)
  }
  return (
    <div className={style.card}>
      <div className={style.container}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={style.details}>
        <h2>{props.name}</h2>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        <Link to={`/detail/${props.id}`}>
          <button>Más información</button>
        </Link>
        <button onClick={handleClick}>Cerrar</button>
      </div>
    </div>
  )
}
