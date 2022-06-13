const loadimages = () => {
	const imagediv = document.getElementById("images");
	for (let i = 1; i <= 13; i++) {
		const image = document.createElement("img");
		image.src = `./assets/Galery ${i}.png`;
		image.className = "image";
		imagediv.appendChild(image);
	}
};
window.onload = loadimages;
