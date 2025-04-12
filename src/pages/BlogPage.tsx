// import Image from "next/image"
// import { Abhaya_Libre, Be_Vietnam_Pro } from "next/font/google"
//
// const abhayaLibre = Abhaya_Libre({
//     subsets: ["latin"],
//     weight: ["600"],
//     variable: "--font-abhaya-libre",
// })
//
// const beVietnamPro = Be_Vietnam_Pro({
//     subsets: ["latin"],
//     weight: ["400", "500"],
//     variable: "--font-be-vietnam-pro",
// })
//
// export default function BlogDescription() {
//     return (
//         <main className={`min-h-screen bg-white ${abhayaLibre.variable} ${beVietnamPro.variable}`}>
//             <div className="container mx-auto px-4 py-8">
//                 {/* Featured Badge */}
//                 <div className="mb-4">
//           <span
//               className="inline-flex items-center rounded-lg border border-gray-300 px-2 py-1 text-sm"
//               style={{ width: "121.57px", height: "30px", gap: "4px", borderRadius: "8px", borderWidth: "1px" }}
//           >
//             Featured
//           </span>
//                 </div>
//
//                 {/* Title Section */}
//                 <h1
//                     className="mb-6 text-4xl font-semibold"
//                     style={{
//                         fontFamily: "var(--font-abhaya-libre)",
//                         fontWeight: 600,
//                         fontSize: "36px",
//                         lineHeight: "100%",
//                         letterSpacing: "0%",
//                     }}
//                 >
//                     The Future of Joint Replacement
//                 </h1>
//
//                 {/* First Image and Text Section */}
//                 <div className="mb-12" style={{ width: "100%", maxWidth: "1066px", height: "577px", gap: "24px" }}>
//                     <div className="mb-6" style={{ width: "100%", maxWidth: "1066px", height: "493px" }}>
//                         <Image
//                             src="/placeholder.svg?height=493&width=1066"
//                             alt="Joint Replacement Surgery"
//                             width={1066}
//                             height={493}
//                             className="h-full w-full object-cover rounded-2xl"
//                             style={{ background: "#000000" }}
//                         />
//                     </div>
//                     <p
//                         className="text-center mx-auto"
//                         style={{
//                             fontFamily: "var(--font-be-vietnam-pro)",
//                             fontWeight: 400,
//                             fontSize: "16px",
//                             lineHeight: "100%",
//                             letterSpacing: "0%",
//                             maxWidth: "1066px",
//                         }}
//                     >
//                         Orthopedic surgery is a medical specialty that focuses on the musculoskeletal system, which includes the
//                         bones, joints, ligaments, tendons, muscles, and nerves. Orthopedic surgeons treat a wide range of
//                         conditions, from sports injuries to degenerative diseases. One of the most common orthopedic procedures is
//                         joint replacement surgery, which involves replacing a damaged joint with an artificial one.
//                     </p>
//                 </div>
//
//                 {/* Second Section - Image and Text Side by Side */}
//                 <div
//                     className="flex flex-col md:flex-row gap-6 mb-12"
//                     style={{ width: "100%", maxWidth: "1235px", height: "396px", gap: "24px" }}
//                 >
//                     <div style={{ width: "100%", maxWidth: "650px", height: "396px" }}>
//                         <Image
//                             src="/placeholder.svg?height=396&width=650"
//                             alt="Orthopedic Surgery"
//                             width={650}
//                             height={396}
//                             className="h-full w-full object-cover rounded-[24.36px]"
//                         />
//                     </div>
//                     <div className="flex-1">
//                         <p
//                             style={{
//                                 fontFamily: "var(--font-be-vietnam-pro)",
//                                 fontWeight: 400,
//                                 fontSize: "16px",
//                                 lineHeight: "120%",
//                                 letterSpacing: "0px",
//                                 color: "rgba(60, 60, 67, 0.85)",
//                             }}
//                         >
//                             Orthopedic surgery is a medical specialty that focuses on the musculoskeletal system, which includes the
//                             bones, joints, ligaments, tendons, muscles, and nerves.
//                             <br />
//                             <br />
//                             Orthopedic surgeons treat a wide range of conditions, from sports injuries to degenerative diseases.
//                             <br />
//                             <br />
//                             One of the most common orthopedic procedures is joint replacement surgery, which involves replacing a
//                             damaged joint with an artificial one.
//                         </p>
//                     </div>
//                 </div>
//
//                 {/* Third Section - Text and Image Side by Side */}
//                 <div
//                     className="flex flex-col md:flex-row gap-6 mb-12"
//                     style={{ width: "100%", maxWidth: "1235px", height: "398px", gap: "24px" }}
//                 >
//                     <div style={{ width: "100%", maxWidth: "561px", height: "398px", gap: "16px" }}>
//                         <h2
//                             className="mb-4"
//                             style={{
//                                 fontFamily: "var(--font-be-vietnam-pro)",
//                                 fontWeight: 500,
//                                 fontSize: "32px",
//                                 lineHeight: "100%",
//                                 letterSpacing: "0%",
//                                 color: "#000000",
//                             }}
//                         >
//                             The Future of Joint Replacement
//                         </h2>
//                         <p
//                             style={{
//                                 fontFamily: "var(--font-be-vietnam-pro)",
//                                 fontWeight: 400,
//                                 fontSize: "16px",
//                                 lineHeight: "120%",
//                                 letterSpacing: "0px",
//                             }}
//                         >
//                             Joint replacement technology continues to advance, with new materials and techniques being developed to
//                             improve outcomes and reduce recovery time. Minimally invasive procedures, computer-assisted surgery, and
//                             patient-specific implants are just a few of the innovations that are transforming the field of joint
//                             replacement.
//                         </p>
//                     </div>
//                     <div style={{ width: "100%", maxWidth: "650px", height: "396px" }}>
//                         <Image
//                             src="/placeholder.svg?height=396&width=650"
//                             alt="Future of Joint Replacement"
//                             width={650}
//                             height={396}
//                             className="h-full w-full object-cover rounded-[24.36px]"
//                             style={{ background: "#000000", borderRadius: "24.36px" }}
//                         />
//                     </div>
//                 </div>
//
//                 {/* Fourth Section - Image and Text Side by Side */}
//                 <div
//                     className="flex flex-col md:flex-row gap-6 mb-12"
//                     style={{ width: "100%", maxWidth: "1235px", height: "396px", gap: "24px" }}
//                 >
//                     <div style={{ width: "100%", maxWidth: "650px", height: "396px" }}>
//                         <Image
//                             src="/placeholder.svg?height=396&width=650"
//                             alt="Hip Replacement Surgery"
//                             width={650}
//                             height={396}
//                             className="h-full w-full object-cover rounded-[24.36px]"
//                             style={{ borderRadius: "24.36px" }}
//                         />
//                     </div>
//                     <div style={{ width: "100%", maxWidth: "561px", height: "208px", gap: "16px" }}>
//                         <h2
//                             className="mb-4"
//                             style={{
//                                 fontFamily: "var(--font-be-vietnam-pro)",
//                                 fontWeight: 500,
//                                 fontSize: "32px",
//                                 lineHeight: "100%",
//                                 letterSpacing: "0%",
//                             }}
//                         >
//                             Hip Replacement Surgery
//                         </h2>
//                         <p
//                             style={{
//                                 fontFamily: "var(--font-be-vietnam-pro)",
//                                 fontWeight: 400,
//                                 fontSize: "16px",
//                                 lineHeight: "120%",
//                                 letterSpacing: "0px",
//                             }}
//                         >
//                             Hip replacement surgery is a surgical procedure that replaces a damaged hip joint with an artificial one.
//                             The artificial hip joint is made of metal and plastic and is designed to mimic the function of a natural
//                             hip joint. Hip replacement surgery is typically recommended for people with severe hip pain that is not
//                             relieved by other treatments. Hip pain can be caused by a number of conditions, including osteoarthritis,
//                             rheumatoid arthritis, and injuries.
//                         </p>
//                     </div>
//                 </div>
//
//                 {/* Fifth Section - Text and Image Side by Side */}
//                 <div
//                     className="flex flex-col md:flex-row gap-6"
//                     style={{ width: "100%", maxWidth: "1235px", height: "400px", gap: "24px" }}
//                 >
//                     <div style={{ width: "100%", maxWidth: "561px", height: "362px", gap: "16px" }}>
//                         <h2
//                             className="mb-4"
//                             style={{
//                                 fontFamily: "var(--font-be-vietnam-pro)",
//                                 fontWeight: 500,
//                                 fontSize: "32px",
//                                 lineHeight: "100%",
//                                 letterSpacing: "0%",
//                                 color: "#000000",
//                             }}
//                         >
//                             Recovery from Joint Replacement Surgery
//                         </h2>
//                         <p
//                             style={{
//                                 fontFamily: "var(--font-be-vietnam-pro)",
//                                 fontWeight: 400,
//                                 fontSize: "16px",
//                                 lineHeight: "120%",
//                                 letterSpacing: "0px",
//                             }}
//                         >
//                             Joint replacement surgery is a major surgery, but it is typically a very successful procedure. Most people
//                             who have joint replacement surgery are able to return to their normal activities within a few months.
//                             <br />
//                             <br />
//                             There are a number of things that you can do to help ensure a successful recovery from joint replacement
//                             surgery. These include:
//                             <br />• Following your doctor's instructions carefully
//                             <br />• Taking your pain medication as prescribed
//                             <br />• Keeping the incision clean and dry
//                             <br />• Participating in physical therapy
//                             <br />
//                             <br />
//                             If you are considering joint replacement surgery, it is important to talk to your doctor about the risks
//                             and benefits of the procedure.
//                         </p>
//                     </div>
//                     <div style={{ width: "100%", maxWidth: "650px", height: "396px" }}>
//                         <Image
//                             src="/placeholder.svg?height=396&width=650"
//                             alt="Recovery from Joint Replacement"
//                             width={650}
//                             height={396}
//                             className="h-full w-full object-cover rounded-[24.36px]"
//                             style={{ borderRadius: "24.36px" }}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }
