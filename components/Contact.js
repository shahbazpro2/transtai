import React from 'react'

const Contact = ({ contactRef }) => {
    return (
        <div className="bg-image3 bg-cover text-white bg-center text-center" ref={contactRef}>
            <div className="bg-[#000000b0] pb-36 pt-28">
                <div className="container mx-auto  px-5 py-10">
                    <div className="text-4xl font-bold text-center">
                        Contact Us
                    </div>
                    <div className="text-xl mt-10 py-3 px-5">
                        <ul className="list-none">
                            <li>Sales and general information:  <a className="text-blue-400" href="http://sales@transit-ai.com">sales@transit-ai.com</a></li>
                            <li>Technical support: <a className="text-blue-400" href="http://support@transit-ai.com">support@transit-ai.com</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
