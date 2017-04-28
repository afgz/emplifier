package com.emplifier.entity;

import java.sql.Date;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="employee")
public class Employee {
	@Id
	@Column(name="id")
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	private String id;
	@Column(name="first_name", nullable=false)
	private String firstName;
	@Column(name="last_name", nullable=false)
	private String lastName;
	@Column(name="gender", nullable=false)
	private String gender;
	@Column(name="dob", nullable=false)
	private Date dob;
	@Column(name="nationality", nullable=false)
	private String nationality;
	@Column(name="marital_status", nullable=false)
	private String maritalStatus;
	@Column(name="phone", nullable=false)
	private String phone;
	@Column(name="sub_division", nullable=false)
	private String subDivision;
	@Column(name="status", nullable=false)
	private String status;
	@Column(name="suspend_date")
	private Date suspendDate;
	@Column(name="hired_date", nullable=false)
	private Date hiredDate;
	@Column(name="grade", nullable=false)
	private String grade;
	@Column(name="division", nullable=false)
	private String division;
	@Column(name="email", nullable=false)
	private String email;
	@ManyToOne
	@JoinColumn(name="location_id")
	private Location locationId;
	@Column(name="photo", nullable=false)
	private String photo;
	
	public Employee(){}
	
	public Employee(
			String firstName,
			String lastName,
			String gender,
			Date dob,
			String nationality,
			String maritalStatus,
			String phone,
			String subDivision,
			String status,
			Date suspendDate,
			Date hiredDate,
			String grade,
			String division,
			String email,
			Location locationId,
			String photo
	) {
		setFirstName(firstName);
		setLastName(lastName);
		setGender(gender);
		setDob(dob);
		setNationality(nationality);
		setMaritalStatus(maritalStatus);
		setPhone(phone);
		setSubDivision(subDivision);
		setStatus(status);
		setSuspendDate(suspendDate);
		setHiredDate(hiredDate);
		setGrade(grade);
		setDivision(division);
		setEmail(email);
		setLocationId(locationId);
		setPhoto(photo);
	}

	public String getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSubDivision() {
		return subDivision;
	}

	public void setSubDivision(String subDivision) {
		this.subDivision = subDivision;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getSuspendDate() {
		return suspendDate;
	}

	public void setSuspendDate(Date suspendDate) {
		this.suspendDate = suspendDate;
	}

	public Date getHiredDate() {
		return hiredDate;
	}

	public void setHiredDate(Date hiredDate) {
		this.hiredDate = hiredDate;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Location getLocationId() {
		return locationId;
	}

	public void setLocationId(Location locationId) {
		this.locationId = locationId;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
}
