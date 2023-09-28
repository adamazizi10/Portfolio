function Experience({ name, stack, live, source, desc1, desc2, desc3, desc4, desc5, job, date, location, colour }) {
  return (
    <div className="shadow-lg mb-5" style={{borderRadius: "30px", position: "relative"}}>
      <div className="displayFlexProject justify-content-between">
        <div className='p-5 text-white cornersForcardsLeft widthforExp' style={{ position: "relative",  backgroundColor: colour}}>
          <div>
            <h1 className="fw-bold text-white">{name}</h1>
            <h4 className="fw-bold text-white">{job}</h4><hr />
            <p className="text-white">{date}</p><br /><br /><br />
            
          </div>
          <div style={{ position: "absolute", bottom: "0px" }}>
            <p className="text-white">{location}</p>
          </div>
        </div>
        <div className='p-4 cardBackgroundColour cornersForCardsRight' style={{}}>
          <h4 className="fw-bold text-white">Description</h4><hr style={{backgroundColor: "white"}}/>
          <ul>
            <li className="p-1 text-white">{desc1}</li>
            <li className="p-1 text-white">{desc2}</li>
            <li className="p-1 text-white">{desc3}</li>
            <li className="p-1 text-white">{desc4}</li>
            <li className="p-1 text-white">{desc5}</li>
          </ul><hr style={{backgroundColor: "white"}}/><div className="text-muted">&nbsp;{stack}</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
