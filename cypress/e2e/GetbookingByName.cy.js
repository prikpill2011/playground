//Step 2: Choose Four Other Scenarios to Test
describe("Search customer with its name", () => {

  const testFirstNames = ["John", "Sally", "Michael"];

  testFirstNames.forEach((firstName) => {

    it(`Retrieves booking IDs for ${firstName}`, () => {

      cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {

        expect(response.status).to.eq(200);

        //expect(response.body).to.have.length.greaterThan(0);

        response.body.forEach((booking) => {

          expect(booking.firstname).to.eq(firstName);

        });

      });

    });

  });

});