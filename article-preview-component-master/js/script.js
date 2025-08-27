console.log("Your JavaScript code file is now connected to your website.");

const shareBtn = document.getElementById('share-btn');
const usrBox = document.querySelector('.user-box');
const usrInfo = document.querySelector('.user-info');
const shareMobileView = document.querySelector('.share-mobile-view');
const shareDesktopView = document.querySelector('.share-desktop-view');

/*If i'm in desktop view*/
shareBtn.addEventListener('click', function () {
    if (window.innerWidth > 960) {
        /*When click on shareBtn, remove hidden if it's not already applied, 
        otherwise (if it's already applied) remove it. That's what toggle() does.
        In this specific case it simplified my code a lot by sparing me a ton of if/else conditions  */
        shareDesktopView.classList.toggle("hidden");

    }
    /*If i'm in mobile view */
    if (window.innerWidth < 960) {
        /*Basically toggle() applies()remove all these classes to all these elements
        based on their current state (i.e. the classes already applied) the moment I 
        click on shareBtn*/
        shareMobileView.classList.toggle("hidden");
        usrInfo.classList.toggle("hidden");
        usrBox.classList.toggle("dark");
        this.classList.toggle("dark");
    }
})

/*Code added to solve the problem of the desktop or mobile share menu staying active with the 
style of its view mode while switching to the other view (from desktop to mobiel or vice versa):*/

window.addEventListener('resize', function () {
    /*Checking whether shareDesktopView or shareMobileView don't already have the .hidden
    class applied is useless in this case: nothing bad will happen if we applied .hidden 
    again even though those elements already have it. */
    if (window.innerWidth > 960) {
        shareMobileView.classList.add("hidden");
        usrInfo.classList.remove("hidden")
        usrBox.classList.remove("dark");
        shareBtn.classList.remove("dark");
    }
    else {
        shareDesktopView.classList.add("hidden");
    }
})
