import React from 'react'

const Testimonials = () => {
  return (
    <div id="testi" className="bg-[#FFFBEA] py-20 px-6 md:px-20 space-y-12">

      {/* Heading with lines */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-red-600" />
        <h3 className="text-red-600 font-semibold tracking-widest text-sm sm:text-base uppercase">
          TESTIMONIALS
        </h3>
        <div className="h-px w-16 bg-red-600" />
      </div>

      {/* Subheading */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-red-600 leading-snug">
        RAVING REVIEWS: HEAR FROM OUR HAPPY FOODIES!
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            text: "Aaoji is my new favorite stop on the highway! The flavors here are very refreshing. Will definitely be stopping here on every trip. It's fast, fresh, and perfect for a nice pit stop!",
            name: "Suresh Naithani",
          },
          {
            text: "I've tried a lot of places while traveling to Delhi, but Aaoji really stands out! The flavors are amazing, and they’ve got a fun, hygienic setup that anyone can enjoy! Keep up the great work!",
            name: "Rekha Dixit",
          },
          {
            text: "Stopped by Aaoji, and felt wow! The food was served hot, tasty, and full of flavor. I never expected such good food – this is going to be my go-to on every trip now!",
            name: "Sarthak Singh",
          },
        ].map((review, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-gray-700">
            <p className="mb-4 text-[15px]">{review.text}</p>
            <h4 className="font-semibold text-red-600">{review.name}</h4>
          </div>
        ))}
      </div>

<div id="callus" className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

  {/* Form Section */}
  <div>
    <h3 className="text-2xl font-bold text-red-600 mb-6">
      Fill in details to book a private party!
    </h3>
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your full name*"
          className="border border-gray-300 p-3 rounded-md w-full"
        />
        <input
          type="tel"
          placeholder="+91 IND Mobile number*"
          className="border border-gray-300 p-3 rounded-md w-full"
        />
      </div>
      <input
        type="email"
        placeholder="Email ID*"
        className="border border-gray-300 p-3 rounded-md w-full"
      />
      <textarea
        placeholder="Tell us something about your enquiry!"
        className="border border-gray-300 p-3 rounded-md w-full h-32 resize-none"
      />
      <button
        type="submit"
        className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>

  {/* Map Section */}
  <div>
    <h3 className="text-2xl font-bold text-red-600 mb-4 text-center md:text-left">
      Map Here
    </h3>
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7340989963536!2d75.78320557529602!3d26.846708476699557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d04f02a135%3A0x47e6b360982a87d2!2sAaoji!5e0!3m2!1sen!2sin!4v1712573011234!5m2!1sen!2sin"
      width="100%"
      height="300"
      allowFullScreen
      loading="lazy"
      className="rounded-lg shadow-md w-full"
    ></iframe>
  </div>

</div>

    </div>
  )
}

export default Testimonials
