// ⬅️ import ها همیشه اول
import friesImg from "@/assets/images/frise.jpg";

export const categories = [
  { id: 1, title: "پیش‌غذا" },
  { id: 2, title: "غذای اصلی" },
  { id: 3, title: "دسر" },
  { id: 4, title: "نوشیدنی" },
];

export const menuItems = [
  {
    id: 1,
    name: "سیب‌زمینی ویژه",
    description: "سیب‌زمینی سرخ‌شده با سس مخصوص",
    price: 85000,
    categoryId: 1,
    image: friesImg
  },
  {
    id: 2,
    name: "سوپ روز",
    description: "سوپ خوشمزه",
    price: 45000,
    categoryId: 1,
    image: "https://via.placeholder.com/80"
  },
  {
    id: 3,
    name: "پیتزا مخصوص ارشاد",
    description: "پیتزا با پنیر موزارلا و سس مخصوص",
    price: 185000,
    categoryId: 2,
    image: "https://via.placeholder.com/80"
  },
  {
    id: 4,
    name: "چلو کباب",
    description: "کباب خوشمزه با برنج",
    price: 160000,
    categoryId: 2,
    image: "https://via.placeholder.com/80"
  },
  {
    id: 5,
    name: "چیزکیک شکلاتی",
    description: "چیزکیک با طعم شکلات تلخ",
    price: 95000,
    categoryId: 3,
    image: "https://via.placeholder.com/80"
  },
  {
    id: 6,
    name: "موس شکلاتی",
    description: "موس نرم و خوشمزه",
    price: 90000,
    categoryId: 3,
    image: "https://via.placeholder.com/80"
  },
  {
    id: 7,
    name: "نوشابه قوطی",
    description: "نوشابه خنک",
    price: 25000,
    categoryId: 4,
    image: "https://via.placeholder.com/80"
  },
  {
    id: 8,
    name: "آبمیوه طبیعی",
    description: "آبمیوه تازه",
    price: 35000,
    categoryId: 4,
    image: "https://via.placeholder.com/80"
  },
];
