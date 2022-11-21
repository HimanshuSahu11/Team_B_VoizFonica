package com.example.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Bill {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private long phoneno; 
	private String billid;
	private String product;
	private String plan;
	private Date rechargedate;
	private float amountdue;
	public Bill(int id,long phoneno, String billid, String product, String plan, Date rechargedate,float amountdue) {
		super();
		this.id = id;
		this.phoneno=phoneno;
		this.billid = billid;
		this.product = product;
		this.plan = plan;
		this.rechargedate = rechargedate;
		this.amountdue=amountdue;
	}
	
	public Bill() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public long getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}

	public Date getRechargedate() {
		return rechargedate;
	}

	public void setRechargedate(Date rechargedate) {
		this.rechargedate = rechargedate;
	}

	public float getAmountdue() {
		return amountdue;
	}

	public void setAmountdue(float amountdue) {
		this.amountdue = amountdue;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBillid() {
		return billid;
	}
	public void setBillid(String billid) {
		this.billid = billid;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getPlan() {
		return plan;
	}
	public void setPlan(String plan) {
		this.plan = plan;
	}

	
	

}
