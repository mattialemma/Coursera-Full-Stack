export default function Exercise04() {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode</h1>;
    const lightMode = <h1>Light Mode</h1>;

    const handleDarkMode = () => {
        darkModeOn = !darkModeOn;
        darkModeOn ? console.log("Dark Mode") : console.log("Light Mode");
    }

    return (
        <div>
            <h1>Exercise 04</h1>
            {darkModeOn ? darkMode : lightMode}
            <button className="btn"
                onClick={handleDarkMode}> change mode </button>
        </div>
    )
}
