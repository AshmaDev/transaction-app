import React from 'react';
import Card from '../components/card';
import Form from '../components/form';
import { Transaction } from "../utils/types";

const fields = [
    {
        type: "number",
        name: "amount",
        label: "Amount",
        validate: {
            required: "This field is required",
            min: {
                value: 0,
                message: 'Amount must be positive'
            }
        }
    },
    {
        type: "text",
        name: "account",
        label: "Account number",
        validate: {
            required: "This field is required",
            pattern: {
                value: /^PL\d{26}$/i,
                message: "Invalid account number"
            }

        }
    },
    {
        type: "text",
        name: "beneficiary",
        label: "Beneficiary",
        validate: {}
    },
    {
        type: "text",
        name: "address",
        label: "Address",
        validate: {}
    },
    {
        type: "text",
        name: "description",
        label: "Description",
        validate: {}
    }
];

interface Props {
    addTranasaction: (value: Transaction) => void
}

export default function TranasctionForm({ addTranasaction }: Props) {
    const handleSubmit = (form: any) => {
        addTranasaction({ ...form, id: Date.now(), date: new Date(), amount: parseFloat(`-${form.amount}`) })
    }

    return (
        <Card title="New Transaction">
            <Form
                fields={fields}
                onSubmit={handleSubmit}
            />
        </Card>
    );
}