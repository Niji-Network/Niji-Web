import { Endpoint } from "@/utils/interfaces";
import React, { useState } from "react";

export const endpoints: Endpoint[] = [
    {
        category: "Authentication",
        path: "/v1/auth/create-key",
        method: "POST",
        summary: "Create a new API key for an user",
        description: `Creates a new API key for the specified username.
Query Parameter: username (string, required, max 16 characters).
Usernames are unique.`,
        responseExample:
`{
  "username": "john_doe",
  "api_key": "abcdef1234567890abcdef1234567890",
  "role": "user"
}`,
    },
    {
        category: "Images",
        path: "/v1/img/search",
        method: "GET",
        summary: "Search and list images with filters and pagination",
        description:
            "Searches for images using optional filters: nsfw, character, tags, anime, category, page, size.",
        responseExample:
`{
    "page": 1,
    "size": 5,
    "total": 1,
    "items": [
        {
            "_id": "67c3dd97804bb4969297dd8f",
            "url": "https://cdn.nijii.xyz/images/waifu/5a35ea9b-750a-43dc-8071-f8dac2f19b41.jpg",
            "category": "waifu",
            "anime": null,
            "nsfw": false,
            "character": null,
            "tags": [
                "pink hair",
                "cute"
            ]
        }
    ]
}`,
    },
    {
        category: "Images",
        path: "/v1/img/waifu",
        method: "GET",
        summary: "Retrieve waifu images",
        description:
            "Retrieves images with the category 'waifu', with optional NSFW filtering and pagination.",
        responseExample:
`{
    "page": 1,
    "size": 5,
    "total": 1,
    "items": [
        {
            "_id": "67c3dd97804bb4969297dd8f",
            "url": "https://cdn.nijii.xyz/images/waifu/5a35ea9b-750a-43dc-8071-f8dac2f19b41.jpg",
            "category": "waifu",
            "anime": null,
            "nsfw": false,
            "character": null,
            "tags": [
                "pink hair",
                "cute"
            ]
        }
    ]
}`,
    },
    {
        category: "Images",
        path: "/v1/img/husbando",
        method: "GET",
        summary: "Retrieve husbando images",
        description:
            "Retrieves images with the category 'husbando', with optional NSFW filtering and pagination.",
        responseExample:
`{
    "page": 1,
    "size": 5,
    "total": 1,
    "items": [
        {
            "_id": "67c3d815804bb4969297dd8e",
            "url": "https://cdn.nijii.xyz/images/husbando/b363c484-3850-480a-bd4b-e9bf545c7007.gif",
            "category": "husbando",
            "anime": "Fire Force",
            "nsfw": false,
            "character": [
                "Shinra Kusakabe"
            ],
            "tags": [
                "shinra",
                "fire force"
            ]
        }
    ]
}`,
    },
    {
        category: "Images",
        path: "/v1/img/random",
        method: "GET",
        summary: "Retrieve a random image with optional filters",
        description:
            "Retrieves random images based on optional filters (nsfw, character, tags) in a paginated format.",
        responseExample:
`{
    "page": 1,
    "size": 5,
    "total": 2,
    "items": [
        {
            "_id": "67c3d815804bb4969297dd8e",
            "url": "https://cdn.nijii.xyz/images/husbando/b363c484-3850-480a-bd4b-e9bf545c7007.gif",
            "category": "husbando",
            "anime": "Fire Force",
            "nsfw": false,
            "character": [
                "Shinra Kusakabe"
            ],
            "tags": [
                "shinra",
                "fire force"
            ]
        },
        {
            "_id": "67c3dd97804bb4969297dd8f",
            "url": "https://cdn.nijii.xyz/images/waifu/5a35ea9b-750a-43dc-8071-f8dac2f19b41.jpg",
            "category": "waifu",
            "anime": null,
            "nsfw": false,
            "character": null,
            "tags": [
                "pink hair",
                "cute"
            ]
        }
    ]
}`,
    },
    {
        category: "Images",
        path: "/v1/img/",
        method: "POST",
        summary: "Post a new image",
        description:
            "Downloads an image from the provided URL, saves it locally, and stores its metadata in the database. Only users with at least the **team** role are authorized.",
        responseExample:
`{
  "detail": "Image added successfully.",
  "image": {
    "_id": "615d2b4e1d5c3a1f8c3e1d4f",
    "url": "https://cdn.nijii.xyz/images/waifu/unique_filename.jpg",
    "category": "waifu",
    "anime": "My Hero Academia",
    "nsfw": false,
    "character": "Ochaco Uraraka",
    "tags": [
      "cute",
      "anime"
    ]
  }
}`,
    },
    {
        category: "Images",
        path: "/v1/img/{image_id}",
        method: "PUT",
        summary: "Update an existing image",
        description:
            "Updates an existing image record. Only **admin** users are authorized to update images.",
        responseExample:
`{
  "detail": "Image updated successfully.",
  "image": {
    "_id": "615d2b4e1d5c3a1f8c3e1d4f",
    "url": "https://cdn.nijii.xyz/images/waifu/new_unique_filename.jpg",
    "category": "waifu",
    "anime": "My Hero Academia",
    "nsfw": false,
    "character": "Ochaco Uraraka",
    "tags": [
      "cute",
      "anime"
    ]
  }
}`,
    },
    {
        category: "Images",
        path: "/v1/img/{image_id}",
        method: "DELETE",
        summary: "Delete an existing image",
        description:
            "Deletes an image record from the database and removes its corresponding file from disk. Only **admin** users are authorized to delete images.",
        responseExample:
`{
  "detail": "Image deleted successfully."
}`,
    },
];

