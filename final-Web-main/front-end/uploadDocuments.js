document.getElementById("uploadDocumentsForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.target;
  const successMessage = document.getElementById("uploadSuccessMessage");
  const errorMessage = document.getElementById("uploadErrorMessage");

  successMessage.textContent = "";
  errorMessage.textContent = "";

  const fileInputs = [
    document.getElementById("idDocument"),
    document.getElementById("parentIdDocument"),
    document.getElementById("septemberReport")
  ];

  try {
    for (const input of fileInputs) {
      if (!input.files[0]) {
        throw new Error("Please upload all required files.");
      }

      const formData = new FormData();
      formData.append("file", input.files[0]);

      const response = await fetch("http://localhost:8084/upload", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error(`Upload failed for ${input.name}`);
    }

    successMessage.textContent = "You have successfully uploaded your application. Redirecting to home page...";

    form.reset();

    // Redirect after 2 seconds (2000 milliseconds)
    setTimeout(() => {
      window.location.href = "index.html";
    }, 10000);

  } catch (error) {
    console.error(error);
    errorMessage.textContent = "Upload failed: " + error.message;
  }
});
