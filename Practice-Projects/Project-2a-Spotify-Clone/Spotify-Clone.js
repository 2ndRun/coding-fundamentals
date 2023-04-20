//Up until extractTokenFromUri()
// step 1 - Wait for app to be fully loaded
// step 2 - Authorize the user and get a token.
// step 3 - Store the token somewhere else.

//Up until FetchingEndpoints
// step 4 - Fetch the user's top tracks using the token.
// step 5 - Display the top tracks.
// step 6 - Fetch new releases using the token.
// step 7 - Display new releases.
// step 8 - Fetch featured playlists using the token.
// step 9 - Display featured playlist 

let TOKEN = "";
let client_id = "08669370e83f4ee9ab7cf529d00fca76";
let redirect_uri = window.location.origin;
// "http://127.0.0.1:5500/Practice/Code-along/Spotify-Clone/Spotify-Clone.html"

let scope = "user-read-private user-read-email user-top-read";

function authorize() {
    let url = "https://accounts.spotify.com/authorize";
        url += "?response_type=token";
        url += "&client_id=" + encodeURIComponent(client_id);
        url += "&scope=" + encodeURIComponent(scope);
        url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
        window.open(url, "_self");
}

function extractTokenFromURI() {
    let hash = window.location.hash;
    if (hash && hash.includes("access_token")) {
        let url = hash.replace("#access_token=", " ");
        let chunks = url.split("&");
        let token = chunks[0];
        return token;
    }
    return null;
}
///////////////////////
///////////////////////

function displayUserTopItems(data) {
    let section = document.querySelector("#your-top-items");
    let sectionTitle = section.querySelector(".title");
    let sectionSubtitle = section.querySelector(".subtitle");
    let sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "Your Top Items";
    sectionSubtitle.textContent = "Based on your recent listening.";

    ///////////////
    for (let i = 0; i < data.items.length; i++) {
        let track = data.items[i];

        let image = track.album.images[1].url;
        let title = track.name;
        let subtitle = track.album.artists[0].name;
        let href = track.album.external_urls.spotify;

        sectionWrapper.innnerHTML += generateCard(image, title, subtitle, href);
    }
}

function displayNewReleases(data) {
    let section = document.querySelector("#new-releases");
    let sectionTitle = section.querySelector(".title");
    let sectionSubtitle = section.querySelector(".subtitle");
    let sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "New Releases";
    sectionSubtitle.textContent = "New Releases from Spotify";

    /////////////////////
    for (let i = 0; i < data.albums.items.length; i++) {
        let track = data.albums.items[i];

        let image = track.images[1].url;
        let title = track.name;
        let subtitle = track.artists[0].name;
        let href = track.external_urls.spotify;

        sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}

function displayFeaturedPlaylists(data) {
    let section = document.querySelector("#featured-playlists");
    let sectionTitle = section.querySelector(".title");
    let sectionSubtitle = section.querySelector(".subtitle");
    let sectionWrapper = section.querySelector(".card-wrapper");
    sectionTitle.textContent = "Featured Playlists";
    sectionSubtitle.textContent = "Featured playlists from Spotify.";

    //////////
    for (let i = 0; i < data.playlists.items.length; i++) {
    let track = data.playlists.items[i];

    let image = track.images[0].url;
    let title = track.name;
    let subtitle = track.description;
    let href = track.external_urls.spotify;

    sectionWrapper.innerHTML += generateCard(image, title, subtitle, href)
    }
}

///////////////////////
//////////////////////
async function fetchUserTopItems() {
    try {
        let endpoint = "https://api.spotify.com/v1/me/top/artists"
        let response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
        });
        let data = await response.json();
        console.log("User Top Items", data);
        displayUserTopItems(data);
    } catch (error) {
        alert ("Something went wrong.");
        console.log(error);
    }
}

async function fetchNewReleases() {
    try {
        let endpoint = "https://api.spotify.com/v1/browse/new-releases";
        let response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
        });
        let data = await response.json();
        console.log("New Releases", data);
        displayNewReleases(data);
    } catch (error) {
        alert ("Something went wrong.");
        console.log(error);
    }
}

async function fetchFeaturedPlaylists() {
    try {
        let endpoint = "https://api.spotify.com/v1/browse/featured-playlists";
        let response = await fetch(endpoint + "?limit=6", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
        });
        let data = await response.json();
        console.log("Featured Playlists", data);
        displayFeaturedPlaylists(data);
    } catch (error) {
        alert ("Something went wrong.");
        console.log(error);
    }   
}

///////////////////////
///////////////////////

function generateCard(image, title, subtitle, href) {
    return `
    <a class="card" href="${href}" target="_blank">
        <img 
            src="${image}"
            alt="peaceful piano"
            srcset=""
        />
        <span class="mdi mdi-play mdi-36px"></span>
        <div class="title">${title}</div>
        <div class="subtitle">${subtitle}</div>
    </a>
    `
}

///////////////////////
///////////////////////
window.addEventListener("load", function() {
    TOKEN = extractTokenFromURI();
    if (TOKEN) {
        console.log("Token", TOKEN);
        //Fetching the endpoints
        fetchUserTopItems();
        fetchNewReleases();
        fetchFeaturedPlaylists();
    } else {
      authorize();
    }
});

