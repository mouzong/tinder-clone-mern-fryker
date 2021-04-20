import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Andreas MOUZONG",
      url:
        "https://pbs.twimg.com/profile_images/957940781729374210/1_p-iTFF.jpg",
    },
    {
      name: "Steve JOBS",
      url:
        "https://i.pinimg.com/originals/74/d6/9d/74d69dd50b74d75797335c4bffd08e04.jpg",
    },
    {
      name: "Francklin TCHANA",
      url:
        "https://pbs.twimg.com/profile_images/1068113086572363776/WiesYgx1.jpg",
    },
    {
      name: "Daniel Lorenzo",
      url:
        "https://pbs.twimg.com/profile_images/1308866757738868737/UYDVoCD7.jpg",
    },
    {
      name: "Josmann BELLE",
      url:
        "https://pbs.twimg.com/profile_images/1029371240803393536/9q7jjJJf_400x400.jpg",
    },
  ]);

  return (
    <div>
      <div className="tinderCards__CardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${person.url})`,
              }}
            >
              <h3 className="tinderCards__title">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
