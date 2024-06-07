export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto text-center text-zinc-400 py-5 px-7 border-t">
      <small>Copyright © {currentYear} - All rights reserved.</small>
    </footer>
  );
}
