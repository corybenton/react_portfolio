import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [msg, setMessage] = useState('');
    const [name, setName] = useState('');
    const [eError, setEmailError] = useState('');
    const [nError, setNameError] = useState('');
    const [mError, setMsgError] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'Email') {
            setEmail(inputValue);
        } else if (inputType === 'Name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: name,
            email: email,
            message: msg
        };
        
        emailjs.send('default_service', 'template_54sq7g7', templateParams, 'YTEgbU2YLY8MAP70Y')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
         }, (err) => {
            console.log('FAILED...', err);
         });
        
        setEmail('');
        setMessage('');
        setName('');
    }

    const checkEmpty = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "Email" && !inputValue) {
            setEmailError('Field is required.');
        } else if (inputType === "Email" && !validateEmail(inputValue)) {
            setEmailError('Not a proper email address.');
        } else if (inputType === "Name" && !inputValue) {
            setNameError('Field is required.');
        } else if (!inputValue) {
            setMsgError('Field is required.')
        }
    }

    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="Name">Name: </label>
                <input
                    value={name}
                    name="Name"
                    onChange={handleInputChange}
                    onBlur={checkEmpty}
                    type='text'
                    placeholder='Name'
                />
                {nError && (
                    <div>
                        <p className='required'>{nError}</p>
                    </div>
                )}
                <label htmlFor='Email'>Email: </label>
                <input
                    value={email}
                    name="Email"
                    onChange={handleInputChange}
                    onBlur={checkEmpty}
                    type='email'
                    placeholder='email'
                />
                {eError && (
                    <div>
                        <p className='required'>{eError}</p>
                    </div>
                )}
                <label htmlFor="Message">Message: </label>
                <textarea
                    value={msg}
                    name="Message"
                    onChange={handleInputChange}
                    onBlur={checkEmpty}
                    type='text' 
                    placeholder='Message'
                />
                {mError && (
                    <div>
                        <p className='required'>{mError}</p>
                    </div>
                )}
                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>

        </div>
    )
}

export default ContactForm;