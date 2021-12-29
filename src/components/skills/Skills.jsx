import { useEffect, useState } from "react";
import SkillsList from "../skillsList/SkillsList";
import "./skills.scss";
import {
  programmingSkills,
  webDevelopmentSkills,
  mobileAppDevelopmentSkills,
  databaseSkills,
  othersSkills,
} from "../../skillData";

export default function Skills() {
  const [selected, setSelected] = useState("programming");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "web",
      title: "Web",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "database",
      title: "Database",
    },
    {
      id: "others",
      title: "Others",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "programming":
        setData(programmingSkills);
        break;
      case "web":
        setData(webDevelopmentSkills);
        break;
      case "mobile":
        setData(mobileAppDevelopmentSkills);
        break;
      case "database":
        setData(databaseSkills);
        break;
      case "others":
        setData(othersSkills);
        break;
      default:
        setData(programmingSkills);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt="{d.title}"
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
