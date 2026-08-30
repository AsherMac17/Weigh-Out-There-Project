import moonImage from "../images/moon.png";
import jupiterImage from "../images/jupiter.png";
import mercuryImage from "../images/mercury.png";


function Button({ text, weight, onResult, onImage, type = "button" }) {
    const gravityMultipliers = {
        "The Moon": 0.166,
        "Jupiter": 2.4,
        "Mercury": 0.38
    };

    const planetImages = {
    "The Moon": moonImage,
    "Jupiter": jupiterImage,
    "Mercury": mercuryImage
};

    const handleClick = () => {
        const earthWeight = Number.parseFloat(weight);

        const convertedWeight = earthWeight * gravityMultipliers[text];
        onResult(`Your weight on ${text} is ${Math.round(convertedWeight)} lbs.`);

        onImage(planetImages[text])
    };

    return(
        <button className="button" type={type} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;