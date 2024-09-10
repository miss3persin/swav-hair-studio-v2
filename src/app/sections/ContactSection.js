'use client'

// contact section on contact page

import React, { useState } from 'react'
import { SectionTitle } from '../components/SectionTitle'
import SuccessMessage from '../components/SuccessMessage'
import ErrorMessage from '../components/ErrorMessage'

export const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)

    try {
      const response = await fetch('https://formspree.io/f/xblrbera', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      // Scroll to the top of the page
      window.scrollTo(0, 0)

      if (response.ok) {
        // Show success message
        setShowSuccess(true)
        setShowError(false)

        // Redirect after a short delay
        setTimeout(() => {
          window.location.href = '/contact' // Redirect to the desired URL
        }, 3000)
      } else {
        // Handle non-OK responses
        setErrorMessage('Something went wrong.')
        setShowError(true)
        setShowSuccess(false)
      }
    } catch (error) {
      console.error('Error:', error)
      setErrorMessage('An error occurred.')
      setShowError(true)
      setShowSuccess(false)
    }
  }

  return (
    <div>
      <div className='container px-14 pt-32 md:pt-40'>
        {showError ? (
          <ErrorMessage
            message={errorMessage}
            onClose={() => setShowError(false)}
          />
        ) : showSuccess ? (
          <SuccessMessage onClose={() => setShowSuccess(false)} />
        ) : (
          <>
            <div className='pb-10'>
              <SectionTitle text='CONTACT US AT SWAV HAIR' color='#222222B3' />
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className='mb-20 border border-customBlack border-opacity-15 sm:py-10 py-4 pl-4 pr-4 sm:pl-10 sm:pr-14'>
                  <div className='md:mb-8 flex md:flex-row flex-col justify-between text-customBlack'>
                    <div className='mb-3 flex flex-col'>
                      <label
                        htmlFor='first-name'
                        className='mb-2 text-xl font-semibold opacity-0 md:opacity-100 select-none md:select-all'
                        id='first-name-label'
                      >
                        First Name
                      </label>
                      <input
                        type='text'
                        id='first-name'
                        name='First Name:'
                        placeholder='John'
                        required
                        aria-labelledby='first-name-label'
                        className='lg:w-80 xl:w-[28rem] border-b md:border-t-0 border-t md:border-l-0 border-l md:border-r-0 border-r rounded-sm border-customBlack border-opacity-15 pr-5 pl-5 pt-3 pb-3 md:pt-0 md:pr-3 md:pl-0 text-xs sm:text-xl font-medium placeholder:text-customBlack/25 focus:outline-none'
                      />
                    </div>
                    <div className='mb-3 flex flex-col'>
                      <label
                        htmlFor='last-name'
                        className='mb-2 text-xl font-semibold opacity-0 md:opacity-100 select-none md:select-all'
                        id='last-name-label'
                      >
                        Last Name
                      </label>
                      <input
                        type='text'
                        id='last-name'
                        name='Last Name:'
                        placeholder='Doe'
                        required
                        aria-labelledby='last-name-label'
                        className='lg:w-80 xl:w-[28rem] border-b md:border-t-0 border-t md:border-l-0 border-l md:border-r-0 border-r rounded-sm border-customBlack border-opacity-15 pr-5 pl-5 pt-3 pb-3 md:pt-0 md:pr-3 md:pl-0 text-xs sm:text-xl font-medium placeholder:text-customBlack/25 focus:outline-none'
                      />
                    </div>
                  </div>

                  <div className='md:mb-8 flex md:flex-row flex-col justify-between text-customBlack'>
                    <div className='mb-3 flex flex-col'>
                      <label
                        htmlFor='email'
                        className='mb-2 text-xl font-semibold opacity-0 md:opacity-100 select-none md:select-all'
                        id='email-label'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='E-mail:'
                        placeholder='Johndoe@xyz.com'
                        required
                        aria-labelledby='email-label'
                        className='lg:w-80 xl:w-[28rem] border-b md:border-t-0 border-t md:border-l-0 border-l md:border-r-0 border-r rounded-sm border-customBlack border-opacity-15 pr-5 pl-5 pt-3 pb-3 md:pt-0 md:pr-3 md:pl-0 text-xs sm:text-xl font-medium placeholder:text-customBlack/25 focus:outline-none'
                      />
                    </div>
                    <div className='mb-3 flex flex-col'>
                      <label
                        htmlFor='phone-number'
                        className='mb-2 text-xl font-semibold opacity-0 md:opacity-100 select-none md:select-all'
                        id='phone-number-label'
                      >
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        id='phone-number'
                        name='Phone Number:'
                        placeholder='+1 012 3456 789'
                        required
                        aria-labelledby='phone-number-label'
                        className='lg:w-80 xl:w-[28rem] border-b md:border-t-0 border-t md:border-l-0 border-l md:border-r-0 border-r rounded-sm border-customBlack border-opacity-15 pr-5 pl-5 pt-3 pb-3 md:pt-0 md:pr-3 md:pl-0 text-xs sm:text-xl font-medium placeholder:text-customBlack/25 focus:outline-none'
                      />
                    </div>
                  </div>

                  <div className='mb-20 flex md:flex-row flex-col justify-between text-customBlack'>
                    <div className='mb-3 flex flex-col'>
                      <label
                        htmlFor='studio'
                        className='mb-2 text-xl font-semibold opacity-0 md:opacity-100 select-none md:select-all'
                        id='studio-label'
                      >
                        Studio
                      </label>
                      <div className='relative inline-block'>
                        <select
                          id='studio'
                          name='Studio:'
                          aria-labelledby='studio-label'
                          className='hoverable w-full md:w-[14.5rem] lg:w-80 xl:w-[28rem] cursor-pointer appearance-none border-b md:border-t-0 border-t md:border-l-0 border-l md:border-r-0 border-r rounded-sm border-customBlack border-opacity-15 pb-3 pr-10 pl-5 pt-3 md:pt-0 md:pl-0 text-xs sm:text-xl font-medium placeholder:text-customBlack/25 focus:outline-none'
                        >
                          <option value='New Castle'>Newcastle</option>
                          <option value='Old Town'>Sunderland</option>
                        </select>
                        <span className='pointer-events-none absolute right-2 sm:right-2 md:right-0 top-[1.1rem] sm:top-6 md:top-3'>
                          <img
                            src='/arrow_dropdown.png'
                            alt='Dropdown Arrow'
                            className='sm:h-2 sm:w-4 h-[0.4rem] w-3'
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='mb-10 flex flex-col'>
                    <label
                      htmlFor='subject'
                      className='mb-5 text-xl font-bold text-center sm:text-left'
                      id='subject-label'
                    >
                      Select Subject
                    </label>
                    <div
                      className='mb-10 flex flex-wrap items-center justify-between md:justify-center lg:justify-between gap-5 md:gap-10 lg:gap-5'
                      aria-labelledby='subject-label'
                    >
                      <div className='hoverable flex items-center'>
                        <input
                          type='radio'
                          id='general'
                          name='Subject:'
                          value='general'
                          defaultChecked
                          className='peer hidden'
                          aria-describedby='subject-label'
                        />
                        <label htmlFor='general' className='radio-label'>
                          <span className='radio-background'>
                            <img
                              src='/checkmark.png'
                              alt='general'
                              className='checkmark'
                            />
                          </span>
                          General Inquiry
                        </label>
                      </div>
                      <div className='hoverable flex items-center'>
                        <input
                          type='radio'
                          id='products'
                          name='Subject:'
                          value='products'
                          className='peer hidden'
                          aria-describedby='subject-label'
                        />
                        <label htmlFor='products' className='radio-label'>
                          <span className='radio-background'>
                            <img
                              src='/checkmark.png'
                              alt='products'
                              className='checkmark'
                            />
                          </span>
                          Products
                        </label>
                      </div>
                      <div className='hoverable flex items-center'>
                        <input
                          type='radio'
                          id='haircare'
                          name='Subject:'
                          value='haircare'
                          className='peer hidden'
                          aria-describedby='subject-label'
                        />
                        <label htmlFor='haircare' className='radio-label'>
                          <span className='radio-background'>
                            <img
                              src='/checkmark.png'
                              alt='haircare'
                              className='checkmark'
                            />
                          </span>
                          Haircare
                        </label>
                      </div>
                      <div className='hoverable flex items-center'>
                        <input
                          type='radio'
                          id='feedback'
                          name='Subject:'
                          value='feedback'
                          className='peer hidden'
                          aria-describedby='subject-label'
                        />
                        <label htmlFor='feedback' className='radio-label'>
                          <span className='radio-background'>
                            <img
                              src='/checkmark.png'
                              alt='feedback'
                              className='checkmark'
                            />
                          </span>
                          Feedback
                        </label>
                      </div>
                      <div className='hoverable flex items-center'>
                        <input
                          type='radio'
                          id='other'
                          name='Subject:'
                          value='other'
                          className='peer hidden'
                          aria-describedby='subject-label'
                        />
                        <label htmlFor='other' className='radio-label'>
                          <span className='radio-background'>
                            <img
                              src='/checkmark.png'
                              alt='other'
                              className='checkmark'
                            />
                          </span>
                          Other
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='mb-16 flex flex-col'>
                    <label
                      htmlFor='message'
                      className='mb-7 text-xl font-semibold text-center sm:text-left'
                      id='message-label'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='Message:'
                      placeholder='Write your message..'
                      required
                      aria-labelledby='message-label'
                      className='w-full resize-none overflow-auto border-b md:border-t-0 border-t md:border-l-0 border-l md:border-r-0 border-r rounded-sm border-customBlack border-opacity-15 pb-48 pr-5 pl-5 pt-3 md:pb-0 md:pt-0 md:pl-0 sm:pr-10 text-xs sm:text-xl font-medium placeholder:text-customBlack/25 focus:outline-none'
                    ></textarea>
                  </div>

                  <div className='mb-16 flex'>
                    <button
                      type='submit'
                      className='hoverable rounded border border-customBlack bg-customBlack px-8 py-3 text-xs font-medium text-customWhite sm:text-base w-full sm:w-fit'
                      aria-label='Submit the form'
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
