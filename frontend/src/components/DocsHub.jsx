import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, BookOpen, ChevronRight, Copy, Check, FileText, 
  ArrowLeft, Download, Terminal, Layers, ShieldCheck, Cpu 
} from 'lucide-react';
import { DOCS_SECTIONS} from '../docsData';
import { useLocation, useNavigate } from 'react-router-dom';


export default function DocsHub({ onBackToProduct }) {
  const [selectedId, setSelectedId] = useState('welcome');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
  // Group sections by category
  const categories = useMemo(() => {
    const list = {
      'Getting Started': [],
      'Core Features': [],
      'Advanced': [],
      'Developers': [],
      'Resources': []
    };
    
    DOCS_SECTIONS.forEach(sec => {
      if (list[sec.category]) {
        list[sec.category].push(sec);
      }
    });
    return list;
  }, []);

  // Filter sections by search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return DOCS_SECTIONS;
    const query = searchQuery.toLowerCase();
    return DOCS_SECTIONS.filter(
      sec => 
        sec.title.toLowerCase().includes(query) || 
        sec.content.toLowerCase().includes(query) ||
        sec.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Active section data
  const activeSection = useMemo(() => {
    return DOCS_SECTIONS.find(sec => sec.id === selectedId) || DOCS_SECTIONS[0];
  }, [selectedId]);

  // Handle code snippet copy
  const handleCopyCode = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Compile full markdown for download
  const handleDownloadFullMarkdown = () => {
    const fullMarkdown = DOCS_SECTIONS.map(sec => sec.content).join('\n\n---\n\n');
    const blob = new Blob([fullMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'OrderShield_Full_Documentation.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper to parse simple markdown to jsx style
  const renderMarkdown = (content) => {
    const lines = content.split('\n');
    let inList = false;
    let listItems = [];
    let inCodeBlock = false;
    let codeBlockContent = [];
    let inTable = false;
    let tableRows = [];

    const elements = [];

    const flushList = (key) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-6 space-y-2 my-4 text-paragraph leading-relaxed" id={`list-${key}`}>
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushTable = (key) => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const bodyRows = tableRows.slice(2); // Skip header separator row
        elements.push(
          <div key={`table-wrapper-${key}`} className="overflow-x-auto my-6 border border-white/5 rounded-xl bg-white/[0.01]" id={`table-wrapper-${key}`}>
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  {headers.map((h, idx) => (
                    <th key={idx} className="p-4 font-semibold text-white tracking-wide" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(h.trim()) }} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.01] transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-4 text-paragraph leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(cell.trim()) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Table parsing
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        flushList(index);
        inTable = true;
        const cols = trimmed.split('|').slice(1, -1);
        tableRows.push(cols);
        return;
      } else if (inTable && !trimmed.startsWith('|')) {
        flushTable(index);
      }

      // Code Block parsing
      if (trimmed.startsWith('```')) {
        flushList(index);
        if (inCodeBlock) {
          // close block
          const codeString = codeBlockContent.join('\n');
          const uniqueId = `code-${index}`;
          elements.push(
            <div key={uniqueId} className="relative my-6 rounded-xl border border-white/10 bg-[#0A0E17] overflow-hidden group" id={uniqueId}>
              <div className="flex items-center justify-between px-4 py-2 bg-white/[0.02] border-b border-white/5 text-xs text-muted font-mono">
                <span>PHP SOURCE</span>
                <button
                  onClick={() => handleCopyCode(codeString, uniqueId)}
                  className="flex items-center space-x-1 hover:text-white transition-colors"
                >
                  {copiedId === uniqueId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-xs font-mono text-cyan-300 leading-relaxed">
                <code>{codeString}</code>
              </pre>
            </div>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Headers
      if (trimmed.startsWith('# ')) {
        flushList(index);
        elements.push(
          <h1 key={index} className="text-3xl md:text-4xl font-bold font-display text-white mt-4 mb-6 tracking-tight border-b border-white/5 pb-4" id={`h1-${index}`}>
            {trimmed.substring(2)}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList(index);
        elements.push(
          <h2 key={index} className="text-xl md:text-2xl font-bold font-display text-white mt-8 mb-4 tracking-tight flex items-center space-x-2" id={`h2-${index}`}>
            <span className="w-1.5 h-5 bg-accent-primary rounded-full inline-block mr-2" />
            <span>{trimmed.substring(3)}</span>
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList(index);
        elements.push(
          <h3 key={index} className="text-lg font-semibold text-white mt-6 mb-3 tracking-tight" id={`h3-${index}`}>
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        flushList(index);
        elements.push(
          <h4 key={index} className="text-base font-semibold text-accent-primary mt-6 mb-2 tracking-tight" id={`h4-${index}`}>
            {trimmed.substring(5)}
          </h4>
        );
      }
      // List items
      else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        inList = true;
        listItems.push(trimmed.substring(2));
      } else if (trimmed.match(/^\d+\.\s/)) {
        flushList(index);
        const text = trimmed.replace(/^\d+\.\s/, '');
        elements.push(
          <div key={index} className="flex items-start space-x-3 my-4" id={`ol-${index}`}>
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-xs font-mono text-accent-primary font-bold mt-0.5">
              {trimmed.match(/^\d+/)?.[0]}
            </span>
            <p className="text-paragraph leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(text) }} />
          </div>
        );
      }
      // Warnings or info callouts
      else if (trimmed.startsWith('> ⚠️')) {
        flushList(index);
        elements.push(
          <div key={index} className="my-6 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-200 text-sm leading-relaxed flex items-start space-x-3" id={`warn-${index}`}>
            <span className="text-xl">⚠️</span>
            <div>
              <strong className="text-white block mb-1">CRITICAL SYSTEM ADVISORY</strong>
              <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed.substring(4).trim()) }} />
            </div>
          </div>
        );
      } else if (trimmed.startsWith('> ')) {
        flushList(index);
        elements.push(
          <div key={index} className="my-6 p-4 rounded-xl border border-accent-primary/20 bg-accent-primary/[0.03] text-paragraph text-sm leading-relaxed flex items-start space-x-3" id={`info-${index}`}>
            <span className="text-xl">💡</span>
            <div>
              <strong className="text-white block mb-1">ADMINISTRATOR NOTE</strong>
              <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed.substring(2).trim()) }} />
            </div>
          </div>
        );
      }
      // Image screenshot placeholders
      
      
    });

    flushList(lines.length);
    flushTable(lines.length);

    return elements;
  };

  const parseInlineMarkdown = (text) => {
    let html = text;
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
    // Inline code
    html = html.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300 font-mono text-xs">$1</code>');
    return html;
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-24 pb-12 relative" id="docs-hub-root">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back and Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/5 pb-6 mb-8 gap-4">
          <div className="flex items-center space-x-4">
            
            <div className="h-6 w-px bg-white/5 hidden md:block" />
            <div >
              <div className="flex items-center space-x-2 pb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-primary">Documentation Portal</span>
                <span className="text-[10px] bg-accent-primary/10 text-accent-primary px-2 py-0.5 rounded font-mono">v1.0.0</span>
              </div>
              <h1 className="text-xl font-bold text-white tracking-tight">OrderShield Technical Wiki</h1>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={handleDownloadFullMarkdown}
              className="flex items-center justify-center space-x-2 w-full md:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-primary to-[#FF4D00] text-sm font-bold text-white shadow-lg shadow-accent-primary/10 hover:brightness-110 transition-all cursor-pointer"
              id="download-docs-btn"
            >
              <Download className="w-4 h-4" />
              <span>Download Raw Markdown (.md)</span>
            </button>
          </div>
        </div>

        {/* Master Grid: Left Sidebar Navigation, Right Content Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar */}
          <div className="lg:col-span-4 bg-[#0B101C] border border-white/5 rounded-2xl p-4 lg:sticky lg:top-28 max-h-[calc(100vh-140px)] flex flex-col">
            
            {/* Search inputs */}
            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search technical topics, code examples..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#070B14] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-muted focus:outline-none focus:border-accent-primary/40 transition-colors"
                id="docs-search-input"
              />
            </div>

            {/* Scrollable menu directory */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-6 max-h-[50vh] lg:max-h-[calc(100vh-250px)] custom-scrollbar">
              {searchQuery.trim() ? (
                // Search result listing
                <div className="space-y-2">
                  <p className="text-xs font-mono text-muted uppercase tracking-wider mb-2">Search Results ({filteredSections.length})</p>
                  {filteredSections.map(sec => (
                    <button
                      key={sec.id}
                      onClick={() => setSelectedId(sec.id)}
                      className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-xl transition-all text-sm group ${
                        selectedId === sec.id
                          ? 'bg-accent-primary/10 border border-accent-primary/20 text-white'
                          : 'hover:bg-white/[0.02] border border-transparent text-paragraph hover:text-white'
                      }`}
                    >
                      <span className="truncate">{sec.title}</span>
                      <ChevronRight className="w-4 h-4 text-muted group-hover:text-accent-primary transition-colors" />
                    </button>
                  ))}
                  {filteredSections.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-sm text-muted">No topics matching "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              ) : (
                // Categorized navigation directory
                Object.keys(categories).map(cat => (
                  <div key={cat} className="space-y-1.5">
                    <p className="text-[11px] font-bold font-mono text-muted uppercase tracking-wider px-3 pb-1 border-b border-white/[0.02]">
                      {cat}
                    </p>
                    <div className="space-y-1">
                      {categories[cat].map(sec => (
                        <button
                          key={sec.id}
                          onClick={() => setSelectedId(sec.id)}
                          className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-xl transition-all text-sm group cursor-pointer ${
                            selectedId === sec.id
                              ? 'bg-accent-primary/10 border border-accent-primary/20 text-white font-medium'
                              : 'hover:bg-white/[0.02] border border-transparent text-paragraph hover:text-white'
                          }`}
                        >
                          <span className="truncate">{sec.title.replace(/^\d+\.\s/, '')}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-muted group-hover:text-accent-primary transition-colors flex-shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Quick telemetry reference panel inside sidebar footer */}
            <div className="border-t border-white/5 pt-4 mt-4 hidden lg:block">
              <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Local System OK</p>
                  <p className="text-[10px] text-muted">Zero tracking, high performance engine active.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Reader Pane */}
          <div className="lg:col-span-8 bg-[#0B101C] border border-white/5 rounded-2xl p-6 md:p-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="prose prose-invert max-w-none"
              >
                {renderMarkdown(activeSection.content)}
              </motion.div>
            </AnimatePresence>

            {/* Article Footer pagination controls */}
            <div className="border-t border-white/5 pt-6 mt-12 flex justify-between items-center text-sm">
              <span className="text-muted text-xs font-mono">CHAPTER: {activeSection.category.toUpperCase()}</span>
              <button
                onClick={() => {
                  const currentIndex = DOCS_SECTIONS.findIndex(sec => sec.id === selectedId);
                  const nextSec = DOCS_SECTIONS[currentIndex + 1] || DOCS_SECTIONS[0];
                  setSelectedId(nextSec.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center space-x-1.5 text-accent-primary hover:text-accent-primary/80 transition-colors font-medium cursor-pointer"
                id="next-chapter-btn"
              >
                <span>Next Chapter</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
