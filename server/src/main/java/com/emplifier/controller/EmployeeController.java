package com.emplifier.controller;

import com.emplifier.entity.*;
import com.emplifier.exception.*;
import com.emplifier.repository.EmployeeRepository;

import java.sql.Date;
import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class EmployeeController {
	private List<Employee> employeeList =  new ArrayList<Employee>();
	private boolean notFound;
	
	@Autowired
	private EmployeeRepository empRepo;
	
	public EmployeeController() {}
	
	@GetMapping("/employees/{id}")
	@ResponseBody
	public Employee getById( @PathVariable String id ) {
		Employee empResult = new Employee();
		notFound = true;
		
		for (Employee emp : employeeList) {
			if ( emp.getId() == id ) {
				notFound = false;
				empResult = emp;
			}
		}
		if (notFound) {
			throw new NotFoundException();
		} else {
			return empResult;
		}
	}
	
	@GetMapping("/employees")
	@ResponseBody
	public Iterable<Employee> getAll() {
		return empRepo.findAll();
	}
	
	@PostMapping("/employees")
	@ResponseBody
	public Employee postEmployee( @RequestBody Employee employee ) {
		this.employeeList.add(employee);
		return employee;
	}
}