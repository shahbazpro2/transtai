import React from 'react'
import CardComp from './CardComp'

const Services = () => {
    return (
        <div className="my-32">
            <div className="text-4xl font-bold text-center">
                Services
            </div>
            <div className="grid grid-cols-4 mt-28 gap-5">
                <CardComp title="Multi camera pipeline support" image="/control.webp" />
                <CardComp title="Multiple regions of interest (ROI)" image="/communications.webp" />
                <CardComp title="3D model object detection with multiple regions of “danger zone”  " image="Electrical.webp" />
                <CardComp title="Passenger detection and counting occupancy
" image="/plan.webp" />
                <CardComp title="Face detection & counting occupancy
" image="/monitor.webp" />
            </div>
        </div>
    )
}

export default Services
