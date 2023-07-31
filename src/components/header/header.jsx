import h from './header.module.css';

const Header = () => {
  return (
    <div className={h.header_wrapper}>
      <h1>
        <a href="#" className={h.headLink}>
          Fakebook
        </a>
      </h1>
    </div>
  );
};

export default Header;
