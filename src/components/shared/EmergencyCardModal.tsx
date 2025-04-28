import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

interface EmergencyCardModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EmergencyCardModal: React.FC<EmergencyCardModalProps> = ({
                                                                   isOpen,
                                                                   onClose,
                                                               }) => {
    // Updated emergency contact numbers
    const emergencyContacts = [
        { label: "Appointments", number: "+91 7893521061" },
        { label: "Emergency Dept", number: "+91 9030339116" },

    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] w-[90%] max-w-xs sm:w-auto px-4 py-4 sm:px-6 sm:py-6">
                <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-abhaya text-hospital-blue text-center">
                        Emergency Contacts
                    </DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-center mt-1">
                        Please contact the following hospital numbers in case of an emergency.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-3 sm:py-4 space-y-4">
                    <div className="border-2 border-hospital-blue rounded-lg p-4 sm:p-5 w-full bg-gray-50">
                        <div className="text-center mb-3">
                            <h3 className="text-base sm:text-lg font-bold text-hospital-blue">
                                Life Hospital Emergency Card
                            </h3>

                        </div>

                        <div className="space-y-3 text-sm sm:text-base text-center">
                            {emergencyContacts.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-center gap-2">
                                    <PhoneCall className="h-4 w-4 text-hospital-blue" />
                                    <p className="text-xs sm:text-sm">
                                        {item.label}: <strong>{item.number}</strong>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        onClick={onClose}
                        className="bg-hospital-blue w-full text-sm sm:text-base py-2 sm:py-3"
                    >
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EmergencyCardModal;
