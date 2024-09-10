export const ContenedorCharacter = ({ people }) => {
    return (
        <div className="card" style={{ width: '18rem' }} class="position-absolute top-50 start-50 translate-middle : p-3 mb-2 bg-danger text-white" >
            {people && (
                <>
                    <img
                        src={people.sprites.other.home.front_default}
                        alt={people.name}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{people.name}</h5>
                        <p className="card-text">ID: {people.id}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Altura: {people.height / 10} m</li>
                    <li className="list-group-item">Peso: {pokemon.mass} kg</li>
                    </ul>
  
                    <div class="card-body">
    </div>
       
                </>
            )}
        </div>
    )
  }