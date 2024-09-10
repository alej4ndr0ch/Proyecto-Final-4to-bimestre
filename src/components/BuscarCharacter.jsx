import { useState } from "react"
 
export const BuscarCharacter = ({ handleGetStarWars }) => {
 
    const [character, setCharacter] = useState('')
 
    return (
        <div className="d-flex flex-row justify-content-center align-items-center mt-3" class="p-3 mb-2 bg-danger text-white">
            <form className="d-flex" onSubmit={(e) => { handleGetStarWars(e, character) }}>
                <input
                    type="text"
                    className="form-control me-2"
                    onChange={(e) => { setCharacter(e.target.value) }}
                    placeholder="Ingresa el nombre del personaje"
                />
                <input type="submit" value='Buscar' className="btn btn-outline-success" />
            </form>
        </div>
    )
}