document.getElementById("applicationFormElement").addEventListener("submit", async (event) => {
  event.preventDefault();

  const form = event.target;
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  successMessage.textContent = "";
  errorMessage.textContent = "";

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Prepare student data JSON object
  const student = {
    name: form.name.value.trim(),
    surname: form.surname.value.trim(),
    idNumber: form.idNumber.value.trim(),
    email: form.email.value.trim(),
    phoneNumber: form.phoneNumber.value.trim(),
    currentGrade: form.currentGrade.value,
    gradeApplying: form.gradeApplying.value,
    stream: form.stream.value,
    streetAddress: form.streetAddress.value.trim(),
    city: form.city.value.trim(),
    postalCode: form.postalCode.value.trim()
  };

  // Check files
  const studentIDFile = form.studentIDDoc.files[0];
  const guardianIDFile = form.guardianIDDoc.files[0];
  const reportFile = form.septemberReport.files[0];

  if (!studentIDFile || !guardianIDFile || !reportFile) {
    errorMessage.textContent = "Please upload all required documents.";
    return;
  }

  try {
    // 1. Submit student data JSON to /add
    const addResponse = await fetch("http://localhost:8084/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });

    if (addResponse.status === 409) {
      const errorData = await addResponse.json();
      errorMessage.textContent =
        errorData.message || "Application with this email or ID already exists.";
      return;
    }

    if (!addResponse.ok) throw new Error("Failed to submit application data.");

    const addedStudent = await addResponse.json(); 
    // Assume backend returns the created student's ID or something you need

    // 2. Upload files one by one to /upload endpoint
    // You may want to send student ID along with files if backend needs it
    const filesToUpload = [
      { file: studentIDFile, field: "studentIDDoc" },
      { file: guardianIDFile, field: "guardianIDDoc" },
      { file: reportFile, field: "septemberReport" }
    ];

    for (const fileObj of filesToUpload) {
      const formData = new FormData();
      formData.append("file", fileObj.file);
      // Optionally send student ID if backend requires
      // formData.append("studentId", addedStudent.id);

      const uploadResponse = await fetch("http://localhost:8084/upload", {
        method: "POST",
        body: formData
      });

      if (!uploadResponse.ok) {
        throw new Error(`Upload failed for ${fileObj.field}`);
      }
    }

    successMessage.textContent =
      "Application and documents submitted successfully! Redirecting in 5 seconds...";
    form.reset();

    setTimeout(() => {
      window.location.href = "index.html";
    }, 5000);

  } catch (error) {
    errorMessage.textContent = "Submission failed: " + error.message;
  }
});
