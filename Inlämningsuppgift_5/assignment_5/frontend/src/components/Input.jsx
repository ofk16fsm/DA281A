const Input = (props) => {
    return (
        <input type={props.type} name={props.name} value={props.value} className={props.className} checked={props.checked} onClick={props.onClick} onChange={props.onChange} width={props.width} height={props.height}/>
    );
}

export default Input