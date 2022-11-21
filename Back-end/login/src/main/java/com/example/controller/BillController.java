package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Bill;
import com.example.entities.ErrorClazz;

import com.example.service.BillService;

@RestController
@RequestMapping("/bill")
@CrossOrigin(origins = "http://localhost:4200")
public class BillController {
	
	@Autowired
	BillService billService;
	
	
	
	public BillController() {
		System.out.println("<<<<<<< Bill CONTROLLER INSTANTIATED>>>>>>>>");
	}

	@PostMapping("/createbill")
	public ResponseEntity<?> saveNewBil(@RequestBody Bill newbill) {
		try {
			newbill= billService.saveNewBill(newbill);
			return new ResponseEntity<Bill>(newbill,HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			ErrorClazz errorClazz=new ErrorClazz(500,"Bill already exist");
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getbill/{phoneno}")
	public ResponseEntity<?> getBillByPhoneno(@PathVariable long phoneno){
		List<Bill> bill=null;
		try {
			bill=billService.getBillByPhoneno(phoneno);
			return new ResponseEntity<List<Bill>>(bill,HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			ErrorClazz errorClazz=new ErrorClazz(500, e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
