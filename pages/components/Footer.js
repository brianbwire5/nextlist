const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <footer>Copyright @ {year} Ninja List</footer>;
};

export default Footer;
