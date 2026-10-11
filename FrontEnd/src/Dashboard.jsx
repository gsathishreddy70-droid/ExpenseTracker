import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "./config";

function Dashboard() {

  const [expenses, setExpenses] = useState([]);

  const navigate = useNavigate();

  const getExpenses = () => {

    axios
      .get(`${API_BASE_URL}/expenses`)
      .then((response) => {

        setExpenses(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  };

  useEffect(() => {

    getExpenses();

  }, []);

  const deleteExpense = (id) => {

    axios
      .delete(`${API_BASE_URL}/expenses/${id}`)
      .then(() => {

        alert("Expense deleted successfully");

        getExpenses();

      })
      .catch((error) => {

        console.log(error);

      });

  };

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (

    <div className="container">

      <h1>Expense Tracker</h1>

      <div className="summary">

        <div className="summary-box">

          <h3>Total Expenses</h3>

          <h2>₹{total}</h2>

        </div>

        <div className="summary-box">

          <h3>Total Records</h3>

          <h2>{expenses.length}</h2>

        </div>

      </div>

      <button
        className="add-btn"
        onClick={() => navigate("/add")}
      >
        + Add Expense
      </button>

      <div className="card">

        <h2>Expense List</h2>

        {expenses.length === 0 ? (

          <h3>No Expenses Found</h3>

        ) : (

          <table>

            <thead>

              <tr>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
                <th>Date</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {expenses.map((expense) => (

                <tr key={expense.id}>

                  <td>{expense.itemName}</td>

                  <td>₹{expense.amount}</td>

                  <td>{expense.category}</td>

                  <td>{expense.description}</td>

                  <td>{expense.date}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteExpense(expense.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>

  );
}

export default Dashboard;