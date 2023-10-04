'use client'

import Link from 'next/link';
import { ReactElement } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { text } from 'stream/consumers';
import AnimateCard from "../shared/animated-card";
import Image from "next/image";
import { MainTechProps } from '@/src/data';

interface CardGithubProps {
    link: string
    text: string,
    id: number,
    mainTech: MainTechProps[]
}

function CardGithub({ link, text, id, mainTech }: CardGithubProps) {
    return (
        <AnimateCard id={id} style="bg-white text-black flex items-center text-4xl font-roclette w-full h-16 mt-4 resp:text-lg resp:w-[90%] resp:h-10" >
            <a className='flex justify-between w-full p-2'
                href={link}
                key={id}
            >
                <div className='flex items-center' >
                    <FaGithubSquare />
                    <span className="pl-1">{text}</span>
                </div>
                <div className='flex p-2 grow justify-end'>
                    {mainTech && (mainTech.map(res => { return <Image className='m-2 resp:p-2 resp:m-0' alt="test" title={res.title} src={res.path} width={40} height={40} key={res.title} /> })
                    )}
                </div>

            </a>
        </AnimateCard>
    );
}

export default CardGithub;
