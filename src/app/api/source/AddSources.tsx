import React from "react";

const AddSources = () => {
  return (
    <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
      {/* Title Section */}
      <p className="mb-6 text-gray-600">
        Add new sources to a chatbot.
      </p>

      {/* POST Method Section */}
      <h4 className="text-2xl font-semibold mb-4">Method</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <span className="inline-block text-white bg-green-500 px-3 py-1 rounded-md text-sm">
          POST
        </span>
        <span> /chatbots/{`{chatbot_id}`}/sources</span>
      </div>

      {/* Request Section */}
      <h4 className="text-2xl font-semibold mb-4">Request</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "sources": [
    {
      "content": "https://example.com/sitemap.xml",
      "type": "sitemap"
    },
    {
      "content": "https://example.com",
      "type": "website"
    },
    {
      "content": "https://example.com/about",
      "type": "link"
    },
    {
      "content": "Lorem ipsum sit dolor...",
      "name": "my text",
      "type": "text"
    },
    {
      "content": "https://example.com/document.pdf",
      "type": "file"
    }
  ]
}`}</pre>
      </div>

      {/* Parameters Section */}
      <h4 className="text-2xl font-semibold mb-4">Parameters</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  sources: "The array of sources to be added"
  source.content: "The source content"
  source.type: "The source type"
  source.name: "The text name (only if type: text)"
}`}</pre>
      </div>

      {/* Response Section */}
      <h4 className="text-2xl font-semibold mb-4">Response</h4>
      <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 mb-6">
        <pre>{`{
  "result": "success",
  "data": "Sources are being added and trained."
}`}</pre>
      </div>

      {/* Note Section */}
      <h4 className="text-2xl font-semibold mb-4">Note</h4>
      <p className="text-sm text-gray-600">
        New sources are added asynchronously as soon as their content is fetched. You can list the chatbot's sources to check their status.
      </p>
    </div>
  );
};

export default AddSources;
