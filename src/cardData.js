const cardData = [
  {
    name: "Basic Corporate",
    status: "active",
    issuedAccess: 2,
    number: 4295,
    cNumber: "6545765687659034",
    expire: "08/28",
    cvc: 234,
    virtual: true,
    total: 2000,
    spent: 199,
    issuedAccessPeople: [
      {
        name: "Ellen Wilson",
        product: "Shutterstock 350",
        amount: "16499",
        period:'monthly'
      },
      {
        name: "Margi Madison",
        product: "Webflow Business Pro",
        amount: "59",
        period:'monthly'
      },
    ],

    recentTransactions: [
      {
        company: "Dropbox",
        date: "Dec 20, 2021",
        period: "monthly",
        sold: "299",
      },
      {
        company: "Zendesk",
        date: "Dec 19, 2021",
        period: "annual",
        sold: "1490",
      },
    ],
  },

  {
    name: "Inventory Card",
    status: "active",
    issuedAccess: 3,
    number: "0682",
    cNumber: "7893765823497830",
    expire: "02/28",
    cvc: 567,
    virtual: true,
    total: 5687,
    spent: 2453,
    issuedAccessPeople: [
      {
        name: "Hellen Mellen",
        product: "Microsoft Word",
        amount: "99",
        period:'monthly'
      },
      {
        name: "Ellen Wilson",
        product: "Shutterstock 350",
        amount: "16499",
        period:'monthly'
      },
      {
        name: "Margi Madison",
        product: "Webflow Bsusiness Pro",
        amount: "59",
        period:'monthly'
      },
    ],

    recentTransactions: [
      {
        company: "Google",
        date: "Dec 11, 2023",
        period: "annual",
        sold: "789",
      },
    ],
  },

  {
    name: "SoftWare Subscriptions",
    status: "active",
    issuedAccess: 1,
    number: "5687",
    cNumber: "6789234598719900",
    expire: "11/34",
    cvc: 555,
    virtual: false,
    total: 23489,
    spent: 23001,
    issuedAccessPeople: [
      {
        name: "Margi Madison",
        product: "Webflow Bsusiness Pro",
        amount: "59",
        period:'annualy'
      },
    ],

    recentTransactions: [
      {
        company: "UnivTexas",
        date: "Dec 21, 2023",
        period: "monthly",
        sold: "89",
        period:'daily'
      },
    ],
  },
];

export default cardData

