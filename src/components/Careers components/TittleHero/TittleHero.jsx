import './TittleHero.css'

const TittleHero = ({ children, top = "62%" }) => {
    return (
        <div className='ak_tittlehero' style={{ top }}>
            {children}
        </div>
    )
}

export default TittleHero
