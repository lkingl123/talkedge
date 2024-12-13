import React from "react";

const DeleteChatbot = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Delete a Chatbot</h2>
      <p className="mb-6">
        Delete a chatbot and all associated chats and sources. This action is
        permanent.
      </p>

      {/* Request Section */}
      <h3 className="text-2xl font-semibold mb-4">
        <span className="bg-gray-100 p-2 rounded-md text-sm font-mono text-gray-800">
          DELETE /chatbots/{`:chatbot_id`}
        </span>
      </h3>

      {/* Request Section */}
      <h3 className="text-xl font-semibold mb-4">Request</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "chatbot_id": "your-chatbot-id"
}`}</pre>
      </div>

      {/* Name and Description */}
      <h3 className="text-xl font-semibold mb-4">Name</h3>
      <table className="table-auto w-full mb-6 border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">chatbot_id</td>
            <td className="px-4 py-2">The chatbot's ID (required).</td>
          </tr>
        </tbody>
      </table>

      {/* Response Section */}
      <h3 className="text-xl font-semibold mb-4">Response</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": "Chatbot deleted successfully."
}`}</pre>
      </div>

      {/* Fields Explanation */}
      <h3 className="text-xl font-semibold mb-4">Name</h3>
      <table className="table-auto w-full mb-6 border-collapse">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">result</td>
            <td className="px-4 py-2">
              Indicates if the deletion was successful. Expected value:
              "success".
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">data</td>
            <td className="px-4 py-2">
              A confirmation message such as "Chatbot deleted successfully."
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteChatbot;
