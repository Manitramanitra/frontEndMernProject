import React, { useContext } from "react";
import { UidContext } from "../components/Context/AppContext";
import Log from "../components/Log/Log";
function Profil() {
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? (
        <h1>UPDATE PAGE</h1>
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="/img/log.svg" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profil;
