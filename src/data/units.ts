export interface Unit {
  id: string;
  name: string;
  sqft: number;
  price: number;
  kitchen: string;
  living: string;
  bedroom1: string;
  bedroom2: string;
  walkInClosets: number;
  balcony: string;
  features: string[];
  image: string;
}

export const units: Unit[] = [
  { id: "301", name: "Unit 301", sqft: 1403, price: 3156, kitchen: "12'3\"×13'3\"", living: "18'7\"×17'3\"", bedroom1: "12'2\"×13'7\"", bedroom2: "11'0\"×12'0\"", walkInClosets: 1, balcony: "5'0\"×12'0\"", features: ["Dining 12'0\"×17'0\"", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-06.jpg" },
  { id: "302", name: "Unit 302", sqft: 1498, price: 3370, kitchen: "12'3\"×13'3\"", living: "20'5\"×17'2\"", bedroom1: "12'2\"×13'7\"", bedroom2: "11'0\"×14'6\"", walkInClosets: 1, balcony: "5'0\"×12'0\"", features: ["Dining 12'0\"×17'0\"", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-07.jpg" },
  { id: "303", name: "Unit 303", sqft: 1379, price: 3102, kitchen: "12'1\"×10'9\"", living: "12'2\"×36'8\"", bedroom1: "11'6\"×15'6\"", bedroom2: "11'6\"×17'6\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-08.jpg" },
  { id: "304", name: "Unit 304", sqft: 1461, price: 3287, kitchen: "12'1\"×10'10\"", living: "12'2\"×36'8\"", bedroom1: "11'6\"×19'3\"", bedroom2: "11'6\"×17'8\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-09.jpg" },
  { id: "305", name: "Unit 305", sqft: 1325, price: 2981, kitchen: "11'11\"×10'9\"", living: "12'2\"×36'8\"", bedroom1: "11'6\"×15'8\"", bedroom2: "11'6\"×17'6\"", walkInClosets: 1, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-10.jpg" },
  { id: "306", name: "Unit 306", sqft: 1461, price: 3287, kitchen: "12'1\"×10'10\"", living: "12'2\"×36'8\"", bedroom1: "11'6\"×16'10\"", bedroom2: "11'6\"×17'8\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-11.jpg" },
  { id: "307", name: "Unit 307", sqft: 1267, price: 2850, kitchen: "12'1\"×10'9\"", living: "11'6\"×36'8\"", bedroom1: "11'6\"×17'6\"", bedroom2: "12'2\"×15'8\"", walkInClosets: 1, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-12.jpg" },
  { id: "308", name: "Unit 308", sqft: 1461, price: 3287, kitchen: "12'1\"×10'10\"", living: "12'2\"×36'8\"", bedroom1: "11'6\"×16'10\"", bedroom2: "11'6\"×17'8\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-13.jpg" },
  { id: "309", name: "Unit 309", sqft: 1376, price: 3096, kitchen: "12'1\"×10'9\"", living: "12'2\"×36'8\"", bedroom1: "11'6\"×15'2\"", bedroom2: "11'6\"×17'6\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-14.jpg" },
  { id: "310", name: "Unit 310", sqft: 1461, price: 3287, kitchen: "12'1\"×10'10\"", living: "12'2\"×36'8\"", bedroom1: "11'6\"×19'3\"", bedroom2: "11'6\"×17'8\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-15.jpg" },
  { id: "311", name: "Unit 311", sqft: 1455, price: 3273, kitchen: "12'1\"×14'0\"", living: "12'2\"×38'1\"", bedroom1: "11'6\"×15'2\"", bedroom2: "11'6\"×17'9\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-16.jpg" },
  { id: "312", name: "Unit 312", sqft: 1522, price: 3424, kitchen: "12'1\"×14'0\"", living: "12'2\"×39'0\"", bedroom1: "11'6\"×19'3\"", bedroom2: "11'6\"×17'8\"", walkInClosets: 2, balcony: "12'0\"×5'0\"", features: ["Living/Dining Combined", "2 Baths", "Utility/Laundry"], image: "/rendered/The Grand Stone Final New Price-17.jpg" },
];
