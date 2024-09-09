import facebook from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import instagram from "../../assets/images/icon-instagram.svg"
import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <>
      <footer className="bg-customBrown py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="Simply" className="mr-6" />
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 bg-customBrown text-sm mt-1">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200  bg-customBrown text-sm mt-1">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200  bg-customBrown text-sm mt-1">
                  Analytics
                </button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200  bg-customBrown text-sm mt-1">Blog</button>
              </li>
              <li>
                <button className="text-slate-200  bg-customBrown text-sm mt-1">
                  Developers
                </button>
              </li>
              <li>
                <button className="text-slate-200  bg-customBrown text-sm mt-1">Support</button>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 bg-customBrown text-sm mt-1">About</button>
              </li>
              <li>
                <button className="text-slate-200 bg-customBrown text-sm mt-1">
                  Our Team
                </button>
              </li>
              <li>
                <button className="text-slate-200 bg-customBrown text-sm mt-1">Careers</button>
              </li>
              <li>
                <button className="text-slate-200 bg-customBrown text-sm mt-1">Contact</button>
              </li>
            </ul>
          </article>

          <article>
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  )
}
