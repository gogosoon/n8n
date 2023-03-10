import { BasePage } from './base';

export class SigninPage extends BasePage {
	url = '/signin';
	getters = {
		form: () => cy.getByTestId('auth-form'),
		email: () => cy.getByTestId('email'),
		password: () => cy.getByTestId('password'),
		submit: () => cy.get('button'),
	};
}
