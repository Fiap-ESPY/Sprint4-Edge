import {useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

const App = () => {
  const [goals, setGoals] = useState<number>(0);
  setTimeout(() => {
    fetch(
      "http://130.107.48.140:1026/v2/entities/urn:ngsi-ld:Lamp:001/attrs/luminosity",
      {
        method: "GET",
        headers: {
          "fiware-service": "smart",
          "fiware-servicepath": "/",
          accept: "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setGoals(data.value);
      })
      .catch((error) => {
        console.error("Erro ao buscar luminosity:", error);
      });
  }, 1000);


  return (
    <div className="min-h-[100vh] w-[100vw] flex items-center flex-col">
      <NavBar/>
      <Card 
       nameTeam1="PSG"
       nameTeam2="Barcelona"
       goalsTeam1={goals}
       goalsTeam2={4}
      />
    </div>
  );
}

export default App;