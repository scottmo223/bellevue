import React from 'react'
import PictureHeading from './pictureHeading'
import PricingItem from './pricingItem'
import AddOn from './addOns'

class Pricing extends React.Component {
    render(){
        return(
          <div id='pricing' className='prices'>
            <PictureHeading title="Pricing" imageUrl="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />

            <PricingItem item="Wedding" cost="2500" picture="https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80">
              <p>Includes tables, chairs, ice, use of bar area, bride and groom's rooms, use of back porch and grounds. Up to 180 people. <br />You will have exclusive use of the venue for twelve hours. Please note that while our white garden chairs are included in this package, set up and tear down is the responsibility of the customer. Belle Vue will provide this service upon request.</p>
            </PricingItem>
            
            <PricingItem item="Parties" cost="750" picture="https://images.unsplash.com/photo-1490676138263-c0608ea4b6df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80">
            <p>Includes tables, chairs, hall area, bar area and back porch. 6 hours of usage time, 1 additional hour for clean up. Clean up is required by customer which includes no fee. 1 hour is given for cleaning time where the customer removes all items they brought, puts chairs on tables, sweeps, cleans rooms and bathrooms and takes out all trash to dumpster provided on the property. Cleaning can be done by Belle Vue staff for a $200 fee.</p>
              <h6>Any required time before the 6 hour time frame or after has a charge of $150 an hour.</h6>
            </PricingItem>
              
            <hr />
            <h4>The following additions are available upon request</h4>
            
            <AddOn item="Meal" price="500">
              <p>Full dinner service including round ivory dinner plates, round ivory cake plates, 16 oz water goblets, and silverware. This includes setting the table, clearing away, and cleaning.</p>
            </AddOn>
            <AddOn item="Bartending" price="200">
              <p>We will hire a TABC certified bartender to serve your guests for up to four hours. All alcohol, cups, and bar napkins are to be provided by the customer.</p>
            </AddOn>
            <AddOn item="Chair Set Up / Tear Down" price="300">
              <p>While the use of our outdoor garden chairs are free, customers are responsible to set them up as they desire, and return them to their original position. Belle Vue will provide this service for $300.</p>
            </AddOn>
            <AddOn item="Clean Up" price="200">
              <p>Facility cleaning charge: no fee if before the 12 hour usage time is up, the customer removes all items they brought, puts chairs on tables, sweeps, cleans rooms and bathrooms and takes out all trash to dumpster provided on the property. Cleaning can be done by Belle Vue staff for a $200 fee.</p>
            </AddOn>
            <AddOn item="Extra Time" price="150">
              <p>Any required time before the 12 hour time frame or after has a charge of $150 an hour.</p>
            </AddOn>
          </div>
        )
    }
}

export default Pricing