import { useEffect, useState } from "react";
import "./App.css";

const categories = [
  {
    name: "PDF & Documents",
    description: "Convert, edit, sign & manage",
    icon: "▤",
  },
  {
    name: "Images",
    description: "Edit, resize, convert & create",
    icon: "◫",
  },
  {
    name: "Video",
    description: "Convert, compress & edit",
    icon: "▶",
  },
  {
    name: "Audio",
    description: "Convert, trim & enhance",
    icon: "◉",
  },
  {
    name: "AI Tools",
    description: "Create, automate & explore",
    icon: "✦",
  },
  {
    name: "Design",
    description: "Create graphics & visuals",
    icon: "◇",
  },
  {
    name: "Writing",
    description: "Write, rewrite & improve",
    icon: "Aa",
  },
  {
    name: "Developer",
    description: "Code, test & build",
    icon: "</>",
  },
];


/*
  TEMPORARY TOOL DATABASE

  This is only for testing the Itfinds search experience.
  Later we will replace this with Cloudflare D1.
*/

const tools = [
  // =========================
  // PDF & DOCUMENTS
  // =========================

  {
    id: "ilovepdf",
    name: "iLovePDF",
    description: "Complete online PDF tools for compressing, merging, splitting, converting and editing PDF files.",
    category: "PDF & Documents",
    pricing: "Free",
    platform: "Web",
    url: "https://www.ilovepdf.com/",
    capabilities: [
      "compress pdf",
      "merge pdf",
      "split pdf",
      "convert pdf",
      "edit pdf",
      "pdf to jpg",
      "jpg to pdf"
    ],
    tags: ["PDF", "Converter", "Documents"]
  },

  {
    id: "smallpdf",
    name: "Smallpdf",
    description: "Online PDF tools for compression, conversion, editing, signing and managing documents.",
    category: "PDF & Documents",
    pricing: "Free",
    platform: "Web",
    url: "https://smallpdf.com/",
    capabilities: [
      "compress pdf",
      "merge pdf",
      "split pdf",
      "convert pdf",
      "edit pdf",
      "sign pdf",
      "pdf converter"
    ],
    tags: ["PDF", "Documents", "Converter"]
  },

  {
    id: "pdf24",
    name: "PDF24 Tools",
    description: "A large collection of free online PDF tools for editing, converting, merging and optimizing documents.",
    category: "PDF & Documents",
    pricing: "Free",
    platform: "Web",
    url: "https://tools.pdf24.org/",
    capabilities: [
      "compress pdf",
      "merge pdf",
      "split pdf",
      "edit pdf",
      "convert pdf",
      "pdf to image",
      "image to pdf"
    ],
    tags: ["PDF", "Free", "Documents"]
  },

  {
    id: "adobe-pdf",
    name: "Adobe Acrobat Online",
    description: "Adobe's online PDF tools for converting, compressing, editing and signing PDF documents.",
    category: "PDF & Documents",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.adobe.com/acrobat/online.html",
    capabilities: [
      "compress pdf",
      "edit pdf",
      "convert pdf",
      "sign pdf",
      "pdf converter"
    ],
    tags: ["PDF", "Adobe", "Documents"]
  },

  {
    id: "pdf-candy",
    name: "PDF Candy",
    description: "Online PDF toolkit for conversion, compression, editing and document management.",
    category: "PDF & Documents",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://pdfcandy.com/",
    capabilities: [
      "compress pdf",
      "merge pdf",
      "split pdf",
      "convert pdf",
      "edit pdf",
      "pdf to jpg",
      "jpg to pdf"
    ],
    tags: ["PDF", "Converter", "Documents"]
  },

  {
    id: "tinywow",
    name: "TinyWow",
    description: "A broad collection of free tools for PDFs, images, documents, videos and other everyday tasks.",
    category: "PDF & Documents",
    pricing: "Free",
    platform: "Web",
    url: "https://tinywow.com/",
    capabilities: [
      "compress pdf",
      "merge pdf",
      "convert pdf",
      "edit pdf",
      "image converter",
      "video converter",
      "document converter"
    ],
    tags: ["PDF", "Documents", "Utilities"]
  },


  // =========================
  // IMAGES
  // =========================

  {
    id: "tinypng",
    name: "TinyPNG",
    description: "Compress PNG and JPEG images while reducing file size with minimal visible quality loss.",
    category: "Images",
    pricing: "Free",
    platform: "Web",
    url: "https://tinypng.com/",
    capabilities: [
      "compress image",
      "compress png",
      "compress jpg",
      "reduce image size",
      "optimize image"
    ],
    tags: ["Images", "Compression", "PNG"]
  },

  {
    id: "removebg",
    name: "Remove.bg",
    description: "Automatically remove backgrounds from images using AI.",
    category: "Images",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.remove.bg/",
    capabilities: [
      "remove background",
      "background remover",
      "remove photo background",
      "transparent background",
      "cut out image"
    ],
    tags: ["AI", "Background", "Images"]
  },

  {
    id: "squoosh",
    name: "Squoosh",
    description: "Browser-based image compression and optimization tool with detailed control over output quality.",
    category: "Images",
    pricing: "Free",
    platform: "Web",
    url: "https://squoosh.app/",
    capabilities: [
      "compress image",
      "optimize image",
      "reduce image size",
      "convert image"
    ],
    tags: ["Images", "Compression", "Optimization"]
  },

  {
    id: "photopea",
    name: "Photopea",
    description: "A powerful browser-based image editor supporting PSD and many other image formats.",
    category: "Images",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.photopea.com/",
    capabilities: [
      "edit photo",
      "edit image",
      "photoshop alternative",
      "remove background",
      "graphic design"
    ],
    tags: ["Editor", "Photoshop", "Design"]
  },

  {
    id: "pixlr",
    name: "Pixlr",
    description: "Online photo editor with tools for editing, designing and enhancing images.",
    category: "Images",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://pixlr.com/",
    capabilities: [
      "edit photo",
      "edit image",
      "photo editor",
      "background removal",
      "image design"
    ],
    tags: ["Images", "Editor", "Design"]
  },

  {
    id: "canva",
    name: "Canva",
    description: "Design platform for creating graphics, presentations, social posts, documents and more.",
    category: "Design",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.canva.com/",
    capabilities: [
      "design image",
      "create poster",
      "make presentation",
      "social media design",
      "edit photo",
      "create logo"
    ],
    tags: ["Design", "Graphics", "Presentations"]
  },


  // =========================
  // VIDEO
  // =========================

  {
    id: "handbrake",
    name: "HandBrake",
    description: "Open-source video transcoder for converting and compressing video files.",
    category: "Video",
    pricing: "Free",
    platform: "Desktop",
    url: "https://handbrake.fr/",
    capabilities: [
      "compress video",
      "convert video",
      "video converter",
      "reduce video size"
    ],
    tags: ["Video", "Compression", "Converter"]
  },

  {
    id: "cloudconvert",
    name: "CloudConvert",
    description: "Online file converter supporting video, audio, images, documents and many other formats.",
    category: "Video",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://cloudconvert.com/",
    capabilities: [
      "convert video",
      "compress video",
      "video converter",
      "convert file",
      "image converter",
      "audio converter"
    ],
    tags: ["Converter", "Video", "Files"]
  },

  {
    id: "veed",
    name: "VEED",
    description: "Online video editor for creating, editing, subtitling and enhancing videos.",
    category: "Video",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.veed.io/",
    capabilities: [
      "edit video",
      "video editor",
      "add subtitles",
      "make video",
      "compress video",
      "screen recorder"
    ],
    tags: ["Video", "Editor", "Subtitles"]
  },

  {
    id: "kapwing",
    name: "Kapwing",
    description: "Online creative studio for editing videos, images, GIFs and social media content.",
    category: "Video",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.kapwing.com/",
    capabilities: [
      "edit video",
      "create video",
      "make gif",
      "resize video",
      "social media video"
    ],
    tags: ["Video", "GIF", "Social Media"]
  },

  {
    id: "ezgif",
    name: "EZGIF",
    description: "Online tools for creating, editing, resizing, converting and optimizing GIFs and videos.",
    category: "Video",
    pricing: "Free",
    platform: "Web",
    url: "https://ezgif.com/",
    capabilities: [
      "make gif",
      "edit gif",
      "compress gif",
      "video to gif",
      "resize video",
      "convert video"
    ],
    tags: ["GIF", "Video", "Animation"]
  },


  // =========================
  // AUDIO
  // =========================

  {
    id: "online-audio-converter",
    name: "Online Audio Converter",
    description: "Convert audio files between popular formats directly in your browser.",
    category: "Audio",
    pricing: "Free",
    platform: "Web",
    url: "https://online-audio-converter.com/",
    capabilities: [
      "convert audio",
      "audio converter",
      "mp3 converter",
      "wav converter"
    ],
    tags: ["Audio", "Converter", "MP3"]
  },

  {
    id: "audiomass",
    name: "AudioMass",
    description: "A lightweight browser-based audio editor for trimming and editing audio.",
    category: "Audio",
    pricing: "Free",
    platform: "Web",
    url: "https://audiomass.co/",
    capabilities: [
      "edit audio",
      "cut audio",
      "trim audio",
      "audio editor"
    ],
    tags: ["Audio", "Editor", "Music"]
  },


  // =========================
  // AI
  // =========================

  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "AI assistant for writing, brainstorming, coding, learning, analysis and everyday tasks.",
    category: "AI Tools",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://chatgpt.com/",
    capabilities: [
      "write text",
      "ask ai",
      "coding",
      "summarize",
      "brainstorm",
      "learn",
      "research"
    ],
    tags: ["AI", "Assistant", "Writing"]
  },

  {
    id: "gemini",
    name: "Google Gemini",
    description: "Google's AI assistant for answering questions, writing, brainstorming and working with information.",
    category: "AI Tools",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://gemini.google.com/",
    capabilities: [
      "ask ai",
      "write text",
      "summarize",
      "brainstorm",
      "research",
      "coding"
    ],
    tags: ["AI", "Google", "Assistant"]
  },

  {
    id: "perplexity",
    name: "Perplexity",
    description: "AI-powered search and research platform for finding information and exploring questions.",
    category: "AI Tools",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.perplexity.ai/",
    capabilities: [
      "ai search",
      "research",
      "search internet",
      "ask questions",
      "find information"
    ],
    tags: ["AI", "Search", "Research"]
  },


  // =========================
  // WRITING
  // =========================

  {
    id: "grammarly",
    name: "Grammarly",
    description: "Writing assistant that helps improve grammar, spelling, clarity and tone.",
    category: "Writing",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.grammarly.com/",
    capabilities: [
      "check grammar",
      "fix grammar",
      "improve writing",
      "proofread",
      "rewrite text"
    ],
    tags: ["Writing", "Grammar", "Editor"]
  },

  {
    id: "quillbot",
    name: "QuillBot",
    description: "Writing tool for paraphrasing, summarizing, grammar checking and improving text.",
    category: "Writing",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://quillbot.com/",
    capabilities: [
      "rewrite text",
      "paraphrase",
      "summarize",
      "check grammar",
      "improve writing"
    ],
    tags: ["Writing", "Paraphrasing", "AI"]
  },

  {
    id: "deepl",
    name: "DeepL",
    description: "Translation service for translating text and documents across many languages.",
    category: "Writing",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.deepl.com/",
    capabilities: [
      "translate text",
      "translate document",
      "language translation"
    ],
    tags: ["Translation", "Languages", "Writing"]
  },


  // =========================
  // DEVELOPER
  // =========================

  {
    id: "github",
    name: "GitHub",
    description: "Platform for hosting code, collaborating on software projects and managing development workflows.",
    category: "Developer",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://github.com/",
    capabilities: [
      "host code",
      "code repository",
      "github repository",
      "collaborate code",
      "software development"
    ],
    tags: ["Code", "Git", "Development"]
  },

  {
    id: "codepen",
    name: "CodePen",
    description: "Online code playground for experimenting with HTML, CSS and JavaScript.",
    category: "Developer",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://codepen.io/",
    capabilities: [
      "test html",
      "test css",
      "test javascript",
      "online code editor",
      "frontend coding"
    ],
    tags: ["Code", "HTML", "CSS"]
  },

  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate and inspect JSON data directly in your browser.",
    category: "Developer",
    pricing: "Free",
    platform: "Web",
    url: "https://jsonformatter.curiousconcept.com/",
    capabilities: [
      "format json",
      "validate json",
      "json formatter",
      "json validator"
    ],
    tags: ["JSON", "Developer", "Formatter"]
  },


  // =========================
  // QR & UTILITIES
  // =========================

  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description: "Create QR codes for websites, text, contact information and other content.",
    category: "Utilities",
    pricing: "Free / Paid",
    platform: "Web",
    url: "https://www.qr-code-generator.com/",
    capabilities: [
      "create qr code",
      "make qr code",
      "generate qr",
      "qr generator"
    ],
    tags: ["QR", "Generator", "Utilities"]
  },

  {
    id: "tinywow",
    name: "TinyWow",
    description: "Collection of convenient online tools for documents, images, videos and everyday digital tasks.",
    category: "Utilities",
    pricing: "Free",
    platform: "Web",
    url: "https://tinywow.com/",
    capabilities: [
      "convert file",
      "compress file",
      "edit document",
      "convert image",
      "convert video"
    ],
    tags: ["Utilities", "Files", "Tools"]
  }
];
function getSearchSuggestions(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const suggestions = [];

  tools.forEach((tool) => {
    if (!Array.isArray(tool.capabilities)) {
      return;
    }

    tool.capabilities.forEach((capability) => {
      const normalizedCapability = capability.toLowerCase();

      if (
        normalizedCapability.includes(normalizedQuery) ||
        normalizedQuery.includes(normalizedCapability)
      ) {
        suggestions.push({
          text: capability,
          category: tool.category,
          tool: tool.name
        });
      }
    });
  });

  const uniqueSuggestions = [];

  suggestions.forEach((suggestion) => {
    const alreadyExists = uniqueSuggestions.some(
      (item) => item.text.toLowerCase() === suggestion.text.toLowerCase()
    );

    if (!alreadyExists) {
      uniqueSuggestions.push(suggestion);
    }
  });

  return uniqueSuggestions.slice(0, 6);
}

