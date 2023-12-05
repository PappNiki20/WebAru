export default function Termek(props){
    function kattintasKezelo(){
        console.log(props.index)
        props.kattintasKezelo(props.index)
    }
    return(
        <div className="kep card" style={{"width":"400px"}}>
            <div className="card-body">
            <h4 className="card-title">{props.obj.nev}</h4>
       <img className="card-img-top" src={props.obj.src} alt=""/>
       <p className="card-text">{props.obj.leiras}</p>
       <a href="#" className="btn btn-primary" onClick={kattintasKezelo}>Kosárba</a>
       </div>
        </div>
    )
}