export interface ICustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IIndividuaCustomer {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface IEnterpriseCustomer {
  name: string;
  cnpj: string;
}