const popularSearches = [
  "PDF compressor",
  "Remove background",
  "Images to PDF",
  "Video compressor",
  "QR code generator",
  "Image converter",
];
const toolIconMap = {
  "iLovePDF": "https://cdn.simpleicons.org/ilovepdf",
  "Smallpdf": "https://cdn.simpleicons.org/smallpdf",
  "PDF24 Tools": "https://cdn.simpleicons.org/pdf24",
  "TinyPNG": "https://cdn.simpleicons.org/tinypng",
  "Remove.bg": "https://cdn.simpleicons.org/removebg",
  "CloudConvert": "https://cdn.simpleicons.org/cloudconvert",
  "HandBrake": "https://cdn.simpleicons.org/handbrake",
  "Canva": "https://cdn.simpleicons.org/canva",
  "ChatGPT": "https://cdn.simpleicons.org/openai",
  "GitHub": "https://cdn.simpleicons.org/github",
  "CodePen": "https://cdn.simpleicons.org/codepen",
  "Photopea": "https://cdn.simpleicons.org/photopea",
  "Pixlr": "https://cdn.simpleicons.org/pixlr",
  "Squoosh": "https://cdn.simpleicons.org/squoosh",
  "Grammarly": "https://cdn.simpleicons.org/grammarly",
  "QuillBot": "https://cdn.simpleicons.org/quillbot",
  "DeepL": "https://cdn.simpleicons.org/deepl",
  "Google Gemini": "https://cdn.simpleicons.org/googlegemini",
  "Perplexity": "https://cdn.simpleicons.org/perplexity",
  "VEED": "https://cdn.simpleicons.org/veed",
  "Kapwing": "https://cdn.simpleicons.org/kapwing",
  "EZGIF": "https://cdn.simpleicons.org/ezgif",
  "Google Docs": "https://cdn.simpleicons.org/googledocs",
  "Adobe Acrobat Online": "https://cdn.simpleicons.org/adobeacrobatreader",
  "QR Code Generator": "https://cdn.simpleicons.org/qrcode"
};

