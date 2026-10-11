package com.anurag.expensetracker.controller;

import com.anurag.expensetracker.entity.Expense;
import com.anurag.expensetracker.service.ExpenseService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expenses")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return service.getAllExpenses();
    }

    @GetMapping("/{id}")
    public Expense getExpense(@PathVariable Long id) {
        return service.getExpense(id);
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return service.addExpense(expense);
    }

    @PutMapping("/{id}")
    public Expense updateExpense(
            @PathVariable Long id,
            @RequestBody Expense expense) {

        return service.updateExpense(id, expense);
    }

    @DeleteMapping("/{id}")
    public String deleteExpense(@PathVariable Long id) {

        service.deleteExpense(id);

        return "Expense deleted successfully";
    }
}