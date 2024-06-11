import { getAllPosts } from "../Helpers/postApiCalls";

// Get all postsData

try{
    var postsData = await getAllPosts();
}catch(error){
    console.error("Failed to fetch post data"+error);
    postsData = ["Failed to fetch post data"];
}

export {postsData};