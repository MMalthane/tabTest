import React from 'react';
import '../main.scss';
import Pin from '../images/pin.png';
import More from '../images/More.png';

const Htmltemplateone = () => {
    return (
    // HTML page Template   
   <section> 
     <div className="container tab"> 
            <div className="row">  
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 contentimg">
                      <div className="textContent">
                        <span className="subHeader">Finances</span>
                        <p className="header">Banking and Go Shopping Target Audinance On the back of lower penetration </p>
                        <p className="para">The word prioritisation is very important. 
                          The government has to prioritise spending 
                          which means focus on what is essential</p>
                          <a href="/" className="clk_btn"> Read more </a>
                        <a href="/"><img className="pin"src={Pin} alt="pin" /></a> 
                         <a href="/"><img className="moreimg"src={More} alt="more" /></a>  
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 noimgsection">
                      <div col-sm-12 col-md-3 className="textContent">
                        <span className="subHeader shop">Shopping</span>
                        <p className="header">Banking and Go Shopping Target Audinance On the back of lower penetration </p>
                        <p className="para">The word prioritisation is very important. 
                          The government has to prioritise spending 
                          which means focus on what is essential</p>
                          <a href="/" className="clk_btn"> Read more </a>
                          <a href="/"> <img className="pin"src={Pin} alt="pin" /></a>
                            <a href="/"> <img className="moreimg"src={More} alt="more" /></a>
                      </div>
                      <div col-sm-12 col-md-3 className="textContent">
                        <span className="subHeader  finance">Finances</span>
                        <p className="header">Banking and Go Shopping Target Audinance On the back of lower penetration </p>
                        <p className="para">The word prioritisation is very important. 
                          The government has to prioritise spending 
                          which means focus on what is essential</p>
                          <a href="/" className="clk_btn"> Read more </a>
                           <a href="/"><img className="pin"src={Pin}  alt="pin" /></a>
                            <a href="/"> <img className="moreimg"src={More} alt="more" /></a>
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 noimg">
                      <div col-sm-12 col-md-3 className="textContent">
                        <span className="subHeader money">Money Insight</span>
                        <p className="header">Banking and Go Shopping Target Audinance On the back of lower penetration </p>
                        <p className="para">The word prioritisation is very important. 
                          The government has to prioritise spending 
                          which means focus on what is essential</p>
                          <a href="/" className="clk_btn"> Read more </a>
                          <a href="/"> <img className="pin"src={Pin} alt="pin" /></a>
                          <a href="/"> <img className="moreimg"src={More} alt="more" /></a>
                      </div>
                      <div col-sm-12 col-md-3 className="textContent">
                        <span className="subHeader finance">Finances</span>
                        <p className="header">Banking and Go Shopping Target Audinance On the back of lower penetration </p>
                        <p className="para">The word prioritisation is very important. 
                          The government has to prioritise spending 
                          which means focus on what is essential</p>
                          <a href="/" className="clk_btn"> Read more </a>
                         <a href="/"><img className="pin"src={Pin} alt="pin" /></a> 
                         <a href="/"><img className="moreimg"src={More} alt="more" /></a> 
                      </div>

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 contentimg2">
                      <div className="textContent2">
                        <span className="subHeader">Entertainments</span>
                        <p className="header">Banking and Go Shopping Target Audinance On the back of lower penetration </p>
                        <p className="para">The word prioritisation is very important. 
                          The government has to prioritise spending 
                          which means focus on what is essential</p>
                          <a href="/" className="clk_btn"> Read more </a>
                          <a href="/"><img className="pin"src={Pin} alt="pin" /></a>
                         <a href="/"> <img className="moreimg"src={More} alt="more" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">DEF</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">GEH</div>
              </div>
           
            </div>
          </div>
    </section>
            
       
    )
}

export default Htmltemplateone;
