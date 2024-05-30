function listCard(props){
    return(
        <div className="card">
            <h3>{props.data.a}</h3>
            <h3>
                {props.data.b}
            </h3>
        </div>
    )
}

export default listCard