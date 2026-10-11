package com.anurag.expensetracker.service;

import com.anurag.expensetracker.entity.Expense;
import com.anurag.expensetracker.repository.ExpenseRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    public Expense getExpense(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));
    }

    public Expense addExpense(Expense expense) {
        return repository.save(expense);
    }

    public Expense updateExpense(Long id, Expense expense) {

        Expense oldExpense = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        oldExpense.setItemName(expense.getItemName());
        oldExpense.setAmount(expense.getAmount());
        oldExpense.setCategory(expense.getCategory());
        oldExpense.setDescription(expense.getDescription());
        oldExpense.setDate(expense.getDate());

        return repository.save(oldExpense);
    }

    public void deleteExpense(Long id) {
        repository.deleteById(id);
    }
}