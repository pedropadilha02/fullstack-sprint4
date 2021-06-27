import React, { Component } from 'react';
import FooterContact from './Container/FooterContact'
import FooterLinks from './Container/FooterLinks'
import FooterPayment from './FooterPayment'
import FooterCopy from './FooterCopy'

function Footer (){
    return(
        <footer class="footer">
            <FooterContact/>
            <FooterLinks/>
            <FooterPayment/>
            <FooterCopy/>
        </footer>
    );
}

export default Footer;