import "./projects.scss";

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Pentest Application Management System",
      img: "assets/projects/application_management.jpg",
      desc:
        "Optimize the internal oraganization operational process by transforming the manual paper form into a digitalized system.",
      techstack: [
        "PHP", "JavaScript", "HTML/CSS", "MySQL"
      ],
    },
    {
      id: 2,
      title: "EIS for Data Visualization of TD's Logistic System (MINDEF): Assets & Vehicles",
      img: "assets/projects/data_visualization.jpg",
      desc:
        "Visualize the Assets & Vehicles logistics data in dashboard form to aid in decision making for TD's executives.",
      techstack: [
        "Python", "Django", "HTML/CSS", "MySQL", "Tableau"
      ],
      featured: true,
    },
  ];
  return (
    <div className="projects" id="projects">
      <h1>Featured Projects</h1>
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
        <h5 style={{ color: "grey", margin: "8px" }}>More projects are coming soon...</h5>
      </div>
    </div>
  );
}
