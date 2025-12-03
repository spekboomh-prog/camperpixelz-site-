export default function Footer() {
  return (
    <footer style={{
      marginTop: "50px",
      padding: "20px",
      background: "#062F4F",
      color: "white",
      fontFamily: "Arial",
      textAlign: "center",
      fontSize: "14px"
    }}>
      © {new Date().getFullYear()} camperpixelz — All rights reserved.
    </footer>
  );
}