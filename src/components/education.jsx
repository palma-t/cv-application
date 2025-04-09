import { useState } from 'react'
import useToggle from './toggle.jsx'

function EducationForm({ education, onChange, onSave }) {
    const handleChange = (field) => (e) => {
        onChange({ ...education, [field]: e.target.value });
    }

    return (
        <div className='form'>
            <label>
                    School Name
                    <input
                    type="text"
                    value={education.schoolName}
                    onChange={handleChange('schoolName')}
                    />
                </label>
                
                <label>
                    Degree
                    <input
                    type="text"
                    value={education.degree}
                    onChange={handleChange('degree')}
                    />
                </label>
                <label>
                    Location
                    <input
                    type="text"
                    value={education.location}
                    onChange={handleChange('location')}
                    />
                </label>
                <label>
                    Date
                    <input
                    type="text"
                    value={education.dateRange}
                    onChange={handleChange('dateRange')}
                    />
                </label>
                <button onClick={onSave}>Save</button>
        </div>
    )
}

function Education(){
    const [isVisible, toggleVisibility] = useToggle();
    const [educations, setEducations] = useState([
        {
            schoolName: "ISIT",
            degree: "Master in Intercultural Management",
            dateRange: "2017-2020",
            location: "Paris",
        },
    ]);

    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    const handleChangeEducation = (index, updatedEducation) => {
        const newEducations = [...educations];
        newEducations[index] = updatedEducation;
        setEducations(newEducations);
    };

    const handleSave = () => {
        toggleVisibility();
        setCurrentEditIndex(null);
    };

    const addNewEducation = () => {
        setEducations([
            ...educations,
            {schoolName: "", degree: "", dateRange: "", location: ""},
        ]);
        setCurrentEditIndex(educations.length);
        if (!isVisible) toggleVisibility();
    }

    return (
            <>
                <div clasName="section-header">
                    <h2 className="section-header">Education</h2>
                    {!isVisible && <button onClick={toggleVisibility}>Edit</button>}
                    <button onClick={addNewEducation}>Add Education</button>
                </div>

                {educations.map((educ, index) => (
                    <div key={index} className='detail'>
                        <div className="in-section-header">
                            <h3>{educ.schoolName}</h3>
                            <div className='date-style'>{educ.dateRange}</div>
                        </div>
                        <div className='degree'>{educ.degree}</div>
                        <div className='location'>{educ.location}</div>
                        {isVisible && (
                            <button onClick={() => setCurrentEditIndex(index)}>Edit</button>
                        )}
                    </div>
                ))}

                {isVisible && currentEditIndex !== null && (
                    <EducationForm
                        education={educations[currentEditIndex]}
                        onChange={(updated) =>
                            handleChangeEducation(currentEditIndex, updated)
                        }
                        onSave={handleSave}
                    />
                )}
            </>
    )

}

export default Education