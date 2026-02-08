function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}

function Workdays() {
    return <h1>The current day is a weekday.</h1>
}

function Weekends() {
    return <h1>The current day is a weekend.</h1>
}

export default CurrentMessage

/*

If I want to use props instead of Date().getDay(), I can do the following:

function CurrentMessage(props) {
    if (props.day >= 1 && props.day <= 5) {
        return <Workdays />
    }
    return <Weekends />
}
*/