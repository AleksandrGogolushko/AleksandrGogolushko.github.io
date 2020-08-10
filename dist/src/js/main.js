"use strict";function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var menubtn=document.querySelector(".btn"),btn=document.querySelector("nav"),menu=document.getElementById("menuId"),main=document.querySelector("main"),arrow=document.getElementById("arrow"),body=document.querySelector("body");arrow.addEventListener("click",(function(){btn.classList.toggle("on"),arrow.classList.toggle("reversArrow")}));var _step,anchors=document.querySelectorAll("a[href*='#']"),_iterator=_createForOfIteratorHelper(anchors);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(t){t.preventDefault(),smoothScroll(e.getAttribute("href").substr(1))}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}function currentYPosition(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function elmYPosition(e){for(var t=document.getElementById(e),n=t.offsetTop,o=t;o.offsetParent&&o.offsetParent!=document.body;)n+=(o=o.offsetParent).offsetTop;return n}function smoothScroll(e){var t=currentYPosition(),n=elmYPosition(e),o=n>t?n-t:t-n;if(o<100)scrollTo(0,n);else{var r=Math.round(o/100);r>=20&&(r=20);var a=Math.round(o/25),s=n>t?t+a:t-a,l=0;if(n>t)for(var i=t;i<n;i+=a)setTimeout("window.scrollTo(0, "+s+")",l*r),(s+=a)>n&&(s=n),l++;else for(i=t;i>n;i-=a)setTimeout("window.scrollTo(0, "+s+")",l*r),(s-=a)<n&&(s=n),l++}}var menu_text_rus=["Вступление","Oбо мне","Навыки","Портфолио","Контакты"],menu_text_eng=["intro","about","skills","portfolio","contact"],text_rus=["Александр Гоголушко","Front-end разработчик","Обо мне","Позвольте мне представиться","Личноя информация","Полное имя:","Александр Гоголушко","Дата рождения:","02.09.1996","Обо мне","Привет, меня зовут Александр.","Сейчас я живу в Минске.","Я хочу рости как Front-end разработчик."," Каждый день я стараюсь узнавать что-то новое и развиваться в своем направлении. Мне нравится изучать лучшие способы создания удобных пользовательских интерфейсов с чистым и эффективным кодом. Я считаю работу непрерывным образованием, и я всегда ищу возможности работать с теми, кто готов поделиться своими знаниями."," В свободное врямя, которого не так уж и много, мне нравится зависать на <a href='https://www.codewars.com/users/Bostong5?refreshed=true' target='_blank'>Codewars.com</a> и <a href='https://js.checkio.org/user/gogolushko/' target='_blank'>Checkio.org</a>, так же я люблю читать книги, мои любимые писатели - Стивен Кинг, Говард Лавкрафт, Нил Гейман. Так же я поддерживаю здоровый образ жизни","посмотреть резюме","Навыки","Описание моих навыков","Уверенные знания HTML и CSS;","Адаптивная верстка. Использование flexbox и медиа запросы.","Оптимизация отоброжения сайтов на всех современных браузерах.","Соответствие стандартам W3C.","Базовые знания JS/jQuery.","Базовые знания Gulp ","Базовые знания Sass/Scss ","Портфолио","Верстка landing page по Psd макету, с исопльзованием Bootstrap 4, JavaScript и Gulp ","посетить","Горизонтальный  landing page: Animal-health","Верстка горизонтального landing page по Psd макету, с исопльзованием JavaScript,Scss и Gulp ","посетить","Игра Камень-Ножницы-Бумага","Верстка игры Камень-Ножницы-Бумага, с исопльзованием JavaScript,Jquery,Scss и Gulp ","посетить","Контакты","&copy; Александр Гоголушко 2020"],text_eng=["aleksander gogolushko","front-end developer","About","Let me introduce myself","personal information","Full name:","Aleksander Gogolushko","Date of birth:","02.09.1996","about me","Hello, my name is Aleksander.","Now I live in Minsk,Belarus.","I want to grow as a front-end developer. Every day I learn something new and developed in my direction.","I love learning better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn.","In my free time, which is not so much, I like to hang out in <a href='https://www.codewars.com/users/Bostong5?refreshed=true' target='_blank'>Codewars.com</a> and <a href='https://js.checkio.org/user/gogolushko/' target='_blank'>Checkio.org</a>, but also I like reading books, my favorite writers are Stephen King, Howard Lovecraft, Neil Gaiman. And also I lead an active lifestyle.","View my resume","Skills","description of my skills","Strong knowledge of HTML and CSS","Adaptive layout using flexbox and media queries","Optimal site display in all modern browsers","Compliance to W3C standards","Basic knowledge of JS/jQuery.","Basic knowledge of Gulp","Basic knowledge of Sass/Scss","portfolio","HTML coding landing page on Psd layout, using Bootstrap 4, JavaScript and Gulp ","visit","Horizontal landing page: Animal-health","HTML coding horizontal landing page on Psd layout, using JavaScript,Scss and Gulp","visit","Game Rock-Scissors-Paper","HTML coding game Rock-Scissors-Paper, using JavaScript,jQuery,Scss and Gulp","visit","contacts","&copy; Aleksander Gogolushko 2020"],switchLang=document.querySelector(".toggle-btn"),elementsMenu=document.querySelectorAll(".menu_item"),elementsForTranslete=document.querySelectorAll(".translete");function addClassAndTranslete(e,t){switchLang.classList.add("active"),translateMenu(e),translateContent(t)}function removeClassAndTranslete(e,t){switchLang.classList.remove("active"),translateMenu(e),translateContent(t)}function translateMenu(e){for(var t=0;t<elementsMenu.length;t++)elementsMenu[t].children[0].innerHTML=e[t]}function translateContent(e){for(var t=0,n=0,o=0;o<e.length;t++,o++)t==elementsForTranslete[n].children.length&&(n++,t=0),elementsForTranslete[n].children[t].innerHTML=e[o]}function skillAnimate(){btn.classList.contains("on")&&(btn.classList.remove("on"),arrow.classList.remove("reversArrow"));var e=document.getElementById("skills"),t=document.getElementById("line"),n=document.getElementById("logo_show"),o=document.getElementById("line_down"),r=document.getElementById("skill_text"),a=e.getBoundingClientRect();Math.floor(a.top)<=400&&Math.floor(a.top)>=0&&(t.setAttribute("class","color_line_show"),setTimeout((function(){return n.setAttribute("class","logo_skill_show")}),1750),setTimeout((function(){return o.setAttribute("class","color_line_down_show")}),2e3),setTimeout((function(){return r.setAttribute("class","skill_text_border")}),3800))}"false"==localStorage.getItem("check")?addClassAndTranslete(menu_text_rus,text_rus):removeClassAndTranslete(menu_text_eng,text_eng),switchLang.addEventListener("click",(function(){switchLang.classList.contains("active")?(localStorage.setItem("check","true"),removeClassAndTranslete(menu_text_eng,text_eng)):(localStorage.setItem("check","false"),addClassAndTranslete(menu_text_rus,text_rus))})),window.addEventListener("scroll",skillAnimate,!1),body.addEventListener("click",(function(e){btn.classList.contains("on")&&(["arrow","menu_item","toggle-btn","lang","menu","menu_list"].includes(e.target.classList[0])||(btn.classList.remove("on"),arrow.classList.remove("reversArrow")))}));