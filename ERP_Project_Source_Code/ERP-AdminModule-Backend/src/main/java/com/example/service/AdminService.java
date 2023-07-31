package com.example.service;
import org.springframework.stereotype.Repository;
@Repository
public interface AdminService {
	public int loginValidation(String username,String password);
}

