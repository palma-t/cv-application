import { useState } from 'react'
import useToggle from './toggle.jsx'

function Intro(){
    const [isVisible, toggleVisibility] = useToggle();

    const [name, setName] = useState("John Doe");
    const [email, setMail] = useState("email@email.com");
    const [phone, setPhone] = useState("+33 7 00 00 00 00");
    const [linkedin, setLinkedin] = useState("johndoe.com");
    const [location, setLocation] = useState("Paris");
    const [presentation, setPresentation] = useState("Having done this and that, I am now looking for a brilliant new that with a wonderful team specialized in this.");

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setMail(e.target.value);
    const handleLKChange = (e) => setLinkedin(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handlePrezChange = (e) => setPresentation(e.target.value);

    return (
        <>
            <>
                <div className='top-section'>
                    <h1>{name}</h1>
                    {!isVisible && <button onClick={toggleVisibility} className='edit-button'>Edit</button>}
                </div>
                <div>{phone} | {email} | {linkedin} | {location}</div>
                <p className='presentation'>{presentation}</p>
            </>
            {isVisible && <>
                <label>
                    Name
                    <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    />
                </label>
                
                <label>
                    Email
                    <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Phone
                    <input
                    type="text"
                    value={phone}
                    onChange={handlePhoneChange}
                    />
                </label>
                <label>
                    LinkedIn
                    <input
                    type="url"
                    value={linkedin}
                    onChange={handleLKChange}
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
                    Presentation
                    <textarea
                    value={presentation}
                    onChange={handlePrezChange}
                    />
                </label>
                <button onClick={toggleVisibility}>Save</button>
            </>}
        </> 
    )

}

export default Intro