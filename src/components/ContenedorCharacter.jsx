export const ContenedorCharacter = ({ character, planet }) => {
    return (
        <div className="container">
            {/* Si no hay personaje ni planeta, muestra un mensaje */}
            {!character && !planet && (
                <div className="text-center mt-5">
                    <h5 className="text-white">No se encontró el personaje o el planeta</h5>
                </div>
            )}

            {/* Mostrar información del personaje si está disponible */}
            {character && (
                <div className="card bg-danger text-white mb-3" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Personaje: {character.name}</h5>
                        <p>Altura: {character.height} cm</p>
                        <p>Peso: {character.mass} kg</p>
                    </div>
                </div>
            )}

            {/* Mostrar información del planeta si está disponible */}
            {planet && (
                <div className="card bg-danger text-white mb-3" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Planeta: {planet.name}</h5>
                        <p>Clima: {planet.residents}</p>
                        <p>Diámetro: {planet.diameter} km</p>
                    </div>
                </div>
            )}
        </div>
    );
};