import './TechTicker.css';
// Tech stack parade — infinite horizontal scroll, open-source SVG shapes (original geometric designs)
const ICONS = {
  React: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4">
      <ellipse cx="12" cy="12" rx="10" ry="3.8"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(-60 12 12)"/>
      <circle cx="12" cy="12" r="2" fill={color} stroke="none"/>
    </svg>
  ),
  JavaScript: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <rect width="22" height="22" x="1" y="1" rx="3" fill={color}/>
      <path d="M9.5 17.8V11h-2V9H12v8.8H9.5zm5.5-2.3c.6.9 1.3 1.5 2.3 1.5.8 0 1.2-.4 1.2-.9 0-.5-.3-.8-1.4-1.2l-.5-.2C14.8 14.2 14 13.6 14 12.3c0-1.2 1-2.2 2.7-2.2 1.2 0 2 .5 2.7 1.4l-1.5 1.5c-.4-.6-1-.9-1.4-.9-.6 0-.8.3-.8.6s.2.5 1.2.9l.5.2c1.7.7 2.4 1.5 2.4 2.7 0 1.5-1.2 2.5-3.2 2.5-1.5 0-2.7-.7-3.3-1.8l1.7-1.5z" fill="#000"/>
    </svg>
  ),
  Python: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M11.9 2C8.6 2 8.7 3.5 8.7 3.5V5h3.4v.5H7.2C5.5 5.5 4 7 4 9.1c0 2.1 1.3 3.4 3.1 3.4h1.4v-1.8c0-1.9 1.6-3.4 3.4-3.4H17c1.5 0 2.9-1.2 2.9-2.8V4.1C19.9 2.4 18.2 2 16.8 2H11.9zm-1.2 1.6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
      <path d="M12.1 22c3.3 0 3.2-1.5 3.2-1.5V19h-3.4v-.5h4.9c1.7 0 3.2-1.5 3.2-3.6 0-2.1-1.3-3.4-3.1-3.4H15.5v1.8c0 1.9-1.6 3.4-3.4 3.4H7c-1.5 0-2.9 1.2-2.9 2.8v2.2C4.1 23.6 5.8 24 7.2 24h4.9zm1.2-1.6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
    </svg>
  ),
  Kotlin: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M2 2h11.2L2 13.5V2zm0 20l12-12.2L22 22H2zm12.8-20L22 2v10.5L2 22V13.8L14.8 2z"/>
    </svg>
  ),
  FastAPI: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M12 0C5.375 0 0 5.375 0 12c0 6.624 5.375 12 12 12 6.624 0 12-5.376 12-12C24 5.375 18.624 0 12 0zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"/>
    </svg>
  ),
  PostgreSQL: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      <ellipse cx="12" cy="8" rx="5" ry="2.5" fill="none" stroke={color} strokeWidth="1.5"/>
      <path d="M7 8v6c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5V8" fill="none" stroke={color} strokeWidth="1.5"/>
    </svg>
  ),
  Git: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.34l2.658 2.66a1.838 1.838 0 0 1 2.6 1.732 1.843 1.843 0 0 1-3.684 0 1.836 1.836 0 0 1 .403-1.162L13.12 8.88v4.976a1.843 1.843 0 1 1-1.516.012V8.75a1.834 1.834 0 0 1-.997-2.416L7.862 3.583.454 10.93a1.55 1.55 0 0 0 0 2.187l10.48 10.477a1.55 1.55 0 0 0 2.187 0l10.425-10.427a1.55 1.55 0 0 0 0-2.187"/>
    </svg>
  ),
  GitHub: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  HTML5: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  CSS3: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  Android: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5S11 23.33 11 22.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 16.33 2 15.5v-6C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v6c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C7.14 3.28 6 5.02 6 7h12c0-1.98-1.14-3.72-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
    </svg>
  ),
  Supabase: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.015.985 1.259 1.408 1.874.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.58L11.9 1.037z"/>
    </svg>
  ),
  Vercel: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
    </svg>
  ),
  GeminiAI: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
      <path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12"/>
    </svg>
  ),
  OpenGL: ({ color }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="20" rx="4"/>
      <path d="M7 16V8l4 3.5L15 8v8"/>
    </svg>
  ),
};

const STACK = [
  { key: 'React',       label: 'React',          color: '#61DAFB' },
  { key: 'JavaScript',  label: 'JavaScript',      color: '#F7DF1E' },
  { key: 'Python',      label: 'Python',          color: '#4B8BBE' },
  { key: 'Kotlin',      label: 'Kotlin',          color: '#A97BFF' },
  { key: 'FastAPI',     label: 'FastAPI',         color: '#00D09C' },
  { key: 'PostgreSQL',  label: 'PostgreSQL',      color: '#4169E1' },
  { key: 'Git',         label: 'Git',             color: '#F05032' },
  { key: 'GitHub',      label: 'GitHub',          color: '#AACBC4' },
  { key: 'HTML5',       label: 'HTML5',           color: '#E34F26' },
  { key: 'CSS3',        label: 'CSS3',            color: '#1572B6' },
  { key: 'Android',     label: 'Android',         color: '#3DDC84' },
  { key: 'Supabase',    label: 'Supabase',        color: '#3ECF8E' },
  { key: 'Vercel',      label: 'Vercel',          color: '#D0D0D0' },
  { key: 'GeminiAI',    label: 'Gemini AI',       color: '#4285F4' },
  { key: 'OpenGL',      label: 'OpenGL ES',       color: '#5A9FBF' },
];

function TickerItem({ item }) {
  const Icon = ICONS[item.key];
  return (
    <div className="ticker-item" style={{ '--tech-color': item.color }}>
      <span className="ticker-icon">
        {Icon ? <Icon color={item.color} /> : null}
      </span>
      <span className="ticker-label">{item.label}</span>
    </div>
  );
}

export default function TechTicker() {
  return (
    <div className="tech-ticker" aria-hidden="true">
      <div className="ticker-edge ticker-edge--left" />
      <div className="ticker-edge ticker-edge--right" />
      <div className="ticker-track">
        {/* Render twice for seamless infinite loop */}
        {STACK.map((item, i) => <TickerItem key={`a-${i}`} item={item} />)}
        {STACK.map((item, i) => <TickerItem key={`b-${i}`} item={item} />)}
      </div>
    </div>
  );
}
