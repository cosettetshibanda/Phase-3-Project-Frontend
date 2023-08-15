
function Animal({animal}) {
    return (
        <div>
            <div className="animal">
                <h3>{animal.name}</h3>
                <img src={animal.img} alt={animal.name} />
            <button className="del-btn">
            🗑️
            </button>
            </div>
        </div>

    )
}

export default Animal