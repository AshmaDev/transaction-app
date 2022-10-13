import React, { useEffect, useState } from "react";
import Balance from "../containers/balance";
import Filter from "../containers/filter";
import TranasctionForm from "../containers/transaction-form";
import TransactionsTable from "../containers/transactions-table";
import { Transaction } from "../utils/types";
import http from "../utils/http";

import { API_ENDPOINTS } from "../constants/api-endpoints";

export default function LandingPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const fetchTransactions = () => {
      http.get(API_ENDPOINTS.TRANSACTIONS).then(({ data }) => {
        setTransactions(data.transactions);
      });
    }

    fetchTransactions();
  }, []);

  const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  const handleFilter = (beneficiary: string) => {
    setFilter(beneficiary);
  }

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  }

  const deleteTransaction = (id: number) => {
    setTransactions((transactions) => transactions.filter((transaction) => transaction.id !== id));
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden ">
      <div className="max-w-5xl pt-24 pb-12 mx-auto">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full order-last md:order-first flex flex-wrap">
            <Balance balance={balance} />
            <Filter onFilter={handleFilter} />
          </div>
          <div className="w-full order-first md:order-last">
            <TranasctionForm
              addTranasaction={addTransaction}
            />
          </div>
        </div>
        <div>
          <TransactionsTable
            transactions={transactions.filter((transaction) => transaction.beneficiary.toLowerCase().includes(filter.toLowerCase()))}
            onDelete={deleteTransaction}
          />
        </div>
      </div>
    </section>
  );
}
