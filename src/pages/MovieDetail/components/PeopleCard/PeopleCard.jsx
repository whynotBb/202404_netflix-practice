import React from "react";
import "./PeopleCard.style.css";
import { useNavigate } from "react-router-dom";

const PeopleCard = ({ cast }) => {
    const navigate = useNavigate();
    const goToPeopleDetail = (id) => {
        navigate(`/people/${id}`);
    };
    return (
        <div
            className="peopleCard"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${cast?.profile_path})`,
            }}
            onClick={() => goToPeopleDetail(cast?.id)}
        >
            <div className="peopleInfo">
                <div className="name">{cast?.name}</div>
                <div className="character">{cast?.character}</div>
                <div className="character">{cast?.known_for_department}</div>
            </div>
        </div>
    );
};

export default PeopleCard;
