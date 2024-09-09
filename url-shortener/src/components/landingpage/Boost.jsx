import {Link } from "react-router-dom"

export default function Boost() {
  return (
    <>
      <section className="boost relative">

        <div className="flex items-center justify-center flex-col boost-inner">
          <h2 className="mb-5 text-3xl md:text-4xl text-white font-bold text-center">
            Boost your links today
          </h2>
          <button className="btn-cta rounded-full"><Link to="/sign">Get Started</Link></button>
        </div>
      </section>
    </>
  )
}
