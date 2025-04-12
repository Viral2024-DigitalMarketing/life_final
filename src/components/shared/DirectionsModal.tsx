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
import { MapPin, Car, Bus, Train } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DirectionsModalProps {
    isOpen: boolean
    onClose: () => void
}

const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[650px] p-6">
                <DialogHeader className="space-y-1">
                    <DialogTitle className="text-2xl font-abhaya text-hospital-blue">
                        Get Directions
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Find the best way to reach our medical center.
                    </DialogDescription>
                </DialogHeader>

                <div className="py-2 space-y-3">
                    {/* Address Card */}
                    <div className="bg-slate-100 px-4 py-3 rounded-md">
                        <div className="flex items-center space-x-2 mb-1">
                            <MapPin className="h-4 w-4 text-hospital-blue" />
                            <h3 className="font-semibold text-sm">Main Hospital Address</h3>
                        </div>
                        <p className="pl-6 text-sm text-gray-700">
                            123 Medical Center Drive, Healthcare City, HC 12345
                        </p>
                        <div className="mt-2 pl-6">
                            <Button variant="outline" size="sm" className="text-hospital-blue border-hospital-blue h-8 px-3 text-xs">
                                Open in Google Maps
                            </Button>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <Tabs defaultValue="driving">
                        <TabsList className="grid grid-cols-3 mb-2 gap-2">
                            <TabsTrigger value="driving" className="text-xs flex items-center gap-1 px-2 py-1">
                                <Car className="h-4 w-4" /> Driving
                            </TabsTrigger>
                            <TabsTrigger value="public" className="text-xs flex items-center gap-1 px-2 py-1">
                                <Bus className="h-4 w-4" /> Public Transit
                            </TabsTrigger>
                            <TabsTrigger value="parking" className="text-xs flex items-center gap-1 px-2 py-1">
                                <MapPin className="h-4 w-4" /> Parking
                            </TabsTrigger>
                        </TabsList>

                        {/* Driving Directions */}
                        <TabsContent value="driving" className="space-y-2">
                            {[
                                {
                                    title: "From Downtown",
                                    steps: [
                                        "Take Main Street north for 2 miles",
                                        "Turn right onto Healthcare Boulevard",
                                        "Continue for 1 mile",
                                        "Turn left at Medical Center Drive",
                                        "The hospital will be on your right",
                                    ],
                                },
                                {
                                    title: "From Highway 101",
                                    steps: [
                                        "Take exit 25 for Healthcare City",
                                        "Turn right at the end of the ramp",
                                        "Continue straight for 0.5 miles",
                                        "Turn right onto Medical Center Drive",
                                        "The hospital will be on your left",
                                    ],
                                },
                            ].map((route, i) => (
                                <div key={i} className="border border-slate-200 rounded-md p-3 bg-white text-sm">
                                    <h3 className="font-semibold mb-1">{route.title}</h3>
                                    <ol className="pl-5 list-decimal space-y-1">
                                        {route.steps.map((step, idx) => (
                                            <li key={idx}>{step}</li>
                                        ))}
                                    </ol>
                                </div>
                            ))}
                        </TabsContent>

                        {/* Public Transit */}
                        <TabsContent value="public" className="space-y-2">
                            <div className="border border-slate-200 rounded-md p-3 bg-white text-sm">
                                <div className="flex items-center gap-2 mb-1">
                                    <Bus className="h-4 w-4 text-hospital-blue" />
                                    <h3 className="font-semibold">Bus Routes</h3>
                                </div>
                                <ul className="pl-5 list-disc space-y-1">
                                    <li>Route 42 - Stops directly in front of the hospital</li>
                                    <li>Route 15 - Stops at Healthcare Boulevard (5 min walk)</li>
                                    <li>Route 67 - Stops at Medical Plaza (8 min walk)</li>
                                </ul>
                            </div>

                            <div className="border border-slate-200 rounded-md p-3 bg-white text-sm">
                                <div className="flex items-center gap-2 mb-1">
                                    <Train className="h-4 w-4 text-hospital-blue" />
                                    <h3 className="font-semibold">Train & Subway</h3>
                                </div>
                                <ul className="pl-5 list-disc space-y-1">
                                    <li>Blue Line - Exit at Healthcare City Station (10 min walk)</li>
                                    <li>Green Line - Exit at Medical District (15 min walk or connect to Bus Route 42)</li>
                                </ul>
                            </div>
                        </TabsContent>

                        {/* Parking Info */}
                        <TabsContent value="parking" className="space-y-2">
                            <div className="border border-slate-200 rounded-md p-3 bg-white text-sm">
                                <h3 className="font-semibold mb-1">Patient & Visitor Parking</h3>
                                <ul className="pl-5 list-disc space-y-1">
                                    <li>Main Garage - Connected to hospital entrance</li>
                                    <li>East Lot - 2 minute walk to East Entrance</li>
                                    <li>West Lot - 5 minute walk to Main Entrance</li>
                                </ul>
                                <p className="text-xs mt-1">First 2 hours free, $2/hour thereafter. Maximum $15/day.</p>
                            </div>

                            <div className="border border-slate-200 rounded-md p-3 bg-white text-sm">
                                <h3 className="font-semibold mb-1">Accessible Parking</h3>
                                <p>
                                    Designated accessible parking spaces are available in all parking areas,
                                    closest to hospital entrances.
                                </p>
                                <p className="text-xs mt-1">
                                    Patients with valid accessible parking permits receive 50% discount on parking fees.
                                </p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                <DialogFooter className="mt-2">
                    <Button onClick={onClose} className="bg-hospital-blue">
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DirectionsModal
