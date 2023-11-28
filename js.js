// ЭТО СВАЙПЕР
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
// это кнопка показать еще

document.addEventListener("click", (e)=>{
  if (e.target.classList.contains("btn-show")){
    let hiddenText=e.target.parentNode.querySelector(".hidden-text")
    if(!hiddenText.classList.contains("visible")){
      hiddenText.classList.add("visible");
      e.target.innerHTML="Скрыть"
      
    }
    else{
      hiddenText.classList.remove("visible");
      e.target.innerHTML="Показать еще";
    }
    
  }
})



var name = document.getElementById("name").value;


var email = document.getElementById("email").value;


var message = document.getElementById("message").value;











document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  fetch('/send-email', { // Укажите URL вашего сервера
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      console.log('Успех:', data);
  })
  .catch((error) => {
      console.error('Ошибка:', error);
  });
});