export const InteractiveSidebarDocs: React.FC = () => {
    const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint | null>(null);
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
    const [searchTerm, setSearchTerm] = useState("");

    const categories = Array.from(new Set(endpoints.map((ep) => ep.category)));

    const filteredEndpoints = endpoints.filter((ep) =>
        ep.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ep.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ep.method.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const endpointsByCategory = categories.reduce<Record<string, Endpoint[]>>((acc, category) => {
        acc[category] = filteredEndpoints.filter((ep) => ep.category === category);
        return acc;
    }, {});

    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const getMethodColor = (method: string): string => {
        switch (method.toUpperCase()) {
            case "POST":
                return "bg-orange-500";
            case "PUT":
                return "bg-yellow-500";
            case "DELETE":
                return "bg-red-500";
            case "GET":
                return "bg-green-500";
            default:
                return "bg-blue-500";
        }
    };

    return (
        <div className="flex flex-col md:flex-row bg-gray-900 text-gray-100 mx-4 my-4 rounded-lg shadow-lg ml-16 mr-16">
            <aside className="md:w-1/4 border-r border-gray-700 p-4">
                <input
                    type="text"
                    placeholder="Search endpoints..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {searchTerm.length > 0 ? (
                    <>
                        <h3 className="text-lg font-bold text-gray-100 mb-2">Search Results</h3>
                        <ul className="ml-4">
                            {filteredEndpoints.length > 0 ? (
                                filteredEndpoints.map((ep, idx) => (
                                    <li key={idx} className="mb-2">
                                        <button
                                            onClick={() => setSelectedEndpoint(ep)}
                                            className="text-left w-full p-2 rounded hover:bg-blue-700 focus:outline-none transition-colors"
                                        >
                      <span
                          className={`text-xs font-mono font-bold text-white ${getMethodColor(
                              ep.method
                          )} px-2 py-1 rounded mr-2`}
                      >
                        {ep.method}
                      </span>
                                            <span className="text-sm text-gray-200">{ep.path}</span>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <div className="text-sm text-gray-500">No results found.</div>
                            )}
                        </ul>
                    </>
                ) : (
                    categories.map((category) => (
                        <div key={category} className="mb-4">
                            <div
                                className="flex items-center justify-between cursor-pointer text-lg font-bold text-gray-100 hover:text-blue-400 transition-colors"
                                onClick={() => toggleCategory(category)}
                            >
                                <span>{category}</span>
                                <span>{expandedCategories[category] ? "−" : "+"}</span>
                            </div>
                            {expandedCategories[category] && (
                                <ul className="mt-2 ml-4">
                                    {endpointsByCategory[category]?.map((ep, idx) => (
                                        <li key={idx} className="mb-2">
                                            <button
                                                onClick={() => setSelectedEndpoint(ep)}
                                                className="text-left w-full p-2 rounded hover:bg-blue-700 focus:outline-none transition-colors"
                                            >
                        <span
                            className={`text-xs font-mono font-bold text-white ${getMethodColor(
                                ep.method
                            )} px-2 py-1 rounded mr-2`}
                        >
                          {ep.method}
                        </span>
                                                <span className="text-sm text-gray-200">{ep.path}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))
                )}
            </aside>

            <main className="flex-1 p-6">
                {selectedEndpoint ? (
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                        <button
                            onClick={() => setSelectedEndpoint(null)}
                            className="mb-4 text-blue-400 hover:underline"
                        >
                            &larr; Back to list
                        </button>
                        <h2 className="text-2xl font-bold text-gray-100 mb-2">
                            {selectedEndpoint.path}
                        </h2>
                        <div className="flex items-center mb-4">
              <span
                  className={`text-xs font-mono font-bold text-white ${getMethodColor(
                      selectedEndpoint.method
                  )} px-3 py-1 rounded-full mr-4`}
              >
                {selectedEndpoint.method}
              </span>
                            <span className="text-lg text-gray-200">
                {selectedEndpoint.summary}
              </span>
                        </div>
                        <div className="text-gray-200 mb-4">
                            <strong>Description:</strong>
                            <div className="mt-1 whitespace-pre-line">
                                {selectedEndpoint.description}
                            </div>
                        </div>
                        {selectedEndpoint.responseExample && (
                            <div className="bg-gray-700 p-4 rounded border border-gray-600">
                                <strong>Response Example:</strong>
                                <pre className="mt-2 text-sm text-gray-100 overflow-x-auto whitespace-pre-wrap">
                  {selectedEndpoint.responseExample}
                </pre>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 py-20">
                        <p className="text-lg">
                            Select an endpoint from the sidebar to view details.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};
