const loanService = {
  getLoans: async () => {
    return [
      { id: 1, name: "Car Loan", amount: 2000, interestRate: 6, status: "Approved" },
      { id: 2, name: "Business Expansion", amount: 5000, interestRate: 8, status: "Pending" },
      { id: 3, name: "Education Loan", amount: 1500, interestRate: 5, status: "Rejected" },
    ];
  },
};

export default loanService;
