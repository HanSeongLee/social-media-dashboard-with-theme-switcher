import React from "react";
import FacebookIcon from '/public/icons/icon-facebook.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';
import YoutubeIcon from '/public/icons/icon-youtube.svg';
import SocialCounterCard from "../../components/SocialCounterCard";

const counters = [
    {
        cardBarColor: '#178FF5',
        icon: (<FacebookIcon />),
        username: '@nathanf',
        count: 1987,
        todayCount: 12,
    },
    {
        cardBarColor: '#1DA1F2',
        icon: (<TwitterIcon />),
        username: '@nathanf',
        count: 1044,
        todayCount: 99,
    },
    {
        cardBarColor: 'linear-gradient(225deg, #DF4896 0%, #EE877E 51%, #FDC366 100%)',
        icon: (<InstagramIcon />),
        username: '@realnathanf',
        count: '11k',
        todayCount: 1099,
    },
    {
        cardBarColor: '#C4032B',
        icon: (<YoutubeIcon />),
        username: 'Nathan F.',
        count: 8239,
        indicator: 'SUBSCRIBERS',
        todayCount: -144,
    },
];

const SocialCounterContainer = () => {
    return (
        <>
            {counters?.map((props, index) => (
                <SocialCounterCard {...props}
                                   key={index}
                />
            ))}
        </>
    );
};

export default SocialCounterContainer;
