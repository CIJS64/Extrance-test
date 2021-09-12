import React, {useState} from 'react'
import './Ex3.css';
import { useShortenUrl } from 'react-shorten-url';

function Ex3() {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault(); 
        console.log('submit');
    } 

    const validURL = (string) => {
        
    }


    return (
        <div className="ex-3">  
            <h3>Section 3</h3>
            <form className='ex-3__form'>
                <h4>Link Shortener</h4>
                <div className='ex-3__enteredLink'>
                    <label>Enter the link</label>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter the URL here"/>
                    <button onClick={handleSubmit}>>>>></button>
                </div>
                <div className='ex-3__choossingLink'>
                    <label>Short domain:</label>
                    <button>shrtco.de</button>
                    <button>9pr.de</button>
                    <button>shiny.link</button>
                </div>
                <p>With this free Link Shortener you can make Links shorter and easier to remember. Just enter a link into the form and click in the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long link</p>
            </form>
            <div></div>
        </div>
    )
}

export default Ex3
