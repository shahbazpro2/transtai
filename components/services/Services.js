import React from 'react'

const Services = ({ serviceRef }) => {
    return (
        <div className="my-32" ref={serviceRef}>
            <div className="text-4xl font-bold text-center">
                Services
            </div>
            <div className="grid grid-cols-4 mt-28 gap-16">
                <div className="text-xl">
                    Multi camera pipeline support
                </div>
                <div className="text-xl">
                    Multiple regions of interest (ROI)
                </div>
                <div className="text-xl">
                    3D model object detection with multiple regions of “danger zone
                </div>
                <div className="text-xl">
                    Passenger detection and counting occupancy
                </div>
                <div className="text-xl">
                    Face detection & counting occupancy
                </div>
                <div className="text-xl">
                    Bag detection & counting occupancy
                </div>
                <div className="text-xl">
                    Transit center cleanliness detection and reporting
                </div>
                <div className="text-xl">
                    Historic data of processed pipeline data points
                </div>
                <div className="text-xl">
                    Face blurring feature
                </div>
                <div className="text-xl">
                    Pandemic Face Mask or No Mask detection
                </div>
                <div className="text-xl">
                    Live health data
                </div>
                <div className="text-xl">
                    Live GPS data
                </div>
                <div className="text-xl">
                    Live / stored video and or still image feed on dashboard
                </div>
                <div className="text-xl">
                    Live J1939 broker messages on the dashboard
                </div>
                <div className="text-xl">
                    Ingress / egress counting i.e., entrance or exit counts
                </div>
                <div className="text-xl">
                    Email/ text and local alarm triggers
                </div>
            </div>
        </div>
    )
}

export default Services
