describe('API testing on pet shop endpoints', () => {

    it('validate pet creation endpoint success request', () => {
        cy.request({
            method: 'POST', 
            url: 'https://petstore.swagger.io/v2/pet', 
            body: {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
              }
          })
          .then((res) => {
              expect(res.status).eq(200)
              expect(res.body.name).eq("doggie")
              expect(res.body.status).eq("available")
          })
    })

    it('validate pet update endpoint success request', () => {
        cy.request({
            method: 'PUT', 
            url: 'https://petstore.swagger.io/v2/pet', 
            body: {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "rabbit",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "not available"
              }
          })
          .then((res) => {
              expect(res.status).eq(200)
              expect(res.body.name).eq("rabbit")
              expect(res.body.status).eq("not available")
          })
    })

    it('validate pet deletion by id endpoint success request', () => {
        cy.request({
            method: 'DELETE', 
            url: 'https://petstore.swagger.io/v2/pet/9223372036854258000', 
            
          })
          .then((res) => {
              expect(res.status).eq(200)
             
          })
    })

    it('validate pet search by id endpoint success request', () => {
        cy.request({
            method: 'GET', 
            url: 'https://petstore.swagger.io/v2/pet/9223372036854258000', 
            
          })
          .then((res) => {
              expect(res.status).eq(200)
             
          })
    })

    it('validate pet order endpoint success request', () => {
        cy.request({
            method: 'POST', 
            url: 'https://petstore.swagger.io/v2/store/order', 
            body: {
                "id": 0,
                "petId": 0,
                "quantity": 0,
                "shipDate": "2022-08-30T18:30:36.590Z",
                "status": "placed",
                "complete": true
              }
            
          })
          .then((res) => {
            expect(res.status).eq(200)
          })
    })
    it('validate pet order deletion endpoint success request', () => {
        cy.request({
            method: 'DELETE', 
            url: 'https://petstore.swagger.io/v2/store/order/9223372036854392000'
            
          })
          .then((res) => {
            expect(res.status).eq(200)
          })
    })
    
    it('validate pet inventory consult endpoint success request', () => {
        cy.request({
            method: 'GET', 
            url: 'https://petstore.swagger.io/v2/store/inventory'
            
          })
          .then((res) => {
            expect(res.status).eq(200)
          })
    })
    
})