import {Badge, Card, CardHeader, CardBody, CardLink, CardFooter} from 'reactstrap'
import Button from './Button'
import Checkbox from './Checkbox'

function Movie(props){
    
    return(
        <>
        {props.movies.map((movie, index) => (
        <div className="movie" key={index}>
            <Card>
            <CardHeader>{movie.movie_title}
                <Badge style={{float: "right"}}>
                    <Checkbox className="selectedMovie" name={movie.movie_title} value={movie} checked={props.checked === movie} onChange={() => props.onChange(movie)}/>
                </Badge>
            </CardHeader>
            <CardLink href={movie.href}>IMDB link</CardLink>
            <CardBody className="details">{movie.description}</CardBody>
            <CardFooter>                
                <Button onClick={() => props.onClick(movie)} name={"Remove"}/>
            </CardFooter>
            </Card>
        </div>))
        }
        </>
    )
}

export default Movie