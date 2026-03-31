import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form className="flex items-center max-w-md w-full space-x-2">
      
      <div className="relative w-full">
        
        {/* Icon */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />

        {/* Input */}
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full pl-10 pr-3 py-2.5 rounded-lg 
          bg-surface border border-border 
          text-text text-sm 
          focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="flex items-center justify-center w-10 h-10 rounded-lg 
        bg-primary hover:opacity-90 transition text-black"
      >
        <Search size={18} />
      </button>

    </form>
  );
}