package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    // Dependency injection
    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // Create a new comment
    public Comment createComment(Comment comment) {
        return commentRepository.save(comment); // Save the comment
    }

    // Get a comment by ID
    public Comment getCommentById(Long commentId) {
        return commentRepository.findById(commentId).orElse(null); // Find by ID, return null if not found
    }

    // Update an existing comment
    public Comment updateComment(Comment comment) {
        // Check if comment exists first
        Comment existingComment = commentRepository.findById(comment.getCommentId()).orElse(null);
        if (existingComment == null) {
            throw new IllegalArgumentException("Comment with ID: " + comment.getCommentId() + " not found.");
        }

        // Update relevant fields (excluding ID)

        existingComment.setCommentText(comment.getCommentText());

        // Save the updated comment
        return commentRepository.save(existingComment);
    }

    // Get all comments
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    // Get a comment by name
    public Comment getCommentBySubject(String commentText) {
        List<Comment> allComments = commentRepository.findAll();

        // Filter comments by name
        List<Comment> commentsWithSubject = allComments.stream()
                .filter(comment -> comment.getCommentText().equalsIgnoreCase(commentText))
                .toList();

        // Return the first comment found, or null if not found
        return commentsWithSubject.isEmpty() ? null : commentsWithSubject.get(0);
    }

    // Delete a comment (hard deletion)
    public void deleteComment(Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElse(null);
        if (comment == null) {
            throw new IllegalArgumentException("Comment with ID: " + commentId + " not found.");
        }

        // Perform hard deletion using the repository
        commentRepository.deleteById(commentId);
    }

    // Get all comments by post ID
    public List<Comment> getCommentsByPostId(Long postId) {
        List<Comment> allComments = commentRepository.findAll();

        // Filter comments by post ID
        List<Comment> commentsWithPostId = allComments.stream()
                .filter(comment -> comment.getPostId().getPostId().equals(postId))
                .collect(Collectors.toList());

        return commentsWithPostId;
    }

}
