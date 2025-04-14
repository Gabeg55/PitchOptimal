import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <h1>PitchOptimal</h1>
        <h2>Unlock Your Pitching Potential</h2>
        <p>AI-powered video analysis. MLB breakdowns. Custom training plans.</p>
        <div style={{ marginTop: "2rem" }}>
          <a href="/upload"><button>Upload Mechanics Video</button></a>
          <a href="/plan" style={{ marginLeft: "1rem" }}><button>Start Training Plan</button></a>
          <a href="/learn" style={{ marginLeft: "1rem" }}><button>Explore Learning Center</button></a>
        </div>
      </main>
    </>
  );
}
