import React from 'react';
import GlowingText from './GlowingText';
import { SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import './projectFrame.css';

type Props = {
    className: string,
    theme:string,
    title:string,
    role:string,
    image:string,
};

function ProjectFrame({ className, theme, title, role, image }: Props) {
  return (
    <>  
            <div className={`p-0 flex flex-col border border-[10px] rounded-[30px] w-[50vw] h-[50vh] border-[#ffffff7d] overflow-hidden ${className}`}>
                <div className={`transition-all ease-in-out duration-300 hover:bg-gradient-to-b from-[${theme}] to-[#1E1E1E] parent`}>                
                    <div className='project-header flex flex-row justify-between items-center'>
                        <div className='p-3 px-5'>
                            <div>
                                <GlowingText className='text-3xl font-medium'>{title}</GlowingText>      
                            </div>
                            <div>
                                <p className='text-[#ffffff7d] px-[1px]'>{role}</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-[20px] px-5'>
                            <SiGithub className='text-white glow text-4xl'/>
                            <CgWebsite className='text-white glow text-4xl'/>
                        </div>      
                    </div>
                    <div className='child project-image flex overflow-hidden items-center justify-center relative top-16 px-20 transition-all ease-in-out duration-300'>
                        <img src={image} className='overflow-hidden w-full h-full rounded-xl' alt={title} />
                    </div>
                </div>
            </div>
            <br />
    </>
  );
}

export default ProjectFrame;
