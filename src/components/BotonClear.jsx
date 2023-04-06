import '../styles/BotonClear.css'

 export const BotonClear = ({children, manejarClic}) => (
    <div className="boton-clear" onClick={manejarClic}>
        {children}
    </div>
)