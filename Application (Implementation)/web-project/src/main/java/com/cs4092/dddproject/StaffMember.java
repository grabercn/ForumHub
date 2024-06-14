package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

/* This class contains staff member-specific information, such as staff member ID, name, addresses,
 salary and job title. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Staff_Member")
public class StaffMember {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "staff_id")
    private Long staffMemberId;

    public StaffMember(int staffId) {
        this.staffMemberId = (long) staffId;
    }

    @Column(name = "name", nullable = false) // Map to the name column
    @NotEmpty
    private String name;

    @Column(name = "email", nullable = false) // Map to the email column
    @NotEmpty
    private String email;

    @Column(name = "phone_number", nullable = false)
    @NotEmpty
    private String phoneNumber;

    @Column(name="password", nullable = false)
    @NotEmpty
    private String password;
}
