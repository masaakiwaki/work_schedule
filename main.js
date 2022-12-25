
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

const menber = [
  {"num":"641", "name":"waki"},
  {"num":"555", "name":"ochi"}
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
  el:'#isChecked',
  data:{
      //checkboxの状態
      isChecked: false,
      users: [{ employeeNumber: ''}]
  },
  methods: {
      add: function(){
          this.users.push({employeeNumber: ''})
      },
      del: function(index){
          this.users.splice(index, 1)
      },
  }
})






function sendMail() {

  let employeeNumberObject = document.getElementsByClassName("employeeNumber");
  console.log(employeeNumberObject.length)
  let employeeNumberValueArray = [];
  for(let i = 0; i < employeeNumberObject.length; i++) {
    employeeNumberValueArray.push(hankaku2Zenkaku(employeeNumberObject.item(i).value));
}


  for(i in employeeNumberValueArray){
    for(j in menber){
      console.log(test[i])
      console.log(menber[j]["num"])
      if(employeeNumberValueArray[i] == menber[j]["num"]){
        console.log(menber[j]["name"])
      }

      }
    }





  var employeeNumberValueText = employeeNumberValueArray.join('\n');
  console.log(employeeNumberValueText)

  let qa = document.getElementById("formMassage").value;

  mailBody =`LINE WORKS学習会の視聴が完了しました。
  
【視聴完了者】
${employeeNumberValueText}
  
【質疑内容】
${qa}
  `


  
  
  mailAddress="test@hoge.com";
  mailHeader="【NSB推進】LINE WORKS学習会 視聴完了メール";
  
  console.log(mailAddress)
  console.log(mailHeader)
  console.log(mailBody)
  
  
  mailBody = mailBody.replace(/\n/g, '%0D%0A')
  this.location.href=`mailto:${mailAddress}?subject=${mailHeader}&body=${mailBody}`;
  } 



  function hankaku2Zenkaku(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}



  
  