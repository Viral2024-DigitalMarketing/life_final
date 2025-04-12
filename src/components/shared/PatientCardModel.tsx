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
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-abhaya text-hospital-blue">24/7 Patient Care</DialogTitle>
                    <DialogDescription>
                        We're here for you around the clock. Choose how you'd like to connect with our care team.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            {
                                icon: <PhoneCall className="h-5 w-5 text-white" />,
                                title: "Emergency Hotline",
                                desc: "Call our 24/7 emergency line for immediate assistance",
                                action: (
                                    <a href="tel:+18001234567" className="text-hospital-blue font-semibold block mt-1 text-sm">
                                        1-800-123-4567
                                    </a>
                                ),
                            },
                            {
                                icon: <MessageSquare className="h-5 w-5 text-white" />,
                                title: "Live Chat",
                                desc: "Connect with a nurse or care coordinator via secure chat",
                                action: (
                                    <Button className="mt-1 bg-hospital-blue hover:bg-hospital-blue/90 text-sm px-3 py-1.5">
                                        Start Chat
                                    </Button>
                                ),
                            },
                            {
                                icon: <Calendar className="h-5 w-5 text-white" />,
                                title: "Virtual Visit",
                                desc: "Schedule a video consultation with a doctor",
                                action: (
                                    <Button className="mt-1 bg-hospital-blue hover:bg-hospital-blue/90 text-sm px-3 py-1.5">
                                        Book Virtual Visit
                                    </Button>
                                ),
                            },
                            {
                                icon: <Clock className="h-5 w-5 text-white" />,
                                title: "After-Hours Care",
                                desc: "Information about our after-hours services and locations",
                                action: (
                                    <Button
                                        variant="outline"
                                        className="mt-1 border-hospital-blue text-hospital-blue text-sm px-3 py-1.5"
                                    >
                                        Learn More
                                    </Button>
                                ),
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 px-3 py-3 rounded-md border border-slate-200"
                            >
                                <div className="flex items-start space-x-3">
                                    <div className="bg-hospital-blue p-2 rounded-full">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-base">{item.title}</h3>
                                        <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
                                        {item.action}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-100 px-4 py-3 rounded-lg">
                        <h3 className="font-semibold text-base">Patient Portal</h3>
                        <p className="text-sm text-slate-600 mt-1">
                            Access your medical records, test results, and communicate with your care team through our secure patient
                            portal.
                        </p>
                        <div className="flex space-x-2 mt-2">
                            <Button variant="outline" className="border-hospital-blue text-hospital-blue text-sm px-3 py-1.5">
                                Sign In
                            </Button>
                            <Button variant="outline" className="border-hospital-blue text-hospital-blue text-sm px-3 py-1.5">
                                Register
                            </Button>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={onClose} className="bg-hospital-blue">
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default PatientCardModel
