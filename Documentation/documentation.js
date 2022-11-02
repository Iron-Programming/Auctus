/*******************************
 * @function toggleSublist
 *******************************/
function toggleSublist(element) {
    var Sublist = element.nextElementSibling;
    if (Sublist.style.display === "none") {
        Sublist.style.display = "block";
        element.getElementsByClassName('list-arrow')[0].classList.add('list-open');
        element.getElementsByClassName('list-arrow')[0].classList.remove('list-closed');
    } else {
        Sublist.style.display = "none";
        element.getElementsByClassName('list-arrow')[0].classList.add('list-closed');
        element.getElementsByClassName('list-arrow')[0].classList.remove('list-open');
    }
}

/*******************************
 * Close all sublists
 *******************************/
var sublists = document.querySelectorAll(".side-bar ul li .sub-list");
for (var i = 0; i < sublists.length; i++) {
    sublists[i].style.display = "none";
}

/*******************************
 * @function expandSidebar
 *******************************/
function expandSideBar() {
    var arrow = document.querySelectorAll('.mobile-arrow span')[0],
        sidebar = document.getElementsByClassName('side-bar')[0];

    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)";
        arrow.style.left = "25px";
        arrow.style.transition = "left 0.3s ease-in-out";
        sidebar.style.marginLeft = "-250px";
        sidebar.style.transition = "margin-left 0.3s ease-in-out";
    } else {
        arrow.style.transform = "rotate(180deg)";
        arrow.style.left = "275px";
        arrow.style.transition = "left 0.3s ease-in-out";
        sidebar.style.marginLeft = "0px";
        sidebar.style.transition = "margin-left 0.3s ease-in-out";
    }
}

/*******************************
 * @function switchTab
 *******************************/
function switchTab(tabID) {
    // Close all Tabs
    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Open specified tab
    document.getElementById(tabID).style.display = "block";
}

/*******************************
 * Start on About tab
 *******************************/
switchTab('about');