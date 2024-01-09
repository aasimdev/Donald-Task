import React, { useEffect, useState } from 'react';
import { fetchBTCPrice } from '../utils/Api';

const PricesBTC = () => {
    const [priceData, setPriceData] = useState();

    useEffect(() => {
        const getBTCPrice = async () => {
            try {
                const result = await fetchBTCPrice();
                setPriceData(result.bpi);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        getBTCPrice();
    }, []);

    return (
        <>
            {priceData ? (
                <div className="w-full sm:w-auto overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mt-6 inline-block">
                    <table className="min-w-full w-full sm:min-w-96 divide-y divide-gray-300">
                        <thead className="bg-purple-50">
                            <tr>
                                {Object.values(priceData).map((title, index) => (
                                    <th key={index} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                                        {title.code}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            <tr>
                                {Object.values(priceData).map((rate, index) => (
                                    <td key={index} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{rate.rate_float}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default PricesBTC;
