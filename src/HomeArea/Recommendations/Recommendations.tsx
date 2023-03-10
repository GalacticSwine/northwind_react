import React, { FC } from "react";
import styles from "./Recommendations.module.scss";

interface RecommendationsProps {}

const Recommendations: FC<RecommendationsProps> = () => {
  const firstClickHandler = () => {
    console.log('irish coffee')
  }

  const secondClickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const html = button.innerHTML;
  }

  const thirdClickHandler = (id: string) => {
    console.log(id)
  }



  return (
    <div className={`box ${styles.Recommendations}`}>
      Recommendations Component
      <button onClick={firstClickHandler} className="box">
        First
      </button>
      <button onClick={secondClickHandler} className="box">Second</button>
      <button onClick={() => thirdClickHandler("this is id")} className="box">Third</button>
    </div>
  );
};

export default Recommendations;
