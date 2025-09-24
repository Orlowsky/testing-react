import React from 'react'

export const Application = () => {
  return (
    <>
    <h1>Job Aplication form</h1>
    <h2>Please fill out the form below</h2>
    <p>All Fields are mandatory</p>
    <span title='close'>X</span>
    <img src="http://via.placeholder.com/150" alt="a person with a laptop" />
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name"
             type="text" placeholder='Fullname' value='olek'
             onChange={()=>{}}/>
        </div>
        <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio"></textarea>
        </div>
        <div>
            <label htmlFor="job-location">Email</label>
            <select id="job-location" name="job-location">
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="PL">Poland</option>
                <option value="DE">Germany</option>
                <option value="UK">United Kingdom</option>
                <option value="FR">France</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
                <option value="Other">Other</option>
                </select>
        </div>
        <div>
            <label >
                <input type="checkbox" name="terms" /> I accept the terms and conditions
            </label>
        </div>
        <button>Submit</button>
    </form>
    <div data-testid="custom-element">CustomHTML element</div>
    </>
  )
}
