import React, { Fragment } from 'react'
import Rainbow from '../hoc/Rainbow';

const About = (props) => {
  return (
    <Fragment>
      <h4 className="center">
        About Page
      </h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Explicabo animi ut consequuntur, excepturi quidem culpa repudiandae distinctio.
      Itaque omnis iusto recusandae asperiores. Aut quibusdam quas,
        saepe adipisci officiis quia hic.</p>
    </Fragment>
  )
}

export default Rainbow(About)
