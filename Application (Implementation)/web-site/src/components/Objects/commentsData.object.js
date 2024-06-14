
import { getCustomerById } from "../Helpers/userApiCalls";
import { getAllComments } from "../Helpers/commentApiCalls";

// Get all postsData

try{
    var commentsData = await getAllComments();
}catch(error){
    console.error("Failed to fetch comments data"+error);
    commentsData = ["Failed to fetch comments data"];
}


//Make local modifications to the postsData object 

/*
//get and add post author name using customer id
commentsData.forEach(comment => {
    comment.CustomerName = getCustomerById(Number(comment.customerId)).name;
});
*/

export {commentsData};