export function Topbar () {


    return (
        <div className="header__topbar">
            <nav className="header__container">
            <ul className="topbar__list--left">
                <li className="topbar__item">
                    <a>BAIXE O APP</a>
                </li>
                <li className="topbar__item">
                    <a>CARTER'S</a>
                </li>
                <li className="topbar__item">
                    <a>CASA RIACHUELO</a>
                </li>
                <li className="topbar__item">
                    <a>BÁSICOS</a>
                </li>
                <li className="topbar__item">
                    <a>JEANS</a>
                </li>
            </ul>
            <ul className="topbar__list--right">
                <li className="topbar__item">
                    <img className="topbar__icon" src="assets/whatsappIcon.png" alt=""/>
                    <a id="whatsapp">COMPRE PELO WHATSAPP</a>
                </li>
                <li className="topbar__item">
                    <img className="topbar__icon" src="assets/phoneIcon.png" alt=""/>
                    <a>ATENDIMENTO</a>
                </li>
                <li className="topbar__item">
                    <img className="topbar__icon" src="assets/localizationIcon.png" alt=""/>
                    <a>NOSSAS LOJAS</a>
                </li>
                <li className="topbar__item">
                    <img className="topbar__icon" src="assets/wifiIcon.png"/>
                    <a>BLOG</a>
                </li>
                <li className="topbar__item">
                    <img className="topbar__icon" src="assets/creditCardIcon.png"/>
                    <a>CARTÃO RIACHUELO</a>
                </li>
            </ul>
            </nav>
        </div>
    );
}