function getToolFavicon(tool) {
  try {
    const hostname = new URL(tool.url).hostname.replace(/^www\./, "");

    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
  } catch {
    return null;
  }
}

function getToolIcon(tool) {
  return toolIconMap[tool.name] || getToolFavicon(tool);
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

function searchTools(query) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return [];
  }

  const queryWords = normalizedQuery
    .split(" ")
    .filter((word) => word.length > 1);

  const results = tools.map((tool) => {
    let score = 0;

    const name = normalize(tool.name);
    const description = normalize(tool.description);
    const category = normalize(tool.category);
    const capabilities = tool.capabilities.map(normalize);
    const tags = tool.tags.map(normalize);

    // Exact tool name
    if (name === normalizedQuery) {
      score += 100;
    }

    // Tool name contains query
    if (name.includes(normalizedQuery)) {
      score += 60;
    }

    // Category match
    if (category.includes(normalizedQuery)) {
      score += 35;
    }

    // Capability match
    capabilities.forEach((capability) => {
      if (capability === normalizedQuery) {
        score += 70;
      }

      if (capability.includes(normalizedQuery)) {
        score += 45;
      }

      queryWords.forEach((word) => {
        if (capability.includes(word)) {
          score += 12;
        }
      });
    });

    // Tag match
    tags.forEach((tag) => {
      if (tag.includes(normalizedQuery)) {
        score += 25;
      }

      queryWords.forEach((word) => {
        if (tag.includes(word)) {
          score += 8;
        }
      });
    });

    // Description match
    queryWords.forEach((word) => {
      if (description.includes(word)) {
        score += 5;
      }

      if (name.includes(word)) {
        score += 15;
      }

      if (category.includes(word)) {
        score += 10;
      }
    });

    return {
      ...tool,
      relevanceScore: score
    };
  });

  return results
    .filter((tool) => tool.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);

