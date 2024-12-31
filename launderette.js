const cardsRowContainer = document.getElementById("cardsRowContainer");


const onCampusLaundryEl = document.getElementById("onCampusLaundry");
const onCampusHeadingEl = document.getElementById("onCampusHeading");
const onCampusTextEl = document.getElementById("onCampusText");

const gatedCommunityLaundryEl = document.getElementById("gatedCommunityLaundry");
const gatedCommunityHeadingEl = document.getElementById("gatedCommunityHeading");
const gatedCommunityTextEl = document.getElementById("gatedCommunityText");

const consultingServicesEl = document.getElementById("consultingServices");
const consultingServicesHeadingEl = document.getElementById("consultingServicesHeading");
const consultingServicesTextEl = document.getElementById("consultingServicesText");






function onCampusChange() {
    onCampusLaundryEl.style.backgroundColor = "#07A9E0";
    onCampusHeadingEl.style.color = "#ffffff";
    onCampusTextEl.style.color = "#ffffff";
}

function onCampusOriginal() {
    onCampusLaundryEl.style.backgroundColor = "#E6E6E5";
    onCampusHeadingEl.style.color = "grey";
    onCampusTextEl.style.color = "grey";
}




function gatedCommunityChange() {
    gatedCommunityLaundryEl.style.backgroundColor = "#07A9E0";
    gatedCommunityHeadingEl.style.color = "#ffffff";
    gatedCommunityTextEl.style.color = "#ffffff";
}

function gatedCommunityOriginal() {
    gatedCommunityLaundryEl.style.backgroundColor = "#E6E6E5";
    gatedCommunityHeadingEl.style.color = "grey";
    gatedCommunityTextEl.style.color = "grey";
}




function consultingServicesChange() {
    consultingServicesEl.style.backgroundColor = "#07A9E0";
    consultingServicesHeadingEl.style.color = "#ffffff";
    consultingServicesTextEl.style.color = "#ffffff";
}

function consultingServicesOriginal() {
    consultingServicesEl.style.backgroundColor = "#E6E6E5";
    consultingServicesHeadingEl.style.color = "grey";
    consultingServicesTextEl.style.color = "grey";
}
