"use client"

import type React from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

interface EmergencyCardModalProps {
    isOpen: boolean
    onClose: () => void
}

const EmergencyCardModal: React.FC<EmergencyCardModalProps> = ({
                                                                   isOpen,
                                                                   onClose,
                                                               }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-abhaya text-hospital-blue">
                        Emergency Contacts
                    </DialogTitle>
                    <DialogDescription>
                        Please contact the following hospital numbers in case of an emergency.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4 space-y-4">
                    <div className="border-2 border-hospital-blue rounded-lg p-5 max-w-sm mx-auto bg-gray-50">
                        <div className="text-center mb-3">
                            <h3 className="text-lg font-bold text-hospital-blue">
                                Life Hospital Emergency Card
                            </h3>
                            <p className="text-xs text-gray-500">
                                Accessible to hospital staff only
                            </p>
                        </div>

                        <div className="space-y-3 text-sm text-center">
                            <div className="flex items-center justify-center gap-2">
                                <PhoneCall className="h-4 w-4 text-hospital-blue" />
                                <p>Ambulance: <strong>+1 800-911-1122</strong></p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <PhoneCall className="h-4 w-4 text-hospital-blue" />
                                <p>Emergency Dept: <strong>+1 800-222-3344</strong></p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <PhoneCall className="h-4 w-4 text-hospital-blue" />
                                <p>ICU Hotline: <strong>+1 800-555-7788</strong></p>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <PhoneCall className="h-4 w-4 text-hospital-blue" />
                                <p>Trauma Center: <strong>+1 800-999-0000</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={onClose} className="bg-hospital-blue w-full">
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EmergencyCardModal
