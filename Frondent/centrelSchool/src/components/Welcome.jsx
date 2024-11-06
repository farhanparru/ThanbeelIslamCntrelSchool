// Welcome.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-white text-center p-6 md:p-10 lg:p-16">
      <h2 className="text-xs md:text-sm lg:text-base italic text-blue-700">Welcome to</h2>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mt-2">
      THANBEEHUL ISLAM CENTRAL SCHOOL
      </h1>
      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-blue-800 mt-2">
        The  Educational kasaragod
      </h3>
      
      <p className="text-gray-700 mt-4 max-w-xl md:max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
        We are a prestigious, co-educational institution, established by The Mar Thoma Church Educational Society in November 1990. Our school is affiliated to the Central Board of Secondary Education (CBSE), New Delhi under the Affiliation Number 930076. The administration of the school is vested with The Mar Thoma Church Educational Society, which is a premier educational agency registered in 1966 under the Travancore – Cochin Literary Scientific and Charitable Societies Registration Act, 1955. Students are given every opportunity to demonstrate excellence in curricular and co-curricular activities. We kindle in our students an aura of kindness, empathy, and integrity.
      </p>
      
      <p className="text-gray-700 mt-4 max-w-xl md:max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
        The school prepares students for the All India Secondary School Examination and All India Senior School Certificate Examination conducted by the CBSE. The School has a team of well qualified and experienced teachers.
      </p>
      
      <p className="text-base md:text-lg font-bold text-blue-800 mt-6">
        Motto of the school, “Thamasoma Jyothir Gamaya” – Lead us from darkness to light.
      </p>
      
      <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition">
        READ MORE
      </button>
    </div>
  );
}

export default Welcome;
