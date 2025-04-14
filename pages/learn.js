import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function Learn() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h2>PitchOptimal Learning Center</h2>
        <p>Learn the science of pitching. Breakdowns, drills, and guides all in one place.</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>🔬 Biomechanics of Arm Layback</li>
          <li>🎯 Sequencing for Velocity</li>
          <li>🧠 Mental Game for Pitchers</li>
        </ul>
        <p>[More content coming soon!]</p>
      </main>
    </>
  );
}
