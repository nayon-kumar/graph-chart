import { Suspense } from "react";
import "./App.css";
import ResultChart from "./components/ResultChart/ResultChart";
import MarksChart from "./components/MarksChart/MarksChart";
import axios from "axios";

const marksPromise = fetch("marks.json").then((res) => res.json());
const allMarksPromise = axios.get("allMarks.json");

function App() {
  return (
    <>
      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-30">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <ResultChart marksPromise={marksPromise}></ResultChart>
        </Suspense>
        <Suspense
          fallback={
            <div className="flex items-center justify-center mt-30">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <MarksChart allMarksPromise={allMarksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  );
}

export default App;
