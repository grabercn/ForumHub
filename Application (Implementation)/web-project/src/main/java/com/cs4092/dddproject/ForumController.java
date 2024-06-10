package com.cs4092.dddproject;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forums")
@CrossOrigin(origins = "*")
public class ForumController {
    private final ForumService forumService;

    // Dependency injection
    @Autowired
    public ForumController(ForumService forumService) {
        this.forumService = forumService;
    }

    // Create a new forum
    @PostMapping
    public ResponseEntity<Forum> createForum(@Valid @RequestBody Forum forum) {
        Forum savedForum = forumService.createForum(forum);
        return new ResponseEntity<>(savedForum, HttpStatus.CREATED);
    }

    // Get a forum by ID
    @GetMapping("/{forumId}")
    public ResponseEntity<Forum> getForumById(@PathVariable Long forumId) {
        Forum forum = forumService.getForumById(forumId);
        if (forum == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(forum, HttpStatus.OK);
    }

    // Update an existing forum
    @PutMapping("/{forumId}")
    public ResponseEntity<Forum> updateForum(@PathVariable Long forumId, @Valid @RequestBody Forum forum) {
        forum.setForumId(forumId); // Set the ID to match the path variable
        Forum updatedForum = forumService.updateForum(forum);
        return new ResponseEntity<>(updatedForum, HttpStatus.OK);
    }

    // Get all forums (consider pagination for large datasets)
    @GetMapping
    public ResponseEntity<List<Forum>> getAllForums() {
        List<Forum> forums = forumService.getAllForums();
        return new ResponseEntity<>(forums, HttpStatus.OK);
    }

    // Search for forums by name (potentially replace with more comprehensive search)
    @GetMapping("/search")
    public ResponseEntity<List<Forum>> searchForumsByName(@RequestParam String name) {
        Forum forum = forumService.getForumByName(name);
        if (forum == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<Forum> forumList = List.of(forum); // Wrap the single forum in a list for consistency
        return new ResponseEntity<>(forumList, HttpStatus.OK);
    }

    // Delete a forum (hard deletion)
    @DeleteMapping("/{forumId}")
    public ResponseEntity<Void> deleteForum(@PathVariable Long forumId) {
        forumService.deleteForum(forumId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
