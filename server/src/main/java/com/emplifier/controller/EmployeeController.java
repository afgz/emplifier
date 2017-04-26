package com.emplifier.controller;

import com.emplifier.entity.Employee;
import com.emplifier.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepo;
	
	public EmployeeController() {}
	
	@GetMapping("/employees")
	@ResponseBody
	public Iterable<Employee> getEmployees() {

		return employeeRepo.findAll();
	}
	
	@PostMapping("/employees")
	@ResponseBody
	public Employee createEmployee( @RequestBody Employee employee ) {

		return employeeRepo.save(employee);
	}

	@PutMapping("/employees")
	@ResponseBody
	public Employee updateEmployee( @RequestBody Employee employee ) {

		return employeeRepo.save(employee);
	}

	@DeleteMapping("/employees/{id}")
	@ResponseBody
	public void deleteEmployee( @PathVariable("id") String id) {
		employeeRepo.delete(id);
	}
}