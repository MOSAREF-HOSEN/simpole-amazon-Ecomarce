import React from 'react';
import me from '../../img/me4.png'
const About = () => {
    return (
        <div className='flex justify-center items-center mt-24 mb-24'>
            <div className='card w-96 bg-base-100 shadow-xl '>
                <div className='card-body'>
                    <div>
                        <img className='w-50% h-50%' src={me} alt="" />
                    </div>
                    <h2 className="text-center uppercase font-sans text-3xl text-primary">font-end web developer</h2>

                    <p className=''>as a font-end developer to work in a web application where  i can overhaul my knowedge and can build excllent website with teammates.in future will explore more about back-end developer and will be a full stack developer</p>
                    <a className="btn btn-outline btn-primary" href="">Download Resume</a>
                </div>

            </div>
        </div>
    );
};

export default About;