var name =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _portfolio = __webpack_require__(1);
	
	var _portfolio2 = _interopRequireDefault(_portfolio);
	
	var _scroll = __webpack_require__(2);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _targetScroll = __webpack_require__(3);
	
	var _targetScroll2 = _interopRequireDefault(_targetScroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _scroll2.default)();
	(0, _targetScroll2.default)();
	(0, _portfolio2.default)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = myModule;
	function myModule() {
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
	    if (pageNumber >= 3) return false;
	  }
	
	  window.addEventListener('scroll', function () {
	    clearTimeout(scrollTimeout);
	    scrollTimeout = setTimeout(function () {
	      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
	        $.ajax({
	          type: "GET",
	          url: "../json/projects.json"
	        }).done(function (data) {
	          createHTML(data);
	        });
	      }
	    }, 100);
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

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scroll;
	function scroll() {
	  var block = document.querySelector('.header');
	  var html = document.documentElement;
	  var body = document.body;
	  var scrollTop = html.scrollTop || body && body.scrollTop || 0;
	  scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)
	
	  window.onscroll = function () {
	    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	    if (scrolled > 50) {
	      block.classList.add('header--scroll');
	    } else {
	      block.classList.remove('header--scroll');
	    }
	  };
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = targetScroll;
	function targetScroll() {
	  var moveTo = new MoveTo();
	  var trigger = document.querySelectorAll('.menu__link');
	  for (var i = 0; i < trigger.length; i++) {
	    moveTo.registerTrigger(trigger[i]);
	    trigger[i].addEventListener('click', function () {
	      for (var j = 0; j < trigger.length; j++) {
	        trigger[j].parentNode.classList.remove("menu__item--active");
	      }
	      this.parentNode.classList.add("menu__item--active");
	    });
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDA0N2YzYzg1MGUxMjgzOWYyZTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGFyZ2V0U2Nyb2xsLmpzIl0sIm5hbWVzIjpbIm15TW9kdWxlIiwicmF3VGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicHJvamVjdHNDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVGltZW91dCIsInBhZ2VOdW1iZXIiLCJQQUdFX1NJWkUiLCJjcmVhdGVIVE1MIiwicGV0c0RhdGEiLCJmcm9tIiwidG8iLCJwYWdlUHJvamVjdHMiLCJwcm9qZWN0cyIsInNsaWNlIiwibmV3RGF0YSIsImNvbXBpbGVkVGVtcGxhdGUiLCJIYW5kbGViYXJzIiwiY29tcGlsZSIsIm91ckdlbmVyYXRlZEhUTUwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIiQiLCJzY3JvbGxUb3AiLCJoZWlnaHQiLCJhamF4IiwidHlwZSIsInVybCIsImRvbmUiLCJkYXRhIiwib3VyUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvbmVycm9yIiwic2VuZCIsInNjcm9sbCIsImJsb2NrIiwiaHRtbCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJjbGllbnRUb3AiLCJvbnNjcm9sbCIsInNjcm9sbGVkIiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0YXJnZXRTY3JvbGwiLCJtb3ZlVG8iLCJNb3ZlVG8iLCJ0cmlnZ2VyIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJyZWdpc3RlclRyaWdnZXIiLCJqIiwicGFyZW50Tm9kZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0EsNEI7Ozs7Ozs7Ozs7O21CQ0x3QkEsUTtBQUFULFVBQVNBLFFBQVQsR0FBb0I7QUFDakMsT0FBSUMsY0FBY0MsU0FBU0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NDLFNBQWpFO0FBQ0EsT0FBSUMsb0JBQW9CSCxTQUFTSSxhQUFULENBQXVCLG1CQUF2QixDQUF4QjtBQUNBLE9BQUlDLGFBQUo7QUFDQSxPQUFJQyxhQUFhLENBQWpCO0FBQ0EsT0FBSUMsWUFBWSxDQUFoQjs7QUFHQSxZQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtBQUM1QixTQUFJQyxPQUFPSixhQUFhQyxTQUF4QjtBQUNBLFNBQUlJLEtBQUtELE9BQU9ILFNBQWhCO0FBQ0EsU0FBSUssZUFBZUgsU0FBU0ksUUFBVCxDQUFrQkMsS0FBbEIsQ0FBd0JKLElBQXhCLEVBQThCQyxFQUE5QixDQUFuQjtBQUNBLFNBQUlJLFVBQVUsRUFBZDtBQUNBQSxhQUFRRixRQUFSLEdBQW1CRCxZQUFuQjtBQUNBLFNBQUlJLG1CQUFtQkMsV0FBV0MsT0FBWCxDQUFtQm5CLFdBQW5CLENBQXZCO0FBQ0EsU0FBSW9CLG1CQUFtQkgsaUJBQWlCRCxPQUFqQixDQUF2QjtBQUNBWix1QkFBa0JpQixrQkFBbEIsQ0FBcUMsV0FBckMsRUFBa0RELGdCQUFsRDtBQUNBYjtBQUNBLFNBQUdBLGNB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Q0QsTUFMRDtBQU1EO0FBQ0YsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQwNDdmM2M4NTBlMTI4MzlmMmU2IiwiaW1wb3J0IG15TW9kdWxlIGZyb20gXCIuL3BvcnRmb2xpb1wiO1xyXG5pbXBvcnQgc2Nyb2xsIGZyb20gXCIuL3Njcm9sbFwiO1xyXG5pbXBvcnQgdGFyZ2V0U2Nyb2xsIGZyb20gXCIuL3RhcmdldFNjcm9sbFwiO1xyXG5zY3JvbGwoKTtcclxudGFyZ2V0U2Nyb2xsKCk7XHJcbm15TW9kdWxlKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXlNb2R1bGUoKSB7XHJcbiAgdmFyIHJhd1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0Zm9saW9fX3RlbXBsYXRlXCIpLmlubmVySFRNTDtcclxuICB2YXIgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcnRmb2xpb19faXRlbXNcIik7XHJcbiAgdmFyIHNjcm9sbFRpbWVvdXQ7XHJcbiAgdmFyIHBhZ2VOdW1iZXIgPSAwO1xyXG4gIHZhciBQQUdFX1NJWkUgPSA2O1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlSFRNTChwZXRzRGF0YSkge1xyXG4gICAgdmFyIGZyb20gPSBwYWdlTnVtYmVyICogUEFHRV9TSVpFO1xyXG4gICAgdmFyIHRvID0gZnJvbSArIFBBR0VfU0laRTtcclxuICAgIHZhciBwYWdlUHJvamVjdHMgPSBwZXRzRGF0YS5wcm9qZWN0cy5zbGljZShmcm9tLCB0byk7XHJcbiAgICB2YXIgbmV3RGF0YSA9IHt9O1xyXG4gICAgbmV3RGF0YS5wcm9qZWN0cyA9IHBhZ2VQcm9qZWN0cztcclxuICAgIHZhciBjb21waWxlZFRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHJhd1RlbXBsYXRlKTtcclxuICAgIHZhciBvdXJHZW5lcmF0ZWRIVE1MID0gY29tcGlsZWRUZW1wbGF0ZShuZXdEYXRhKTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZUVuZFwiLCBvdXJHZW5lcmF0ZWRIVE1MKTtcclxuICAgIHBhZ2VOdW1iZXIrKztcclxuICAgIGlmKHBhZ2VOdW1iZXI+PTMpIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dCk7XHJcbiAgICBzY3JvbGxUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPj0gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAxMDApIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgIHVybDogXCIuLi9qc29uL3Byb2plY3RzLmpzb25cIixcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICBjcmVhdGVIVE1MKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDApXHJcbiAgfSk7XHJcblxyXG4gIHZhciBvdXJSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgb3VyUmVxdWVzdC5vcGVuKCdHRVQnLCAnLi4vanNvbi9wcm9qZWN0cy5qc29uJyk7XHJcbiAgb3VyUmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAob3VyUmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIG91clJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShvdXJSZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgIGNyZWF0ZUhUTUwoZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIldlIGNvbm5lY3RlZCB0byB0aGUgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3IuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG91clJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBlcnJvclwiKTtcclxuICB9O1xyXG5cclxuICBvdXJSZXF1ZXN0LnNlbmQoKTtcclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9wb3J0Zm9saW8uanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgdmFyIGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICB2YXIgc2Nyb2xsVG9wID0gaHRtbC5zY3JvbGxUb3AgfHwgYm9keSAmJiBib2R5LnNjcm9sbFRvcCB8fCAwO1xyXG4gIHNjcm9sbFRvcCAtPSBodG1sLmNsaWVudFRvcDsgLy8g0LIgSUU3LSA8aHRtbD4g0YHQvNC10YnRkdC9INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviAoMCwwKVxyXG5cclxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2Nyb2xsZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmIChzY3JvbGxlZCA+IDUwKSB7XHJcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tc2Nyb2xsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLXNjcm9sbCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zY3JvbGwuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXJnZXRTY3JvbGwoKSB7XHJcbiAgY29uc3QgbW92ZVRvID0gbmV3IE1vdmVUbygpO1xyXG4gIGNvbnN0IHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9fbGluaycpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgbW92ZVRvLnJlZ2lzdGVyVHJpZ2dlcih0cmlnZ2VyW2ldKTtcclxuICAgIHRyaWdnZXJbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZvcihsZXQgaj0wO2o8dHJpZ2dlci5sZW5ndGg7aisrKXtcclxuICAgICAgICB0cmlnZ2VyW2pdLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdGFyZ2V0U2Nyb2xsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==