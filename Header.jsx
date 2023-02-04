export const Title = () => (
    <img className="logo"
     alt = "loading"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcJ7OhA4hZAWBtIFTFK7NNKmrn18xp8X55g&usqp=CAU"/>
 )
export const Header = () => {
    return (
      <div className="header">
        <Title/>
        <div className="nav_items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;