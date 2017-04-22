package com.emplifier.controller;

import com.emplifier.entity.Location;
import com.emplifier.repository.LocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class LocationController {
	
	@Autowired
	private LocationRepository locationRepo;
	
	public LocationController() {}
	
	@GetMapping("/locations")
	@ResponseBody
	public Iterable<Location> getAll() {
		return locationRepo.findAll();
	}

}
