import { CONNECTIONS } from '@/lib/constants'
import React from 'react'
import ConnectionCard from './_components/connection-card'

type Props = {
    SearchParams?: { [key: string]: string | undefined }
}

const Connections = (props: Props) => {
    return (
        <div className=' flex relative flex-col gap-4'>
            <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50
             backdrop-blur-lg flex justify-between items-center border-b'>
                <span>Connections</span>
            </h1 >
            <div className=' relative flex flex-col gap-4'>
                <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
                    Connect all your apps directly from here. You may need to connect these apps regularly to refersh verification
                    {
                        CONNECTIONS.map((connection) => (
                            <ConnectionCard
                                key={connection.title}
                                title={connection.title}
                                description={connection.description}
                                icon={connection.image}
                            // type=
                            // connected={connection.connected}
                            />
                        ))
                    }
                </section>
            </div>
        </div>
    )
}

export default Connections