import Style from '../Module/Footer.module.css';
import Logo from '../IMG/logo.svg';
import Social1 from '../IMG/social1.svg';

function Rodape(){
    return(
        <footer>

            <section className={Style.cabeçalho}>

                <div className={Style.caixa}>
                    <img src={Logo} alt='logo' />
                </div>
                <div className={Style.caixa1}>
                    <p>FALE CONOSCO</p>
                    <p>SOBRE NÓS</p>
                    <p>SUSTENTABILIDADE</p>
                </div>
                <div className={Style.caixa2}>
                    <img src={Social1} alt='logo' />
                    <img src={Social1} alt='logo' />
                    <img src={Social1} alt='logo' />
                </div>

            </section>

            <hr />

            <div className={Style.autoral}>
                <p>Direitos Autorais © 2023 Recostura</p>
            </div>

        </footer>
    )
}

export default Rodape;