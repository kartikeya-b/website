"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Search, ArrowRight, ExternalLink, Download } from "lucide-react";
import { commandPaletteItems } from "@/lib/content";
import { useTheme } from "./ThemeProvider";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggleTheme } = useTheme();

  const allItems = commandPaletteItems.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const filtered = query
    ? allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const handleAction = useCallback(
    (item: (typeof allItems)[0]) => {
      setOpen(false);
      setQuery("");

      switch (item.action) {
        case "scroll": {
          const el = document.getElementById(item.target);
          el?.scrollIntoView({ behavior: "smooth" });
          break;
        }
        case "link":
          window.open(item.target, "_blank");
          break;
        case "download": {
          const a = document.createElement("a");
          a.href = item.target;
          a.download = "";
          a.click();
          break;
        }
        case "theme":
          toggleTheme();
          break;
      }
    },
    [toggleTheme]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelectedIndex(0);
      }

      if (!open) return;

      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        handleAction(filtered[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, filtered, selectedIndex, handleAction]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-bg-primary border border-border rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search size={18} className="text-text-tertiary shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-text-primary text-sm outline-none placeholder:text-text-tertiary"
          />
          <kbd className="px-1.5 py-0.5 text-xs text-text-tertiary border border-border rounded">
            esc
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-text-tertiary">
              No results found
            </p>
          ) : (
            <>
              {commandPaletteItems.map((cat) => {
                const catItems = filtered.filter(
                  (item) => item.category === cat.category
                );
                if (catItems.length === 0) return null;

                return (
                  <div key={cat.category}>
                    <p className="px-4 py-1.5 text-xs font-medium text-text-tertiary uppercase tracking-wider">
                      {cat.category}
                    </p>
                    {catItems.map((item) => {
                      const globalIndex = filtered.indexOf(item);
                      return (
                        <button
                          key={item.label}
                          onClick={() => handleAction(item)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                            globalIndex === selectedIndex
                              ? "bg-accent-subtle text-accent"
                              : "text-text-secondary hover:bg-bg-secondary"
                          }`}
                        >
                          {item.action === "link" ? (
                            <ExternalLink size={14} />
                          ) : item.action === "download" ? (
                            <Download size={14} />
                          ) : (
                            <ArrowRight size={14} />
                          )}
                          {item.label}
                          {item.action === "none" && (
                            <span className="ml-auto text-xs text-text-tertiary italic">
                              coming soon
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="px-4 py-2 border-t border-border flex items-center gap-4 text-xs text-text-tertiary">
          <span>
            <kbd className="px-1 py-0.5 border border-border rounded mr-1">
              &uarr;&darr;
            </kbd>
            navigate
          </span>
          <span>
            <kbd className="px-1 py-0.5 border border-border rounded mr-1">
              &crarr;
            </kbd>
            select
          </span>
        </div>
      </div>
    </div>
  );
}
