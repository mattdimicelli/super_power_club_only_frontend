import nintendoPowerLogo from "../images/nintendo_power.png";
import DropdownMenu from "./DropdownMenu";
import NavbarBtns from "./NavbarBtns";

function Header({ isLoggedIn, isSPCMember }) {
  return (
    <header className="navbar flex justify-between">
      <div>
        <a href="/" className="btn btn-ghost md:text-xl">
          <img className="w-40" src={nintendoPowerLogo} alt="nintendo power" />
        </a>
      </div>

      <DropdownMenu isLoggedIn={isLoggedIn} isSPCMember={isSPCMember} />
      {/* dropdown menu for small viewports */}

      <NavbarBtns isLoggedIn={isLoggedIn} isSPCMember={isSPCMember} />
      {/* navbar buttons for medium-sized screens and up */}
    </header>
  );
}
export default Header;
