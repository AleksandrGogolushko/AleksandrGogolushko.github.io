let menubtn = document.querySelector(".btn");
let btn = document.querySelector("nav");
let menu = document.getElementById("menuId");
let main = document.querySelector("main");
let logo = document.getElementById("arrow")


menubtn.addEventListener("click", () => {
  btn.classList.toggle("on")
  logo.classList.toggle("reversArrow")
})

let anchors = document.querySelectorAll("a[href*='#']")

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    btn.classList.remove("on");
    logo.classList.remove("reversArrow");
    const blockID = anchor.getAttribute('href').substr(1);
   
    smoothScroll(blockID)
  })
}


function currentYPosition() {
   // Firefox, Chrome, Opera, Safari
   if (self.pageYOffset) return self.pageYOffset;
   // Internet Explorer 6 - standards mode
   if (document.documentElement && document.documentElement.scrollTop)
       return document.documentElement.scrollTop;
   // Internet Explorer 6, 7 and 8
   if (document.body.scrollTop) return document.body.scrollTop;
   return 0;
}


function elmYPosition(eID) {
   var elm = document.getElementById(eID);
   var y = elm.offsetTop;
   var node = elm;
   while (node.offsetParent && node.offsetParent != document.body) {
       node = node.offsetParent;
       y += node.offsetTop;
   } return y;
}


function smoothScroll(eID) {
   var startY = currentYPosition();
   var stopY = elmYPosition(eID);
   var distance = stopY > startY ? stopY - startY : startY - stopY;
   if (distance < 100) {
       scrollTo(0, stopY); return;
   }
   var speed = Math.round(distance / 100);
   if (speed >= 20) speed = 20;
   var step = Math.round(distance / 25);
   var leapY = stopY > startY ? startY + step : startY - step;
   var timer = 0;
   if (stopY > startY) {
       for ( var i=startY; i<stopY; i+=step ) {
           setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
           leapY += step; if (leapY > stopY) leapY = stopY; timer++;
       } return;
   }
   for ( var i=startY; i>stopY; i-=step ) {
       setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
       leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
   }
}


let menu_text_rus = ["Вступление","Oбо мне","Навыки","Портфолио","Контакты"];
let menu_text_eng = ["intro", "about","skills","portfolio","contact"];
let text_rus = [ "Александр Гоголушко", "Front-end разработчик",
"Обо мне","Позвольте мне представиться","Личноя информация",
"Полное имя:","Александр Гоголушко","Дата рождения:",
"02.09.1996","Обо мне","Привет, меня зовут Александр.","Сейчас я живу в Минске.",
"Я хочу рости как Front-end разработчик."," Каждый день я стараюсь узнавать что-то новое и развиваться в своем направлении. Мне нравится изучать лучшие способы создания удобных пользовательских интерфейсов с чистым и эффективным кодом. Я считаю работу непрерывным образованием, и я всегда ищу возможности работать с теми, кто готов поделиться своими знаниями."
," В свободное врямя, которого не так уж и много, мне нравится зависать на <a href='https://www.codewars.com/users/Bostong5?refreshed=true' target='_blank'>Codewars.com</a> и <a href='https://js.checkio.org/user/gogolushko/' target='_blank'>Checkio.org</a>, так же я люблю читать книги, мои любимые писатели - Стивен Кинг, Говард Лавкрафт, Нил Гейман. Так же я поддерживаю здоровый образ жизни"
,"посмотреть резюме","Навыки","Описание моих навыков", "Уверенные знания HTML и CSS;","Адаптивная верстка. Использование flexbox и медиа запросы.","Оптимизация отоброжения сайтов на всех современных браузерах."
, "Соответствие стандартам W3C.","Базовые знания JS/jQuery.","Базовые знания Gulp ","Базовые знания Sass/Scss ", 
"Портфолио","Верстка landing page по Psd макету, с исопльзованием Bootstrap 4, JavaScript и Gulp ","посетить","Горизонтальный  landing page: Animal-health"
,"Верстка горизонтального landing page по Psd макету, с исопльзованием JavaScript,Scss и Gulp ","посетить","Контакты","&copy; Александр Гоголушко 2020"]

