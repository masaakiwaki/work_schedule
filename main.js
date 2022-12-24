
const videos = [

  {"title":"LINE WORKS 概要", "url":"file:///C:/windows/"},
  {"title":"LINE WORKS 介護施設での活用・スマート介護との連携", "url":"file:///C:/windows/"},
  {"title":"LINE WORKS 価格", "url":"file:///C:/windows/"},
  // {"title":"", "url":""},
]


const catalogs = [
  {"title":"概要", "url":"file:///C:/windows/"},
  {"title":"事例", "url":"file:///C:/windows/"},
  {"title":"介護事例", "url":"file:///C:/windows/"},
  {"title":"スマート介護連携", "url":"file:///C:/windows/"}
  // {"title":"", "url":""},
]

const area = {
  "本社":"a",
  "ソリューションセンター": "白石達也さん",
  "大洲":"c",
  "宇和島": "d",
  "今治": "e",
  "新居浜":"f",
  "四国中央":"g"
}

new Vue({
  el:'#video',
  data: {
      videos:videos
  }
})

new Vue({
  el:'#catalog',
  data: {
      catalogs:catalogs
  }
})

new Vue({
  el:'#area',
  data: {
    area : area
  }
})
  
new Vue({
  el:'#app',
  data:{
      //checkboxの状態
      isChecked: true
  }
})

