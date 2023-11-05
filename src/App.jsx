import './global.css'
import Style from './style.module.css'
import React from "react";

const App = () => {
  return (
    <div className={Style.main__container}>
      <div className={Style.header}>
        <div className="row">
          <div className="col-4">
            <div className="">Logo</div>
            <div className="">Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{width:"100%"}} type="text" />
          </div>
        </div>
      </div>
      <div className={Style.tv_show_detail}>TV show detail</div>
      <div className={Style.recommended_tv_shows}>Recommended TV shows</div>
    </div>
  );
};

export default App;
