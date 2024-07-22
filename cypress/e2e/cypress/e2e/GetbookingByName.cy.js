//Step 2: Choose Four Other Scenarios to Test
/*describe("Search customer with its name", () => {

  const testFirstNames = ["John", "Sally", "Michael"];

  testFirstNames.forEach((firstName) => {

    it(`Retrieves booking IDs for ${firstName}`, () => {

      cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {

        expect(response.status).to.eq(200);

        //expect(response.body).to.have.length.greaterThan(0);

        response.body.forEach((booking) => {

          //expect(booking.firstname).to.eq(firstName);

        });

      });

    });

  });

});*/

describe("HTTP Requests", () => {
  it("post update call", () => {
   cy.request({
    method: 'Post', // Use POST if creating a new booking
    url: "https://restful-booker.herokuapp.com/booking/?name=mark", // Replace 1 with the actual booking ID
    body: {
     firstname: "Mark",
     lastname: "Brown",
     totalprice: 111,
     depositpaid: true,
     bookingdates: {
      checkin: "2023-07-01",
      checkout: "2023-07-05"
     }
    },
    failOnStatusCode: false // This prevents the test from failing if the status code isn't 2xx or 3xx
   }).should((response) => {
    expect(response.status).to.eq(200); // 200 means OK, the update was successful
   });
  });
 });

