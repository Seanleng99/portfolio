import "./projects.scss";

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Pentest Application Management System",
      img: "assets/projects/application_management.jpg",
      desc:
        "Optimize the internal oraganization operational process by transforming the manual paper form into a digitalized system.",
    },
    {
      id: 2,
      title: "EIS for Data Visualization of TD's Logistic System (MINDEF): Assets & Vehicles",
      img: "assets/projects/data_visualization.jpg",
      desc:
        "Visualize the Assets & Vehicles logistics data in dashboard form to aid in decision making for TD's executives.",
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
              <h4>{d.title}</h4>
            </div>
            <div className="bottom">
              {d.desc}
            </div>
            <div className="bgCircle"></div>
          </div>
        ))}
        <h3 style={{color: "grey", margin: "10px"}}>More projects are coming soon...</h3>
      </div>
    </div>
  );
}
