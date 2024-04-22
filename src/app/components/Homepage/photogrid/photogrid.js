import './photogrid.css'
import Pica from '../afro pictures/TOP PICKS FOR YOU 1.jpg'
import Picb from '../afro pictures/TOP PICKS FOR YOU 2.jpg'
import Picc from '../afro pictures/TOP PICKS FOR YOU 3.jpg'
import Picd from '../afro pictures/TOP PICKS FOR YOU 4.jpg'
import Pice from '../afro pictures/TOP PICKS FOR YOU 5.jpg'
import Pic_1 from '../afro pictures/luxury girl 1.jpg'
import Pic2 from '../afro pictures/Luxury girl 2.jpg'
import Pic3 from '../afro pictures/luxury girl 3.jpg'
import Pic4 from '../afro pictures/luxury girl 4.jpg'
import Picf from '../afro pictures/hero section 1.jpg'
import pic5 from '../afro pictures/hero section 1.jpg'
import pic6 from '../afro pictures/Hero section 2.jpg'
import pic7 from '../afro pictures/TOP PICKS FOR YOU 4.jpg'
import pic8 from '../afro pictures/miss jenny fashion 2.jpg'

export default function Photogrid(){
    return (
        <>
        <div className="photo_grid">
            <div id="photoarea">
                <div>
                <img src={Pic_1}></img>
                <img src={Picc}></img>
                <img src={Picd}></img>
                <img src={Pice}></img>
                <img src={Picb}></img>
                <img src={Pic3}></img>
                <img src={Picf}></img>
                </div>
                <div>
                <img src={Pic2}></img>
                <img src={Pic3}></img>
                <img src={Pic4}></img>
                <img src={pic5}></img>
                <img src={pic6}></img>
                <img src={pic7}></img>
                <img src={pic8}></img>
                </div>
                
            </div>
            <div id="right_grid">
                <label>Limited Offer</label>
                <h3>Get 25% Off from your favorite
                    Brands today
                </h3>
                <a>Get it now</a>
            </div>
        </div>
        </>
    )
}