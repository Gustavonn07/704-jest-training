beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('cypress adicionar, editar e pesquisar', () => {

  afterEach(() => {
    cy.get('.todo[data-testid="1"]').then(($todo) => {
      if ($todo.length > 0) {
        cy.get('[data-testid="deletar-tarefa"]').click();
      }
    });
  });

  it('cria todo', () => {

    // Criar:
    const tarefa = 'PatosLegais';

    cy.get('[data-testid="input-add"]').type(tarefa);

    cy.get('[data-testid="add-tarefa"]').click();

    cy.get('.todo[data-testid="1"]').should('exist')
      .should('have.text', tarefa);
  });

  it('edita a todo', () => {

    // Criar:
    const tarefa = 'PatosLegais';
    const tarefaEditada = 'PatosMuitoLegais';

    cy.get('[data-testid="input-add"]').type(tarefa);

    cy.get('[data-testid="add-tarefa"]').click();

    cy.get('.todo[data-testid="1"]').should('exist')
      .should('have.text', tarefa);

    // Editar:
    cy.get('[data-testid="edit-tarefa"]').click();

    cy.get('[data-testid="editar-nome"]').type(tarefaEditada);

    cy.get('[data-testid="editar"]').click();

    cy.get('.todo[data-testid="1"]').should('exist')
      .should('have.text', tarefaEditada);
  });

  
  it('pesquisar todo', () => {
    
    // Criar:
    const tarefa = 'PatosLegais';

    cy.get('[data-testid="input-add"]').type(tarefa);

    cy.get('[data-testid="add-tarefa"]').click();

    cy.get('.todo[data-testid="1"]').should('exist')
      .should('have.text', tarefa);

    // Pesquisar tarefa:
    cy.get('[data-testid="pesquisar-tarefa"]').should('exist')
      .type(tarefa)

      cy.get('.todo[data-testid="1"]').should('exist')
  })
});

describe('deletar todo', () => {

  it('apagar a todo', () => {

    // Criar:
    const tarefa = 'PatosLegais';

    cy.get('[data-testid="input-add"]').type(tarefa);

    cy.get('[data-testid="add-tarefa"]').click();

    cy.get('.todo[data-testid="1"]').should('exist')
      .should('have.text', tarefa);

    // Apagar:
    cy.get('[data-testid="deletar-tarefa"]').click();

    cy.get('.todo[data-testid="1"]').should('not.exist');
  })
});