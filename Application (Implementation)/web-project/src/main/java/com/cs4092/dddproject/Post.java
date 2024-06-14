package com.cs4092.dddproject;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/* This class represents a forum in the application. */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long postId;

    public Post(int postId) {
        this.postId = (long) postId;
    }

    @Column(name = "post_subject", nullable = false)
    @NotEmpty
    private String postSubject;

    @Column(name = "post_text", nullable = false)
    @NotEmpty
    private String postText;

    @ManyToOne
    @JoinColumn(name = "forum_id", nullable = false, insertable = true, updatable = true)
    private Forum forumId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false, insertable = true, updatable = true)
    private Customer customerId;

}
