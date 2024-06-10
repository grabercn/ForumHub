package com.cs4092.dddproject;

import jakarta.validation.constraints.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffMemberService {
    private final StaffMemberRepository staffMemberRepository;
    private final ForumService forumService;
    private final CustomerService customerService;

    // Dependency injection
    @Autowired
    public StaffMemberService(StaffMemberRepository staffMemberRepository,
                              ForumService forumService,
                              CustomerService customerService) {
        this.staffMemberRepository = staffMemberRepository;
        this.forumService = forumService;
        this.customerService = customerService;
    }

    // Create a new forum
    public Forum createForum(Forum forum) {
        return forumService.createForum(forum);
    }

    public List<StaffMember> getAllStaffMembers() {
        return staffMemberRepository.findAll();
    }

    public StaffMember saveStaffMember(StaffMember staffMember) {
        return staffMemberRepository.save(staffMember);
    }

    public StaffMember getStaffMemberById(Long staffMemberId) {
        return staffMemberRepository.findById(staffMemberId).orElse(null);
    }

    public StaffMember updateStaffMember(StaffMember staffMember) {
        return staffMemberRepository.save(staffMember);
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
