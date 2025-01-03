function generateResume() {
  // Get form values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const surname = (document.getElementById("surname") as HTMLInputElement).value;
  const fatherName = (document.getElementById("fatherName") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const mobile = (document.getElementById("mobile") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

  // Set resume data
  (document.getElementById("resName") as HTMLSpanElement).textContent = name;
  (document.getElementById("resSurname") as HTMLSpanElement).textContent = surname;
  (document.getElementById("resFatherName") as HTMLSpanElement).textContent = fatherName;
  (document.getElementById("resEmail") as HTMLSpanElement).textContent = email;
  (document.getElementById("resMobile") as HTMLSpanElement).textContent = mobile;
  (document.getElementById("resEducation") as HTMLSpanElement).textContent = education;
  (document.getElementById("resSkills") as HTMLSpanElement).textContent = skills;
  (document.getElementById("resExperience") as HTMLSpanElement).textContent = experience;

  // Handle profile picture upload safely
  const fileInput = document.getElementById("profilePic") as HTMLInputElement;
  if (fileInput.files && fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      (document.getElementById("resProfilePic") as HTMLImageElement).src = e.target?.result as string;
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    // If no file is selected, show default profile picture or handle error
    (document.getElementById("resProfilePic") as HTMLImageElement).src = "default-profile.png"; // Add a default picture here
  }

  // Display resume
  const resumeContainer = document.getElementById("resumeContainer") as HTMLDivElement;
  resumeContainer.style.display = "block";
}
