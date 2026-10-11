import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddExpense() {

  const navigate = useNavigate();

  const [expense, setExpense] = useState({
    itemName: "",
    amount: "",
    category: "",
    description: "",
    date: ""
  });

  const handleChange = (e) => {

    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8081/expenses",
        {
          ...expense,
          amount: Number(expense.amount)
        }
      );

      alert("Expense added successfully");

      navigate("/");

    } catch (error) {

      console.log("Error:", error);
      console.log("Response:", error.response);

      alert("Failed to add expense");

    }

  };

  return (

    <div className="container">

      <div className="card">

        <h1>Add Expense</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>Item Name</label>

            <input
              type="text"
              name="itemName"
              value={expense.itemName}
              onChange={handleChange}
              placeholder="Enter item name"
              required
            />

          </div>


          <div className="form-group">

            <label>Amount</label>

            <input
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              min="0"
              required
            />

          </div>


          <div className="form-group">

            <label>Category</label>

            <select
              name="category"
              value={expense.category}
              onChange={handleChange}
              required
            >

              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>

            </select>

          </div>


          <div className="form-group">

            <label>Description</label>

            <textarea
              name="description"
              value={expense.description}
              onChange={handleChange}
              placeholder="Enter description"
            />

          </div>


          <div className="form-group">

            <label>Date</label>

            <input
              type="date"
              name="date"
              value={expense.date}
              onChange={handleChange}
              required
            />

          </div>


          <button
            type="submit"
            className="add-btn"
          >
            Add Expense
          </button>


          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddExpense;