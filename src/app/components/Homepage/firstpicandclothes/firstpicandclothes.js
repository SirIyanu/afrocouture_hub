import './firstpicandclothes.css'
import Pic1 from '../afro pictures/hero section 1.jpg'
import Pic2 from '../afro pictures/Hero section 2.jpg'
export default function FirstPicAndClothes(){
    return (
        <div className="firstpicclothes">
            <div id="firstpicclothes_one">
                <p>Discover the vibrant <br/> essence of Africa's <br/>
                    Fashion with Afrocentric's <br/>
                    <span>Two-piece collection</span>
                </p>
                <h6>Explore unique styles from the best 
                    of the <br/> best African brands
                </h6>
                <a>Shop now</a>
            </div>

            <div id="firstpicclothes_two">
            <img src={Pic1}></img>
            </div>

            <div id="firstpicclothes_three">
            <img src={Pic2}></img>
            </div>
        </div>
    )
}