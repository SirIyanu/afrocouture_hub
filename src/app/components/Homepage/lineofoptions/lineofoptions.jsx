import style from "./lineofoptions.module.css";

export default function LineOfOption() {
  return (
    <div className={style.lineofoptions}>
      <a>Latest Products</a>
      <a>Best Sellers</a>
      <a>Featured Products</a>
    </div>
  );
}
