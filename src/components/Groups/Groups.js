import React from 'react'
import './styles.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GroupCards from './GroupCards'

const Groups = (props) => {

    const image = props.data.image,
          groupName = props.data.groupName,
          date = props.data.date,
          time = props.data.time,
          eventName = props.data.eventName;
    
    return (
            <div className="group-card-container">
                <div className="group-card">
                    <div className="group-card-header">
                        <img className="group-card-image" src={image} alt={groupName} />
                        <h3 className='group-card-title'>{groupName} </h3>
                    </div>
                    <div className="group-card-main">
                        <div className="group-line"></div>
                        <p>{date} {time}</p>
                        <p>{eventName}</p>
                    </div>
                </div>
            </div>
    )
}

const GroupInfo = (props) => {

    var data = props.data;
        var newsTemplate;
        var settings = {
            dots: false,
            infinite: false,
            accessibility: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        if (data.length > 0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index}>
                        <Groups data={item} />
                    </div>
                );
            });
        } else {
            newsTemplate = <p>Please add some GroupCards</p>;
        }

    return (
        <div className="news">
        <h1 className="text-6xl font-bold">popular groups</h1>
            <Slider {...settings}>{newsTemplate}</Slider>
        </div>
    );
}

const GroupCarousel = () => {
    return (
        <div className="carousel">
            <GroupInfo data={GroupCards} />
        </div>
    );
}


export default GroupCarousel