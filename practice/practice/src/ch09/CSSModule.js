import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.css"; //9.3 CSSModule
import stylesSass from "./CSSModule.module.scss"; //9.3.2 Sass와 함게 사용하기

const cx = classNames.bind(stylesSass); //미리 styles에서 클래스를 받아 오도록 설정

const CSSModule = () => {
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}>{/* //템플릿 리터럴 사용하기 */}
    <div className={cx("wrapper", "inverted")}>
      {/* classNames의 bind를 사용한 문법 */}
      안녕하세요, 저는 <span className="somthing">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
