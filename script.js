const accessKey="pFBh5f5E5Q9JirBNnQZhlELu8Tl7C5WRSOe7DVt83C8";

const searchForm = document.getElementById("search-form");

const searchBox = document.getElementById("search-box");

const searchResult = document.getElementById("search-result");

const ShowMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page= 1;

async function searchImages(){
    keyword = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");  //this line will create new element with img tag
        image.src = result.urls.small;  //this line add the image in img tag
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";  //opens in new tab

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    ShowMoreBtn.style.display = "block"; //for show more button to display
}
searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();

})

ShowMoreBtn.addEventListener("click", ()=>{
    page++; //it will increase the  page after clicking on show more button
    searchImages();
})