const onSuccess = function () {
  console.log("Success");
};

const onError = function (message) {
  console.log("Error");
};

/* 
  TODO:
  This method should return an HTML element containing a list of posts that the
  user may delete. You will call Utils.deleteBlogPost(id, onSuccess, onError) to delete.
  Your element will be appended to the main element of the document.
  Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
*/
function getPostManagerListContainer(post_objs) {
  // Uncomment the following line to use the testing version of the page
  // return Tests.testGetPostManagerListContainer(post_objs);

  console.log("Called getPostManagerListContainer");
  if (post_objs == null) {
    console.log("cannot view posts of a person not logged in");
    return null;
  }
  if (post_objs.length === 0) {
    console.log("user has no posts");
    return null;
  }
  for (const post_obj of post_objs) {
    console.log(post_obj);
  }

  return null;
}

main(Pages.PROFILE);

//Samuel Nevels Edit

const onSuccess = function () {
  console.log("Success");
};

const onError = function (message) {
  console.log("Error");
};

/* 
  TODO:
  This method should return an HTML element containing a list of posts that the
  user may delete. You will call Utils.deleteBlogPost(id, onSuccess, onError) to delete.
  Your element will be appended to the main element of the document.
  Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
*/
function getPostManagerListContainer(post_objs) {

  console.log("Called getPostManagerListContainer");
 {
    console.log("cannot view posts of a person not logged in");
    return null;
  }
  {
    console.log("user has no posts");
    return null;
  }
  const container = document.createElement("div")
  for (const post_obj of post_objs) {
    console.log(post_obj);
	var postContainer = document.createElement("div")
	var id = document.createElement("p")
	id.innerHTML = post_obj.id;
	
	postContainer.append(id);
	
	var email = document.createElement("p")
	email.innerHTML = post_obj.email;
	
	postContainer.append(email);
	
	var post = document.createElement("p")
	post.innerHTML = post_obj.post;
	
	postContainer.append(post);
  
document.querySelector(button).appendChild(Container);
 function removeElement(elementId) {
  var element = document. getElementById(elementId);
  element. parentNode. removeChild(element);
 }

  }
  return null;
}

main(Pages.PROFILE);
