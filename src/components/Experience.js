import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'

function Experience({id, image, name, stack, live, source, desc1, desc2, desc3, desc4, desc5, job, type, date, location}) {
  return (
    <div className="border-radius-circle" style={{ }}>
      <div className="card mb-5" style={{ maxWidth: '900px', background: ''}}>
        <div className="g-0 d-flex flex-column flex-lg-row align-items-center ">
          <div className="">
            <img src={image} className="img-fluid rounded-start project-img img-phone" alt={name} />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title mt-2">{job}</h5>
              <p className='grey-text mb-0'>{name} | {date}</p>
              <p className='grey-text mb-3'>{location}</p>
              <ul>
                <li>{desc1}</li>
                <li>{desc2}</li>
                <li>{desc3}</li>
                <li>{desc4}</li>
                <li>{desc5}</li>
              </ul>              <div className="mt-5 align-text-bottom">
                <p className='font-weight-bold card-text'>Skills: </p>
                <p className="card-text">{stack}</p>
                <p className="card-text d-flex gap-4">
                  <a href={live} target="_blank" rel="noreferrer" className='link'>
                    Webite <BiLinkExternal style={{ color: '#3edd8e' }} />
                  </a>
                  <a href={source} target="_blank" rel="noreferrer" className='link'>
                    linkedin <FaLinkedin style={{ color: '#3edd8e' }} />
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

export default Experience
