import "./projects.scss";

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Online Printing System",
      img: "assets/projects/online_printing.jpg",
      desc:
        "No need to go to printing shop. Just print at home and wait for the delivery.",
      techstack: [
        "Python", "Django", "Vue.js", "MySQL"
      ],
    },
    {
      id: 2,
      title: "EIS for Data Visualization of TD's Logistic System (MINDEF)",
      img: "assets/projects/data_visualization.jpg",
      desc:
        "Visualizing the logistics data to aid in decision making for TD's executives.",
      techstack: [
        "Python", "Django", "JavaScript", "MySQL", "Tableau"
      ],
      featured: true,
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="blank"></div>
      <h1>&lt; Featured Projects /&gt;</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="projectImage"
                src={d.img}
                alt="{d.title}"
              />
            </div>
            <div className="center">
              <h5>{d.title}</h5>
            </div>
            <div className="bottom">
              {d.desc}
            </div>
            <div className="techStack">
              <ul>
                {d.techstack.map((ts) => (
                  <li className="techStackItem">
                    {ts}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <h5 style={{ color: "grey", margin: "8px" }}>More projects in future...</h5>
      </div>
    </div>
  );
}
