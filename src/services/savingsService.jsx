const savingsService = {
  getGroups: async () => {
    return [
      { id: 1, name: "Community Fund", members: ["Alice", "Bob"], totalSavings: 1500 },
      { id: 2, name: "Business Boosters", members: ["Charlie", "David"], totalSavings: 3000 },
    ];
  },
  createGroup: async (group) => {
    console.log("Group created:", group);
  },
};

export default savingsService;
