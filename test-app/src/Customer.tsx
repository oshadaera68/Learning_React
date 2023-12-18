
interface Customer {
    id:string,
    avatar:string,
    customerName:string,
    description:string,
    userProfile:string
}

function Customer(props:Customer) {
    return(
        <div className="card">
            <img src={props.avatar} className="card-img-top" alt={props.customerName}/>
            <div className="card-body">
                <h5 className="card-title">{props.customerName}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.userProfile} className="btn btn-primary" target='_blank'>Go somewhere</a>
            </div>
        </div>
    )

}
export default Customer;