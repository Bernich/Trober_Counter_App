import { Fragment, useState } from "react";
import classes from "./Controller.module.css";
import reset from "../../assets/reset.png"
const Controller = (props) => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    if (counter >= 0) {
        console.log('hi')
      setCounter((prev) => prev+=1);
    }
  };
  const decrementHandler = () => {
    if (counter >= 1) {
      setCounter((prev) => prev-=1);
    } else {
      setCounter(0);
      alert('The app does not support negativity')
    }
  };
  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <Fragment>
      <div className={classes.controllerCon}>
      
        <div className={classes.controllerWrapper}>
        <img className={classes.reset} src={reset} alt="reset" onClick={resetHandler}/>
          <h1 className={classes.text}>{counter}</h1>
          <div className={classes.btncon}>
            <button onClick={incrementHandler}>+</button>
            <button onClick={decrementHandler}>-</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Controller;
