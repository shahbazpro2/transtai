import React from 'react'

const TopSection = () => {
    return (
        <div className="text-white pt-30 bg-image1 w-full min-h-screen bg-cover">
            <div className="flex justify-center items-center min-h-screen">
                <div className="">
                    <div className="text-6xl text-center w-[1000px] m-auto">
                        EXPERT TECHNOLOGY & SECURITY SOLUTIONS
                    </div>
                    <div className="flex justify-center mt-10">
                        <ul className="list-disc">
                            <li>Multi camera pipeline support</li>
                            <li>Multiple regions of interest (ROI)</li>
                            <li>3D model object detection with multiple regions of “danger zone”
                            </li>
                            <li>Passenger detection and counting occupancy</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection
