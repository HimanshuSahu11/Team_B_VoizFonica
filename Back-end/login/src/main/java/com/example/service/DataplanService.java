package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.dao.DataplanDao;
import com.example.entities.Dataplan;

@Service
@Transactional
public class DataplanService {
	@Autowired
	DataplanDao dataplanDao;

	public List<Dataplan> getDataplanByRupee(float rupee) {
		// TODO Auto-generated method stub
		return dataplanDao.findByRupee(rupee);
	}
	
	
}
