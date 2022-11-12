package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.Bill;

public interface BillDao extends JpaRepository<Bill,Integer> {
 List<Bill>	findByPhoneno(long phoneno);
	 

}