const searchSuggestions = showSuggestions
  ? getSearchSuggestions(search)
  : [];
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    document.title = "Itfinds — Discover the Right Tool | by Abhs";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      "Itfinds by Abhs helps you discover useful online tools for everyday tasks, work, study, creativity and more."
    );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (!query) return;

    const foundTools = searchTools(query);

    setResults(foundTools);
    setShowResults(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePopularSearch = (item) => {
    setSearch(item);

    const foundTools = searchTools(item);

    setResults(foundTools);
    setShowResults(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCategory = (category, index) => {
    setActiveCategory(index);
    setSearch(category.name);

    const foundTools = tools.filter(
      (tool) => tool.category === category.name
    );

    setResults(foundTools);
    setShowResults(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    setShowResults(false);
    setResults([]);
    setActiveCategory(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <div className="ambient ambient-three"></div>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">
          <button
  className="logo logo-button"
  onClick={goHome}
  type="button"
  aria-label="Go to Itfinds home"
>
  <span className="logo-symbol">
    <img src="/favicon.svg" alt="" />
  </span>

  <span className="logo-name">
    <span>Itfinds</span>
    <small>by Abhs</small>
  </span>
</button>

          <nav className="nav-links">
            <a href="#categories">Categories</a>

            <a href="#popular">Popular</a>

            <a href="#how-it-works">How it works</a>
          </nav>

          <a href="#submit" className="submit-nav">
            Submit a tool
            <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        {/* ================= HOME ================= */}

        {!showResults && (
          <>
            {/* HERO */}

            <section className="hero">
              <div className="hero-content">
                <div className="hero-pill">
                  <span className="status-dot"></span>
                  Discover useful tools from across the web
                </div>

                <div className="hero-brand">
                  <span>Itfinds</span>
                  <small>by Abhs</small>
                </div>

                <h1>
                  There’s a tool
                  <br />
                  <span>for almost everything.</span>
                </h1>

                <p className="hero-description">
                  Tell Itfinds what you want to do.
                  <br className="desktop-break" />
                  We'll help you find the right online tool.
                </p>

                <form
  className="main-search"
  onSubmit={handleSearch}
>
  <div className="search-icon">
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
      />
      <path d="m20 20-4-4" />
    </svg>
  </div>

  <input
  type="text"
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setShowSuggestions(true);
    setSelectedSuggestion(-1);
  }}
  onFocus={() => {
    if (search.trim()) {
      setShowSuggestions(true);
    }
  }}
  onKeyDown={(e) => {
    if (!showSuggestions || searchSuggestions.length === 0) {
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setSelectedSuggestion((current) =>
        current < searchSuggestions.length - 1
          ? current + 1
          : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setSelectedSuggestion((current) =>
        current > 0
          ? current - 1
          : searchSuggestions.length - 1
      );
    }

    if (e.key === "Enter" && selectedSuggestion >= 0) {
      e.preventDefault();

      const suggestion =
        searchSuggestions[selectedSuggestion];

      setSearch(suggestion.text);
      setShowSuggestions(false);
      setSelectedSuggestion(-1);
    }

    if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedSuggestion(-1);
    }
  }}
  placeholder="What do you want to do?"
  aria-label="Search for a tool"
/>

  <button type="submit">
    Search
    <span>→</span>
  </button>

  {showSuggestions && searchSuggestions.length > 0 && (
    <div className="search-suggestions">
      {searchSuggestions.map((suggestion, index) => (
        <button
  key={`${suggestion.text}-${index}`}
  className={`search-suggestion ${
    selectedSuggestion === index
      ? "selected"
      : ""
  }`}
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();

            setSearch(suggestion.text);
            setShowSuggestions(false);
          }}
        >
          <span className="suggestion-icon">⌕</span>

          <span className="suggestion-content">
            <span className="suggestion-text">
              {suggestion.text}
            </span>

            <span className="suggestion-meta">
              {suggestion.category}
            </span>
          </span>

          <span className="suggestion-arrow">↗</span>
        </button>
      ))}
    </div>
  )}
</form>

                <div className="search-examples">
                  <span>Try:</span>

                  {[
                    "images to PDF",
                    "compress a video",
                    "remove background",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        handlePopularSearch(item)
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="floating-card floating-card-one">
                <div className="mini-icon purple">
                  PDF
                </div>

                <div>
                  <strong>PDF Tools</strong>

                  <small>Convert & edit</small>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <div className="mini-icon blue">
                  IMG
                </div>

                <div>
                  <strong>Image Tools</strong>

                  <small>Resize & transform</small>
                </div>
              </div>

              <div className="floating-card floating-card-three">
                <div className="mini-icon orange">
                  AI
                </div>

                <div>
                  <strong>AI Tools</strong>

                  <small>Create anything</small>
                </div>
              </div>
            </section>

            {/* DISCOVERY STRIP */}

            <section className="discovery-strip">
              <div className="discovery-item">
                <strong>01</strong>

                <span>Search by what you need</span>
              </div>

              <div className="discovery-line"></div>

              <div className="discovery-item">
                <strong>02</strong>

                <span>Discover useful tools</span>
              </div>

              <div className="discovery-line"></div>

              <div className="discovery-item">
                <strong>03</strong>

                <span>Get straight to work</span>
              </div>
            </section>

            {/* POPULAR */}

            <section
              className="content-section popular-section"
              id="popular"
            >
              <div className="section-top">
                <div>
                  <span className="section-kicker">
                    PEOPLE ARE SEARCHING FOR
                  </span>

                  <h2>Popular right now</h2>
                </div>

                <span className="section-note">
                  Explore what others are looking for
                </span>
              </div>

              <div className="popular-grid">
                {popularSearches.map((item, index) => (
                  <button
                    className="popular-card"
                    key={item}
                    onClick={() =>
                      handlePopularSearch(item)
                    }
                    type="button"
                  >
                    <span className="popular-index">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="popular-text">
                      {item}
                    </span>

                    <span className="popular-arrow">
                      ↗
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* CATEGORIES */}

            <section
              className="content-section categories-section"
              id="categories"
            >
              <div className="section-top">
                <div>
                  <span className="section-kicker">
                    EXPLORE THE COLLECTION
                  </span>

                  <h2>Find your category</h2>
                </div>

                <span className="section-note">
                  More categories coming soon
                </span>
              </div>

              <div className="category-grid">
                {categories.map((category, index) => (
                  <button
                    className={`category-card ${
                      activeCategory === index
                        ? "active"
                        : ""
                    }`}
                    key={category.name}
                    type="button"
                    onClick={() =>
                      handleCategory(
                        category,
                        index
                      )
                    }
                  >
                    <div className="category-top">
                      <div className="category-icon">
                        {category.icon}
                      </div>

                      <span className="category-arrow">
                        ↗
                      </span>
                    </div>

                    <div className="category-bottom">
                      <h3>{category.name}</h3>

                      <p>{category.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* HOW IT WORKS */}

            <section
              className="content-section how-section"
              id="how-it-works"
            >
              <div className="how-heading">
                <span className="section-kicker">
                  HOW ITFINDS WORKS
                </span>

                <h2>
                  From “I need this”
                  <br />
                  to <span>“done.”</span>
                </h2>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="step-number">
                    01
                  </div>

                  <div>
                    <h3>Tell us what you need</h3>

                    <p>
                      Search naturally. You don't
                      need to know the name of the
                      tool.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">
                    02
                  </div>

                  <div>
                    <h3>Discover the right tool</h3>

                    <p>
                      Itfinds finds tools that
                      match the task you're trying
                      to accomplish.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">
                    03
                  </div>

                  <div>
                    <h3>Get it done</h3>

                    <p>
                      Open the tool and complete
                      your task directly on its
                      website.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SUBMIT */}

            <section
              className="submit-section"
              id="submit"
            >
              <div className="submit-glow"></div>

              <div className="submit-content">
                <span className="section-kicker">
                  FOR TOOL CREATORS
                </span>

                <h2>
                  Built something
                  <br />
                  <span>people need?</span>
                </h2>

                <p>
                  Submit your tool to Itfinds and
                  help people discover it when
                  they're looking for exactly what
                  it does.
                </p>

                <button
                  className="submit-button"
                  type="button"
                >
                  Submit your tool
                  <span>↗</span>
                </button>
              </div>

              <div className="submit-orbit orbit-one"></div>
              <div className="submit-orbit orbit-two"></div>
              <div className="submit-orbit orbit-three"></div>
            </section>
          </>
        )}

        {/* ================= SEARCH RESULTS ================= */}

        {showResults && (
          <section className="results-page">
            <div className="results-container">
              <div className="results-header">
                <button
                  className="back-button"
                  type="button"
                  onClick={goHome}
                >
                  ←
                  <span>Back to Itfinds</span>
                </button>

                <div className="results-title">
                  <span className="section-kicker">
                    SEARCH RESULTS
                  </span>

                  <h1>
                    Results for{" "}
                    <span>“{search}”</span>
                  </h1>

                  <p>
                    {results.length}{" "}
                    {results.length === 1
                      ? "tool"
                      : "tools"}{" "}
                    found
                  </p>
                </div>

                <form
                  className="results-search"
                  onSubmit={handleSearch}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                    />
                    <path d="m20 20-4-4" />
                  </svg>

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search again..."
                  />

                  <button type="submit">
                    Search
                  </button>
                </form>
              </div>

              {results.length > 0 ? (
                <div className="results-list">
                {results.map((tool, index) => (
  <article
    className={`tool-result ${
      index === 0 ? "tool-result-featured" : ""
    }`}
    key={tool.id}
  >
    {/* RESULT NUMBER */}
    <div className="tool-result-number">
      {String(index + 1).padStart(2, "0")}
    </div>

    {/* TOOL CONTENT */}
    <div className="tool-result-main">

      <div className="tool-result-top">

        <div className="tool-identity">

          {/* TOOL ICON */}
          <div className="tool-logo">
  {getToolIcon(tool) ? (
    <>
      <img
        src={getToolIcon(tool)}
        alt={`${tool.name} logo`}
        loading="lazy"
        onError={(e) => {
          const fallback = getToolFavicon(tool);

          if (fallback && e.currentTarget.src !== fallback) {
            e.currentTarget.src = fallback;
            return;
          }

          e.currentTarget.style.display = "none";

          if (e.currentTarget.nextElementSibling) {
            e.currentTarget.nextElementSibling.style.display = "flex";
          }
        }}
      />

      <span className="tool-logo-fallback">
        {tool.name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </span>
    </>
  ) : (
    <span>
      {tool.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()}
    </span>
  )}
</div>

          <div className="tool-title-area">

            <div className="tool-name-row">

              <h2>
                {tool.name}
              </h2>

              {index === 0 && (
                <span className="best-match">
                  Best match
                </span>
              )}

            </div>

            <span className="tool-category">
              {tool.category}
            </span>

          </div>

        </div>

        <p className="tool-description">
          {tool.description}
        </p>

      </div>

      {/* TOOL TAGS */}
      <div className="tool-meta">

        <span className="tool-tag">
          ✓ {tool.pricing}
        </span>

        <span className="tool-tag">
          ◉ {tool.platform}
        </span>

        <span className="tool-tag">
          ↗ Opens externally
        </span>

      </div>

    </div>

    {/* VISIT BUTTON */}
    <a
      className="visit-tool"
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Open Tool</span>
      <span className="visit-arrow">↗</span>
    </a>

  </article>
))}
                </div>
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">
                    ?
                  </div>

                  <h2>
                    We couldn't find a tool for that.
                  </h2>

                  <p>
                    Try describing the task differently.
                    For example, instead of “small PDF”,
                    try “compress PDF”.
                  </p>

                  <div className="suggestions">
                    <span>Try searching:</span>

                    {[
                      "compress PDF",
                      "remove background",
                      "compress video",
                      "image converter",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          handlePopularSearch(item)
                        }
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <button
              className="logo logo-button footer-logo"
              onClick={goHome}
              type="button"
            >
             <span className="logo-symbol">
  <img src="/favicon.svg" alt="" />
</span>

              <span className="logo-name">
                <span>Itfinds</span>
                <small>by Abhs</small>
              </span>
            </button>

            <p>
              Find the tool.
              <br />
              Get it done.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <span>EXPLORE</span>

              <a href="#categories">
                Categories
              </a>

              <a href="#popular">
                Popular tools
              </a>

              <a href="#how-it-works">
                How it works
              </a>
            </div>

            <div className="footer-column">
              <span>COMMUNITY</span>

              <a href="#submit">
                Submit a tool
              </a>

              <a href="#submit">
                Tool creators
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Itfinds
            <b className="footer-company">
              {" "}
              · A product by Abhs
            </b>
          </span>

          <span>
            A search engine for getting things done.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
