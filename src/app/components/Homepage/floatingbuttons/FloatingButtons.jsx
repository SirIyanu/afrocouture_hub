import style from './floatingbutton.module.css'
import Picarrow from '../../../assets/afro pictures/iconright.png'
export default function FloatingButtons(props){
    return (

        <div className={style.floating}>
            <div><p>{props.first}</p> <img src={Picarrow}></img>  </div>
            <div> <p>{props.second}</p> <img src={Picarrow}></img>  </div>
            <div> <p>{props.third}</p> <img src={Picarrow}></img>  </div>
            <div> <p>{props.fourth}</p> <img src={Picarrow}></img> </div>
            <div> <p>{props.fifth}</p><img src={Picarrow}></img>  </div>
            <div> <p>{props.sixth}</p> <img src={Picarrow}></img>  </div>
        </div>
    )
}