import './secondlineofpics.css'
import Pica from '../afro pictures/TOP PICKS FOR YOU 1.jpg'
import Picb from '../afro pictures/TOP PICKS FOR YOU 2.jpg'
import Picc from '../afro pictures/TOP PICKS FOR YOU 3.jpg'
import Picd from '../afro pictures/TOP PICKS FOR YOU 4.jpg'
import Pice from '../afro pictures/TOP PICKS FOR YOU 5.jpg'

export default function SecondLineOfPics(){
    return(
        <div className="secondlineofpics">
            <p>Top Picks for you</p>
            <div className='lineofphotos'>
            <img src={Pica}></img>
            <img src={Picb}></img>
            <img src={Picc}></img>
            <img src={Picd}></img>
            <img src={Pice}></img>

            </div>
        </div>
    )
}