// "use client"
//
// import type React from "react"
// import { useState } from "react"
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogDescription,
//     DialogFooter,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { format } from "date-fns"
// import { CalendarIcon } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"
//
// interface AppointmentModalProps {
//     isOpen: boolean
//     onClose: () => void
// }
//
// const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")
//     const [department, setDepartment] = useState("")
//     const [doctor, setDoctor] = useState("")
//     const [date, setDate] = useState<Date | undefined>(undefined)
//     const [message, setMessage] = useState("")
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const { toast } = useToast()
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault()
//
//         if (!name || !email || !phone || !department || !date) {
//             toast({
//                 title: "Missing Information",
//                 description: "Please fill all required fields.",
//                 variant: "destructive",
//             })
//             return
//         }
//
//         setIsSubmitting(true)
//
//         setTimeout(() => {
//             setIsSubmitting(false)
//             toast({
//                 title: "Appointment Requested",
//                 description: "We'll contact you soon to confirm your appointment.",
//             })
//             resetForm()
//             onClose()
//         }, 1500)
//     }
//
//     const resetForm = () => {
//         setName("")
//         setEmail("")
//         setPhone("")
//         setDepartment("")
//         setDoctor("")
//         setDate(undefined)
//         setMessage("")
//     }
//
//     return (
//         <Dialog open={isOpen} onOpenChange={onClose}>
//             <DialogContent className="sm:max-w-[600px] px-4 py-6 sm:px-6 sm:py-8">
//                 <DialogHeader>
//                     <DialogTitle className="text-xl sm:text-2xl font-abhaya text-hospital-blue">Request an Appointment</DialogTitle>
//                     <DialogDescription className="text-sm sm:text-base">
//                         Fill out the form below and we'll contact you to confirm your appointment time.
//                     </DialogDescription>
//                 </DialogHeader>
//
//                 <form onSubmit={handleSubmit} className="space-y-4 py-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                             <Label htmlFor="name">Full Name *</Label>
//                             <Input
//                                 id="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 placeholder="John Doe"
//                                 required
//                                 className="w-full"
//                             />
//                         </div>
//
//                         <div className="space-y-2">
//                             <Label htmlFor="email">Email Address *</Label>
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="johndoe@example.com"
//                                 required
//                                 className="w-full"
//                             />
//                         </div>
//
//                         <div className="space-y-2">
//                             <Label htmlFor="phone">Phone Number *</Label>
//                             <Input
//                                 id="phone"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 placeholder="(123) 456-7890"
//                                 required
//                                 className="w-full"
//                             />
//                         </div>
//
//                         <div className="space-y-2">
//                             <Label htmlFor="department">Department *</Label>
//                             <Select value={department} onValueChange={setDepartment} required>
//                                 <SelectTrigger id="department" className="w-full">
//                                     <SelectValue placeholder="Select Department" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="orthopedics">Orthopedics</SelectItem>
//                                     <SelectItem value="general-medicine">General Medicine</SelectItem>
//                                     <SelectItem value="general-surgery">General Surgery</SelectItem>
//                                     <SelectItem value="dental">Dental</SelectItem>
//                                     <SelectItem value="ent">ENT</SelectItem>
//                                     <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//
//                         <div className="space-y-2">
//                             <Label htmlFor="doctor">Preferred Doctor</Label>
//                             <Select value={doctor} onValueChange={setDoctor}>
//                                 <SelectTrigger id="doctor" className="w-full">
//                                     <SelectValue placeholder="No Preference" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="dr-smith">Dr. Smith</SelectItem>
//                                     <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
//                                     <SelectItem value="dr-williams">Dr. Williams</SelectItem>
//                                     <SelectItem value="dr-brown">Dr. Brown</SelectItem>
//                                     <SelectItem value="dr-jones">Dr. Jones</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>
//
//                         <div className="space-y-2">
//                             <Label htmlFor="date">Preferred Date *</Label>
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Button variant="outline" className="w-full justify-start text-left font-normal" id="date">
//                                         <CalendarIcon className="mr-2 h-4 w-4" />
//                                         {date ? format(date, "PPP") : <span>Select date</span>}
//                                     </Button>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-auto p-0">
//                                     <Calendar
//                                         mode="single"
//                                         selected={date}
//                                         onSelect={setDate}
//                                         initialFocus
//                                         disabled={(date) => {
//                                             const day = date.getDay()
//                                             const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0))
//                                             return day === 0 || isPastDate
//                                         }}
//                                     />
//                                 </PopoverContent>
//                             </Popover>
//                         </div>
//                     </div>
//
//                     <div className="space-y-2">
//                         <Label htmlFor="message">Additional Information</Label>
//                         <Textarea
//                             id="message"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             placeholder="Please describe your medical concern or any specific requirements"
//                             rows={4}
//                             className="w-full"
//                         />
//                     </div>
//
//                     <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-4">
//                         <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
//                             Cancel
//                         </Button>
//                         <Button type="submit" className="bg-hospital-blue w-full sm:w-auto" disabled={isSubmitting}>
//                             {isSubmitting ? "Requesting..." : "Request Appointment"}
//                         </Button>
//                     </DialogFooter>
//                 </form>
//             </DialogContent>
//         </Dialog>
//     )
// }
//
// export default AppointmentModal
