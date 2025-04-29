package com.anndaan.fooddonation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.anndaan.fooddonation.model.FoodDonation;
import com.anndaan.fooddonation.repository.DonationRepository;
@RestController
@RequestMapping("/api/donations")
public class DonationController {
    @Autowired
    private DonationRepository donationRepository;

    @PostMapping
    public ResponseEntity<FoodDonation> createDonation(@RequestBody FoodDonation donation) {
        return ResponseEntity.ok(donationRepository.save(donation));
    }
}
