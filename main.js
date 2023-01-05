const fetchBtn = document.querySelector(".btn");
const imagesContainer = document.querySelector(".images-container");

let pages = 1;

function fetchingImages() {
	console.log("hello");
	pages++;
	fetch(`https://picsum.photos/v2/list?page=${pages}&limit=9`)
		.then((res) => res.json())
		.then((dataImages) => {
			dataImages.forEach((image) => {
				const imageContainer = document.createElement("div");
				imageContainer.classList.add("image-container");
				const singleImage = document.createElement("img");
				singleImage.src = image.download_url;
				singleImage.alt = `image by ${image.author}`;
				imageContainer.appendChild(singleImage);
				imagesContainer.appendChild(imageContainer);
			});
			fetchBtn.style.display = "none";
		});
}

document.addEventListener("scroll", () => {
	if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
		fetchingImages();
	}
});

fetchBtn.addEventListener("click", fetchingImages);
