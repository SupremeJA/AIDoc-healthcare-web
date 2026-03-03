import { BellIcon, ListIcon } from "@phosphor-icons/react";

function Nav() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Use AI Consultant", path: "/" },
    { name: "Find Doctor and Manager", path: "/" },
    { name: "Blog", path: "/" },
  ];

  return (
    <nav className="flex justify-between items-center px-8 py-4 ">
      <div className="flex font-black text-2xl">AIDoc</div>

      <div className="hidden md:flex gap-7 ">
        {navLinks.map((a, i) => (
          <a
            href={a.path}
            key={i}
            className="hover:text-accent transition ease-in delay-150"
          >
            {a.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <BellIcon size={20} />
        <p>Image here</p>
        <ListIcon size={20} className="block " />
      </div>
    </nav>
  );
}

export default Nav;
