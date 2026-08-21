export function WorkflowDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Background glow */}
      <div className="absolute inset-0 bg-purple-600/5 rounded-3xl blur-3xl" />

      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10"
      >
        {/* Connection lines */}
        <path
          d="M100 80 L200 160"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="animate-flow"
          opacity="0.6"
        />
        <path
          d="M200 160 L300 80"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="animate-flow"
          opacity="0.6"
        />
        <path
          d="M200 160 L200 260"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="animate-flow"
          opacity="0.6"
        />

        {/* Gmail Node */}
        <g className="animate-float" style={{ animationDelay: "0s" }}>
          <rect
            x="50"
            y="40"
            width="100"
            height="80"
            rx="16"
            fill="#111118"
            stroke="#2a2a3a"
            strokeWidth="1.5"
          />
          <rect
            x="50"
            y="40"
            width="100"
            height="80"
            rx="16"
            fill="url(#card-glow-1)"
            opacity="0.3"
          />
          {/* Gmail icon */}
          <rect x="82" y="58" width="36" height="26" rx="4" fill="none" stroke="#EA4335" strokeWidth="2" />
          <path d="M82 60 L100 74 L118 60" stroke="#EA4335" strokeWidth="2" fill="none" />
          <text x="100" y="105" textAnchor="middle" fill="#8888a0" fontSize="11" fontFamily="system-ui">
            Gmail
          </text>
        </g>

        {/* AI Agent Node (center) */}
        <g className="animate-float" style={{ animationDelay: "0.5s" }}>
          <rect
            x="145"
            y="120"
            width="110"
            height="80"
            rx="16"
            fill="#111118"
            stroke="#7c3aed"
            strokeWidth="1.5"
          />
          <rect
            x="145"
            y="120"
            width="110"
            height="80"
            rx="16"
            fill="url(#card-glow-2)"
            opacity="0.4"
          />
          {/* Bot icon */}
          <rect x="183" y="136" width="34" height="24" rx="6" fill="none" stroke="#a78bfa" strokeWidth="2" />
          <circle cx="193" cy="148" r="3" fill="#a78bfa" />
          <circle cx="207" cy="148" r="3" fill="#a78bfa" />
          <path d="M200 130 L200 136" stroke="#a78bfa" strokeWidth="2" />
          <circle cx="200" cy="128" r="2" fill="#a78bfa" />
          <text x="200" y="177" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="600" fontFamily="system-ui">
            AI Agent
          </text>
        </g>

        {/* OpenAI Node */}
        <g className="animate-float" style={{ animationDelay: "1s" }}>
          <rect
            x="250"
            y="40"
            width="100"
            height="80"
            rx="16"
            fill="#111118"
            stroke="#2a2a3a"
            strokeWidth="1.5"
          />
          <rect
            x="250"
            y="40"
            width="100"
            height="80"
            rx="16"
            fill="url(#card-glow-3)"
            opacity="0.3"
          />
          {/* OpenAI icon simplified */}
          <circle cx="300" cy="68" r="14" fill="none" stroke="#10a37f" strokeWidth="2" />
          <path d="M293 68 L300 62 L307 68 L300 74 Z" fill="#10a37f" opacity="0.5" />
          <text x="300" y="105" textAnchor="middle" fill="#8888a0" fontSize="11" fontFamily="system-ui">
            OpenAI
          </text>
        </g>

        {/* Google Sheets Node */}
        <g className="animate-float" style={{ animationDelay: "1.5s" }}>
          <rect
            x="145"
            y="220"
            width="110"
            height="80"
            rx="16"
            fill="#111118"
            stroke="#2a2a3a"
            strokeWidth="1.5"
          />
          <rect
            x="145"
            y="220"
            width="110"
            height="80"
            rx="16"
            fill="url(#card-glow-4)"
            opacity="0.3"
          />
          {/* Sheets icon */}
          <rect x="186" y="237" width="28" height="34" rx="3" fill="none" stroke="#34A853" strokeWidth="2" />
          <line x1="192" y1="248" x2="208" y2="248" stroke="#34A853" strokeWidth="1.5" />
          <line x1="192" y1="254" x2="208" y2="254" stroke="#34A853" strokeWidth="1.5" />
          <line x1="192" y1="260" x2="208" y2="260" stroke="#34A853" strokeWidth="1.5" />
          <line x1="200" y1="242" x2="200" y2="266" stroke="#34A853" strokeWidth="1" opacity="0.5" />
          <text x="200" y="293" textAnchor="middle" fill="#8888a0" fontSize="11" fontFamily="system-ui">
            Google Sheets
          </text>
        </g>

        {/* Flow direction arrows */}
        <polygon points="155,155 150,148 160,148" fill="#7c3aed" opacity="0.6" />
        <polygon points="245,155 250,148 240,148" fill="#7c3aed" opacity="0.6" />
        <polygon points="203,220 198,212 208,212" fill="#7c3aed" opacity="0.6" />

        {/* Gradients */}
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="card-glow-1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#EA4335" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="card-glow-2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="card-glow-3" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#10a37f" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="card-glow-4" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#34A853" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
