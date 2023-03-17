import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Menu from "./icons/Menu";
import X from "./icons/X";

const NavContext = createContext<{
  sidenav: boolean;
  setSidenav: Dispatch<SetStateAction<boolean>>;
}>({
  sidenav: false,
  setSidenav: () => {},
});

type NavbarProps = {
  logo: ReactNode;
  navitems: ReactNode;
};

type SidenavProps = {
  children: ReactNode;
};

type NavProps = NavbarProps;

export function Navbar(props: NavbarProps) {
  const { sidenav, setSidenav } = useContext(NavContext);

  return (
    <div className="flex justify-between m-2">
      <div className="flex gap-2">
        <div className="sm:hidden">
          <Menu onClick={() => setSidenav(true)} />
        </div>
        {props.logo}
      </div>
      <div className="hidden sm:flex sm:gap-2">{props.navitems}</div>
    </div>
  );
}

export function Sidenav(props: SidenavProps) {
  const { sidenav, setSidenav } = useContext(NavContext);
  let toggledNavClass = "-translate-x-full opacity-0";

  if (sidenav) {
    toggledNavClass = "translate-x-0 opacity-100";
  } else {
    toggledNavClass = "-translate-x-full opacity-0";
  }

  return (
    <div
      className={`flex flex-col bg-slate-300 h-screen z-10 gap-2 absolute w-full items-center transition ${toggledNavClass}`}
    >
      <div className="opacity-0">empty</div>
      <div className="absolute top-2 right-2">
        <X onClick={() => setSidenav(false)} />
      </div>
      {props.children}
    </div>
  );
}

export default function (props: NavProps) {
  const [sidenav, setSidenav] = useState(false);

  return (
    <NavContext.Provider
      value={{
        sidenav,
        setSidenav,
      }}
    >
      <Navbar logo={props.logo} navitems={props.navitems} />
      <Sidenav>{props.navitems}</Sidenav>
    </NavContext.Provider>
  );
}
