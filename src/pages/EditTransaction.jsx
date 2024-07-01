import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePickerDemo } from "@/components/ui/date-picker";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Load transaction details by id and set state
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update transaction logic here
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Transaction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <DatePickerDemo selected={date} onSelect={setDate} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <Select value={type} onValueChange={setType} required>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nike">Nike</SelectItem>
              <SelectItem value="adidas">Adidas</SelectItem>
              <SelectItem value="puma">Puma</SelectItem>
              <SelectItem value="reebok">Reebok</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditTransaction;