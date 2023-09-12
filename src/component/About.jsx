import React from 'react'
import "./about.css"
import Footer1 from './Footer1';
import Footer2 from './Footer2';

const About = () => {
  return (
    <div>
      <div className='about'>
        <h1>About</h1>
      </div>
      <div className='abou'>
        <h1>Our History</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rem totam tenetur. Suscipit, veniam sint harum quidem nemo illo velit sit expedita aliquid voluptas deserunt debitis, aspernatur laboriosam. Blanditiis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur est ut velit dolorem architecto commodi praesentium odit reiciendis, quas facilis non minima necessitatibus eveniet? Assumenda iusto aliquam facere consectetur?</p>
      </div>
      <div className='abou'>
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rem totam tenetur. Suscipit, veniam sint harum quidem nemo illo velit sit expedita aliquid voluptas deserunt debitis, aspernatur laboriosam. Blanditiis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur est ut velit dolorem architecto commodi praesentium odit reiciendis, quas facilis non minima necessitatibus eveniet? Assumenda iusto aliquam facere consectetur?</p>
      </div>
      <div className='abou'>
        <h1>Our Vision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rem totam tenetur. Suscipit, veniam sint harum quidem nemo illo velit sit expedita aliquid voluptas deserunt debitis, aspernatur laboriosam. Blanditiis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur est ut velit dolorem architecto commodi praesentium odit reiciendis, quas facilis non minima necessitatibus eveniet? Assumenda iusto aliquam facere consectetur?</p>
      </div>
      <Footer2/>
    <Footer1/>
    </div>
  )
}

export default About