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
public class Forum {
    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "forum_id")
    private Long forumId;

    public Forum(int forum) {
        this.forumId = (long) forum;
    }

    @Column(name="forum_category", nullable = false)
    @NotEmpty
    private String forumCategory;

    @Column(name = "forum_name", nullable = false)
    @NotEmpty
    private String forumName;

    @Column(name = "forum_description", nullable = false)
    @NotEmpty
    private String forumDescription;

    @Column(name="img_url", nullable = true)
    private String imgUrl;
}
