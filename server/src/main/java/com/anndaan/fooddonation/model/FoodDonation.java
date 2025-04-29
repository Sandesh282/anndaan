package com.anndaan.fooddonation.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Entity @Data
public class FoodDonation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String donorName;
    private String donorPhone;
    private String donorAddress;
    private String foodType;
    private int quantity;
    private String additionalInfo;
}
