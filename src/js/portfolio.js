const Handlebars = require('handlebars');
export default function myModule() {
  var rawTemplate = document.getElementById("portfolio__template").innerHTML;
  var projectsContainer = document.querySelector(".portfolio__items");
  var scrollTimeout;
  var pageNumber = 0;
  var PAGE_SIZE = 6;

  function createHTML(petsData) {
    var from = pageNumber * PAGE_SIZE;
    var to = from + PAGE_SIZE;
    var pageProjects = petsData.projects.slice(from, to);
    var newData = {};
    newData.projects = pageProjects;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(newData);
    projectsContainer.insertAdjacentHTML("beforeEnd", ourGeneratedHTML);
    pageNumber++;
    if(pageNumber>=3) return false;
  }

  window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
        $.ajax({
          type: "GET",
          url: "../json/projects.json",
        }).done(function (data) {
          createHTML(data);
        });
      }
    }, 100)
  });

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', '../json/projects.json');
  ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var data = JSON.parse(ourRequest.responseText);
      createHTML(data);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function () {
    console.log("Connection error");
  };

  ourRequest.send();
}


