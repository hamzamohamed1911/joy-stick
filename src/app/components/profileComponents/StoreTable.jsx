"use client";
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

const storeData = [
  {
    id: "000085752257",
    products: [
      { name: "منتج 1", price: "25 جنيه", image: "/images/product1.jpg" },
      { name: "منتج 2", price: "25 جنيه", image: "/images/product2.jpg" },
    ],
    totalPrice: "100 جنيه",
    status: "تم التسليم",
    date: "9-يناير-2024",
  },
  {
    id: "000085752258",
    products: [
      { name: "منتج 3", price: "50 جنيه", image: "/images/product3.jpg" },
      { name: "منتج 4", price: "150 جنيه", image: "/images/product4.jpg" },
    ],
    totalPrice: "200 جنيه",
    status: "تم التسليم",
    date: "9-يناير-2024",
  },
  {
    id: "000085752259",
    products: [
      { name: "منتج 5", price: "200 جنيه", image: "/images/product5.jpg" },
    ],
    totalPrice: "200 جنيه",
    status: "تم التسليم",
    date: "9-يناير-2024",
  },
];

const StoreTable = () => {
  const router = useRouter();

  const handleRowClick = (row) => {
    router.push(`/profile/previous-requests/${row.id}`); // Navigate to the order details page
  };

  return (
    <TableContainer component={Paper} sx={{ border: "1px solid #D9D5EC", borderRadius: "4px" }}>
      <Table aria-label="store table" sx={{ direction: "rtl" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>رقم الطلب</TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>السعر الكلي</TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>حالة المنتج</TableCell>
            <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>تاريخ الطلب</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {storeData.map((row) => (
            <TableRow key={row.id} onClick={() => handleRowClick(row)} style={{ cursor: "pointer" }}>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.id}</TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.totalPrice}</TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.status}</TableCell>
              <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StoreTable;
