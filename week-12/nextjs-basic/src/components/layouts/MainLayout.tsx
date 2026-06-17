"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import Navbar from "./Navbar";

const queryClient = new QueryClient();

const MainLayout = ({ children }) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div className="w-[100vw]">
          <Navbar></Navbar>
        </div>
        <div className="w-[100vw]">{children}</div>
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
