document.getElementById("previewButton").addEventListener("click", function () {
  const base64Input = document.getElementById("base64Input").value.trim();
  const imageContainer = document.getElementById("imageContainer");
  const downloadButton = document.getElementById("downloadButton");

  // Clear previous images
  imageContainer.innerHTML = "";
  downloadButton.style.display = "none";

  if (base64Input) {
    // Create an image element
    const img = document.createElement("img");
    img.src = base64Input;

    // Append the image to the container
    imageContainer.appendChild(img);

    // Show the download button
    downloadButton.href = base64Input;
    downloadButton.download = "image.png"; // You can change the filename
    downloadButton.style.display = "block";
  } else {
    alert("Please enter a valid Base64 string.");
  }
});
document.getElementById('previewButton').addEventListener('click', function() {
  const base64String = document.getElementById('base64Input').value;
  const imageContainer = document.getElementById('imageContainer');
  const downloadButton = document.getElementById('downloadButton');

  if (base64String) {
      imageContainer.innerHTML = `<img src="${base64String}" alt="Image Preview">`;
      downloadButton.href = base64String;
      downloadButton.classList.remove('hidden');
  } else {
      imageContainer.innerHTML = '';
      downloadButton.classList.add('hidden');
  }
});
