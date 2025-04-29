package com.anndaan.fooddonation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anndaan.fooddonation.model.FoodDonation;

public interface DonationRepository extends JpaRepository<FoodDonation, Long> {}
