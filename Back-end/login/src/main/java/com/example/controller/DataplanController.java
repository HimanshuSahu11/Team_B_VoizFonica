package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Bill;
import com.example.entities.Dataplan;
import com.example.entities.ErrorClazz;
import com.example.service.BillService;
import com.example.service.DataplanService;
import com.example.service.UserServices;

@RestController
@RequestMapping("/dataplan")
@CrossOrigin(origins = "http://localhost:4200")
public class DataplanController {

	@Autowired
	DataplanService dataplanService;
	
	
	public DataplanController() {
		System.out.println("<<<<<<< Dataplan CONTROLLER INSTANTIATED>>>>>>>>");
	}
	
	@GetMapping("/getby/{rupee}")
	public ResponseEntity<?> getDataplanByRupee(@PathVariable float rupee){
		List<Dataplan> dataplan=null;
		try {
			dataplan=dataplanService.getDataplanByRupee(rupee);
			return new ResponseEntity<List<Dataplan>>(dataplan,HttpStatus.OK);
		} catch (Exception e) {
			// TODO: handle exception
			ErrorClazz errorClazz=new ErrorClazz(500, e.getMessage());
			return new ResponseEntity<ErrorClazz>(errorClazz,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
