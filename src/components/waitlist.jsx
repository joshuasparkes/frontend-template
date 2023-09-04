import React, { forwardRef, useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../images/LogoIcon.png'

const Waitlist = forwardRef((props, ref) => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const modalStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '10px',
        width: 'fit-content',
        fontFamily: 'Montserrat, sans-serif',
    };

    const inputStyle = {
        width: '50vw',
        marginBottom: '10px',
        height: '40px',
        borderRadius: '5px',
        border: '1px solid lightgray',
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await fetch(event.target.action, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };

    if (submitted) {
        return <div style={modalStyle}>Thank you for joining the waitlist! We'll be in touch soon.</div>;
    }

    return (
        <div style={modalStyle}>
            <IconButton style={{alignSelf: 'flex-end'}} onClick={props.handleModalClose}>
                <CloseIcon />
            </IconButton>
            <img style={{height: '40px', width: 'auto'}} src={Logo} alt="PMAI Logo" className="spinning-logo" />

            <h2>Be the first to use AI assisted therapy</h2>
            <h4 style={{margin: '30px 0px'}}>Exclusive access to the next big leap in therapeutic care.</h4>
            {error && <p style={{color: 'red'}}>There was an error submitting your data. Please try again.</p>}
            <form action="https://getform.io/f/21b74c7b-4310-4291-af23-9da228f66e6b" method="POST" onSubmit={handleSubmit}>
                
                <label>
                    Name:
                    <input type="text" name="name" style={inputStyle} />
                </label>
                <br />
                <label>
                    Email Address:
                    <input type="email" name="email" style={inputStyle} />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" name="country" style={inputStyle} />
                </label>
                <br />
                <label>
                    Job Title:
                    <input type="text" name="jobTitle" style={inputStyle} />
                </label>
                <br />
                <button style={{backgroundColor:'black', color: 'white', padding: '10px 10px' ,borderRadius: '12px', fontFamily: 'roboto', marginTop: '10px'}} type="submit">Join Waitlist</button>
            </form>
        </div>
    );
});

export default Waitlist;