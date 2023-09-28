function Experience({ name, stack, live, source, desc1, desc2, desc3, desc4, desc5, job, date, location, colour }) {
  return (
    <div className="shadow-lg mb-5" style={{borderRadius: "30px", position: "relative"}}>
      <div className="d-flex justify-content-between">
        <div className='p-5 text-white' style={{ position: "relative", width: "70%", backgroundColor: colour, borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px"}}>
          <div>
            <h1 className="fw-bold text-white">{name}</h1>
            <h4 className="fw-bold text-white">{job}</h4><hr />
            <p className="text-white">{date}</p><br /><br /><br />
            
          </div>
          <div style={{ position: "absolute", bottom: "0px" }}>
            <p className="text-white">{location}</p>
          </div>
        </div>
        <div className='p-4 cardBackgroundColour' style={{borderTopRightRadius: "30px", borderBottomRightRadius: "30px"}}>
          <h4 className="fw-bold ">Description</h4><hr />
          <ul>
            <li className="p-1 ">{desc1}</li>
            <li className="p-1 ">{desc2}</li>
            <li className="p-1 ">{desc3}</li>
            <li className="p-1 ">{desc4}</li>
            <li className="p-1 ">{desc5}</li>
          </ul><hr /><div className="text-muted">&nbsp;{stack}</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
