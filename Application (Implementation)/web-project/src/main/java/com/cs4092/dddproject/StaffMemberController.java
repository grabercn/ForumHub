package com.cs4092.dddproject;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/staff-members")
@CrossOrigin(origins = "*") //needed an extra import??
public class StaffMemberController {
    private final StaffMemberService staffMemberService;

    // Dependency injection
    @Autowired
    public StaffMemberController(StaffMemberService staffMemberService) {
        this.staffMemberService = staffMemberService;
    }

    // Create a new staff member (implement validation and error handling)
    @PostMapping
    public ResponseEntity<StaffMember> createStaffMember(@Valid @RequestBody StaffMember staffMember) {
        StaffMember savedStaffMember = staffMemberService.saveStaffMember(staffMember); // Assuming saveStaffMember exists in StaffMemberService
        return new ResponseEntity<>(savedStaffMember, HttpStatus.CREATED);
    }

    // Get a staff member by ID (only returns id and name for security)
    @GetMapping("/{staffMemberId}")
    public ResponseEntity<StaffMember> getStaffMemberById(@PathVariable Long staffMemberId) {
        StaffMember staffMember = staffMemberService.getStaffMemberById(staffMemberId); // Assuming getStaffMemberById exists in StaffMemberService
        if (staffMember == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(staffMember, HttpStatus.OK);
    }
    
    // get a true or false if staff member credentials are correct
    @GetMapping("/auth/{staffMemberEmail},{staffMemberPassword}")
    public ResponseEntity<Boolean> getAuthStaffMemberByUsernameAndPassword( @PathVariable String staffMemberEmail, @PathVariable String staffMemberPassword) {
        StaffMember staffMember = staffMemberService.getFullStaffMemberByEmailAndPassword(staffMemberEmail, staffMemberPassword);
        if (staffMember == null ) {
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    // get a staff member data by username and password
    @GetMapping("/{staffMemberEmail},{staffMemberPassword}")
    public ResponseEntity<StaffMember> getAuthStaffMemberDataByUsernameAndPassword (@PathVariable String staffMemberEmail, @PathVariable String staffMemberPassword) {
        StaffMember staffMember = staffMemberService.getFullStaffMemberByEmailAndPassword(staffMemberEmail, staffMemberPassword);
        return new ResponseEntity<>(staffMember, HttpStatus.OK);
    }

    // Update a staff member (implement validation, error handling, and partial updates)
    @PutMapping("/{staffMemberId}")
    public ResponseEntity<StaffMember> updateStaffMember(@PathVariable Long staffMemberId, @Valid @RequestBody StaffMember staffMember) {
        staffMember.setStaffMemberId(staffMemberId); // Set the ID from path variable
        StaffMember updatedStaffMember = staffMemberService.updateStaffMember(staffMember); // Assuming updateStaffMember exists in StaffMemberService
        return new ResponseEntity<>(updatedStaffMember, HttpStatus.OK);
    }
}


