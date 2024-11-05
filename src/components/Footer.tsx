import "../index.css"
import 'boxicons'

const Footer = () => {
  return <footer className="flex flex-col lg:flex-row py-7 justify-center items-center bg-primary  gap-sixty text-white">
  <section className="flex gap-4">
      <a href="https://www.facebook.com" target="_blank" className="flex justify-center items-center w-8 h-8 rounded-full bg-white"><i className='text-lg text-black hover:text-blue-600 bx bxl-facebook'></i></a>
      <a href="https://www.instagram.com" target="_blank" className="flex justify-center items-center w-8 h-8 rounded-full bg-white"><i className='text-xl text-black hover:bg-gradient-to-b from-gradient-purple to-gradient-yellow hover:text-transparent hover:bg-clip-text bx bxl-instagram'></i></a>
      <a href="https://www.linkedin.com" target="_blank" className="flex justify-center items-center w-8 h-8 rounded-full bg-white"><i className='text-lg text-black hover:text-blue-800 bx bxl-linkedin'></i></a>
  </section>
  <section className="flex flex-col md:flex-row justify-center items-center gap-sixty">
      <p>© 2024 Project Manager. All rights reserved.</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
  </section>
</footer>
}

export default Footer