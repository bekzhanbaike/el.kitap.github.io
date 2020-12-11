/*search*/
var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде
function TrimStr(s) {
    s = s.replace(/^[\A-z\<>\\=_»»»\.]+|[\A-z\<>\\=_»»»\.]+$/g,);
    return s.replace();
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind ==="") {
    alert("Cіз ешнарсе енгізбедіңіз");
    return;
  }
 
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ештеңе таппадық, Сөзді ғана жазыңыз");
 
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;

 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:#d4caca'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
 }
