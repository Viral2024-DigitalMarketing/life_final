"use client";

import type React from "react";
import { useState } from "react";
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

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [specialization, setSpecialization] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mx-auto flex flex-col items-center"
                style={{
                    width: "88vw", // Mobile shrink
                    maxWidth: "790px", // Desktop stays the same
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                }}
            >
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6 sm:mt-0 mt-2">
                    <h1 className="font-merriweather font-bold text-[20px] sm:text-[32px] leading-[28px] sm:leading-[40px] text-[#111827]">
                        Book your appointment now
                    </h1>
                    <p className="font-product-sans text-[13px] sm:text-[16px] leading-[18px] sm:leading-[22px] text-[#111827] mt-1 sm:mt-2">
                        So our team can reach out to you on time
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 sm:gap-4 w-full"
                    style={{ maxWidth: "460px" }}
                >
                    {/* Full Name */}
                    <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="name" className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans">
                            Full Name
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="h-[42px] sm:h-[48px] text-[14px] px-3"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="phone" className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans">
                            Mobile Number
                        </Label>
                        <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your mobile number"
                            className="h-[42px] sm:h-[48px] text-[14px] px-3"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="email" className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans">
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="h-[42px] sm:h-[48px] text-[14px] px-3"
                        />
                    </div>

                    {/* Specialization */}
                    <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="specialization" className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans">
                            Choose your treatment specialization
                        </Label>
                        <Select value={specialization} onValueChange={setSpecialization}>
                            <SelectTrigger
                                id="specialization"
                                className="h-[42px] sm:h-[48px] text-[14px] px-3 rounded-md border"
                            >
                                <SelectValue placeholder="Select your specialization" />
                            </SelectTrigger>
                            <SelectContent className="text-black bg-white">
                                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                                <SelectItem value="general-medicine">General Medicine</SelectItem>
                                <SelectItem value="dental">Dental</SelectItem>
                                <SelectItem value="ent">ENT</SelectItem>
                                <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full h-[44px] sm:h-[48px] text-[15px] sm:text-[18px] bg-[#1915C3] text-white font-semibold rounded-md"
                        style={{ fontFamily: "Public Sans" }}
                    >
                        Submit
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AppointmentModal;
