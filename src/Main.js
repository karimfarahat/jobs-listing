import React, { useState } from "react";
import PhotoImg from "./imgs/photosnap.svg";
import ManageImg from "./imgs/manage.svg";
import AccountImg from "./imgs/account.svg";
import MyhomeImg from "./imgs/myhome.svg";
import LoopImg from "./imgs/loop-studios.svg";
import FaceImg from "./imgs/faceit.svg";
import InsureImg from "./imgs/insure.svg";
import AirImg from "./imgs/the-air-filter-company.svg";
import EyeImg from "./imgs/eyecam-co.svg";
import ShortlyImg from "./imgs/shortly.svg";
import HeaderImg from "./imgs/bg-header-desktop.svg";
import Card from "./Card";

export default function Main() {
  const [cards, setCards] = useState([
    {
      id: 1,
      img: PhotoImg,
      company: "Photosnap",
      post: "NEW!",
      featured: "FEATURED",
      jobtitle: "Senior Frontend Developer",
      time: "1d ago",
      contract: "Full Time",
      location: "USA only",
      skill: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      img: ManageImg,
      company: "Manage",
      post: "NEW!",
      featured: "FEATURED",
      jobtitle: "Fullstack Developer",
      time: "1d ago",
      contract: "Part Time",
      location: "Remote",
      skill: ["Fullstack", "Midweight", "Python", "React"],
    },
    {
      id: 3,
      img: AccountImg,
      company: "Account",
      post: "NEW!",
      jobtitle: "Junior Frontend Developer",
      time: "2d ago",
      contract: "Part Time",
      location: "USA only",
      skill: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    },
    {
      id: 4,
      img: MyhomeImg,
      company: "MyHome",
      jobtitle: "Junior Frontend Developer",
      time: "5d ago",
      contract: "Contract",
      location: "USA only",
      skill: ["Frontend", "Junior", "CSS", "Javascript"],
    },
    {
      id: 5,
      img: LoopImg,
      company: "Loop Studios",
      jobtitle: "Software Engineer",
      time: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      skill: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"],
    },
    {
      id: 6,
      img: FaceImg,
      company: "FaceIt",
      jobtitle: "Junior Backend Developer",
      time: "2w ago",
      contract: "Full Time",
      location: "UK only",
      skill: ["Backend", "Junior", "Ruby", "RoR"],
    },
    {
      id: 7,
      img: ShortlyImg,
      company: "Shortly",
      jobtitle: "Junior Developer",
      time: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      skill: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
    },
    {
      id: 8,
      img: InsureImg,
      company: "Insure",
      jobtitle: "Junior Frontend Developer",
      time: "2w ago",
      contract: "Full Time",
      location: "USA only",
      skill: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
    },
    {
      id: 9,
      img: EyeImg,
      company: "Eyecam Co.",
      jobtitle: "Full Stack Engineer",
      time: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      skill: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
    },
    {
      id: 10,
      img: AirImg,
      company: "The Air Filter Company",
      jobtitle: "Front-end Dev",
      time: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      skill: ["Frontend", "Junior", "React", "Sass", "Javascript"],
    },
  ]);
  const [filters, setFilters] = useState([]);

  const addFilter = (e) => {
    //innertext of the target
    if (!filters.includes(e.target.innerText)) {
      setFilters((prevFilters) => [...prevFilters, e.target.innerText]);
      console.log("target.val is", e.target.innerText);
    }
  };

  const removeFilter = (e) => {
    //to access the neighboring p tag's innertext of the clicked filter
    console.log("the p is here", e.target.parentNode.firstChild.innerText);
    if (filters.includes(e.target.parentNode.firstChild.innerText)) {
      setFilters((prevFilters) =>
        prevFilters.filter(
          (filter) => filter !== e.target.parentNode.firstChild.innerText
        )
      );
      console.log("target.val is", e.target.innerText);
    }
  };
  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <React.Fragment>
      <main>
        <header>
          <img className="img-fluid h-100" src={HeaderImg} />
        </header>
        <div className="container mt-1">
          {filters.length !== 0 && (
            <div className="row">
              <div className="col-12">
                <div className="filter-tags-c">
                  <ul id="filter-tags-list">
                    {/* filter list */}
                    {filters.map((filter, index) => (
                      <li key={index} className="tag-filter">
                        <p>{filter}</p>
                        <span className="close-span" onClick={removeFilter}>
                          ×
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul id="filter-tags-list"></ul>
                  <p
                    className="clear-tags"
                    id="js-clear-tags"
                    onClick={clearFilters}
                  >
                    Clear
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <ul className="col-12" id="job-list">
              {/* every, some, filter, map */}

              {cards
                .filter(
                  (card) =>
                    filters.length === 0 ||
                    filters.every((filter) => card.skill.includes(filter))
                )

                .map((card) => (
                  <Card key={card.id} card={card} addFilter={addFilter} />
                ))}
            </ul>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
