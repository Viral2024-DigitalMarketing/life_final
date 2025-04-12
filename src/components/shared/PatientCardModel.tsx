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
import { PhoneCall, Clock, Calendar, MessageSquare } from "lucide-react"

interface PatientCareModalProps {
    isOpen: boolean
    onClose: () => void
}

const PatientCardModel: React.FC<PatientCareModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[600px] max-w-[95vw] px-3 py-3">
                <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-abhaya text-hospital-blue leading-tight">
                        24/7 Patient Care
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm mt-1 leading-snug">
                        We're here for you around the clock. Choose how you'd like to connect with our care team.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-3 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                        {[
                            {
                                icon: <PhoneCall className="h-4 w-4 text-white" />,
                                title: "Emergency Hotline",
                                desc: "Call our 24/7 emergency line for immediate assistance",
                                action: (
                                    <a
                                        href="tel:+18001234567"
                                        className="text-hospital-blue font-semibold block mt-1 text-xs"
                                    >
                                        1-800-123-4567
                                    </a>
                                ),
                            },
                            {
                                icon: <MessageSquare className="h-4 w-4 text-white" />,
                                title: "Live Chat",
                                desc: "Connect with a nurse or care coordinator via secure chat",
                                action: (
                                    <Button className="mt-1 bg-hospital-blue hover:bg-hospital-blue/90 text-xs px-2.5 py-1.5">
                                        Start Chat
                                    </Button>
                                ),
                            },
                            {
                                icon: <Calendar className="h-4 w-4 text-white" />,
                                title: "Virtual Visit",
                                desc: "Schedule a video consultation with a doctor",
                                action: (
                                    <Button className="mt-1 bg-hospital-blue hover:bg-hospital-blue/90 text-xs px-2.5 py-1.5">
                                        Book Virtual Visit
                                    </Button>
                                ),
                            },
                            {
                                icon: <Clock className="h-4 w-4 text-white" />,
                                title: "After-Hours Care",
                                desc: "Information about our after-hours services and locations",
                                action: (
                                    <Button
                                        variant="outline"
                                        className="mt-1 border-hospital-blue text-hospital-blue text-xs px-2.5 py-1.5"
                                    >
                                        Learn More
                                    </Button>
                                ),
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-slate-200"
                            >
                                <div className="flex items-start space-x-2">
                                    <div className="bg-hospital-blue p-1.5 rounded-full">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-tight">
                                            {item.desc}
                                        </p>
                                        {item.action}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-100 px-3 py-2 sm:px-4 sm:py-3 rounded-lg space-y-1">
                        <h3 className="font-semibold text-sm sm:text-base">Patient Portal</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-tight">
                            Access your medical records, test results, and communicate with your care team through our secure patient portal.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1.5">
                            <Button
                                variant="outline"
                                className="border-hospital-blue text-hospital-blue text-xs sm:text-sm px-3 py-1.5"
                            >
                                Sign In
                            </Button>
                            <Button
                                variant="outline"
                                className="border-hospital-blue text-hospital-blue text-xs sm:text-sm px-3 py-1.5"
                            >
                                Register
                            </Button>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        onClick={onClose}
                        className="bg-hospital-blue text-xs sm:text-sm px-4 py-1.5"
                    >
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default PatientCardModel
