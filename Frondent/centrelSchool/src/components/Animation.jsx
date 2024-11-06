import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 space-y-4 md:space-y-0 md:space-x-4 bg-gray-100">
      {/* Product Containers */}
      <div
        className="flex flex-col items-center p-4 rounded-lg shadow-lg"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
          src="https://jgcs.b-cdn.net/wp-content/uploads/2024/05/SHA09299-scaled-1.jpg"
          alt="Royal Brand"
          className="w-full h-auto object-cover"
        />
         <h2 className="text-xl font-bold mt-2">Educational Excellence</h2>
         <p className="text-center text-sm">The perfect rice for school cafeterias and educational institutions.</p>
      </div>

      <div
        className="flex flex-col items-center p-4 rounded-lg shadow-lg"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img
        src="https://jgcs.b-cdn.net/wp-content/uploads/2024/05/SHA09299-scaled-1.jpg"
          alt="Knorr Brand"
          className="w-full h-auto object-cover"
        />
        <h2 className="text-xl font-bold mt-2">School Essentials</h2>
        <p className="text-center text-sm">Tasty and nutritious soup mix for school lunches and snack times.</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-col items-center space-y-2 fixed right-4 top-1/2 transform -translate-y-1/2">
        <a href="#" className="bg-gray-200 p-2 rounded-full shadow-lg">
          <i className="fab fa-facebook-f text-gray-700"></i>
        </a>
        <a href="#" className="bg-gray-200 p-2 rounded-full shadow-lg">
          <i className="fab fa-instagram text-gray-700"></i>
        </a>
        <a href="#" className="bg-gray-200 p-2 rounded-full shadow-lg">
          <i className="fab fa-youtube text-gray-700"></i>
        </a>
      </div>
    </div>
  );
};

export default Main;
