package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ForumService {
    private final ForumRepository forumRepository;

    // Dependency injection
    @Autowired
    public ForumService(ForumRepository forumRepository) {
        this.forumRepository = forumRepository;
    }

    // Create a new forum
    public Forum createForum(Forum forum) {
        return forumRepository.save(forum); // Save the forum
    }

    // Get a forum by ID
    public Forum getForumById(Long forumId) {
        return forumRepository.findById(forumId).orElse(null); // Find by ID, return null if not found
    }

    // Update an existing forum
    public Forum updateForum(Forum forum) {
        // Check if forum exists first
        Forum existingForum = forumRepository.findById(forum.getForumId()).orElse(null);
        if (existingForum == null) {
            throw new IllegalArgumentException("Forum with ID: " + forum.getForumId() + " not found.");
        }

        // Update relevant fields (excluding ID)
        existingForum.setCategory(forum.getCategory());
        existingForum.setForumName(forum.getForumName());
        existingForum.setForumDescription(forum.getForumDescription());

        // Save the updated forum
        return forumRepository.save(existingForum);
    }

    // Get all forums
    public List<Forum> getAllForums() {
        return forumRepository.findAll();
    }

    // Get a forum by name
    public Forum getForumByName(String forumName) {
        List<Forum> allForums = forumRepository.findAll();

        // Filter forums by name
        List<Forum> forumsWithName = allForums.stream()
                .filter(forum -> forum.getForumName().equalsIgnoreCase(forumName))
                .collect(Collectors.toList());

        // Return the first forum found, or null if not found
        return forumsWithName.isEmpty() ? null : forumsWithName.get(0);
    }

    // Delete a forum (hard deletion)
    public void deleteForum(Long forumId) {
        Forum forum = forumRepository.findById(forumId).orElse(null);
        if (forum == null) {
            throw new IllegalArgumentException("Forum with ID: " + forumId + " not found.");
        }

        // Perform hard deletion using the repository
        forumRepository.deleteById(forumId);
    }

}
