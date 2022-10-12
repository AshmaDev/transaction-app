import React, { useState } from "react";
import { Transaction } from "../utils/types";
import { formatDate } from "../utils/format-date";
import useTable from "../hooks/use-table";
import TableFooter from "./table-footer";
import Button from "./button";

interface DeleteFunc {
    onDelete: (id: number) => void;
}

interface TableProps {
    data: Transaction[];
}

const rowsPerPage = 20;
const tableHeaders = ["ID", "Beneficiary", "Amount", "Description", "Date", "Delete"]

export default function Table({ data, onDelete }: TableProps & DeleteFunc) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {tableHeaders.map(th => (
                                        <th
                                            key={th}
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            {th}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {slice.length > 1 ?
                                    slice.map((row: Transaction) => <TableRow key={row.id} {...row} onDelete={onDelete} />) :
                                    <tr><td colSpan={tableHeaders.length}><p className="p-8 text-pink-700">No transaction data</p></td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </div>
    );
}

const TableRow = ({
    id,
    beneficiary,
    address,
    account,
    amount,
    description,
    date,
    onDelete
}: Transaction & DeleteFunc) => {

    return (
        <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {id}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800">
                <p className="font-bold">{beneficiary}</p>
                <p className="italic">{account}</p>
                <p>{address}</p>
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                <p className="font-bold text-pink-700">{amount} zł</p>
            </td>
            <td className="px-6 py-4 text-sm font-medium">
                {description}
            </td>
            <td className="px-6 py-4 text-sm font-medium">
                {formatDate(date)}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <Button onClick={() => onDelete(id)}>
                    Delete
                </Button>
            </td>
        </tr>
    )
}