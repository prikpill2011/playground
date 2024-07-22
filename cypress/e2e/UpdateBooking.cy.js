//Step 2: Choose Four Other Scenarios to Test
describe("Data-Driven API Testing with Cypress", () => {

  const testFirstNames = ["Sally"];

  testFirstNames.forEach((firstName) => {

    it(`Retrieves booking IDs for ${firstName}`, () => {

      cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {

        expect(response.status).to.eq(200);

        expect(response.body).to.have.length.greaterThan(-1);

        response.body.forEach((booking) => {

          expect(booking.firstname).to.eq(firstName);

        });

      });
    });

  });

});


//3-
/*
function getBookingById(bookingId)
 {

  return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking/${bookingId}`);

}

describe("Custom Functions for API Testing with Cypress", () => {

  it("Retrieves booking details for a specific ID", () => {

    getBookingById(1).then((response) => {

      expect(response.status).to.eq(200);

     // expect(response.body).to.have.property("bookingid", 1);

    });

  });

});
*/