import React from "react"
import PropTypes from "prop-types"

const getStarTypes = (starRating) => {
    const stars = []
    let starType
    const rating = Math.round(starRating * 2) / 2
    for (let i = 1; i <= 5; i++) {
        starType = i <= rating ? "full" : i - rating === 0.5 ? "half" : "empty"
        stars.push(starType)
    }
    return stars
}

export default class StarRating extends React.Component {
    render() {
        return (
            <div>
                {getStarTypes(this.props.rating).map((type, idx) => <i key={idx}
                                                                       className={`icon icon--star-${type} icon--yellow icon--xl l-inline-child-valign-center`} />)}
            </div>
        )
    }
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired
}
