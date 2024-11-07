import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useModal } from '@/providers/modal-provider'


type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({ title, subheading, children, defaultOpen }: Props) => {

    const { isOpen, setClose } = useModal()

    const handleClose = () => {
        setClose()
    }

    return (
        <Drawer
            open={isOpen}
            onClose={handleClose}
        >
            <DrawerContent>
                <DrawerHeader>

                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomModal