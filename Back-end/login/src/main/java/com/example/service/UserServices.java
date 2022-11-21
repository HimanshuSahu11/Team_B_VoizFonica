package com.example.service;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.dao.UserDao;

import com.example.entities.User;

@Service
@Transactional
public class UserServices {
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	private JavaMailSender mailSender;
	
	public UserServices() {
		System.out.println("<<<<<<User Service is INSTANTIATED>>>>");
	}
	
	public User saveNewUser(User newuser) {
		userDao.save(newuser);
	return newuser;
}

	
	public Optional<User> findByEmailAndPassword(String email,String password) {
		return userDao.findByEmailAndPassword(email, password);
	}

	public void updateUser(User userupdate) {
		// TODO Auto-generated method stub
		userDao.save(userupdate);
	}

	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}

	public Optional<User> findByEmail(String email) {
		// TODO Auto-generated method stub
		return userDao.findByEmail(email);
	}
	
	
	public User save(User user) {
		return userDao.save(user);	
	}
	public void sendVerificationEmail(User user,String siteURL) throws UnsupportedEncodingException, MessagingException {
		String subject="Please verify your registration";
		String senderName="VoizFonica Telecom";
		String mailContent = "<p>Dear " + user.getFirstname()+",<p>";
		mailContent+="<p>Please click the link below to verify to your registration:</p>";
		String verifyURL=siteURL +"/user/verify?code="+user.getVerificationCode();
		mailContent+="<h3><a href=\"" + verifyURL +"\">verify</a></h3>";
		
		mailContent+="<p>Thank you<br>VoizFonica</p>";
		MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		helper.setFrom("himanshu.krishna11@gmail.com",senderName); 
		helper.setTo(user.getEmail());
		helper.setSubject(subject);
		helper.setText(mailContent,true);
        
		mailSender.send(message);
	}
	public boolean verify(String verficationCode) {
		User user=userDao.findByVerificationCode(verficationCode);
		if(user==null || user.isEnabled()) { 
			return false;
		}
		else {
			userDao.enable(user.getEmail());
			return true;
		}
	}

	public void sendForgottenEmail(User user,String siteURL) throws UnsupportedEncodingException, MessagingException {
		String subject="Please verify your login";
		String senderName="VoizFonica Telecom";
		String mailContent = "<p>Dear " + user.getFirstname()+",<p>";
		mailContent+="<p>Please click the link below to update your password:</p>";
		String verifyURL="http://localhost:4200/newpassword"+user.getVerificationCode();
		mailContent+="<h3><a href=\"" + verifyURL +"\">verify</a></h3>";
		
		mailContent+="<p>Thank you<br>VoizFonica</p>";
		MimeMessage message=mailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message);
		helper.setFrom("himanshu.krishna11@gmail.com",senderName); 
		helper.setTo(user.getEmail());
		helper.setSubject(subject);
		helper.setText(mailContent,true);
        
		mailSender.send(message);
	}

	public Optional<User> getUserByEmail(String email) {
		// TODO Auto-generated method stub
		return userDao.findByEmail(email);
	}
}




