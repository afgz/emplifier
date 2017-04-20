package com.emplifier.repository;
import com.emplifier.entity.*;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {}
