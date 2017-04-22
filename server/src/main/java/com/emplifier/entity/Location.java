package com.emplifier.entity;

import javax.persistence.*;

@Entity
@Table(name="location")
public class Location {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String id;
    @Column(name="city", nullable=false)
    private String city;
    
    public Location() {}
    
	public Location(String id, String city) {
		this.id = id;
		this.city = city;
	}

	public String getId() {
		return id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
    
    
}
