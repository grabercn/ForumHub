package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    // Dependency injection
    @Autowired
    public CustomerService(
                           CustomerRepository customerRepository
    ) {
        this.customerRepository = customerRepository;
    }

    // Add a new customer
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer getFullCustomerById(Long id){
        Customer customer = customerRepository.findById(id).orElse(null);
        return customer;
    }

    // Find a customer by ID
    public Customer getCustomerById(Long id) {
        Customer customer = customerRepository.findById(id).orElse(null);
        if (customer != null) {
            Customer result = new Customer();
            result.setName(customer.getName());
            return result;
        }
        return null;
    }
}
