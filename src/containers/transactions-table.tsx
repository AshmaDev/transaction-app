import React from 'react'
import Card from '../components/card';
import Table from '../components/table';
import { Transaction } from "../utils/types";

interface Props {
    transactions: Transaction[],
    onDelete: (id: number) => void;
}

export default function TransactionsTable({ transactions, onDelete }: Props) {
    return (
        <Card
            title="Transactions Table"
            className="min-h-screen"
        >
            <div className="mt-6">
                <Table data={transactions} onDelete={onDelete} />
            </div>
        </Card>
    );
}
