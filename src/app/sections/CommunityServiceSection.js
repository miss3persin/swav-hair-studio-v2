import React from 'react'
import { ServiceCard } from '../components/ServiceCard'
import { SectionTitle } from '../components/SectionTitle'

export const CommunityServiceSection = () => {
  return (
    <div>
        <div className='container px-14 pb-20'>
            <SectionTitle text='SWAV COMMUNITY SERVICE' color='#222222B3'/>
        </div>

        <div className='bg-customBlack'>
          <div className='flex container px-14 pb-20 justify-between items-center'>
            <div className='-mt-16'>
          <ServiceCard icon='/haircut_styling_icon.png' title='KIDS BACK TO SCHOOL HAIRCUT' description='We offer discounted haircuts to school kids under 10 years of age, helping them look sharp and confident as they start the school year.'/>
          </div>

          <div className='-mt-16'>
          <ServiceCard icon='/beard_trimming_icon.png' title='UNIVERSITY STUDENTS DISCOUNT' description='We occasionally offer discounts to freshmen starting university within our shops areas at the start of the academic year.'/>
          </div>

          <div className='-mt-16'>
          <ServiceCard icon='/hair_treatment_icon.png' title='CHARITY ENDEAVORS' description='As a community centered institution, at the end of the year we support local charities. Volunteering and some financial contributions to take care of those in need.'/>
          </div>

          </div>
        </div>
    </div>
  )
}
