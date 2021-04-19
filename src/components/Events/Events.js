import React from 'react'
import './styles.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCards from './EventCards'

const Events = (props) => {

    const image = props.data.image,
          groupName = props.data.groupName,
          date = props.data.date,
          time = props.data.time,
          eventName = props.data.eventName,
          numOfAttendees = props.data.numOfAttendees;

    return (
        <div className="event-card-container">
            <div className="event-card">
                <img className="event-card-image" src={image} alt={eventName}/>
                <div className="event-card-main">
                    <p>{date} {time}</p>
                    <p>{eventName}</p>
                    <p>{groupName}</p>
                    <p>Attendees: {numOfAttendees}</p>
                </div>
            </div>
        </div>
    )
}

const EventInfo = (props) => {

    var data = props.data;
        var newsTemplate;
        var settings = {
            dots: false,
            infinite: false,
            accessibility: true,
            slidesToShow: 4,
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
                        <Events data={item} />
                    </div>
                );
            });
        } else {
            newsTemplate = <p>Please add some GroupCards</p>;
        }

    return (
        <div className="news">
        <h1 className="text-6xl font-bold">Upcoming Events</h1>
            <Slider {...settings}>{newsTemplate}</Slider>
        </div>
    );
}

const EventCarousel = () => {
    return (
        <div className="carousel">
            <EventInfo data={EventCards} />
        </div>
    );
}

export default EventCarousel