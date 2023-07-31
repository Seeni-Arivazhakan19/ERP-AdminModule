package com.example.controller;

import java.util.HashMap;
import java.util.List;

import org.hibernate.mapping.Map;
//import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exception.ResourceNotFoundException;
import com.example.model.Admin;
import com.example.repository.AdminRepository;
import com.example.service.AdminService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class AdminController {
	@Autowired
	private AdminRepository adminrepository;
	@Autowired
	private AdminService adminservice;
	@GetMapping("/admins")
	public List<Admin>getAllAdmins(){
		return adminrepository.findAll();
	}
	
	//create users
	@PostMapping("/admins")
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminrepository.save(admin);
		
	}
	
	//get users by id rest api
	@GetMapping("/admins/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
		
		Admin admin = adminrepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :" +id));
		return ResponseEntity.ok(admin);
		
	}
	
	//update user
	@PutMapping("/admins/{id}")
	public ResponseEntity<Admin> updateAdmin(@PathVariable Long id,@RequestBody Admin admin2){
		Admin admin = adminrepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :" +id));
		
	
		admin.setFirstname(admin2.getFirstname());
		admin.setLastname(admin2.getLastname());
		admin.setUsername(admin2.getUsername());
		admin.setEmail(admin2.getEmail());
		admin.setPhonenumber(admin2.getPhonenumber());
		admin.setDob(admin2.getDob());
		admin.setDepartment(admin2.getDepartment());
		admin.setPassword(admin2.getPassword());
		admin.setConfirmpassword(admin2.getConfirmpassword());
		
		Admin updatedAdmin = adminrepository.save(admin);
		return ResponseEntity.ok(updatedAdmin);
	}
	
	//delete user
	@DeleteMapping("/admins/{id}")
	public ResponseEntity<java.util.Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
		Admin admin = adminrepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not exist with id :" +id));
		
		adminrepository.delete(admin);
		java.util.Map<String, Boolean> response = new HashMap<>();
		response.put("Record Deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	@GetMapping("/admins/{username}/{password}")
	public int UserLogin(@PathVariable("username") String username1,@PathVariable("password")String password1) {
		int flag=adminservice.loginValidation(username1,password1);
		if (flag==0)
		{
		return 0;
	}
		return flag;
}
	
}
