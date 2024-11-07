'use client'
import GitHubCalendar from 'react-github-calendar';


import React from 'react'

const GithubContributions = () => {
    return (
        // <div className=' flex items-center flex-col justify-center gap-y-4'>
        //     <h1 className=' text-2xl font-semibold'>Days I Code</h1>

        // </div>

        <GitHubCalendar username="Ankit15yadav"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            blockRadius={4}
            hideTotalCount

        />

    )
}

export default GithubContributions
