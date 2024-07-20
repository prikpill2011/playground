//Step 1: Create a Test Case for Health Check (Ping – HealthCheck Endpoint

describe('API Ping – HealthCheck', () => {

  it('should health check the API endpoint', () => {

    cy.request('GET', 'https://restful-booker.herokuapp.com/ping')

      .should((response) => {

        expect(response.status).to.eq(201);

        expect(response.body).to.have.length.greaterThan(0);
        expect(response.body).to.include('Created');

      });

  });

});
