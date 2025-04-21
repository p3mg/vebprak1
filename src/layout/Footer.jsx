function Footer() {
    return <footer className="page-footer red darken-2">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} made by p3mg
      <a className="grey-text text-lighten-4 right" href="https://github.com/p3mg">Developer</a>
      </div>
    </div>
  </footer>
}

export {Footer}