import React from 'react';
import Card from '../components/card';

interface Props {
    onFilter: (value: string) => void;
}

export default function Filter({ onFilter }: Props) {
    return (
        <Card className="w-full md:h-1/3 self-end" title="Filter">
            <div className="mt-4">
                <label
                    htmlFor="filter"
                    className="block text-sm font-medium text-gray-700"
                >
                    Beneficiary
                </label>
                <div className="flex flex-col items-start">
                    <input
                        type="text"
                        name="filter"
                        placeholder="Beneficiary"
                        className="block w-full mt-1 border border-gray-400 rounded-md shadow-sm focus:border-pink-700 p-2"
                        onChange={({ target: { value } }) => onFilter(value)}
                    />
                </div>
            </div>
        </Card>
    );
}