import { ConnectionProviderProps } from '@/providers/connections-provider'
import { z } from 'zod'

export const EditUserProfileSchema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    email: z.string().email({ message: 'Required' }),
})

export type ConnectionType = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connections = {
    title: ConnectionType
    description: string
    image: string
    connectionKey: keyof ConnectionProviderProps
    accessTokenKey?: string
    alwaysTrue?: boolean
    slackSpecial?: boolean
}

export const WorkflowFormSchema = z.object({
    name: z.string().min(1, "Required"),
    description: z.string().min(1, "Required"),
})