var util_sync = require('./util-sync.js')

alert(util_sync.data)

document.getElementById("aBtn").onclick = function() {

  require.ensure([], function() {
    var awork = require('./workA-async.js')
    alert(awork.data)
    //异步里面再导入同步模块--实际是使用同步中的模块
    var util1 = require('./util-sync.js')
  })
}

document.getElementById("bBtn").onclick = function() {

  require.ensure([], function() {
    var bwork = require('./workB-async.js')
    alert(bwork.data)
  })
}


