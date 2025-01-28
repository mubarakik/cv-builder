import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">CV Builder</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-indigo-600">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Create Your CV in Minutes</h2>
          <p className="text-lg mb-8">Streamline your job application process with our easy-to-use CV builder.</p>
          <a href="#form" className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-100">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-4">Easy to Use</h4>
              <p>Create your CV effortlessly with our user-friendly interface.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-4">Customizable Templates</h4>
              <p>Choose from professionally designed templates.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-4">AI-Powered Cover Letters</h4>
              <p>Generate personalized cover letters tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Fill in Your Details</h3>
          <form action="#" method="POST" className="bg-white p-8 rounded-lg shadow">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="job" className="block text-gray-700 font-medium mb-2">Desired Job Title</label>
              <input type="text" id="job" name="job" className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 CV Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
