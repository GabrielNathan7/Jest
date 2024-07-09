/* eslint-disable no-undef, new-cap */
import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => new IndividualCustomer(firstName, lastName, cpf);
const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => new EnterpriseCustomer(name, cnpj);

describe('Testing IndividualCustomer', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have firstName, lastName and CPF', () => {
    const sut = createIndividualCustomer('Gabriel', 'Fernandes', '129.007.496-89');
    expect(sut).toHaveProperty('firstName', 'Gabriel');
    expect(sut).toHaveProperty('lastName', 'Fernandes');
    expect(sut).toHaveProperty('cpf', '129.007.496-89');
  });
  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Gabriel', 'Fernandes', '129.007.496-89');
    expect(sut.getName()).toBe('Gabriel Fernandes');
    expect(sut.getIDN()).toBe('129.007.496-89');
  });
});

describe('Testing EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());
  it('should have name and CNPJ', () => {
    const sut = createEnterpriseCustomer('Prestige Worldwide', '00.000.000/0000-00');
    expect(sut).toHaveProperty('name', 'Prestige Worldwide');
    expect(sut).toHaveProperty('cnpj', '00.000.000/0000-00');
  });
  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Prestige Worldwide', '00.000.000/0000-00');
    expect(sut.getName()).toBe('Prestige Worldwide');
    expect(sut.getIDN()).toBe('00.000.000/0000-00');
  });
});
