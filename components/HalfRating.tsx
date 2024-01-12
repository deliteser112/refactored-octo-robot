import * as React from "react";

import { HalfRatingProps } from "../interfaces/Movie";

const STAR_COUNT = 5;

export default function HalfRating(props: HalfRatingProps) {
  const { rating = 0, disabled = false } = props;

  const randomId = React.useId();

  return (
    <div className="rating rating-sm rating-half">
      {new Array(STAR_COUNT).fill(0).map((_, index) => {
        const checkedIdx = Math.floor(rating);
        const isHalf = rating - checkedIdx >= 0.5;

        return (
          <React.Fragment key={index}>
            {index === 0 && checkedIdx === 0 && !isHalf && (
              <input
                type="radio"
                name={`${randomId}-rating-${index}-hidden`}
                className="rating-hidden hidden"
                disabled
                readOnly
                defaultChecked
              />
            )}
            <input
              type="radio"
              name={`${randomId}-rating-${index}-half`}
              className="bg-green-500 mask mask-star-2 mask-half-1"
              checked={index === checkedIdx && isHalf}
              disabled={disabled}
              readOnly={disabled}
              value={index + 0.5}
            />
            <input
              type="radio"
              name={`${randomId}-rating-${index}-full`}
              className="bg-green-500 mask mask-star-2 mask-half-2"
              checked={index + 1 === checkedIdx && !isHalf}
              disabled={disabled}
              readOnly={disabled}
              value={index + 1}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
