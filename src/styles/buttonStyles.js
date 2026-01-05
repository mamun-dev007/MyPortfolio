// Standardized button styles for consistent theming across all components

export const getButtonStyles = (isDarkMode, variant = 'primary') => {
  const baseStyles = "transition-all duration-300 font-medium rounded-lg";
  
  const variants = {
    // Primary gradient button (main CTA)
    primary: `${baseStyles} px-6 py-3 ${
      isDarkMode
        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
    }`,
    
    // Secondary outline button
    secondary: `${baseStyles} px-6 py-3 border-2 ${
      isDarkMode
        ? "border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-lg shadow-purple-500/25"
        : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-lg shadow-purple-500/25"
    }`,
    
    // Small button (for filters, tags, etc.)
    small: `${baseStyles} px-4 py-2 text-sm ${
      isDarkMode
        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50"
        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/50"
    }`,
    
    // Icon button
    icon: `${baseStyles} p-2 rounded-full ${
      isDarkMode
        ? "border-2 border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600"
        : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600"
    }`,
    
    // Ghost button (minimal style)
    ghost: `${baseStyles} px-4 py-2 ${
      isDarkMode
        ? "text-purple-400 hover:text-purple-300 hover:bg-purple-600/20"
        : "text-purple-600 hover:text-purple-700 hover:bg-purple-100"
    }`,
    
    // Filter button (for category filters)
    filter: `${baseStyles} px-4 py-2 text-sm rounded-full font-medium`,
    
    // Active filter button
    filterActive: `${baseStyles} px-4 py-2 text-sm rounded-full font-medium ${
      isDarkMode
        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
    }`,
    
    // Inactive filter button
    filterInactive: `${baseStyles} px-4 py-2 text-sm rounded-full font-medium ${
      isDarkMode
        ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border border-gray-700 hover:text-white"
        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm hover:text-gray-800"
    }`
  };
  
  return variants[variant] || variants.primary;
};

// Card hover styles
export const getCardStyles = (isDarkMode) => {
  return `group cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-500 ${
    isDarkMode
      ? "bg-gray-800/50 border-gray-700 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
      : "bg-white border-gray-200 hover:border-purple-300/50 shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
  }`;
};

// Badge styles
export const getBadgeStyles = (isDarkMode, variant = 'default') => {
  const variants = {
    default: `px-3 py-1 rounded-full text-xs font-medium ${
      isDarkMode
        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
        : "bg-purple-100 text-purple-600 border border-purple-200"
    }`,
    
    featured: "px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white font-medium",
    
    status: (status) => {
      const statusColors = {
        current: isDarkMode
          ? "bg-green-500/20 text-green-300 border border-green-500/30"
          : "bg-green-100 text-green-600 border border-green-200",
        completed: isDarkMode
          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
          : "bg-blue-100 text-blue-600 border border-blue-200",
        certified: isDarkMode
          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
          : "bg-purple-100 text-purple-600 border border-purple-200"
      };
      
      return `px-3 py-1 rounded-full text-xs font-medium ${statusColors[status.toLowerCase()] || statusColors.completed}`;
    }
  };
  
  return variants[variant] || variants.default;
};

// Form input styles
export const getInputStyles = (isDarkMode) => {
  return `w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 ${
    isDarkMode
      ? "bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
      : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500"
  }`;
};

// Navigation link styles
export const getNavLinkStyles = (isDarkMode, isActive = false) => {
  return `transition cursor-pointer px-2 py-1 rounded-lg ${
    isActive
      ? "bg-purple-600/80 text-white"
      : isDarkMode
      ? "text-white hover:text-purple-400"
      : "text-gray-800 hover:text-purple-600"
  }`;
};