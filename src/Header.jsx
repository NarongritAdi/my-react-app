function Header(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.role}</p>
        </div>
    )
}

export default Header