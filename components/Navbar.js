import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "#111",
      padding: "1rem",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        <Link href="/">PitchOptimal</Link>
      </div>
      <div>
        <Link href="/upload" style={{ marginRight: "1rem" }}>Upload</Link>
        <Link href="/plan" style={{ marginRight: "1rem" }}>Plan</Link>
        <Link href="/learn">Learn</Link>
      </div>
    </nav>
  );
}
