import './heading.css'
import search from '../afro pictures/search.jpg'
import profile from '../afro pictures/profile.jpg'

export default function Heading(){
    return(
        <div className="head">
            <div id="logo">
                <h1>Afrocouture-<span>HUb</span></h1>
            </div>

            <div id="searchbutton">
                <img src={search}></img>
                <input type="text"  placeholder="Type to search"/>
            </div>

            <div id="lastsectionheading">
            <img src={profile}></img>
            <img src={profile}></img>
            <img src={profile}></img>
            <a> Become a seller</a>
            </div>
        </div>
    )
}