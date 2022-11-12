package com.example.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.entities.User;
@Repository
public interface UserDao extends JpaRepository<User, String>{

	Optional<User> findByEmailAndPassword(String email,String password);
	
	Optional<User> findByEmail(String email);

	@Query("update User u set u.enabled=true where u.email=?1") 
	@Modifying
	public void enable(String email);
   
      
	@Query("select u1 from User u1 where u1.verificationCode=?1")  
	public User findByVerificationCode(String code);




	

	
}
