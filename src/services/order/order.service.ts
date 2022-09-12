import type { Status } from "../../types/order/order.types";

export const OrderService = {
  pages: [
    {
      name: "Product and Amount",
      percent: "0%",
    },
    {
      name: "Company",
      percent: "15%",
    },
    {
      name: "Contact person",
      percent: "25%",
    },
    {
      name: "Beneficial owners",
      percent: "40%",
    },
    {
      name: "Factoring type",
      percent: "60%",
    },
    {
      name: "Third parties",
      percent: "80%",
    },
  ],

  getStatus(currentPage: number, pageNumber: number): Status {
    if (pageNumber < currentPage) {
      return "completed";
    } else if (pageNumber === currentPage) {
      return "active";
    } else {
      return "todo";
    }
  },

  getPagePercent(pageNumber: number): string | null {
    return this.pages[pageNumber]?.percent;
  }
}