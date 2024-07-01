import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

const Index = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: new Date(), amount: 100, type: "income", category: "nike" },
    { id: 2, date: new Date(), amount: 50, type: "expense", category: "adidas" },
  ]);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sneaker Transactions</h1>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <Card key={transaction.id}>
            <CardHeader>
              <CardTitle>{transaction.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {format(transaction.date, "yyyy-MM-dd")}</p>
              <p>Amount: ${transaction.amount}</p>
              <p>Type: {transaction.type}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link to={`/edit-transaction/${transaction.id}`}>
                <Button variant="outline">Edit</Button>
              </Link>
              <Button variant="destructive" onClick={() => handleDelete(transaction.id)}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;