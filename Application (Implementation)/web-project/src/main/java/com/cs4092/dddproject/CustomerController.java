package com.cs4092.dddproject;

import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

// Controller for handling customer requests
@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "*")
public class CustomerController {
    private final CustomerService customerService;

    // Dependency injection
    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    // Create a new customer
    @PostMapping
    public ResponseEntity<Customer> createCustomer(@Valid @RequestBody Customer customer) {
        Customer savedCustomer = customerService.addCustomer(customer);
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    // get a true or false if customer credentials are correct
    @GetMapping("/auth/{customerEmail},{customerPassword}")
    public ResponseEntity<Boolean> getCustomerByUsernameAndPassword( @PathVariable String customerEmail, @PathVariable String customerPassword) {
        Customer customer = customerService.getFullCustomerByEmailAndPassword(customerEmail, customerPassword);
        if (customer == null ) {
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    // get customer data by username and password
    @GetMapping("/{customerEmail}/{customerPassword}")
    public ResponseEntity<Customer> getCustomerDataByUsernameAndPassword (@PathVariable String customerEmail, @PathVariable String customerPassword) {
        Customer customer = customerService.getFullCustomerByEmailAndPassword(customerEmail, customerPassword);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getCustomerById(@PathVariable Long id) {
        Customer customer = customerService.getCustomerById(id);
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        ObjectMapper objectMapper = new ObjectMapper();
        String customerJson;
        try {
            customerJson = objectMapper.writeValueAsString(customer);
        } catch (JsonProcessingException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<>(customerJson, HttpStatus.OK);
    }
}
