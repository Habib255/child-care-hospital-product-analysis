import React from 'react';
import img from '../img/hospital.jpg'
import './Intro.css'

const Intro = () => {
    return (
        <div>
            <div className='intro'>
                <div className='details p-5'>
                    <h3 className='text-6xl pt-8'>Welcome to child care hospital</h3>
                    <h3 className='text-6xl font-sans pt-8'>An uniq hospital for children care</h3>
                    <p className='pt-5'>the only specified children hospital in the country is our'<s></s>
                        .it continues service since 2000.our hospital is renowned to everyone in the city area.
                        everyday the spacial doctor come for treatment we ensure all types of safty here. we are proud to be assist you to save
                        your baby in this healthy world.</p>
                </div>
                <div className='img p-5'><img className='rounded' src={img} alt="" /></div>
            </div>
        </div>
    );
};

export default Intro;