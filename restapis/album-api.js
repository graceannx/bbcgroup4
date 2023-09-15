
const searchAlbumsBtn = document.getElementById("searchBtn")
const findAlbumsBtn = document.getElementById("getAllAlbumsBtn")


// display album list

async function displayAlbums(){
    const {results} = await fetch("")
    console.log(results);

    results.forEach((album) => {
        const albumDiv = document.createElement("div")
        albumDiv.innerHTML = ``
    })


}

//handle events

function handleSearchAlbums(e){
    searchAlbumsBtn.addEventListener("click", () => {
        displayAlbums()
    })
}
