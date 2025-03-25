import { useState } from 'react'
import useToggle from './toggle.jsx'

function Education(){
    const [isVisible, toggleVisibility] = useToggle();

    const [schoolName, setSchoolName] = useState("ISIT");
    const [degree, setDegree] = useState("Master in Intercultural Management");
    const [dateRange, setDateRange] = useState("2017-2020");
    const [location, setLocation] = useState("Paris");

    const handleNameChange = (e) => setSchoolName(e.target.value);
    const handleDegreeChange = (e) => setDegree(e.target.value);
    const handleDateChange = (e) => setDateRange(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);

    return (
        <>
            <>
                <div class="section-header">
                    <h2 class="section-header">Education</h2>
                    {!isVisible && <button onClick={toggleVisibility}>Edit</button>}
                </div>
                <div>
                    <h3>{schoolName}</h3>
                    <div>{degree}</div>
                    <div>{dateRange}</div>
                    <div>{location}</div>
                </div>
            </>
            {isVisible && <>
                <label>
                    School Name
                    <input
                    type="text"
                    value={schoolName}
                    onChange={handleNameChange}
                    />
                </label>
                
                <label>
                    Degree
                    <input
                    type="text"
                    value={degree}
                    onChange={handleDegreeChange}
                    />
                </label>
                <label>
                    Location
                    <input
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    />
                </label>
                <label>
                    Date
                    <input
                    type="text"
                    value={dateRange}
                    onChange={handleDateChange}
                    />
                </label>
                <button onClick={toggleVisibility}>Save</button>
            </>}
        </> 
    )

}

export default Education