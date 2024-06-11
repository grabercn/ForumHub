import { getCustomerById } from "../Helpers/customerApiCalls";
import { getAllPosts } from "../Helpers/postApiCalls";

// Get all postsData

try{
    var postsData = await getAllPosts();
}catch(error){
    console.error("Failed to fetch post data"+error);
    postsData = ["Failed to fetch post data"];
}


//Make local modifications to the postsData object 

//get and add post author name using customer id
postsData.forEach(post => {
    post.CustomerName = getCustomerById(Number(post.customerId)).name;
});

console.log("PostsData:", postsData);
export {postsData};