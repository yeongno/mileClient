import axios from "axios";
import React, { useEffect, useState } from "react";

function LandingPage() {
  const [Name, setName] = useState();
  useEffect(() => {
    axios.post("api/users/register", {});
  }, []);

  return <div>sfdafsdafsdafasfsdfsad</div>;
}

export default LandingPage;
