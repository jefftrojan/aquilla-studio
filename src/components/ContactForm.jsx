import React from 'react';

function ContactForm() {
  return (
    <div className="bg-primary text-white p-6 flex items-center h-screen">
      <div className="w-1/2 ">
        <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-200"> G4DT is a learning program to empower tech talents to learn the principles of game development, and create new tech opportunities toward career pathways. </p>
      </div>
      <div className="w-1/2">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full bg-white text-blue-900 border rounded-md" />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full bg-white text-blue-900 border rounded-md" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">Message:</label>
            <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full bg-white text-blue-900 border rounded-md"></textarea>
          </div>

          <div className='flex space-x-4 '>

            <div className='w-1/2'>
              <p> G4DT is a learning program to empower tech talents to learn the principles of game </p>

            </div>

          <div className='w-1/2'>
          <button type="submit" className="bg-blue-500 text-white p-4 w-40  rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"> Send</button>


          </div>


            </div>

          
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
