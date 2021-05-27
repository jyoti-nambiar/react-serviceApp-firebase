import React from 'react'

function HomeDiv() {
    return (<>
        <div className="flex flex-col items-center m-2">
            <i className="fas fa-hand-peace m-6"></i>
            <p className="text-gray-600 font-bold text-center">Socially responsible cleaning company in Stockholm, Uppsala, Västerås and Enköping</p>
            <p className="text-center">Our employees have collective bargain agreement and enjoy rights to paid vacation, pension, sick-leave and other benefits.</p>
        </div>
        <div className="flex flex-col items-center m-2">
            <i className="fas fa-unlock m-6"></i>
            <p className="text-gray-600 font-bold text-center">No commitment</p>
            <p className="text-center">Out home cleaning or office cleaning has no lock-in contract — pause your subscription whenever you want. You’re always welcome back.</p>
        </div>
        <div className="flex flex-col items-center m-2">
            <i className="fas fa-id-badge m-6"></i>
            <p className="text-gray-600 font-bold text-center">Always the same cleaner</p>
            <p className="text-center">One of our carefully selected and trained cleaning professionals cleans your home at every cleaning opportunity, so you can always feel confident in hiring us as a cleaning company, whether you hire us as a company or as a private person.</p>
        </div>
        <div className="flex flex-col items-center m-2">
            <i className="fas fa-laptop m-6"></i>
            <p className="text-gray-600 font-bold text-center">Easy online booking</p>
            <p className="text-center">One of our carefully selected and trained cleaning professionals cleans your home at every cleaning opportunity, so you can always feel confident in hiring us as a cleaning company, whether you hire us as a company or as a private person.</p>
        </div>
    </>
    )
}

export default HomeDiv

