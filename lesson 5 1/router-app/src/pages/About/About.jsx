import React from 'react';
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img7755.jpg'
import img3 from '../../img/img3.jpg'
import classes from './about.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className={classes.con}>

        <Link to="/contact">
          <div className={classes.lin}>
            <img className={classes.allimg} src={img1} alt="" />
            <div className={classes.black}></div>
            <div className={classes.lolo}>lolololo</div>
          </div>
        </Link>

        <Link to="/news">
          <div className={classes.lin}>
            <img className={classes.allimg} src={img2} alt="" />
            <div className={classes.black}></div>
            <div className={classes.lolo}>lolololo</div>
          </div></Link>

        <Link to="/services">
          <div className={classes.lin}>
            <img className={classes.allimg} src={img3} alt="" />
            <div className={classes.black}></div>
            <div className={classes.lolo}>lolololo</div>
          </div>
        </Link>
      </div>

    </div>
  );
}

export default About;
