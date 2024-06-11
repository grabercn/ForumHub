package com.cs4092.dddproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Use JpaRepository<AuthStaffMember, Long> from private Long id; from AuthStaffMember.java
public interface AuthStaffMemberRepository extends JpaRepository<AuthStaffMember, Long> {
}
