import React from 'react'
import Card from '../components/card';

export default function Balance({ balance }: { balance: number }) {
    return (
        <Card className="w-full md:h-1/3 lg:h-1/4" title="Balance">
            <p className="text-3xl text-pink-700 font-bold mt-2">{balance.toFixed(2)} zł</p>
        </Card>
    );
}
