const Developer = (props) =>{
    return(
        <div className="pai">
            <div className="dev1">
                <label>Dev: {props.name1}</label>
                <label>Idade: {props.age1}</label>
                <label>País: {props.country1}</label>
            </div>

            <div className="dev2">
                <label>Dev: {props.name2}</label>
                <label>Idade: {props.age2}</label>
                <label>País: {props.country2}</label>
            </div>

            <div className="dev3">
                <label>Dev: {props.name3}</label>
                <label>Idade: {props.age3}</label>
                <label>País: {props.country3}</label>
            </div>
        </div>
    )
}

export default Developer