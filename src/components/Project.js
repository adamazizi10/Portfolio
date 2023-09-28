import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

function Project({ id, image, name, stack, live, source, Tech, date, image2, desc1, desc2, desc3, desc4, desc5, desc6, colour, job, location }) {
    const descriptions = [desc1, desc2, desc3, desc4, desc5, desc6];
    const filteredDescriptions = descriptions.filter(desc => desc);

    return (
        <div className="">
            <div className="shadow-lg mb-5" style={{ borderRadius: "30px", position: "relative" }}>
                <div className="displayFlexProject justify-content-between">
                    <div className=''>
                        <img
                            src={image}
                            className="img-fluid cornersForcardsLeft"
                            style={{ width: "700px", height: "100%", objectFit: "fill"}}
                            alt={name}
                        />
                    </div>
                    <div className='p-4 cardBackgroundColour cornersForCardsRight' style={{  }}>
                        <h5 className="fw-bold text-white">{name}</h5>
                        <hr style={{backgroundColor: "white"}}/>

                        {filteredDescriptions.length > 0 && (
                            <ul>
                                {filteredDescriptions.map((desc, index) => (
                                    <li key={index} className="p-1 text-white">{desc}</li>
                                ))}
                            </ul>
                        )}

                        <hr style={{backgroundColor: "white"}}/>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div><p className="text-muted">{Tech}</p></div>
                            <div>
                                {live && (
                                    <a href={live} target="_blank" rel="noreferrer" className='link'>
                                        Live Site <BiLinkExternal style={{ color: '#3edd8e' }} />
                                    </a>
                                )} &nbsp;&nbsp;&nbsp;
                                <a href={source} target="_blank" rel="noreferrer" className='link'>
                                    Source Code <AiOutlineGithub style={{ color: '#3edd8e' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
