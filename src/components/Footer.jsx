function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6 px-6 py-8 text-sm opacity-90 whitespace-nowrap">
      <p>
        &copy; {new Date().getFullYear()} Lucas Hemkemeier. All rights reserved.
      </p>
      <ul className="flex items-center gap-4">
        <li>
          <a
            href="https://github.com/hemkdev"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/lucas-hemkemeier"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