let text_eng = ["aleksander gogolushko", "front-end developer",
 "About","Let me introduce myself","personal information","Full name:","Aleksander Gogolushko",
 "Date of birth:","02.09.1996","about me","Hello, my name is Aleksander.","Now I live in Minsk,Belarus.",
"I want to grow as a front-end developer. Every day I learn something new and developed in my direction.",
"I love learning better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.",
"In my free time, which is not so much, I like to hang out in <a href='https://www.codewars.com/users/Bostong5?refreshed=true' target='_blank'>Codewars.com</a> and <a href='https://js.checkio.org/user/gogolushko/' target='_blank'>Checkio.org</a>, but also I like reading books, my favorite writers are Stephen King, Howard Lovecraft, Neil Gaiman. And also I lead an active lifestyle.",
"View my resume","Skills","description of my skills","Strong knowledge of HTML and CSS","Adaptive layout using flexbox and media queries",
"Optimal site display in all modern browsers","Compliance to W3C standards","Basic knowledge of JS/jQuery.",
"Basic knowledge of Gulp","Basic knowledge of Sass/Scss","portfolio","HTML coding landing page on Psd layout, using Bootstrap 4, JavaScript and Gulp ","visit"
,"Horizontal landing page: Animal-health","HTML coding horizontal landing page on Psd layout, using JavaScript,Scss and Gulp","visit","contacts","&copy; Aleksander Gogolushko 2020"]

let switchLang = document.querySelector(".toggle-btn");
let elementsMenu = document.querySelectorAll(".menu_item");
let elementsForTranslete = document.querySelectorAll(".translete");


   if(localStorage.getItem("check") == "false"){
      addClassAndTranslete(menu_text_rus,text_rus)
   }else{
      removeClassAndTranslete(menu_text_eng,text_eng)
   }


switchLang.addEventListener("click", () => {
   if (!switchLang.classList.contains("active")) {
      localStorage.setItem("check", "false");
      addClassAndTranslete(menu_text_rus,text_rus)
   } else {
      localStorage.setItem("check", "true");
      removeClassAndTranslete(menu_text_eng,text_eng)
   }
})

function addClassAndTranslete(textMenu,textOther){
   switchLang.classList.add("active")
   translateMenu(textMenu);
   translateContent(textOther)
}

function removeClassAndTranslete(textMenu,textOther){
   switchLang.classList.remove("active")
   translateMenu(textMenu);
   translateContent(textOther)
}

function translateMenu(arrText){
   for(let i=0;i<elementsMenu.length;i++){
      elementsMenu[i].children[0].innerHTML = arrText[i];
   }
}

function translateContent(arrText){
   for(let i = 0, j = 0, k = 0; k<arrText.length; i++,k++){
      if( i == elementsForTranslete[j].children.length){
         j++;
         i = 0;
      }
      elementsForTranslete[j].children[i].innerHTML = arrText[k];
     }
}


window.addEventListener("scroll", skillAnimate, false)
function skillAnimate() {
   
  let sectionSkill = document.getElementById("skills");
  let line = document.getElementById("line");
  let logo = document.getElementById("logo_show")
  let line_down = document.getElementById("line_down")
  let text = document.getElementById("skill_text")
  let coordSectionSkill = sectionSkill.getBoundingClientRect();
  if (Math.floor(coordSectionSkill.top) <= 400 && Math.floor(coordSectionSkill.top) >= 0) {
    line.setAttribute("class", "color_line_show")
      setTimeout(() => logo.setAttribute("class", "logo_skill_show"), 1750);
      setTimeout(() => line_down.setAttribute("class", "color_line_down_show"), 2000);
      setTimeout(() => text.setAttribute("class", "skill_text_border"), 3800);
  }
}
 
