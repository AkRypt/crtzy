const countries = [
    { id: 1, code: "US", name: "United States", 
    states: [
        { id: 1, code: "AL", name: "Alabama" },
        { id: 2, code: "AK", name: "Alaska" },
        { id: 3, code: "AZ", name: "Arizona" },
        { id: 4, code: "AR", name: "Arkansas" },
        { id: 5, code: "CA", name: "California" },
        { id: 6, code: "CO", name: "Colorado" },
        { id: 7, code: "CT", name: "Connecticut" },
        { id: 8, code: "DE", name: "Delaware" },
        { id: 9, code: "FL", name: "Florida" },
        { id: 10, code: "GA", name: "Georgia" },
        { id: 11, code: "HI", name: "Hawaii" },
        { id: 12, code: "ID", name: "Idaho" },
        { id: 13, code: "IL", name: "Illinois" },
        { id: 14, code: "IN", name: "Indiana" },
        { id: 15, code: "IA", name: "Iowa" },
        { id: 16, code: "KS", name: "Kansas" },
        { id: 17, code: "KY", name: "Kentucky" },
        { id: 18, code: "LA", name: "Louisiana" },
        { id: 19, code: "ME", name: "Maine" },
        { id: 20, code: "MD", name: "Maryland" },
        { id: 21, code: "MA", name: "Massachusetts" },
        { id: 22, code: "MI", name: "Michigan" },
        { id: 23, code: "MN", name: "Minnesota" },
        { id: 24, code: "MS", name: "Mississippi" },
        { id: 25, code: "MO", name: "Missouri" },
        { id: 26, code: "MT", name: "Montana" },
        { id: 27, code: "NE", name: "Nebraska" },
        { id: 28, code: "NV", name: "Nevada" },
        { id: 29, code: "NH", name: "New Hampshire" },
        { id: 30, code: "NJ", name: "New Jersey" },
        { id: 31, code: "NM", name: "New Mexico" },
        { id: 32, code: "NY", name: "New York" },
        { id: 33, code: "NC", name: "North Carolina" },
        { id: 34, code: "ND", name: "North Dakota" },
        { id: 35, code: "OH", name: "Ohio" },
        { id: 36, code: "OK", name: "Oklahoma" },
        { id: 37, code: "OR", name: "Oregon" },
        { id: 38, code: "PA", name: "Pennsylvania" },
        { id: 39, code: "RI", name: "Rhode Island" },
        { id: 40, code: "SC", name: "South Carolina" },
        { id: 41, code: "SD", name: "South Dakota" },
        { id: 42, code: "TN", name: "Tennessee" },
        { id: 43, code: "TX", name: "Texas" },
        { id: 44, code: "UT", name: "Utah" },
        { id: 45, code: "VT", name: "Vermont" },
        { id: 46, code: "VA", name: "Virginia" },
        { id: 47, code: "WA", name: "Washington" },
        { id: 48, code: "WV", name: "West Virginia" },
        { id: 49, code: "WI", name: "Wisconsin" },
        { id: 50, code: "WY", name: "Wyoming" }
    ] },
    { id: 2, code: "IN", name: "India", 
    states: [
        { id: 1, code: "AP", name: "Andhra Pradesh" },
        { id: 2, code: "AR", name: "Arunachal Pradesh" },
        { id: 3, code: "AS", name: "Assam" },
        { id: 4, code: "BR", name: "Bihar" },
        { id: 5, code: "CT", name: "Chhattisgarh" },
        { id: 6, code: "GA", name: "Goa" },
        { id: 7, code: "GJ", name: "Gujarat" },
        { id: 8, code: "HR", name: "Haryana" },
        { id: 9, code: "HP", name: "Himachal Pradesh" },
        { id: 10, code: "JK", name: "Jammu and Kashmir" },
        { id: 11, code: "JH", name: "Jharkhand" },
        { id: 12, code: "KA", name: "Karnataka" },
        { id: 13, code: "KL", name: "Kerala" },
        { id: 14, code: "MP", name: "Madhya Pradesh" },
        { id: 15, code: "MH", name: "Maharashtra" },
        { id: 16, code: "MN", name: "Manipur" },
        { id: 17, code: "ML", name: "Meghalaya" },
        { id: 18, code: "MZ", name: "Mizoram" },
        { id: 19, code: "NL", name: "Nagaland" },
        { id: 20, code: "OR", name: "Odisha" },
        { id: 21, code: "PB", name: "Punjab" },
        { id: 22, code: "RJ", name: "Rajasthan" },
        { id: 23, code: "SK", name: "Sikkim" },
        { id: 24, code: "TN", name: "Tamil Nadu" },
        { id: 25, code: "TG", name: "Telangana" },
        { id: 26, code: "TR", name: "Tripura" },
        { id: 27, code: "UP", name: "Uttar Pradesh" },
        { id: 28, code: "UT", name: "Uttarakhand" },
        { id: 29, code: "WB", name: "West Bengal" }
    ] },
    { id: 3, code: "UK", name: "United Kingdom" },
    { id: 4, code: "JP", name: "Japan" },
    { id: 5, code: "KR", name: "South Korea" },
    { id: 6, code: "CN", name: "China" },
    { id: 7, code: "RU", name: "Russia" },
    { id: 8, code: "DE", name: "Germany" },
    { id: 9, code: "ID", name: "Indonesia" },
    { id: 10, code: "FR", name: "France" },
    { id: 11, code: "MX", name: "Mexico" },
    { id: 12, code: "IT", name: "Italy" },
    { id: 13, code: "ES", name: "Spain" },
    { id: 14, code: "CA", name: "Canada" },
    { id: 15, code: "AU", name: "Australia" },
    { id: 16, code: "SA", name: "Saudi Arabia" },
    { id: 17, code: "TR", name: "Turkey" },
    { id: 18, code: "ZA", name: "South Africa" },
    { id: 19, code: "NG", name: "Nigeria" },
    { id: 20, code: "EG", name: "Egypt" },
    { id: 21, code: "VN", name: "Vietnam" },
    { id: 22, code: "CO", name: "Colombia" },
    { id: 23, code: "AR", name: "Argentina" },
    { id: 24, code: "PL", name: "Poland" },
    { id: 25, code: "BD", name: "Bangladesh" },
    { id: 26, code: "UA", name: "Ukraine" },
    { id: 27, code: "PH", name: "Philippines" },
    { id: 28, code: "MA", name: "Morocco" },
    { id: 29, code: "KE", name: "Kenya" },
    { id: 30, code: "MY", name: "Malaysia" }
];
export default countries;