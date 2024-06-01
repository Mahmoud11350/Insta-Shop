export type Product = {
  _id: string;
  title: string;
  company: string;
  description: string;
  featured: boolean;
  category: string;
  image: string;
  price: string;
  shipping: boolean;
  colors: string[];
};

type Links = {
  href: string;
  label: string;
};

export const links: Links[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
];
