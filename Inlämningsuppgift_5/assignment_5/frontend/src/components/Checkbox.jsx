import Input from './Input'

const Checkbox = (props) =>{
    return(
        <Input type="checkbox" className={props.className} id={props.id} name={props.name} value={props.value} checked={props.checked} onChange={props.onChange}/> 
    )
}

export default Checkbox
