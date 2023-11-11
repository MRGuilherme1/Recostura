import style from '../Module/AreaCostura.module.css'
import SouCostureiro from '../IMG/SouCostureiro.png.png'
import SouCliente from '../IMG/SouCliente.png.png'
function AreaCostura() {
    return (
        <div className={style.Conteiner1}>
            <div className={style.ConteinerMenor1}>
                <button>Sou <br></br> costureiro</button>
            </div>
            <div className={style.ConteinerMenor2}>
                <button>Buscar <br></br>costureiro</button>
            </div>


        </div>
    )
}
export default AreaCostura