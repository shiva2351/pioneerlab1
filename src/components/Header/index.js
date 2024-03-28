const Header = () => {
  console.log("kk");
  return (
    <nav>
      <ul>
        <li>logo</li>
        <li>
          <ul>
            <li>Home</li>
            <li>login</li>
            <li>
              <select>
                <option>side Home</option>
                <option>options</option>
              </select>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
