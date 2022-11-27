import { Fragment } from "react";
import classes from "./Pulsing.module.css"
import bgimg from "../../assets/trober.jpg"

const Pulsing = () => {
    return ( 
        <Fragment>
            <div className={classes.trobercon}>
                  
                <div className="troberlogocon">
            <img className={classes.troberlogo} src={bgimg} alt="trober logo" />
            </div>
            <h5>Trober Loading...</h5>
            </div>
        
        </Fragment>
     );
}
 
export default Pulsing;