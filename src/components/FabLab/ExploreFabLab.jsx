import React, { useState } from 'react';
import { ExploreLab } from '../../data/exploreFabLab';


const tabsName = [
    "Laser Cutter",
    "3D Printer",
    "PCB Milling",
];

const Explore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [content, setContent] = useState(ExploreLab[0].content);

    const setMyCard = (value) => {
        setCurrentTab(value);
        const result = ExploreLab.filter((content) => content.tag === value);
        setContent(result[0].content);
    }

    return (
        <div className='w-11/12 mx-auto px-8 flex flex-col items-center'>
            {/* tab section */}
            <div className='flex flex-row w-full items-center bg-blue-200'>
                {
                    tabsName.map((ele, index) => {
                        return (
                            <div
                                className={` text-[40px] flex flex-row items-center justify-center w-[33.33%] ${currentTab === ele
                                        ? "bg-blue-500 text-white"
                                        : "text-black"
                                    } px-7 py-[7px] transition-all duration-200 cursor-pointer hover:text-black`}
                                key={index}
                                onClick={() => setMyCard(ele)}
                            >
                                {ele}
                            </div>
                        );
                    })
                }
            </div>

            {/* card section  */}
            <div className='w-full pt-4 text-[20px] px-4'>
                {
                    content.map((ele, index) => {
                        return (
                            <div className='flex flex-col gap-8 items-center'>
                                {/* description section */}
                                <div className='text-center'>
                                    {
                                        ele.description
                                    }
                                </div>
                                
                                {/* features section  */}
                                <div className='flex flex-col text-center'>
                                    <div className='text-[40px] mb-4 text-bold'>
                                        Features
                                    </div>

                                    <div>
                                    {
                                        ele.features.map((feature, index) => {
                                            return(
                                                <div key={index} className='flex felx-row items-center justify-center'>
                                                    {feature.feature}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Explore
