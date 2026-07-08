import {postsArray} from './data.js'

const postFeedEl = document.getElementById("blog_feed")

let visibleCount=3


function getPostFeedHTML(){
    
    let feedHTML=''

    let postsToRender = postsArray.slice(0,visibleCount)
    
    // console.log(postsToRender)
    
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
    if (visibleCount < postsArray.length) {
    feedHTML += `<button id="view-more-btn">View More</button>`;
    }
    
    // console.log(feedHTML)
    return feedHTML
}

postFeedEl.addEventListener('click',function(event){
    if(event.target.id=="view-more-btn"){
        visibleCount=visibleCount+3
        render()
}
})

function render(){
    postFeedEl.innerHTML=getPostFeedHTML()
}

render()