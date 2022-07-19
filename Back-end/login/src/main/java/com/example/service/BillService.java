package com.example.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.BillDao;
import com.example.entities.Bill;

@Service
@Transactional
public class BillService {

	@Autowired
	BillDao billDao;
	
	public BillService() {
		System.out.println("<<<<<<Bill Service is INSTANTIATED>>>>");
	}

	public Bill saveNewBill(Bill newbill) {
		// TODO Auto-generated method stub
		billDao.save(newbill);
		return newbill ;
	}

	public List<Bill> getBillByPhoneno(long phoneno) {
		// TODO Auto-generated method stub
		return billDao.findByPhoneno(phoneno);
	}

}
