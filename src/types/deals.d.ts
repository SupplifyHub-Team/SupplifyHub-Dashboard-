interface IDealDetails {
  dealDetailsId: number;
  companyName: string;
  companyEmail: string;
  companyPhone: string;
  quantity: number;
  price: number;
  dealDoneAt: string;
  dateOfDelivered: string;
}

interface IDeal {
  dealId: number | string;
  supplierDealDetails: IDealDetails;
  clientDealDetails: IDealDetails;
}

interface IDealsResponse {
  data: IDeal[];
}
