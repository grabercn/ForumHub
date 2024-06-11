package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "Customer") // Specify the table name
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

    @Column(name = "password", nullable = false) // Map to the password column
    private String password;

    @Column(name = "email", nullable = false) // Map to the email column
    private String email;
    
}
