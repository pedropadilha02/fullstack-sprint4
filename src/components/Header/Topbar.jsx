export function Topbar () {


    return (
        <div className="header__topbar">
            
            <nav className="topbar__list">
            <ul className="topbar__list--left">
                <li className="topbar__item">
                    <a className="topbar__link">BAIXE O APP</a>
                </li>
                <li className="topbar__item">
                    <a className="topbar__link">CARTER'S</a>
                </li>
                <li className="topbar__item">
                    <a className="topbar__link">CASA RIACHUELO</a>
                </li>
                <li className="topbar__item">
                    <a className="topbar__link">BÁSICOS</a>
                </li>
                <li className="topbar__item">
                    <a className="topbar__link">JEANS</a>
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