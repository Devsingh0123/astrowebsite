import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ServiceDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const file = await import(`../content/services/${slug}.md?raw`);
        setContent(file.default);
      } catch (err) {
        setContent("# Service Not Found");
      }
    };

    loadMarkdown();
  }, [slug]);

  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {slug.replaceAll("-", " ").toUpperCase()}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <article
            className="
                        prose prose-lg max-w-none
                        prose-headings:text-gray-900
                        prose-h1:text-3xl
                        prose-h2:text-2xl
                        prose-h3:text-xl
                        prose-p:text-gray-700
                        prose-strong:text-orange-600
                        prose-ul:pl-6
                    "
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
