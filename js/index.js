import {postsArray} from './data.js'

const postFeedEl = document.getElementById("blog_feed")
const recentPostFeedEl = document.getElementById("recent_posts")

let visibleCount=3
let recentCount=3

function getPostFeedHTML(count, showButton){
    
    let feedHTML=''
    let postsToRender = postsArray.slice(0,count)
    
     postsToRender.forEach(function(blog){
        feedHTML+=`
        <div class="post_thumbnail">
            <img src="${blog.imageUrl}" alt="${blog.alt}">
                <div class="post_content">
                    <h4>${blog.date}</h4>
                    <h2>${blog.name}</h2>
                    <p>${blog.excerpt}</p>      
                </div>
        </div>`
    }
    )
        if (showButton && count < postsArray.length) {
        feedHTML += `<button id="view-more-btn">View More</button>`;
        }
    return feedHTML
}


//View more button functionality 
if(postFeedEl){
    postFeedEl.addEventListener('click',function(event){
    if(event.target.id=="view-more-btn"){
        visibleCount+=3
        render()
        }
    }
    )
}

function render(){
    if(postFeedEl){
        console.log("Index test")
        postFeedEl.innerHTML=getPostFeedHTML(visibleCount,true)
    }
    if(recentPostFeedEl){
        console.log("About me test")
        recentPostFeedEl.innerHTML=getPostFeedHTML(recentCount,false)
    }
}

render()