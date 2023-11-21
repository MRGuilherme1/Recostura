import Style from '../Module/Equipe.module.css';
import img1 from '../IMG/img1.svg';
import img2 from '../IMG/img2.svg';
import img3 from '../IMG/img3.svg';
import img4 from '../IMG/img4.svg';
import img5 from '../IMG/img5.svg';
import img6 from '../IMG/img6.svg';
import img7 from '../IMG/img7.svg';
import img8 from '../IMG/img8.svg';

function Equipe(){
    return(
        <div className={Style.container001}>
            
            <div className={Style.text}>
                <p>CONHEÇA NOSSA EQUIPE</p>
            </div>
            
            <section className={Style.conteudoImg}>

                <div className={Style.imagens}>
                    <img src={img1} alt='menino' />
                    <img src={img2} alt='menino' />
                    <img src={img3} alt='menino' />
                    <img src={img4} alt='menino' />
                </div>
                <div className={Style.imagens}>
                    <img src={img5} alt='menino' />
                    <img src={img6} alt='menino' />
                    <img src={img7} alt='menino' />
                    <img src={img8} alt='menino' />
                </div>
                
            </section>

        </div>
    )
}

export default Equipe;