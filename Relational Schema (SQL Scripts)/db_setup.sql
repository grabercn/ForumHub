-- Database Requirements

/* User requirements
 * The application should support two types of users.
 * 1.) Customers: customers can look at forums, add comments, and posts.
 * 2.) Staff Members: Staff can add and modify forums, and delete comments and posts.
 */

/*
-- Create the Users table if it doesn't exist
CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY,
    user_type VARCHAR(20) NOT NULL, -- The application should support two types of users
    name VARCHAR(100) NOT NULL, -- For each customer, the application should record the NAME of the customer
);
*/

-- Create the Customer table
CREATE TABLE IF NOT EXISTS Customer (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
    joined_date DATE NOT NULL
);

-- Create the StaffMembers table
CREATE TABLE IF NOT EXISTS Staff_Member (
    staff_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
    joined_date DATE NOT NULL
);

-- Create the Forum table
CREATE TABLE IF NOT EXISTS Forum (
    forum_id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    forum_name VARCHAR(100) NOT NULL,
    forum_description TEXT NOT NULL
);

-- Create the Posts table
CREATE TABLE IF NOT EXISTS Post (
    post_id SERIAL PRIMARY KEY,
    post_text TEXT NOT NULL,
    customer_id SERIAL,
    forum_id SERIAL,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (forum_id) REFERENCES Forum(forum_id)
);

-- Create the Comments table
CREATE TABLE IF NOT EXISTS Comment (
    comment_id SERIAL PRIMARY KEY,
    comment_text TEXT NOT NULL,
    customer_id SERIAL,
    forum_id SERIAL,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (forum_id) REFERENCES Post(post_id)
);
