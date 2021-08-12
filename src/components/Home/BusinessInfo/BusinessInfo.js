import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infos = [
    {
        title: "Opening Hours",
        description: 'We are open 7 days',
        icon: faClock,
        background: "#11c1ce"
    },
    {
        title: "Visit our location",
        description: 'Brahmanbaria, Bancharampur public hospital',
        icon: faMapMarker,
        background: "#3A4256"
    },
    {
        title: "Contact us now",
        description: '+8801627575647',
        icon: faPhone ,
        background: "#11c1ce"
    }
]

const BusinessInfo = () => {
    return (
         <section>
            <div className="w-75 row mx-auto">
            {
                infos.map(info => <InfoCard info={info}/> )
             }
            </div>
        </section>
    );
};

export default BusinessInfo;