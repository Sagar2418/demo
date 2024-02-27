describe('bbms', () => {
    it('passes', () => {
      cy.visit('http://localhost/Blood-Bank-Management-System-DBMS-main/')
      cy.get(':nth-child(2) > .input').type('SuperAdmin')
    })
  })