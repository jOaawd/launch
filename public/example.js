document // makes it so you can press enter to submit as opposed to just being able to press a button
    .getElementById("urlInput")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("searchButton").click();
        }
    });

document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("urlInput").value; // if no periods are detected in the input, search google instead
    let searchUrl = "https://www.google.com/search?q=";

    

    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) { // if no http or https is detected, add https automatically
            url = "https://" + url;
        }
    }

    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};



document.getElementById("Discord").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("Discord").value; // Discord app
    let searchUrl = "https://discord.com/";

    
 if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) { // Discord app
            url = "https://" + url;
        }
    }


    document.getElementById("Roblox").onclick = function (event) {
        event.preventDefault();

        let url = document.getElementById("Roblox").value; // roblox app
        let searchUrl = "https://roblox.com/";


        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponet(url);
         } else {
            if (!url.startsWith("http://") && !url.startsWith("https://")) { //roblox app
            }
        }
    

    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};
