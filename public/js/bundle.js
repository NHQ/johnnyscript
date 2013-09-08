;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var tags = document.getElementsByTagName('*')

for(var i = 0; i < tags.length; i++){

  var tag = tags[i];

  for(var ii = 0; ii < tag.classList.length; ii++){

    var className = tag.classList[ii]

      console.log(className)

  }

}

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS91c2VyL2RldmVsb3BtZW50L2Jhcm4vam9obm55c2NyaXB0LnVzL3NpdGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXG5cbmZvcih2YXIgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKXtcblxuICB2YXIgdGFnID0gdGFnc1tpXTtcblxuICBmb3IodmFyIGlpID0gMDsgaWkgPCB0YWcuY2xhc3NMaXN0Lmxlbmd0aDsgaWkrKyl7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gdGFnLmNsYXNzTGlzdFtpaV1cblxuICAgICAgY29uc29sZS5sb2coY2xhc3NOYW1lKVxuXG4gIH1cblxufVxuIl19
;