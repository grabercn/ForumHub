package com.cs4092.dddproject;

import jakarta.validation.constraints.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthStaffMemberService {
    private final AuthStaffMemberRepository authStaffMemberRepository;
    private final ForumService forumService;
    private final CustomerService customerService;

    // Dependency injection
    @Autowired
    public AuthStaffMemberService(AuthStaffMemberRepository authStaffMemberRepository,
                              ForumService forumService,
                              CustomerService customerService) {
        this.authStaffMemberRepository = authStaffMemberRepository;
        this.forumService = forumService;
        this.customerService = customerService;
    }

    // Create a new forum
    public Forum createForum(Forum forum) {
        return forumService.createForum(forum);
    }

    public List<AuthStaffMember> getAllAuthStaffMembers() {
        return authStaffMemberRepository.findAll();
    }

    public AuthStaffMember saveAuthStaffMember(AuthStaffMember authStaffMember) {
        return authStaffMemberRepository.save(authStaffMember);
    }

    public AuthStaffMember getAuthStaffMemberById(Long authStaffMemberId) {
        return authStaffMemberRepository.findById(authStaffMemberId).orElse(null);
    }

    public AuthStaffMember updateAuthStaffMember(AuthStaffMember authStaffMember) {
        return authStaffMemberRepository.save(authStaffMember);
    }

    /*
    // Update an existing forum
    public Forum updateForum(Forum forum) { return forumService.updateForum(forum); }

    // Delete an existing forum
    public void deleteForum(long forumId) { forumService.deleteForum(forumId); }

    // View customer information by ID (assuming CustomerService handles details)
    public Customer getCustomerById(Long customerId) {
        return customerService.getCustomerById(customerId);
    } */
}
