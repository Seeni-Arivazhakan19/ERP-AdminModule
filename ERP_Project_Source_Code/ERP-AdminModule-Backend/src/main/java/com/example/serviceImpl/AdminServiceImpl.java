package com.example.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.example.service.AdminService;
import com.example.dbutil.DBUtil;

@Service 
public class AdminServiceImpl implements AdminService{
	Connection connection;
	int flag=0;
	public AdminServiceImpl() throws SQLException {
		connection=DBUtil.getConnection();
	}
	@Override
	public int loginValidation(String username,String password) {
		try {
			PreparedStatement statement = connection.prepareStatement("select * from admin_details where username='"+username+"'");
			ResultSet rs=statement.executeQuery();
			System.out.println(rs);
			while(rs.next()) {
				if(rs.getString(10).equals(username)&& rs.getString(8).equals(password)) {
					flag=1;
				}else {
					System.out.println("INVALID USER");
					flag=0;
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return flag;
	}
}