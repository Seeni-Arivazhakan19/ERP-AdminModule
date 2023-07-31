package com.example.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Admin_details")
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "firstname")
	private String Firstname;
	@Column(name = "lastname")
	private String Lastname;
	@Column(name = "username")
	private String Username;
	@Override
	public String toString() {
		return "Admin [Username=" + Username + "]";
	}
	public Admin(String username) {
		super();
		Username = username;
	}
	@Column(name = "email")
	private String Email;
	@Column(name = "phonenumber")
	private long Phonenumber;
	@Column(name = "dob")
	private String Dob;
	@Column(name = "department")
	private String Department;
	@Column(name = "password")
	private String Password;
	@Column
	private String confirmpassword;
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstname() {
		return Firstname;
	}
	public void setFirstname(String firstname) {
		Firstname = firstname;
	}
	public String getLastname() {
		return Lastname;
	}
	public void setLastname(String lastname) {
		Lastname = lastname;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public long getPhonenumber() {
		return Phonenumber;
	}
	public void setPhonenumber(long phonenumber) {
		Phonenumber = phonenumber;
	}
	public String getDob() {
		return Dob;
	}
	public void setDob(String dob) {
		Dob = dob;
	}
	public String getDepartment() {
		return Department;
	}
	public void setDepartment(String department) {
		Department = department;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}

	

	public Admin(long id, String firstname, String lastname, String username, String email, long phonenumber,
			String dob, String department, String password, String confirmpassword) {
		super();
		this.id = id;
		Firstname = firstname;
		Lastname = lastname;
		Username = username;
		Email = email;
		Phonenumber = phonenumber;
		Dob = dob;
		Department = department;
		Password = password;
		this.confirmpassword = confirmpassword;
	}
	public Admin() {
		
		
	}
	
	
	
}

