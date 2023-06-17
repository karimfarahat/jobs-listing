import React from "react";

function Card({ card, addFilter }) {
  return (
    <div>
      <li className="job-card new featured d-flex">
        <div className="job-card__info">
          <div className="d-md-flex align-items-center">
            <div className="img-c">
              <img className="img-fluid" src={card.img} />
            </div>
            <div>
              <div className="d-flex align-items-center">
                <p>{card.company}</p>
                {/* if card post exist */}
                {card.post && <p className="tag-new">{card.post}</p>}
                {card.featured && (
                  <p className="tag-featured">{card.featured}</p>
                )}
              </div>

              <h6>{card.jobtitle}</h6>

              <ul>
                <li>{card.time}</li>
                <li>{card.contract}</li>
                <li>{card.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="job-card__tags d-flex">
          {card.skill.map((skill, index) => (
            <li key={index} onClick={addFilter}>
              {skill}
            </li>
          ))}
        </ul>
      </li>
    </div>
  );
}

export default Card;
