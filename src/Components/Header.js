import Style from '../Module/Header.module.css';
import Menu from '../IMG/menu.svg';
import Logo from '../IMG/logo.svg';
import Count from '../IMG/count.svg';
 
function Cabeçalho(){
    return(
        <header>

            <section className={Style.conteiner}>

                <div className={Style.menu}>
                    <img src={Menu} alt='menu' />
                </div>

                <div className={Style.logo}>
                    <img src={Logo} alt='logo' />
                </div>

                <div className={Style.areaLogin}>
                    <div className={Style.login}>
                        <p>Login</p>
                        <img src={Count} alt='boneco' />   
                    </div>
                </div>  

            </section>


        </header>
    )
}

export default Cabeçalho;