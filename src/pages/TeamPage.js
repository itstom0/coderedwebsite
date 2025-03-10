import React from 'react';

function TeamPage() {
    return (
        <div className="team-page">
            <h1>2024-2025 Team</h1>
            <p>Meet the passionate and dedicated individuals behind CODE RED:</p>

            <div className="team-member">
                <h2>John Doe - Team Leader</h2>
                <p>John has been leading tech teams for over 5 years. His leadership skills and vision drive CODE RED to success.</p>
            </div>

            <div className="team-member">
                <h2>Jane Smith - Developer</h2>
                <p>Jane is the mastermind behind our app's development, with expertise in JavaScript and Node.js.</p>
            </div>

            <div className="team-member">
                <h2>David Brown - Designer</h2>
                <p>David brings creativity and design expertise, ensuring that CODE RED's user interface is sleek and intuitive.</p>
            </div>

            <div className="team-member">
                <h2>Amy White - Marketing Lead</h2>
                <p>Amy is responsible for spreading the word about CODE RED and connecting with potential sponsors and supporters.</p>
            </div>
        </div>
    );
}

export default TeamPage;
