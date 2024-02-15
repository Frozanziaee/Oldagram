const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main")
let html = ""

for (let i = 0; i < posts.length; i++) {
    html += `
    <section class="posts">
        <div class="container">
            <div class="first-post">
                <img class="user avatar-vangogh" src="${posts[i].avatar}" alt="post avatar">
                <div class="post-name">
                    <h2>${posts[i].name}</h2>
                    <h4>${posts[i].location}</h4>
                </div>    
            </div>
            <img class="post" src="${posts[i].post}" alt="first post Vincent">
            <div class="icans">
                <img class="ican heart-ican" src="images/icon-heart.png" alt="heart-ican">
                <img class="ican comment-ican" src="images/icon-comment.png" alt="comment-ican">
                <img class="ican share-ican" src="images/icon-dm.png" alt="share-ican">
            </div>
            <p class="count-likes"><span>${posts[i].likes} likes</span></p>
            <p class="username"><span>${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </section>`

} 
mainEl.innerHTML = html

