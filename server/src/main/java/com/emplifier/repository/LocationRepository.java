package com.emplifier.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.emplifier.entity.Location;

public interface LocationRepository extends PagingAndSortingRepository<Location, Long> {}
