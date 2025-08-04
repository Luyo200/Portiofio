const tbody = document.querySelector("#applicationTable tbody");
tbody.innerHTML = "";

async function loadApplications() {
  try {
    const [studentsResponse, documentsResponse] = await Promise.all([
      fetch("http://localhost:8084/all"),
      fetch("http://localhost:8084/documents")
    ]);

    if (!studentsResponse.ok) {
      console.error("Failed to fetch students:", studentsResponse.status, studentsResponse.statusText);
      throw new Error("Failed to fetch students");
    }
    if (!documentsResponse.ok) {
      console.error("Failed to fetch documents:", documentsResponse.status, documentsResponse.statusText);
      throw new Error("Failed to fetch documents");
    }

    const students = await studentsResponse.json();
    const documents = await documentsResponse.json();

    console.log("Students loaded:", students.length);
    console.log("Documents loaded:", documents.length);

    // Create a lookup map by trimmed idNumber for safe matching
    const documentsById = {};
    documents.forEach(doc => {
      if (doc.idNumber) {
        const key = doc.idNumber.toString().trim();
        documentsById[key] = doc;
      }
    });

    if (!students.length) {
      tbody.innerHTML = `<tr><td colspan="13" style="text-align:center;">No applications found.</td></tr>`;
      return;
    }

    tbody.innerHTML = "";  // Clear tbody before populating

    students.forEach(student => {
      const studentIdNumber = (student.idNumber || "").toString().trim();
      const doc = documentsById[studentIdNumber] || {};

      // Debug logs per student
      console.log("Student:", student);
      console.log("Matched document:", doc);

      // Adjust field names here if your API returns different keys
      const idDoc = doc.idDocumentFileName || doc.id_document_file_name || "Not uploaded";
      const parentIdDoc = doc.parentIdDocumentFileName || doc.parent_id_document_file_name || "Not uploaded";
      const septemberReport = doc.septemberReportFileName || doc.september_report_file_name || "Not uploaded";

      const address = `${student.streetAddress || ""}, ${student.city || ""}, ${student.postalCode || ""}`;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td title="${student.name}">${student.name}</td>
        <td title="${student.surname}">${student.surname}</td>
        <td title="${student.email}">${student.email}</td>
        <td title="${student.idNumber}">${student.idNumber}</td>
        <td title="${student.phoneNumber}">${student.phoneNumber}</td>
        <td title="${student.currentGrade}">${student.currentGrade}</td>
        <td title="${student.gradeApplying}">${student.gradeApplying}</td>
        <td title="${student.stream}">${student.stream}</td>
        <td title="${address}">${address}</td>
        <td title="${idDoc}">${idDoc}</td>
        <td title="${parentIdDoc}">${parentIdDoc}</td>
        <td title="${septemberReport}">${septemberReport}</td>
        <td title="${student.submittedAt || "N/A"}">${student.submittedAt || "N/A"}</td>
      `;
      tbody.appendChild(row);
    });

  } catch (error) {
    console.error("Error loading applications:", error);
    tbody.innerHTML = `<tr><td colspan="13" style="color:red; text-align:center;">Failed to load applications.</td></tr>`;
  }
}

loadApplications();
