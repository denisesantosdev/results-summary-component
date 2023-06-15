import React from 'react'
import './UserResult.css'

function UserResult() {
    return (
        <section className='user-results'>
            <h1>Your Result</h1>
            <div className='score-container'>
                <h2 className='score'>76</h2>
                <span>of 100</span>
            </div>
            <div className='score-description'>
                <h2>Great</h2>
                <p>You scored higher than 65% of the people who have taken these tests</p>
            </div>
        </section>
    )
}

export default UserResult