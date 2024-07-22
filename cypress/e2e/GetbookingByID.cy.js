/*function getBookingById(bookingId)
 {

  return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking/${bookingId}`);

}

describe("Custom Functions for API Testing with Cypress", () => {

  it("Retrieves booking details for a specific ID", () => {

    getBookingById(1).then((response) => {

      expect(response.status).to.eq(200);

     //expect(response.body).to.have.property("bookingid", 1);

    });

  });

});
*/
describe("HTTP Requests", () => {
  it("post update call", () => {
   cy.request({
    method: 'GET', // Use POST if creating a new booking
    url: "https://restful-booker.herokuapp.com/booking/?id=87", // Replace 1 with the actual booking ID
    
    failOnStatusCode: false // This prevents the test from failing if the status code isn't 2xx or 3xx
   }).should((response) => {
    expect(response.status).to.eq(200); // 200 means OK, the update was successful
   });
  });
 });
