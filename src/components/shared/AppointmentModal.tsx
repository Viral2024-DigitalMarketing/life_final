"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
                                                               isOpen,
                                                               onClose,
                                                           }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [windowHeight, setWindowHeight] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Initialize EmailJS with Public Key
    useEffect(() => {
        emailjs.init("MikydQenH8f_SH65S"); // EmailJS Public Key
    }, []);

    // Get window height on component mount and window resize
    useEffect(() => {
        const updateWindowHeight = () => {
            setWindowHeight(window.innerHeight);
        };

        updateWindowHeight();
        window.addEventListener("resize", updateWindowHeight);
        return () => window.removeEventListener("resize", updateWindowHeight);
    }, []);

    // Basic form validation
    const validateForm = () => {
        if (!name.trim()) {
            setError("Please enter your full name.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(phone)) {
            setError("Please enter a valid phone number.");
            return false;
        }
        if (!specialization) {
            setError("Please select a specialization.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                "service_7ee1bih", // Updated EmailJS Service ID
                "template_6odi0nn", // EmailJS Template ID
                {
                    name,
                    email,
                    phone,
                    specialization,
                }
            );

            console.log("Email sent successfully:", response);
            setSuccess("Appointment request sent successfully!");
            // Reset form fields
            setName("");
            setEmail("");
            setPhone("");
            setSpecialization("");
            setTimeout(() => {
                onClose();
            }, 2000); // Close modal after showing success message
        } catch (err: any) {
            console.error("Failed to send email:", err);
            setError(
                err.text || "Failed to send appointment request. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    // Calculate modal max-height based on screen size
    const getModalMaxHeight = () => {
        if (windowHeight <= 550) return "90vh";
        if (windowHeight <= 700) return "85vh";
        if (windowHeight <= 900) return "80vh";
        return "75vh";
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="bg-white rounded-2xl shadow-2xl w-[92vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw] max-w-[740px] mx-auto flex flex-col items-center overflow-y-auto"
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxHeight: getModalMaxHeight(),
                    padding: 0,
                }}
            >
                <div className="p-4 sm:p-6 md:p-8 w-full overflow-y-auto">
                    {/* Header */}
                    <div className="text-center mb-4 sm:mb-6 mt-2 sm:mt-0 w-full max-w-[500px] mx-auto">
                        <h1 className="font-merriweather font-bold text-xl sm:text-2xl md:text-3xl text-gray-900">
                            Book your appointment now
                        </h1>
                        <p className="font-product-sans mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                            So our team can reach out to you on time
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 w-full max-w-[500px] mx-auto"
                    >
                        {/* Full Name */}
                        <div className="space-y-1 sm:space-y-2">
                            <Label
                                htmlFor="name"
                                className="text-xs sm:text-sm md:text-base text-gray-600"
                            >
                                Full Name
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="h-10 sm:h-11 md:h-12 text-sm md:text-base px-3"
                                required
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="space-y-1 sm:space-y-2">
                            <Label
                                htmlFor="phone"
                                className="text-xs sm:text-sm md:text-base text-gray-600"
                            >
                                Mobile Number
                            </Label>
                            <Input
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your mobile number"
                                className="h-10 sm:h-11 md:h-12 text-sm md:text-base px-3"
                                required
                            />
                        </div>

                        {/* Email Address */}
                        <div className="space-y-1 sm:space-y-2">
                            <Label
                                htmlFor="email"
                                className="text-xs sm:text-sm md:text-base text-gray-600"
                            >
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="h-10 sm:h-11 md:h-12 text-sm md:text-base px-3"
                                required
                            />
                        </div>

                        {/* Specialization Dropdown */}
                        <div className="space-y-1 sm:space-y-2">
                            <Label
                                htmlFor="specialization"
                                className="text-xs sm:text-sm md:text-base text-gray-600"
                            >
                                Choose your treatment specialization
                            </Label>
                            <Select value={specialization} onValueChange={setSpecialization}>
                                <SelectTrigger
                                    id="specialization"
                                    className="h-10 sm:h-11 md:h-12 text-sm md:text-base px-3 rounded-md border"
                                >
                                    <SelectValue placeholder="Select your specialization" />
                                </SelectTrigger>
                                <SelectContent
                                    className="text-black bg-white z-50"
                                    position="popper"
                                    sideOffset={5}
                                >
                                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                                    <SelectItem value="general-medicine">General Medicine</SelectItem>
                                    <SelectItem value="dental">Dental</SelectItem>
                                    <SelectItem value="ent">ENT</SelectItem>
                                    <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Success Message */}
                        {success && (
                            <p className="text-green-500 text-sm text-center">{success}</p>
                        )}

                        {/* Error Message */}
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full h-10 sm:h-11 md:h-12 text-sm sm:text-base md:text-lg bg-[#1915C3] text-white font-semibold rounded-md mt-2 sm:mt-4"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AppointmentModal;