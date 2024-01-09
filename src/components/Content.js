import React from 'react'
import PricesBTC from './PricesBTC'
import { useMenu } from '../context/SidebarContext';
import RandomImage from './RandomImage';

const Content = () => {
    const { showSidebar } = useMenu("");
    return (
        <main className={`transition-all duration-300 ${showSidebar ? "pl-0" : "md:pl-80"}`}>
            <div className='p-4 md:p-6 flex-1 h-[calc(100vh_-_80px)] overflow-y-auto '>
                <h1 className='text-3xl'>Price of BTC</h1>
                <PricesBTC />
                <div className='mt-8'>
                    <h1 className='text-3xl'>Beautiful Images</h1>
                    <RandomImage />
                </div>
            </div>
        </main>
    )
}

export default Content