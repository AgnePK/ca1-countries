import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
const CountryCard = (props) =>{
    return(
        <Card>
            <Card.Img src={props.flag} varient='top'/>
            <Card.Body>
                <Card.Title>
                    <Link to={`/country/${props.name}`}>{props.name}</Link>
                </Card.Title>
                <p>{props.region}</p>
            </Card.Body>
        </Card>
    )
}
export default CountryCard