let EditingProfile = false;
let TitleValue = "John Doe's Profile";
let AboutValue = "Placeholder Text";
let SkillsValue = "Placeholder Text";
let ResumeValue = "jobprofile.html";
let ContactValue = "Placeholder Text";
let ComposingEmail = false;

function EditProfile() {
    let View = document.getElementById("viewing-card");
    let Edit = document.getElementById("editing-card");
    let AboutEdit = document.getElementById("about-edit");
    let SkillsEdit = document.getElementById("skills-edit");
    let ResumeEdit = document.getElementById("resume-edit");
    let ContactEdit = document.getElementById("contact-edit");
    if (EditingProfile == false) {
        EditingProfile = true;
        View.style.visibility = "hidden";
        Edit.style.visibility = "visible";
        AboutEdit.value = AboutValue;
        SkillsEdit.value = SkillsValue;
        ResumeEdit.value = ResumeValue;
        ContactEdit.value = ContactValue;
    }
    else {
        EditingProfile = false;
        Edit.style.visibility = "hidden";
        View.style.visibility = "visible";
    }
}

function SaveProfile() {
    let View = document.getElementById("viewing-card");
    let Edit = document.getElementById("editing-card");
    let AboutEdit = document.getElementById("about-edit");
    let SkillsEdit = document.getElementById("skills-edit");
    let ResumeEdit = document.getElementById("resume-edit");
    let ContactEdit = document.getElementById("contact-edit");

    let About = document.getElementById("about");
    let Skills = document.getElementById("skills");
    let Resume = document.getElementById("resume");
    let Contact = document.getElementById("contact");
    
    EditingProfile = false;
    Edit.style.visibility = "hidden";
    View.style.visibility = "visible";
    AboutValue = AboutEdit.value;
    SkillsValue = SkillsEdit.value;
    ResumeValue = ResumeEdit.value;
    ContactValue = ContactEdit.value;

    About.textContent = AboutValue;
    Skills.textContent = SkillsValue;
    //Resume.textContent = ResumeValue;
    Contact.textContent = ContactValue;
}

function Compose() {
    let Read = document.getElementById("read-email");
    let Compose = document.getElementById("compose-email");
    if (ComposingEmail == false) {
        ComposingEmail = true;
        Read.style.visibility = "hidden";
        Compose.style.visibility = "visible";
    }
    else {
        ComposingEmail = false;
        Compose.style.visibility = "hidden";
        Read.style.visibility = "visible";
    }
}

function Mark() {

}