import React, { Component } from 'react';

function FooterPayment () {
    return(
        <section class="footer__payment">
        <div class="footer__container payment">
          <div class="payment__alternatives">
            <h3 class="payment__title">Formas de Pagamento</h3>
            <img class="payment__img" src="assets/ico-cartao-rchlo1.webp" alt="" />
            <img class="payment__img" src="assets/ico-cartao-rchlo2.webp" alt="" />
            <img class="payment__img" src="assets/ico-cartao-rchlo3.webp" alt="" />
            <img class="payment__img" src="assets/ico-cartao-visa.png" alt="" />
            <img class="payment__img" src="assets/ico-cartao-master.webp" alt="" />
            <img class="payment__img" src="assets/ico-cartao-amex.webp" alt="" />
            <img class="payment__img" src="assets/ico-cartao-diners.png" alt="" />
            <img class="payment__img" src="assets/ico-cartao-elo.png" alt="" />
            <img class="payment__img" src="assets/ico-boleto.webp" alt="" />
            <img class="payment__img" src="assets/ico-paypal.png" alt="" />
          </div>
          <div class="payment__social">
            <h3 class="payment__title">Siga a Riachuelo</h3>
            <div class="social__icons">
              <div class="social__icon icon">
                <a href="#">
                  <img class="icon__img" src="assets/ico-facebook.svg" alt="" />
                </a>
              </div>

              <div class="social__icon icon">
                <a href="#">
                  <img class="icon__img" src="assets/ico-instagram.svg" alt="" />
                </a>
                <p class="icon__text">RCHLO</p>
              </div>

              <div class="social__icon icon">
                <a href="#">
                  <img class="icon__img" src="assets/ico-instagram.svg" alt="" />
                </a>
                <p class="icon__text">CASA RCHLO</p>
              </div>

              <div class="social__icon icon">
                <a href="#">
                  <img class="icon__img" src="assets/ico-pinterest.svg" alt="" />
                </a>
              </div>
              <div class="social__icon icon">
                <a href="#">
                  <img class="icon__img" src="assets/ico-twitter.svg" alt="" />
                </a>
              </div>
              <div class="social__icon icon">
                <a href="#">
                  <img class="icon__img" src="assets/ico-youtube.svg" alt="" />
                </a>
              </div>
              <div class="social__icon icon">
                <a href="#">
                  <img class="icon__img" src="assets/ico-linkedin.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="payment__accessibility">
            <h3 class="payment__title">Acessibilidade</h3>
            <img src="assets/ico-a11y.webp" alt="" />
          </div>
        </div>
      </section>
    );
}

export default FooterPayment;