let swiper1 = new Swiper(".leftSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: { eventsTarget: 'body'},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        // will set translateZ(-400px) on previous slides
        translate: [0, "100%", 0],
      },
      next: {
        // will set translateX(100%) on next slides
        translate: [0, '-100%', 0],
      },
    },
  });
  
  let swiper2 = new Swiper(".rightSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: { eventsTarget: 'body'},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: " ",
    creativeEffect: {
      prev: {
        // will set translateZ(-400px) on previous slides
        translate: [0, "-100%", 0],
      },
      next: {
        // will set translateX(100%) on next slides
        translate: [0, '100%', 0],
      },
    },
  });
  let section = document.querySelector('section')
  function myFunction(x) {
    if (x.matches) { // If media query matches
      section.innerHTML = `

        <div class="info1" data-aos="zoom-in" data-aos-duration="1000">

            <div class="main">
                <div class="logo">
                    <img src="./Logo.png" alt="">
                    </div>
                <div class="sub_logo"><span>Сердце национальной и европейской кухни</span></div>
              </div>
        </div>
        <div class="image1">
            <img src="./1_sm 2.png" alt="" data-aos='flip-left' data-aos-duration="1000">
        </div>
        <div class="info2" data-aos="fade-right" data-aos-duration="1000">
            <div class="logo"> <img src="./Logo.png" alt=""></div>
            <span class="title">МЕНЮ</span>
            <ul>
                <li>
                    <span class="name">
                        Грузинський сыр  ..............................................................  <span class="price">205 $</span>
                        </span>
                        <span class="description">Сулугуни имеет чистый кисломолочный, умеренно солёный вкус и запах, плотную, слоистую, эластичную консистенцию.</span>
                        <span class="weight">300гр</span>
                </li>
                <li>
                    <span class="name">
                        Испанский сыр  ..............................................................  <span class="price">205 $</span>
                        </span>
                        <span class="description">Сулугуни имеет чистый кисломолочный, умеренно солёный вкус и запах, плотную, слоистую, эластичную консистенцию.</span>
                        <span class="weight">300гр</span>
                </li>
                <li>
                    <span class="name">
                        Итальянский сыр  ..............................................................  <span class="price">205 $</span>
                        </span>
                        <span class="description">Сулугуни имеет чистый кисломолочный, умеренно солёный вкус и запах, плотную, слоистую, эластичную консистенцию.</span>
                        <span class="weight">300гр</span>
                </li>
                <li>
                    <span class="name">
                        Немецкий сыр  ..............................................................  <span class="price">205 $</span>
                        </span>
                        <span class="description">Сулугуни имеет чистый кисломолочный, умеренно солёный вкус и запах, плотную, слоистую, эластичную консистенцию.</span>
                        <span class="weight">300гр</span>
                </li>
            </ul>
            
         
        </div>
        <div class="image2">
            <img src="./Pitsa 1.png" alt="" data-aos='flip-right' data-aos-duration="1000">
        </div>
        <div class="info3" data-aos="fade-left" data-aos-duration="1000">
            <div class="logo"><img src="./Logo.png" alt=""></div>
            <span class="title">НОВИНКИ</span>
            <ul>
                <li>
                    <span class="name">Приглашаем вас на праздник “Навруз” !</span>
                            <span class="description">26фев 2022 </span>
                        <span class="link">Подробнее</span>
                    </li>
                    
                    <li>
                        <span class="name">Приглашаем вас на самаркандский шашлычок !</span>
                            <span class="description">26фев 2022 </span>
                        <span class="link">Подробнее</span>
                </li>
                
                <li>
                    <span class="name">Приглашаем вас на самаркандский шашлычок !</span>
                    <span class="description">26фев 2022 </span>
                        <span class="link">Подробнее</span>
                </li>
                
                <li>
                    <span class="name">Приглашаем вас на самаркандский шашлычок !</span>
                            <span class="description">26фев 2022 </span>
                        <span class="link">Подробнее</span>
                </li>
                
            </ul>
        </div>
        <div class="image3">
            <img src="./slide-1 1.png" alt="" data-aos='flip-up' data-aos-duration="1000">
        </div>
        <div class="info4" data-aos="fade-up" data-aos-duration="1000">
        <span class="title">ОНЛАЙН БРОНИРОВАНИЕ</span>
        <div class="main">

            <div class="datas">
                <div class="data">
                    <span class="title">Дата:</span>                          
                    <span class="info">01.03.2022</span>  
                </div>
                <div class="data">
                    <span class="title">Время:</span>                            
                    <span class="info">07:00</span>
                </div>
                <div class="data">
                    <span class="title">Кол.чел:</span>                            
                    <span class="info">1</span>
               
                </div>
            </div>
            <div class="inputs">
                <div class="left">
                    <input type="text" placeholder="Имя"></input>
                    <input type="text" placeholder="Телефон"></input>
                    <input type="text" placeholder="Эл.почта"></input>
                </div>
                <div class="right">
                    <textarea placeholder="Сообщение"></textarea>
                </div>
            </div>
            <input type="submit" class="sd" value="Забронировать">
        </div>
            <div class="logo"> <img src="./Logo.png" alt="" ></div>

                    </div>
        </div>
            </div>
        </div>
        <div class='image6'>
        <img src='./e3fcb16ef7367a3c809cca1aa5f7d575_w1200_h630 1.png' data-aos='flip-down' data-aos-duration="1000">
        </div>
        <div class="info5" data-aos="fade-down" data-aos-duration="1000">
            <span class="title">
                КОНТАКТЫ
            </span>
            <div class="main">
                <div class="blo">
                    <span>Адрес:</span>
                    <h3>Гагаринский дом 3</h3>
                </div>
                <div class="blo">
                    <span>Часы работы:</span>
                    <h3>с 11:00 до 23:00</h3>
                </div>
                <div class="blo">
                    <span>Телефон:</span>
                    <h3>+998915533044</h3>
                </div>
            </div>
            <div class="logos">
                <div class="insta"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg></div>

                <div class="wk"><svg fill="#ffffff" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 363.301 363.301" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M347.506,240.442c-7.91-9.495-16.899-18.005-25.592-26.235c-3.091-2.927-6.287-5.953-9.368-8.962 c-8.845-8.648-9.167-11.897-2.164-21.72c4.845-6.771,9.982-13.551,14.95-20.108c4.506-5.949,9.166-12.101,13.632-18.273l0.917-1.269 c8.536-11.811,17.364-24.024,22.062-38.757c1.22-3.887,2.501-9.607-0.428-14.39c-2.927-4.779-8.605-6.237-12.622-6.918 c-1.987-0.337-3.96-0.383-5.791-0.383l-55.901-0.04l-0.462-0.004c-8.452,0-14.148,3.983-17.412,12.178 c-3.116,7.83-6.539,16.168-10.445,24.096c-7.773,15.787-17.645,33.97-31.93,49.135l-0.604,0.645 c-1.687,1.813-3.598,3.866-4.995,3.866c-0.214,0-0.447-0.041-0.711-0.124c-2.959-1.153-4.945-8.316-4.855-11.648 c0.001-0.046,0.002-0.092,0.002-0.138l-0.039-64.61c0-0.224-0.016-0.446-0.045-0.668c-1.422-10.503-4.572-17.041-16.474-19.372 c-0.316-0.063-0.639-0.094-0.961-0.094h-58.126c-9.47,0-14.688,3.849-19.593,9.61c-1.324,1.54-4.08,4.746-2.714,8.635 c1.386,3.947,5.885,4.791,7.35,5.065c7.272,1.384,11.371,5.832,12.532,13.604c2.027,13.496,2.276,27.901,0.784,45.334 c-0.416,4.845-1.239,8.587-2.595,11.784c-0.315,0.746-1.432,3.181-2.571,3.182c-0.362,0-1.409-0.142-3.316-1.456 c-4.509-3.089-7.808-7.497-11.654-12.942c-13.084-18.491-24.065-38.861-33.575-62.288c-3.527-8.624-10.114-13.452-18.556-13.594 c-9.276-0.141-17.686-0.209-25.707-0.209c-8.764,0-16.889,0.081-24.823,0.246C8.914,83.74,4.216,85.776,1.744,89.676 c-2.476,3.903-2.315,9.03,0.479,15.236c22.366,49.723,42.645,85.876,65.755,117.228c16.193,21.938,32.435,37.123,51.109,47.784 c19.674,11.255,41.722,16.727,67.402,16.727c2.911,0,5.921-0.071,8.956-0.213c14.922-0.727,20.458-6.128,21.158-20.657 c0.333-7.425,1.145-15.212,4.795-21.853c2.304-4.184,4.452-4.184,5.158-4.184c1.36,0,3.046,0.626,4.857,1.799 c3.248,2.12,6.033,4.96,8.316,7.441c2.149,2.357,4.274,4.738,6.401,7.12c4.59,5.141,9.336,10.456,14.294,15.497 c10.852,11.041,22.807,15.897,36.538,14.843h51.252c0.109,0,0.219-0.004,0.328-0.011c5.107-0.337,9.53-3.17,12.135-7.772 c3.227-5.701,3.162-12.974-0.174-19.46C356.718,251.867,351.808,245.601,347.506,240.442z"></path> </g></svg></div>
                <div class="fb"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
            </div>
           

          </div>
        </div>
        <div class="image5">
            <div class="iframe" data-aos='zoom-in-down'  data-aos-duration="1000">
                <iframe disabled="true" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7474.558906500907!2d69.29989493089673!3d41.27444963534953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5ff56f231ab3%3A0xb804a270363594c7!2sRisovyy%20Bazaar!5e0!3m2!1sen!2s!4v1684375640570!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      `
    } else {
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)
  AOS.init();