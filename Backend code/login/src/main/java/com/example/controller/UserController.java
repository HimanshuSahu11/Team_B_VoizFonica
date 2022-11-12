package com.example.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.mail.MessagingException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.UserDao;
import com.example.entities.Bill;
import com.example.entities.ErrorClazz;

import com.example.entities.User;
import com.example.entities.Utility;
import com.example.service.UserServices;

import net.bytebuddy.utility.RandomString;
@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	UserServices userServices;
	
	
	
	public UserController() {
		System.out.println("<<<<<<< User CONTROLLER INSTANTIATED>>>>>>>>");
	}
	
	@PostMapping("/createlogin")
	public ResponseEntity<?> saveNewUser(@RequestBody User newuser ,HttpServletRequest request) {
		try {
			String randomCode=RandomString.make(64);
			newuser.setVerificationCode(randomCode);	
			String siteURL=Utility.getSiteURL(request);
			userServices.sendVerificationEmail(newuser,siteURL);
			newuser= userServices.saveNewUser(newuser);
			return new ResponseEntity<User>(newuser,HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			ErrorClazz errorClazz=new ErrorClazz(500,"Email already exist");
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PostMapping(value="/forgotlogin")
	public ResponseEntity<?> forgotlogin(@RequestBody User forgotuser,HttpSession session,HttpServletRequest request) throws UnsupportedEncodingException, MessagingException{
		Optional<User> validUser=userServices.findByEmail(forgotuser.getEmail());
		System.out.println(validUser);
		if(validUser.isEmpty()) {
			ErrorClazz errorClazz=new ErrorClazz(3, "Invalid email id.... Please enter Valid Credential");
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.UNAUTHORIZED);
			
		}else {
			session.setAttribute("email", validUser);
			String siteURL=Utility.getSiteURL(request);
			userServices.sendForgottenEmail(validUser.orElseThrow(),siteURL);
			return new ResponseEntity<User>(validUser.orElse(forgotuser),HttpStatus.OK);
		}
		
		}
	
	@GetMapping("/verify")
	public ResponseEntity<?> verifyAccount(@Param("code") String code) {
		boolean verified=userServices.verify(code);
		if (verified)
			return new ResponseEntity<String>("Account verfied Successfully",HttpStatus.OK);
		else
		{
			ErrorClazz errorClazz=new ErrorClazz(500,"Verfication failed");
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PostMapping(value = "/login")
	public ResponseEntity<?> login(@RequestBody User user,HttpSession session){
		
		Optional<User> validUser=userServices.findByEmailAndPassword(user.getEmail(),user.getPassword());
		System.out.println(validUser);
		if(validUser.isEmpty()) {
			ErrorClazz errorClazz=new ErrorClazz(3, "Invalid email id/password.... Please enter Valid Credential");
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.UNAUTHORIZED);
		}else {
			session.setAttribute("email", validUser);
			return new ResponseEntity<User>(validUser.orElse(user),HttpStatus.OK);
		}
		}
	
	@DeleteMapping("/logout") 
	public ResponseEntity<?> logout(HttpSession session){
		User user=(User)session.getAttribute("user");
		if(user!=null) session.removeAttribute("user");
	session.invalidate(); 
	return new ResponseEntity<Void>(HttpStatus.OK); 
	}
	 



	
	@PutMapping("/newpassword")
	public ResponseEntity<?> updateUser(@RequestBody User user){
		try {
			Optional<User> userupdate=userServices.findByEmail(user.getEmail());
			userupdate.orElseThrow().setPassword(user.getPassword());
			userServices.updateUser(userupdate.orElseThrow());
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			ErrorClazz errorClazz=new ErrorClazz(500, e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	
	// This will be used by admin
	@GetMapping("/alluser")
	public ResponseEntity<?>getAllUser(){
		try {
			List<User> post=userServices.getAllUser();
			return new ResponseEntity<List<User>>(post,HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			ErrorClazz errorClazz=new ErrorClazz(500, e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	// get details by email
	@GetMapping("/getuser/{email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email){
		Optional<User> user=null;
		try {
			user=userServices.getUserByEmail(email);
			return new ResponseEntity<List<User>>(HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			ErrorClazz errorClazz=new ErrorClazz(500, e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	}
	

