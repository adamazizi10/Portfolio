import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

function Project({ id, image, name, stack, live, source, Tech, date, image2, desc1, desc2, desc3, desc4, desc5, desc6 }) {
    return (
        <div className="">
            <div className="card mb-5" style={{ maxWidth: '900px' }}>
                <div className="g-0 d-flex flex-column flex-lg-row align-items-center ">
                    <div className="">
                        <img src={image} className="img-fluid rounded-start project-img img-phone the-img-adjust" alt={name} />
                        <img src={image2} className="img-fluid rounded-start project-img img-phone" alt={name} />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title mt-2">{name}</h5>
                            <p className='grey-text mb-1'>{Tech}</p>
                            <p className='grey-text mb-3'>{date}</p><br />
                            {desc1 || desc2 || desc3 || desc4 || desc5 || desc6 ? (
                                <ul>
                                    {desc1 && <li>{desc1}</li>}
                                    {desc2 && <li>{desc2}</li>}
                                    {desc3 && <li>{desc3}</li>}
                                    {desc4 && <li>{desc4}</li>}
                                    {desc5 && <li>{desc5}</li>}
                                    {desc6 && <li>{desc6}</li>}
                                </ul>
                            ) : null}<br /><br /><br /><br />
                            <div className="mt-5 align-text-bottom">
                                <p className="card-text">{stack}</p>
                                <p className="card-text d-flex gap-4" style={{ justifyContent: 'flex-start' }}>
                                    {live && (
                                        <a href={live} target="_blank" rel="noreferrer" className='link'>
                                            Live Site <BiLinkExternal style={{ color: '#3edd8e' }} />
                                        </a>
                                    )}
                                    <a href={source} target="_blank" rel="noreferrer" className='link'>
                                        Source Code <AiOutlineGithub style={{ color: '#3edd8e' }} />
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project
