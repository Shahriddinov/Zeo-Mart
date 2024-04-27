import React, {useEffect, useState} from 'react';
import "./products.scss";
import  Carousel from "./Caruosel/index";


function Products(props) {
    const [timeLeft, setTimeLeft] = useState(calculateRemainingTime());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateRemainingTime());
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);


    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span className={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
        );
    });
    function calculateRemainingTime() {
        const year = new Date().getFullYear();
        var eventDate = `12/31/${year}`
        const difference = +new Date(eventDate) - +new Date();
        let timeRemaining = {};


        if (difference > 0) {
            timeRemaining = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeRemaining;
    }

    return (
        <div className="products">
        <div className="products_view container">
            <div className="products_view_time">
                <div className="products_view_time_main">Deal of the Day</div>
                {/*<h2 className='title'>Time Left:</h2>*/}
                {timerComponents.length ?
                    timerComponents : <span key={timerComponents}>00:00:00</span>}
            </div>
            <div className="all">
                <a className="all_a">View All</a>
            </div>

        </div>
          <div className="container">
              <Carousel/>
          </div>
        </div>
    );
}

export default Products;