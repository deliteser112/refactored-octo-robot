import React, { useState } from 'react';

const Rating: React.FC = () => {
    const [rating, setRating] = useState<number>(0);

    const handleRating = (newRating: number) => {
        // Handle submitting rating to the server
        // You may want to use state management (e.g., Redux) for this
        console.log('Rating submitted:', newRating);
    };

    return (
        <div>
            <p>Rate this:</p>
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleRating(star)}>
                    ⭐
                </span>
            ))}
        </div>
    );
};

export default Rating;
