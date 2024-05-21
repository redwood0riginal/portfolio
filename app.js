// show and hide the portfolio elements

let port = document.querySelector(".port");
let portfolioBox = document.querySelector(".portfolio-box ul");
let arrow = document.querySelector(".port i");

port.addEventListener("click", () => {
  if (portfolioBox.style.display === "none") {
    portfolioBox.style.display = "flex";
    arrow.classList.remove("fa-chevron-right");
    arrow.classList.add("fa-chevron-down");
  } else {
    portfolioBox.style.display = "none";
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-right");
  }
});

// tabs and their contents
let tabs = document.querySelectorAll(".tabs-box ul li");
let tabsArray = Array.from(tabs);
let mainContent = document.querySelector(".main-content");
let contents = document.querySelectorAll(".main-content > div");
let contentsArray = Array.from(contents);
let sideBarTabs = document.querySelectorAll(".sidebar a");
let sideBarTabsArray = Array.from(sideBarTabs);
let portfolioTabs = document.querySelectorAll(".portfolio-box ul li");
let portfolioTabsArray = Array.from(portfolioTabs);
let homeBtn1 = document.querySelector(".first");
let homeBtn2 = document.querySelector(".second");

tabsArray.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    contentsArray.forEach((cont) => {
      cont.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "flex";

    // Trigger click event on corresponding sidebar tab
    sideBarTabsArray[index].click();
    portfolioTabsArray[index].click();
    homeBtnsArray[index].click();

    // Store active tab index in local storage
    localStorage.setItem("activeTabIndex", index.toString());
  });
});

sideBarTabsArray.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    sideBarTabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    contentsArray.forEach((cont) => {
      cont.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "flex";

    // Trigger click event on corresponding tab
    tabsArray[index].click();
    portfolioTabsArray[index].click();
    homeBtnsArray[index].click();

    // Store active tab index in local storage
    localStorage.setItem("activeTabIndex", index.toString());
  });
});

portfolioTabsArray.forEach((ele, index) => {
  ele.addEventListener("click", (e) => {
    contentsArray.forEach((cont) => {
      cont.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "flex";

    // Trigger click event on corresponding tab
    tabsArray[index].click();
    sideBarTabsArray[index].click();
    homeBtnsArray[index].click();

    // Store active tab index in local storage
    localStorage.setItem("activeTabIndex", index.toString());
  });
});

homeBtn1.addEventListener("click", (e) => {
  contentsArray.forEach((cont) => {
    cont.style.display = "none";
  });
  document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
  // Trigger click event on corresponding tab
  tabsArray[4].click();
  sideBarTabsArray[4].click();
  portfolioTabsArray[4].click();

  // Store active tab index in local storage
  localStorage.setItem("activeTabIndex", "4");
});

homeBtn2.addEventListener("click", (e) => {
  contentsArray.forEach((cont) => {
    cont.style.display = "none";
  });
  document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
  // Trigger click event on corresponding tab
  tabsArray[3].click();
  sideBarTabsArray[3].click();
  portfolioTabsArray[3].click();

  // Store active tab index in local storage
  localStorage.setItem("activeTabIndex", "3");
});

// Retrieve active tab index from local storage and trigger click event
const activeTabIndex = localStorage.getItem("activeTabIndex");
if (activeTabIndex !== null) {
  const index =parseInt(activeTabIndex);
  tabsArray[index].click();
  sideBarTabsArray[index].click();
  portfolioTabsArray[index].click();
}