export default function Navbar() {
  return (
    <>
      {/*Inji can't decide */}
      {/* <div className="h-[53px]" /> */}
      <nav className="sticky flex justify-between items-center desktop:mx-36 px-8 top-[20px] h-[70px] z-[30] bg-gray-100 rounded-xl">
        <div>
          <span className="text-card-desc font-bold">IM.</span>
        </div>
        <div className="flex tablet:hidden">
          <span>hamburger</span>
        </div>
        <div className="hidden tablet:flex gap-6 justify-between items-center relative px-14 text-nav uppercase">
          <a href="/portfolio" className="text-purple-600">
            Portfolio
          </a>
          <a href="/research">Research</a>
          <a href="/bio">Bio</a>
          <a href="/resume">Resume</a>
        </div>
      </nav>
    </>
  );
}
