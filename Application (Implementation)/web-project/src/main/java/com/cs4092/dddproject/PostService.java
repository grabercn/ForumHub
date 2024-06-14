package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {
    private final PostRepository postRepository;

    // Dependency injection
    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    // Create a new post
    public Post createPost(Post post) {
        return postRepository.save(post); // Save the post
    }

    // Get a post by ID
    public Post getPostById(Long postId) {
        return postRepository.findById(postId).orElse(null); // Find by ID, return null if not found
    }

    // Update an existing post
    public Post updatePost(Post post) {
        // Check if post exists first
        Post existingPost = postRepository.findById(post.getPostId()).orElse(null);
        if (existingPost == null) {
            throw new IllegalArgumentException("Post with ID: " + post.getPostId() + " not found.");
        }

        // Update relevant fields (excluding ID)

        existingPost.setPostSubject(post.getPostSubject());
        existingPost.setPostText(post.getPostText());

        // Save the updated post
        return postRepository.save(existingPost);
    }

    // Get all posts
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    // Get a post by name
    public Post getPostBySubject(String postSubject) {
        List<Post> allPosts = postRepository.findAll();

        // Filter posts by name
        List<Post> postsWithSubject = allPosts.stream()
                .filter(post -> post.getPostSubject().equalsIgnoreCase(postSubject))
                .toList();

        // Return the first post found, or null if not found
        return postsWithSubject.isEmpty() ? null : postsWithSubject.get(0);
    }

    // Get all posts by forum ID
    public List<Post> getPostsByForumId(Long forumId) {
        List<Post> allPosts = postRepository.findAll();

        // Filter posts by forum ID
        List<Post> postsWithForumId = allPosts.stream()
                .filter(post -> post.getForumId().getForumId().equals(forumId))
                .collect(Collectors.toList());

        return postsWithForumId;
    }
    // Delete a post (hard deletion)
    public void deletePost(Long postId) {
        Post post = postRepository.findById(postId).orElse(null);
        if (post == null) {
            throw new IllegalArgumentException("Post with ID: " + postId + " not found.");
        }

        // Perform hard deletion using the repository
        postRepository.deleteById(postId);
    }

    // Delete all posts by forum ID
    public boolean deletePostsByForumId(Long forumId) {
        List<Post> posts = getPostsByForumId(forumId);

        // Perform hard deletion using the repository
        postRepository.deleteAll(posts);

        // Check if all posts have been deleted
        return postRepository.findAll().stream()
                .noneMatch(post -> post.getForumId().getForumId().equals(forumId));
    }

}
