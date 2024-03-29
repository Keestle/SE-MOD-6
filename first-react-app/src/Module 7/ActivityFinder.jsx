import { useState, useEffect } from "react";

function ActivityFinder() { // Fetches a random activity

    const [participants, setParticipants] = useState(1);
    const [activity, setActivity] = useState('');

    useEffect(() => {
        fetch('https://www.boredapi.com/api/activity?' +		'participants=' + participants)
            .then(response => response.json())
            .then(json => {
                setActivity(json.type);
            });
            return () => {
                ignore = true; // ignore now invalid fetch results
                console.log('cleanup effect');
                };
            }, [participants]);
    

    return (
        <div className="ActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
                <select value={participants} 			onChange={e => setParticipants(e.target.value)}>
<option>1</option><option>2</option><option>3</option>
                </select>
            </label>
            <div><strong>Suggested Activity: </strong>{activity}</div>
        </div>
    )
}

export default ActivityFinder
// ++ Reference https://www.boredapi.com/documentation and add a // new dropdown to suggest an activity based on type