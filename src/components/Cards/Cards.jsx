import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
	return (
		<div className={style.cards}>
			{props.characters.map(({ id, name, species, gender, image }) => {
				return (
					<Card
						key={id}
						id={id}
						name={name}
						species={species}
						gender={gender}
						img={image}
						onClose={props.onClose}
					/>
				);
			})}
		</div>
	);
}
