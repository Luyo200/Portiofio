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

  const student = {
    name: form.firstName.value.trim(),
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

  try {
    const response = await fetch("http://localhost:8084/students/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });

    if (response.status === 409) {
      // Conflict: Duplicate email or ID
      const errorData = await response.json();
      errorMessage.textContent = errorData.message || 
        "An application with the submitted email or ID number already exists.";
      return;
    }

    if (!response.ok) throw new Error("Server error");

    await response.json();

    successMessage.textContent = "Application submitted successfully! Redirecting to upload documents in 3 seconds...";
    form.reset();

    if (document.getElementById("subjects")) {
      document.getElementById("subjects").innerHTML = "<strong>Subjects will appear here after selecting a stream.</strong>";
    }

    setTimeout(() => {
      window.location.href = "uploadDocuments.html";
    }, 3000);

  } catch (error) {
    errorMessage.textContent = "Failed to submit application. Please try again later.";
  }
});
