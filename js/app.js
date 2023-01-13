const url = "https://api.github.com/users/";
const elBnt = document.querySelector(".from");
const elPost = document.querySelector(".posts");
const elInput = document.querySelector(".input");

elBnt.addEventListener("click", (e) => {
    e.preventDefault();
    let username = elInput.value;
    if (username) {
        getGithub(username);
        elInput.value = "";
    }
})

const getGithub = async (username) => {
    const res = await fetch(url + username);
    const json = await res.json();
    return renderItem(json);
}

const renderItem = (json) => {
    console.log(json);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
 <div class="card">
 <div class="card_img">
     <img src="${json.avatar_url}" alt="">
 </div>
 <div class="card_info">
     <div class="card_title">
         <h2>${json.name}</h2>
     </div>
     <div class="card_username">
         <span><a href="${json.login}">${json.login}</a></span>
     </div>
     <div class="card_destination">
         <p>${json.bio}</p>
     </div>
     <div class="user_info">
         <div class="user_followers">
             <p>Followers</p>
             <p>${json.followers}</p>
         </div>
         <div class="user_followers">
             <p>Following</p>
             <p>${json.following}</p>
         </div>
         <div class="user_followers">
             <p>Repos</p>
             <p>${json.public_repos}</p>
         </div>
     </div>
     <div class="user_socialnetwork">
         <div class="socialnetwork">
             <i class="fa-brands fa-twitter"></i>
             <p>${json.twitter_username}</p>
         </div>
         <div class="socialnetwork">
             <i class="fa-solid fa-link"></i>
             <p><a href="${json.url}" target="_blank">${json.url}</a></p>
         </div>
         <div class="socialnetwork">
             <i class="fa-solid fa-location-dot"></i>
             <p>${json.location}</p>
         </div>
         <div class="socialnetwork">
             <i class="fa-solid fa-building"></i>
             <p>${json.company}</p>
         </div>
     </div>
 </div>
 </div>
 `
    elPost.appendChild(newDiv);
}
