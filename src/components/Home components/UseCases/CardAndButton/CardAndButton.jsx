import './CardAndButton.css'
//component card right section
const CardAndButton = ({ interactiveNumber, tittle }) => {
    return (
        <div className="ak_cardandbutton">
            <p>{interactiveNumber}</p>
            <p>{tittle}</p>
        </div>

    )
}

export default CardAndButton
