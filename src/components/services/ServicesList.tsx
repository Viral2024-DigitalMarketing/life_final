import type React from "react"

interface Service {
  id: number
  title: string
  image: string
}

const ServicesList: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Hip Replacement",
      image:
          "https://images.unsplash.com/photo-1628201845577-a56f798454b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title: "Knee Replacement",
      image:
          "https://images.unsplash.com/photo-1588072432642-74144890c533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      id: 3,
      title: "Shoulder Replacement",
      image:
          "https://images.unsplash.com/photo-1618523400689-caea49549c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
            <div key={service.id} className="relative rounded-xl overflow-hidden shadow-lg h-80 md:h-[28rem]">
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="object-cover w-full h-full" />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white text-lg">Completed Total 100+ {service.title} Surgeries</p>
              </div>
            </div>
        ))}
      </div>
  )
}

export default ServicesList

