import React, { Component } from 'react';

function FooterContact() {
    return(
        <section class="footer__contact">
        <div class="footer__container contact">
          <p class="contact__info">Receba ofertas e novidades por e-mail</p>
          <form action="/">
            <input class="contact__input" type="email" placeholder="Digite aqui seu e-mail" />
            <button class="contact__btn" type="submit">
              <span class="contact__btn__txt">Cadastrar</span>
            </button>
          </form>
          <p class="contact__msg-app">Baixe nosso App</p>
          <div class="apps">
            <a href="#">
              <img class="apps__img" src="assets/google-play.webp" alt="Google Play" />
            </a>
            <a href="#">
              <img class="apps__img" src="assets/app-store.webp" alt="App Store" />
            </a>
          </div>
        </div>
      </section>
    );
}

export default FooterContact;