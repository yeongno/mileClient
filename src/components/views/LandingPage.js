import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LandingPage;
