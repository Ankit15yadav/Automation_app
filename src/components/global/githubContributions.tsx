'use client'
import GitHubCalendar from 'react-github-calendar';


import React from 'react'

const GithubContributions = () => {
    return (
        <GitHubCalendar username="Ankit15yadbav"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            blockRadius={4}
            hideTotalCount
        />
    )
}

export default GithubContributions
