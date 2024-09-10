import { useState } from "react";

export const BuscarCharacter = ({ handleGetStarWars }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleGetStarWars(e, searchTerm);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-3 p-3 mb-2 bg-black text-white border border-warning-subtle">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Ingresa el nombre del personaje o planeta"
                    value={searchTerm}
                />
                <input type="submit" value="Buscar" className="btn btn-warning" />
            </form>
        </div>
    )
}