import { useState } from "react";
import Button from "./Button";

function TextField ({placeholder}) {
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState("");
    const [image, setImage] = useState(null)

    return (
        <div className="textfield-container">
            <input
                type="number"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                placeholder={placeholder}
            />

            <div className="buttons">
                <Button text="The Moon" weight={weight} onResult={setResult} onImage={setImage} />
                <Button text="Jupiter" weight={weight} onResult={setResult} onImage={setImage}  />
                <Button text="Mercury" weight={weight} onResult={setResult} onImage={setImage} />
            </div>

            {result && <p>{result}</p>}

            {image && <img className="planet-image" src={image} alt="Selected" />}
        </div>
    );
}

export default TextField;