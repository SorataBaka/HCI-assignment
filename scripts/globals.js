const togglesidebar = () => {
	const sidebar = document.getElementById("sidebar");
	console.log(sidebar.style.display);
	if (sidebar.style.display === "none" || sidebar.style.display === "")
		return (sidebar.style.display = "block");
	else return (sidebar.style.display = "none");
};
const handlesocialredirect = (type) => {
	switch (type) {
		case "whatsapp":
			return window.open("https://web.whatsapp.com/");
		case "instagram":
			return window.open("https://www.instagram.com/");
		case "facebook":
			return window.open("https://www.facebook.com/");
		case "twitter":
			return window.open("https://twitter.com/");
		case "youtube":
			return window.open("https://www.youtube.com/");
		default:
			return;
	}
};

const handlepageredirect = (type) => {
	switch (type) {
		case "home":
			return window.location.replace("index.html");
		case "gallery":
			return window.location.replace("gallery.html");
		case "about":
			return window.location.replace("about.html");
		case "contact":
			return window.location.replace("contact.html");
		case "subscribe":
			return window.location.replace("subscribe.html");
		default:
			return;
	}
};
