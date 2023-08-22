import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { checkUser } from "./components/action/checkUser";
import { UidContext } from "./components/Context/AppContext";
import router from "./components/Routes/index";
function App() {
  const [uid, setUid] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const responses = await checkUser();
      setUid(responses);
    };

    fetchData();
  }, []);
  return (
    <UidContext.Provider value={uid}>
      <RouterProvider router={router} />
    </UidContext.Provider>
  );
}

export default App;
