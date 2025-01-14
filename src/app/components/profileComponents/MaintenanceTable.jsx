"use client";
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const maintenanceData = [
  { id: "000085752257", name: "طلب صيانة 1", date: "2024-10-20", status: "مكتمل" },
  { id: "000085752258", name: "طلب صيانة 2", date: "2024-10-22", status: "قيد التنفيذ" },
  { id: "000085752259", name: "طلب صيانة 2", date: "2024-10-22", status: "قيد التنفيذ" },

];

const MaintenanceTable = () => (
  <TableContainer component={Paper} sx={{ border: "1px solid #D9D5EC", borderRadius: "4px" }}>
    <Table aria-label="maintenance table" sx={{ direction: "rtl" }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>الرقم</TableCell>
          <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>اسم الطلب</TableCell>
          <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>التاريخ</TableCell>
          <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>الحالة</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {maintenanceData.map((row) => (
          <TableRow key={row.id}>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.id}</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.name}</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.date}</TableCell>
            <TableCell sx={{ textAlign: "center", fontWeight: "bold" }}>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default MaintenanceTable;
