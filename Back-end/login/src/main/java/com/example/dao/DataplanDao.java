package com.example.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.Dataplan;

public interface DataplanDao extends JpaRepository<Dataplan, Integer> {

	List<Dataplan> findByRupee(float rupee);

}
