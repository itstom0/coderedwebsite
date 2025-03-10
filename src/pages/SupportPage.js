import React from 'react';

function SupportPage() {
    return (
        <div className="support-page">
            <h1>Support Us</h1>
            <p>We appreciate your support in helping us achieve our goals. There are various ways you can contribute:</p>
            <ul>
                <li>Donate to our cause</li>
                <li>Sponsor our team</li>
                <li>Volunteer your time and skills</li>
            </ul>
            <p>If you would like to get involved or contribute, please reach out to us!</p>
            <button onClick={() => alert("Thanks for your support!")}>Get in Touch</button>
        </div>
    );
}

export default SupportPage;
