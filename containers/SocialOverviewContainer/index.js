import React from "react";
import SocialOverviewCard from "../../components/SocialOverviewCard";
import FacebookIcon from "../../public/icons/icon-facebook.svg";
import InstagramIcon from '/public/icons/icon-instagram.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import YoutubeIcon from '/public/icons/icon-youtube.svg';

const overviews = [
    {
        unit: 'Page Views',
        icon: (<FacebookIcon/>),
        count: 87,
        change: 3,
    },
    {
        unit: 'Likes',
        icon: (<FacebookIcon/>),
        count: 52,
        change: 2,
    },
    {
        unit: 'Likes',
        icon: (<InstagramIcon/>),
        count: 5462,
        change: 2257,
    },
    {
        unit: 'Profile Views',
        icon: (<InstagramIcon/>),
        count: '52k',
        change: 1375,
    },
    {
        unit: 'Retweets',
        icon: (<TwitterIcon/>),
        count: 117,
        change: 303,
    },
    {
        unit: 'Likes',
        icon: (<TwitterIcon/>),
        count: 507,
        change: 553,
    },
    {
        unit: 'Likes',
        icon: (<YoutubeIcon/>),
        count: 107,
        change: 19,
    },
    {
        unit: 'Total Views',
        icon: (<YoutubeIcon/>),
        count: 1407,
        change: 12,
    },
];

const SocialOverviewContainer = () => {
    return (
        <>
            {overviews?.map((props, index) => (
                <SocialOverviewCard {...props}
                                    key={index}
                />
            ))}
        </>
    );
};

export default SocialOverviewContainer;
