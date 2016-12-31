webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var util_sync = __webpack_require__(2)

	alert(util_sync.data)

	document.getElementById("aBtn").onclick = function() {

	  __webpack_require__.e/* nsure */(1, function() {
	    var awork = __webpack_require__(3)
	    alert(awork.data)
	    //异步里面再导入同步模块--实际是使用同步中的模块
	    var util1 = __webpack_require__(2)
	  })
	}

	document.getElementById("bBtn").onclick = function() {

	  __webpack_require__.e/* nsure */(2, function() {
	    var bwork = __webpack_require__(4)
	    alert(bwork.data)
	  })
	}




/***/ }
]);