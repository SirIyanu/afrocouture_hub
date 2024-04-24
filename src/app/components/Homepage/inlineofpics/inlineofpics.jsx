import style from "./inlineofpics.module.css";

export default function InlineOfPics(props) {
  return (
    <>
      <div className={style.uppersection}>
        <label>{props.left}</label>
        <a>{props.right}</a>
      </div>
      <div className={style.picsline}>
        <div>
          {" "}
          <img src={props.picA} />
          <label>{props.des1}</label>
          <p>
            <strong>{props.p1}</strong>
          </p>
          <a>{props.b1}</a>
        </div>

        <div>
          <img src={props.picB} />
          <label>{props.des2}</label>
          <p>
            {" "}
            <strong>{props.p2}</strong>
          </p>
          <a>{props.b2}</a>
        </div>

        <div>
          <img src={props.picC} />
          <label>{props.des3}</label>
          <p>
            {" "}
            <strong>{props.p3}</strong>{" "}
          </p>
          <a>{props.b3}</a>
        </div>

        <div>
          <img src={props.picD} />
          <label>{props.des4}</label>
          <p>
            <strong>{props.p4}</strong>{" "}
          </p>
          <a>{props.b4}</a>
        </div>
      </div>
    </>
  );
}
