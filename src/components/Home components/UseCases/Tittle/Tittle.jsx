import './Tittle.css'
//component tittle
const Tittle = ({ tittle, description, className }) => {
    return (
        <section className={`ak_tittle ${className || ""}`}>
            <h1 >{tittle}</h1>
            <p >{description}</p>
        </section>
    )
}

export default Tittle
