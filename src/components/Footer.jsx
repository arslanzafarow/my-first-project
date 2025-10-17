function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>
        © {new Date().getFullYear()} MyStore. Все права защищены.
      </p>
    </footer>
  );
}

export default Footer;