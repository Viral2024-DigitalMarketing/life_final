"use client";

import type React from "react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
            className="bg-white rounded-lg flex flex-col mx-auto shadow-lg p-6"
            style={{
              width: "100%", // Full width for mobile
              maxWidth: "790px", // Max width for desktop
              transform: "translate(-50%, -50%)", // Center the modal
              top: "50%",
              left: "50%",
            }}
        >
          {/* Header Section */}
          <div className="text-center mb-6 sm:mt-0 mt-4">
            <h1
                className="font-merriweather font-bold text-[24px] sm:text-[32px] leading-[32px] sm:leading-[40px] text-[#111827]"
                style={{
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
            >
              Book your appointment now
            </h1>
            <p
                className="font-product-sans font-normal text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] text-[#111827] mt-2"
                style={{
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
            >
              So our team can reach out to you on time
            </p>
          </div>

          {/* Form Section */}
          <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4"
              style={{
                width: "100%",
                maxWidth: "464px", // Set input field width for desktop
                margin: "0 auto", // Center the form
              }}
          >
            {/* Full Name Field */}
            <div className="space-y-2">
              <Label
                  htmlFor="name"
                  className="font-ibm-plex-sans text-[14px] sm:text-[16px] leading-[150%] text-[#6F7482]"
              >
                Full Name
              </Label>
              <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full h-[48px] border rounded-md px-4"
              />
            </div>

            {/* Mobile Number Field */}
            <div className="space-y-2">
              <Label
                  htmlFor="phone"
                  className="font-ibm-plex-sans text-[14px] sm:text-[16px] leading-[150%] text-[#6F7482]"
              >
                Mobile Number
              </Label>
              <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full h-[48px] border rounded-md px-4"
              />
            </div>

            {/* Email Address Field */}
            <div className="space-y-2">
              <Label
                  htmlFor="email"
                  className="font-ibm-plex-sans text-[14px] sm:text-[16px] leading-[150%] text-[#6F7482]"
              >
                Email Address
              </Label>
              <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-[48px] border rounded-md px-4"
              />
            </div>

            {/* Specialization Dropdown */}
            <div className="space-y-2">
              <Label
                  htmlFor="specialization"
                  className="font-ibm-plex-sans text-[14px] sm:text-[16px] leading-[150%] text-[#6F7482]"
              >
                Choose your treatment specialization
              </Label>
              <Select value={specialization} onValueChange={setSpecialization}>
                <SelectTrigger
                    id="specialization"
                    className="w-full h-[42px] sm:h-[52px] border rounded-[12px] px-[45px] bg-white text-black"
                >
                  <SelectValue placeholder="Select your specialization" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="general-medicine">General Medicine</SelectItem>
                  <SelectItem value="dental">Dental</SelectItem>
                  <SelectItem value="ent">ENT</SelectItem>
                  <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                className="w-full h-[48px] rounded-md bg-[#1915C3] text-white"
                style={{
                  fontFamily: "Public Sans",
                  fontWeight: 500,
                  fontSize: "20px", // Reduced font size for mobile
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
  );
};

export default AppointmentModal;