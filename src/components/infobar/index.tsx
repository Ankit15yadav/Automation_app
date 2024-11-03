'use client'
import { Book, Headphones, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

type Props = {}

const InfoBar = (props: Props) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    return (
        <div className='flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black'>
            <div
                className={`flex items-center bg-muted px-4 rounded-full transition-all duration-200 ${isSearchFocused ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
                    }`}
            >
                <Search className={`mr-2 h-4 w-4 shrink-0 opacity-50 ${isSearchFocused ? 'text-primary' : ''}`} />
                <Input
                    placeholder='Quick search'
                    className='border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                />
            </div>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200">
                            <Headphones className="h-5 w-5" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Contact Support</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200">
                            <Book className="h-5 w-5" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Guide</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default InfoBar