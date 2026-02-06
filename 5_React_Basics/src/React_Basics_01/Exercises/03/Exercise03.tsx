const Nav = (props: { name: string, surname: string }) => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.surname}</li>
        </ul>
    )
}

export default Nav


