package com.cs4092.dddproject;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/* This class represents a forum in the application. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id") // Map to the customer_id column
    private Long customerId;

    public Customer(int customerId) {
        this.customerId = (long) customerId;
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

    @Column(name = "password", nullable = false)
    @NotEmpty
    private String password;

}
