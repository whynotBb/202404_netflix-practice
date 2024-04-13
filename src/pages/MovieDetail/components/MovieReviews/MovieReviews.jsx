import React, { useState } from "react";
import "./MovieReviews.style.css";

const MovieReviews = ({ reviewsData }) => {
    // console.log(reviews);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (index) => {
        if (selectedItem === null) {
            setSelectedItem(index);
        } else {
            setSelectedItem(null);
        }
    };
    return (
        <div className="reviewBox">
            {reviewsData?.results.length > 0 &&
                reviewsData?.results.map((review, index) => (
                    <div
                        className={`item ${selectedItem === index ? "on" : ""}`}
                        key={review.id}
                        onClick={() => handleClick(index)}
                        title="more"
                    >
                        <ul className="authorDetail">
                            <li>✨{review.author_details.rating}</li>
                            <li>{review.author_details.username}</li>
                            <li>
                                {review.updated_at
                                    .replace("T", " ")
                                    .slice(0, 16)}
                            </li>
                        </ul>
                        <div className="content">{review.content}</div>
                    </div>
                ))}
        </div>
    );
};

export default MovieReviews;
