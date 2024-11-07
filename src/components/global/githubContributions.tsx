// components/GitHubContributionGraph.tsx
'use client'
import GitHubCalendar from 'react-github-calendar';


import React from 'react'

const GithubContributions = () => {
    return (
        <GitHubCalendar username="Ankit15yadav"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            blockRadius={4}
            loading={false}
            hideTotalCount
            transformData={(data) => {
                return data.filter(({ count }) => count > 0);
            }}
        />
    )
}

export default GithubContributions
