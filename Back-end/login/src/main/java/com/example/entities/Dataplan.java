package com.example.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Dataplan {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private float rupee; 
    private String  days;
    private String datadescription;
	
    public Dataplan(int id, float rupee, String days, String datadescription) {
		super();
		this.id = id;
		this.rupee = rupee;
		this.days = days;
		this.datadescription = datadescription;
	}

	public Dataplan() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getRupee() {
		return rupee;
	}

	public void setRupee(float rupee) {
		this.rupee = rupee;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
	}

	public String getDatadescription() {
		return datadescription;
	}

	public void setDatadescription(String datadescription) {
		this.datadescription = datadescription;
	}
    
} 