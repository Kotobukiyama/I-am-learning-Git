function rotateImage(val)
{
	let image = document.getElementById("image");
		if (image.Style.webkitAnimationPlayState == "running")
		{
			image.Style.webkitAnimationPlayState = "paused";
			val.innerHTML = "spin";
		}
		else
		{
			image.Style.webkitAnimationPlayState = "running";
			val.innerHTML = "Stop";
		}
}
	