"use client";

import type React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface PatientCareModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PatientCardModal: React.FC<PatientCareModalProps> = ({ isOpen, onClose }) => {
    const contactDetails = [

        {
            title: "Appointment Booking",
            numbers: ["+91 7893521061"],
        },
        {
            title: "Emergency Services",
            numbers: ["+91 9030339116"],
        },
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] max-w-[90vw] px-4 py-5">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-center text-hospital-blue">
                        Contact Information
                    </DialogTitle>
                </DialogHeader>

                <div className="py-4 space-y-4">
                    {contactDetails.map((item, index) => (
                        <div key={index} className="p-4 bg-slate-100 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <div className="mt-1 flex flex-col gap-1">
                                {item.numbers.map((num, i) => (
                                    <a
                                        key={i}
                                        href={`tel:${num}`}
                                        className="flex items-center text-hospital-blue font-medium text-sm sm:text-base hover:underline"
                                    >
                                        <PhoneCall className="h-4 w-4 mr-2 text-hospital-blue" />
                                        {num}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <DialogFooter>
                    <Button onClick={onClose} className="w-full bg-hospital-blue text-white text-sm">
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default PatientCardModal;
