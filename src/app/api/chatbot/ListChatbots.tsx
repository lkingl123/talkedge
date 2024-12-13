import React from "react";

const ListChatbots = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">List Chatbots</h2>
      <p className="mb-6">Retrieve a list of chatbots.</p>

      <h3 className="text-2xl font-semibold mb-4">GET /chatbots</h3>

      <h3 className="text-xl font-semibold mb-4">Request</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        No parameters
      </div>

      <h3 className="text-xl font-semibold mb-4">Response</h3>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": [
    {
      "id": "647557df9c5ec4dc99b5b352",
      "name": "Chatbot 1",
      "public": false,
      "ai_tone": "casual",
      "ai_knowledge": "source",
      "ai_prompt": "",
      "files": 8,
      "links": 2,
      "texts": 1,
      "chars": 42331,
      "chars_used": 42331,
      "status": "trained",
      "created_at": "2023-05-30T01:56:47.847Z",
      "modified_at": "2023-05-30T01:56:47.847Z"
    }
  ]
}`}
        </pre>
      </div>

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
            <td className="px-4 py-2">id</td>
            <td className="px-4 py-2">
              The chatbot's ID.
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">name</td>
            <td className="px-4 py-2">
              The chatbot's name.
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">public</td>
            <td className="px-4 py-2">
              If the chatbot is public (required to use the widget).<br />
              <strong>Values:</strong> true, false (default)
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">ai_tone</td>
            <td className="px-4 py-2">
              The chatbot's AI tone.<br />
              <strong>Values:</strong> casual, neutral (default), formal
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">ai_knowledge</td>
            <td className="px-4 py-2">
              The chatbot's AI knowledge.<br />
              <strong>Values:</strong> source (default), source_then_internet, internet
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">ai_prompt</td>
            <td className="px-4 py-2">
              The chatbot's AI custom prompt.
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">files</td>
            <td className="px-4 py-2">
              The chatbot's number of source type file.
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">links</td>
            <td className="px-4 py-2">
              The chatbot's number of sources type link.
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">texts</td>
            <td className="px-4 py-2">
              The chatbot's number of sources of type text.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">chars</td>
            <td className="px-4 py-2">
              The total number of characters in the chatbot's data.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListChatbots;
