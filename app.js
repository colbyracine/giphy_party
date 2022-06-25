let url =
  "https://api.giphy.com/v1/gifs/search?api_key=F9Zw0JuTLNW4b4iHSFK14RHq4cuipr23&q=";
let input = document.querySelector("#search");

document.querySelector("#submit").addEventListener("click", getGiphy);

async function getGiphy(event) {
  event.preventDefault();
  //   get value of search phrase and submit request to API
  let searchWord = input.value;
  let res = await axios.get(url + searchWord);
  //   get random img url from array from giphy API
  let pickGif = Math.floor(Math.random() * 50);
  console.log;
  let gifUrl = res.data.data[`${pickGif}`].images.downsized.url;
  // update img src to show on the page
  let img = document.createElement("img");
  img.src = gifUrl;
  let src = document.getElementById("gifs");
  src.appendChild(img);
}

function clearImages() {
  document.getElementById("#gif").remove();
}
