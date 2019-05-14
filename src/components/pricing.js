import React from 'react'
import PictureHeading from './pictureHeading';

class Pricing extends React.Component {
    render(){
        return(
          <div id='pricing' className='prices'>
            <PictureHeading title="Pricing" imageUrl="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <div>
              <h4>Wedding</h4>
              <h5>$2500 per event for up to 180 people.</h5>
              <p>Includes tables, chairs, ice, use of bar area, bride and groom's rooms, use of back porch and grounds.</p>
              <p>You will have exclusive use of the venue for twelve hours. Please note that while our white garden chairs are included in this package, set up and tear down is the responsibility of the customer. Belle Vue will provide this service upon request.</p>
              <p>The following additions are available upon request:</p>
              <p>Full dinner service including round ivory dinner plates, round ivory cake plates, 16 oz water goblets, and silverware. This includes setting the table, clearing away, and cleaning. $500.</p>
              <p>Bartender services - we will hire a TABC certified bartender to serve your guests for up to four hours. All alcohol, cups, and bar napkins are to be provided by the customer. $200.</p>
              <p>While the use of our outdoor garden chairs are free, customers are responsible to set them up as they desire, and return them to their original position. Belle Vue will provide this service for $300.</p>
              <p>Facility cleaning charge: no fee if before the 12 hour usage time is up, the customer removes all items they brought, puts chairs on tables, sweeps, cleans rooms and bathrooms and takes out all trash to dumpster provided on the property. Cleaning can be done by Belle Vue staff for a $200 fee.</p>
              <p>Any required time before the 12 hour time frame or after has a charge of $150 an hour.</p>
            </div>
            <div>
              <h4>Party</h4>
              <h5>$750</h5>
              <p>Includes tables, chairs, hall area, bar area and back porch. 6 hours of usage time, 1 additional hour for clean up. Clean up is required by customer which includes no fee. 1 hour is given for cleaning time where the customer removes all items they brought, puts chairs on tables, sweeps, cleans rooms and bathrooms and takes out all trash to dumpster provided on the property. Cleaning can be done by Belle Vue staff for a $200 fee.</p>
              <p>Any required time before the 6 hour time frame or after has a charge of $150 an hour.</p>
            </div>
          </div>
        )
    }
}

export default Pricing