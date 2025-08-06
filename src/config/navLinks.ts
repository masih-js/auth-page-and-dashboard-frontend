export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/dashboard" },
  { label: "Invoices", href: "/dashboard/invoices" },
  { label: "Clients", href: "/dashboard/clients" },
  { label: "Expenses", href: "/dashboard/expenses" },
];
