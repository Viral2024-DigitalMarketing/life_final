"use client";
import { useParams } from "react-router-dom";
import React from "react";
import JointReplacementPage from "@/components/services/joint-replacement-page.tsx";
import OrthopedicPage from "@/components/services/orthopedic-page.tsx";
import GeneralHealthPage from "@/components/services/general-health-page.tsx";
import SpecializedServicesPage from "@/components/services/specialized-services-page.tsx";
import Navbar from "@/components/layout/Navbar.tsx";
import Footer from "@/components/layout/Footer.tsx";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  console.log("Service ID:", serviceId); // Debug log

  switch (serviceId) {
    case "joint-replacement":
      return <JointReplacementPage />;
    case "orthopedic":
      return <OrthopedicPage />;
    case "general-health":
      return <GeneralHealthPage />;
    case "specialized-services":
      return <SpecializedServicesPage />;
    default:
      return (
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-20 text-center text-xl text-gray-600">
              Service not found. Please check the URL or go back to the services page.
            </main>
            <Footer />
          </div>
      );
  }
};

export default ServiceDetail;
