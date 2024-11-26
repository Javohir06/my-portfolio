const Footer = () => {
  return (
    <footer className="bg-primary text-lightText dark:text-darkText dark:bg-darkBg py-6 text-center">
      <p>© 2024 Your Name | All Rights Reserved</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/yourusername" className="hover:text-secondary">
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" className="hover:text-secondary">
          <i className="fab fa-linkedin text-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
