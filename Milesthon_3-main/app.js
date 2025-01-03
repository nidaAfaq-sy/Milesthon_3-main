function generateResume() {
    // Get form values
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var fatherName = document.getElementById("fatherName").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // Set resume data
    document.getElementById("resName").textContent = name;
    document.getElementById("resSurname").textContent = surname;
    document.getElementById("resFatherName").textContent = fatherName;
    document.getElementById("resEmail").textContent = email;
    document.getElementById("resMobile").textContent = mobile;
    document.getElementById("resEducation").textContent = education;
    document.getElementById("resSkills").textContent = skills;
    document.getElementById("resExperience").textContent = experience;
    // Handle profile picture upload safely
    var fileInput = document.getElementById("profilePic");
    if (fileInput.files && fileInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            document.getElementById("resProfilePic").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
    else {
        // If no file is selected, show default profile picture or handle error
        document.getElementById("resProfilePic").src = "default-profile.png"; // Add a default picture here
    }
    // Display resume
    var resumeContainer = document.getElementById("resumeContainer");
    resumeContainer.style.display = "block";
}
