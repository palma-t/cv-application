import { useState } from 'react'
import useToggle from './toggle.jsx'

function ExperienceForm({ experience, onChange, onSave }) {
    const handleChange = (field) => (e) => {
        onChange({ ...experience, [field]: e.target.value });
    }

    return (
        <div className='form'>
            <label>
                    Job Name
                    <input
                    type="text"
                    value={experience.job}
                    onChange={handleChange('job')}
                    />
                </label>
                
                <label>
                    Company
                    <input
                    type="text"
                    value={experience.company}
                    onChange={handleChange('company')}
                    />
                </label>
                <label>
                    Missions
                    <textarea
                    value={experience.mission}
                    onChange={handleChange('mission')}
                    />
                </label>
                <label>
                    Location
                    <input
                    type="text"
                    value={experience.location}
                    onChange={handleChange('location')}
                    />
                </label>
                <label>
                    Date
                    <input
                    type="text"
                    value={experience.dateRange}
                    onChange={handleChange('dateRange')}
                    />
                </label>
                <button onClick={onSave}>Save</button>
        </div>
    )
}

function Experience(){
    const [isVisible, toggleVisibility] = useToggle();
    const [experiences, setExperiences] = useState([
        {
          job: "Talent Acquisition Specialist",
          company: "Square",
          mission: "Recruit a lot of people",
          dateRange: "2017-2020",
          location: "Paris",
        },
      ]);

    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    const handleChangeExperience = (index, updatedExperience) => {
        const newExperiences = [...experiences];
        newExperiences[index] = updatedExperience;
        setExperiences(newExperiences);
    };

    const handleSave = () => {
        toggleVisibility();
        setCurrentEditIndex(null);
    };

    const addNewExperience = () => {
        setExperiences([
            ...experiences,
            {job: "", company: "", mission: "", dateRange: "", location: "" },
        ])
        setCurrentEditIndex(experiences.length);
        if (!isVisible) toggleVisibility();
    };

    
    return (
        <>
            <>
                <div className="section-header">
                    <h2 className="section-header">Experience</h2>
                    {!isVisible && <button onClick={toggleVisibility}>Edit</button>}
                    <button onClick={addNewExperience}>Add Experience</button>
                </div>

                {experiences.map((exp, index) => (
                    <div key={index} className='detail'>
                        <div className="in-section-header">
                            <h3>{exp.job}</h3>
                            <div className='date-style'>{exp.dateRange}</div>
                        </div>
                        <div className="company">{exp.company}</div>
                        <div className='location'>{exp.location}</div>
                        <div>{exp.mission}</div>
                        {isVisible && (
                            <button onClick={() => setCurrentEditIndex(index)}>Edit</button>
                        )}
                    </div>
                ))}
                
                {isVisible && currentEditIndex !== null && (
                    <ExperienceForm
                        experience={experiences[currentEditIndex]}
                        onChange={(updated) =>
                            handleChangeExperience(currentEditIndex, updated)
                        }
                        onSave={handleSave}
                    />
                )}
            </>
            
        </> 
    )

}

export default Experience