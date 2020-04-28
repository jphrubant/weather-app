import React from 'react'

function AddBar() {
    return (
        <div>
        {/* onSubmit={handleFormSubmit} */}
            <form >
              <label>City:</label>
              <input
                type="text"
                name="city"
                // value={city}
                // onChange={handleChange}
              />
            <button type="submit">Add City</button>
          </form>
        </div>
    )
}

export default AddBar
