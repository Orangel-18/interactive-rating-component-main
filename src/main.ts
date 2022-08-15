
import './style.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const card = document.getElementById('card');

const ratebar = document.getElementById('ratebar');
const btns = ratebar!.childNodes;




btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // @ts-ignore
    const rate = e!.target!.innerText;
    
    const newCard = `

      <div class="self-center justify-self-center p-3">
        <img src="../public/illustration-thank-you.svg" alt="">
      </div>

      <span class="text-lg rounded-full p-2.5 bg-indigo-500 text-orange-500">You selected ${rate} out of 5</span>

      <h1 class="text-2xl">Thank you!</h1>

      <p class="text-lg text-indigo-300">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>

    `;

    Toastify({
      text: 'Rating submitted succesfully',
      position: 'center',
      style: {
        background: "linear-gradient(to right, rgb(99 102 241), rgb(99 102 241))",
      }
    }).showToast();

    card!.innerHTML = newCard;
  });
});