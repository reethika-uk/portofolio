import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3498DB] mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#E0E0E0]">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm bg-[#1E1E1E] text-[#E0E0E0] focus:border-[#3498DB] focus:ring-[#3498DB]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#E0E0E0]">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm bg-[#1E1E1E] text-[#E0E0E0] focus:border-[#3498DB] focus:ring-[#3498DB]" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#E0E0E0]">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm bg-[#1E1E1E] text-[#E0E0E0] focus:border-[#3498DB] focus:ring-[#3498DB]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#E0E0E0]">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-700 shadow-sm bg-[#1E1E1E] text-[#E0E0E0] focus:border-[#3498DB] focus:ring-[#3498DB]}"></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3498DB] hover:bg-[#2980B9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3498DB]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 