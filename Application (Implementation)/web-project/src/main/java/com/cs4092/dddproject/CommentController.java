package com.cs4092.dddproject;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "*")
public class CommentController {
    private final CommentService commentService;

    // Dependency injection
    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // Create a new comment
    @PostMapping
    public ResponseEntity<Comment> createComment(@Valid @RequestBody Comment comment) {
        Comment savedComment = commentService.createComment(comment);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

    // Get a comment by ID
    @GetMapping("/{commentId}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Long commentId) {
        Comment comment = commentService.getCommentById(commentId);
        if (comment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }

    // Update an existing comment
    @PutMapping("/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long commentId, @Valid @RequestBody Comment comment) {
        comment.setCommentId(commentId); // Set the ID to match the path variable
        Comment updatedComment = commentService.updateComment(comment);
        return new ResponseEntity<>(updatedComment, HttpStatus.OK);
    }

    // Get all comments (consider pagination for large datasets)
    @GetMapping
    public ResponseEntity<List<Comment>> getAllComments() {
        List<Comment> comments = commentService.getAllComments();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    // Search for comments by name (SUBJECT) (potentially replace with more comprehensive search)
    @GetMapping("/search")
    public ResponseEntity<List<Comment>> searchCommentsBySubject(@RequestParam String subject) {
        Comment comment = commentService.getCommentBySubject(subject);
        if (comment == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<Comment> commentList = List.of(comment); // Wrap the single comment in a list for consistency
        return new ResponseEntity<>(commentList, HttpStatus.OK);
    }

    // Delete a comment (hard deletion)
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
