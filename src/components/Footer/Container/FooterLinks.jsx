import React, { Component } from 'react';

function FooterLinks() {
    return(
        <section class="footer__links links">
        <div class="footer__container links">
          <div class="links__contacts">
            <div class="col">
              <a href="#" class="contact-icon">
                <img class="contact-icon__img" src="assets/ico-attendance.svg" alt="Atendimento" />
                <p class="contact-icon__text">Atendimento</p>
              </a>
              <a href="#" class="contact-icon">
                <img class="contact-icon__img" src="assets/ico-faq.svg" alt="Perguntas Frequentes" />
                <p class="contact-icon__text">Perguntas Frequentes</p>
              </a>
            </div>
            <div class="col">
              <a href="#" class="contact-icon">
                <img class="contact-icon__img" src="assets/ico-invoice-and-statement.svg" alt="Fatura e Extrato" />
                <p class="contact-icon__text">Fatura e Extrato</p>
              </a>
              <a href="#" class="contact-icon">
                <img class="contact-icon__img" src="assets/ico-work-with-us.svg" alt="Trabalhe Conosco" />
                <p class="contact-icon__text">Trabalhe Conosco</p>
              </a>
            </div>
          </div>
          <hr class="links__separator"/>
          <ul class="links__companies company-links">
            <li class="company-links">
              <h3 class="company-links__title">Cartão Riachuelo</h3>
              <ul>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Midway Financeira
                  </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Saiba como adquirir
                  </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Veja sua fatura e extrato
                  </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Buscando quitar suas dívidas?
                  </a>
                </li>
              </ul>
            </li>
            <li class="company-links">
              <h3 class="company-links__title">Sobre a Riachuelo</h3>
              <ul>
                <li class="company-links__item" class="company-links__item">
                  <a class="company-links__text" href="#">A Empresa</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Portal de Fornecedores</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Relação com Investidores
                  </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Assessoria de Imprensa
                  </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Trabalhe Conosco</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Programa Jovem Aprendiz
                  </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Cadastro de Startups
                  </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#"> Mapa do Site </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#"> Guide Shop </a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Venda na Riachuelo Marketplace
                  </a>
                </li>
              </ul>
            </li>
            <li class="company-links">
              <h3 class="company-links__title">Moda que Transforma</h3>
              <ul>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Na prática</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Entre Costuras</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">
                    Jeans Mais Transparente</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Ações Covid-19</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Free Free</a>
                </li>
              </ul>
            </li>
            <li class="company-links">
              <h3 class="company-links__title">Ajuda</h3>
              <ul>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Atendimento</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Perguntas Frequentes</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Trocas e Devoluções</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Portal da Privacidade</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Política de Privacidade</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Termos e Condições de Uso</a>
                </li>
                <li class="company-links__item">
                  <a class="company-links__text" href="#">Regras e Resultados de Sorteios</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
}

export default FooterLinks;