

export default function InlineOfPics(props){
    return (
        <div className="picsline">
            <div> <img src={props.picA}/>
            <h6>{props.des1}</h6>
            <p>{props.p1}</p>
            <a>{props.b1}</a>
            </div>

            <div>
            <img src={props.picA}/>
            <h6>{props.des2}</h6>
            <p>{props.p2}</p>
            <a>{props.b2}</a>
            </div>

            <div>
            <img src={props.picA}/>
            <h6>{props.des3}</h6>
            <p>{props.p3}</p>
            <a>{props.b3}</a>
            </div>

            <div>
            <img src={props.picA}/>
            <h6>{props.des}</h6>
            <p>{props.p1}</p>
            <a>{props.b1}</a>
            </div>

        </div>
    )
}