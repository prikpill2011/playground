describe("HTTP Requests", () => {

    it("booking id request", () => {
    
       cy.request("https://restful-booker.herokuapp.com/booking/?firstname=Mark")
      
       .then((response) => {
        // if we got what we wanted
  
        if (response.status === 200 && resp.body.ok === true)
          // break out of the recursive loop
          return
  
        // else recurse
       Cy. request()
      })
  })
  
  cy
    // do the thing causing the side effect
    .request('button').click()
  
    // now start the requests
    .then(request)  
           
    })
    



