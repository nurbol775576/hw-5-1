import React from 'react';
import img from '../../img/img7755.jpg'
import css from './news.module.css'
import { Link } from 'react-router-dom';
const News = () => {
    return (
        <div>
            
     <Link to='/about'> <img className={css.img7755} src={img} alt="" /> </Link>      
   
           <div className={css.text}>
            <h2>news</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis possimus qui rem inventore, unde quo aut vitae asperiores aliquid voluptas animi, corporis impedit velit explicabo, ipsum hic. Officia iste dignissimos mollitia exercitationem maxime sed necessitatibus iusto? Nesciunt reiciendis debitis ad quibusdam eum, eveniet dolorum esse assumenda alias magnam? Quia, tempora! Ex quas dignissimos hic provident odit dolorum! Voluptas quisquam consequuntur dolor veritatis tenetur a sequi, ipsam cupiditate maiores voluptatibus aperiam magni laboriosam magnam inventore quos ut, aliquid quaerat, iste fugit perferendis voluptatem neque vitae. Iste, perferendis doloremque ipsam repellat voluptatibus necessitatibus adipisci commodi, est, temporibus hic accusantium corporis ipsum soluta?</p>
           </div>   
         
        </div>
    );
}


export default News;
