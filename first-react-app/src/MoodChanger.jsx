import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
const [mood, setMood] = useState('happy');
const birthdaySurprise = () => {
    let newMood ='surprised';
    if (mood === "surprised") newMood = 'Really Surprised!'
    else if (mood === 'Really Surprised!') newMood = 'Angry';

    setMood (newMood)

    console.log(`At end of mood change handler, mood is ${mood}`);
}

return (
<div className="MoodChanger componentBox">
Current Mood: {mood}
<button onClick={() => setMood('tired')}> Stay Up Late</button>
<button onClick={() => setMood('hungry')}> Skip lunch</button>
<button onClick={birthdaySurprise}> Surprise me</button>
</div>
)
}

export default MoodChanger