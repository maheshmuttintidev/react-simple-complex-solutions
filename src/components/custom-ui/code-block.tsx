import Prism from "prismjs";
import "prismjs/themes/prism.css";
import React from "react";

export function CodeBlock({ code, language }: any) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied");
  };
  return (
    <div className="relative p-4 bg-gray-100">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Copy
      </button>
      <pre className={`language-${language}`}>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages[language], language),
          }}
        />
      </pre>
    </div>
  );
}
