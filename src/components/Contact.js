import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <h1 className="font-extrabold text-3xl m-4">Contact us</h1>
        </div>
      </div>
      <div className="flex justify-center">
      <table class="table-auto w-full">
  <tr>
    <td class="p-4">
      <label class="block font-semibold text-lg">Name:</label>
      <input type="text" placeholder="Write your name" class="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </td>
    <td class="p-4">
      <label class="block font-semibold text-lg">Email:</label>
      <input type="text" placeholder="Write your email" class="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </td>
  </tr>
  <tr>
    <td class="p-4" colspan="2">
      <label class="block font-semibold text-lg">Message:</label>
      <textarea class="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your message"></textarea>
    </td>
  </tr>
  <tr>
    <td colspan="2" class="text-center py-4">
      <button class="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
    </td>
  </tr>
</table>
      </div>
    </div>
  )
}

export default Contact;
