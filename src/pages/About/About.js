import React from 'react'
import './About.css'
const about = () => {
  return (
    <>
    <div className="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about_img">
          <img src="https://i.pinimg.com/originals/0b/4b/ab/0b4babce4028541750a50275180d0a9a.jpg"
           alt="profile-pic" />
        </div>
        <div className="col-md-6">
          <h1>About Me</h1>
          <p>Hello I m Aanshi Gahlot ,a dedicated sixth-semester B.Tech student in Computer Science and Engineering with a strong foundation in competitive 
programming, web development, and a growing interest in AI and Machine Learning. Seeking an internship or part-time 
position to apply my technical and soft skills in a practical setting. </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default about
