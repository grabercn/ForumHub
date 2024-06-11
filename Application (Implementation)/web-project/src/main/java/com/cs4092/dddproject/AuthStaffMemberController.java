package com.cs4092.dddproject;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/staff-members")
@CrossOrigin(origins = "*") //needed an extra import??
public class AuthStaffMemberController {
    private final AuthStaffMemberService authStaffMemberService;

    // Dependency injection
    @Autowired
    public AuthStaffMemberController(AuthStaffMemberService authStaffMemberService) {
        this.authStaffMemberService = authStaffMemberService;
    }

    // Create a new staff member (implement validation and error handling)
    @PostMapping
    public ResponseEntity<AuthStaffMember> createAuthStaffMember(@Valid @RequestBody AuthStaffMember authStaffMember) {
        AuthStaffMember savedAuthStaffMember = authStaffMemberService.saveAuthStaffMember(authStaffMember); // Assuming saveAuthStaffMember exists in AuthStaffMemberService
        return new ResponseEntity<>(savedAuthStaffMember, HttpStatus.CREATED);
    }

    // Get all staff members (consider pagination for large datasets)
    @GetMapping
    public ResponseEntity<List<AuthStaffMember>> getAllAuthStaffMembers() {
        List<AuthStaffMember> authStaffMembers = authStaffMemberService.getAllAuthStaffMembers(); // Assuming getAllAuthStaffMembers exists in AuthStaffMemberService
        return new ResponseEntity<>(authStaffMembers, HttpStatus.OK);
    }

    // Get a staff member by ID
    @GetMapping("/{authStaffMemberId}")
    public ResponseEntity<AuthStaffMember> getAuthStaffMemberById(@PathVariable Long authStaffMemberId) {
        AuthStaffMember authStaffMember = authStaffMemberService.getAuthStaffMemberById(authStaffMemberId); // Assuming getAuthStaffMemberById exists in AuthStaffMemberService
        if (authStaffMember == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(authStaffMember, HttpStatus.OK);
   }

    // Update a staff member (implement validation, error handling, and partial updates)
    @PutMapping("/{authStaffMemberId}")
    public ResponseEntity<AuthStaffMember> updateAuthStaffMember(@PathVariable Long authStaffMemberId, @Valid @RequestBody AuthStaffMember authStaffMember) {
        authStaffMember.setAuthStaffMemberId(authStaffMemberId); // Set the ID from path variable
        AuthStaffMember updatedAuthStaffMember = authStaffMemberService.updateAuthStaffMember(authStaffMember); // Assuming updateAuthStaffMember exists in AuthStaffMemberService
        return new ResponseEntity<>(updatedAuthStaffMember, HttpStatus.OK);
    }
}
