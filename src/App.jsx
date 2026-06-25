import { useState } from "react";
import {Snowflake , Coffee , CupSoda , Blender  ,ThermometerSun,Sparkles  }  from "lucide-react"

const SECTIONS = [
  {
    id: "coffee", label: "Coffee", emoji:Coffee,
    items: [
      { name: "Espresso", price: 35 },
      { name: "Turkish Coffee", price: 35 },
      { name: "French Coffee", price: 45 },
      { name: "Macchiato", price: 50 },
      { name: "Hazelnut Coffee", price: 50 },
      { name: "Americano", price: 50 },
      { name: "Cortado", price: 55 },
      { name: "Flat White", price: 70 },
      { name: "Cappuccino", price: 70 },
      { name: "Latte", price: 70 },
      { name: "Spanish Latte", price: 80 },
      { name: "Mocha", price: 80 },
      { name: "Caramel Macchiato", price: 80 },
    ],
  },
  {
    id: "iced", label: "Iced", emoji:Snowflake,
    items: [
      { name: "Iced Americano", price: 60 },
      { name: "Iced Tea", price: 65 },
      { name: "Iced Latte", price: 75 },
      { name: "Iced Cappuccino", price: 75 },
      { name: "Iced Chocolate", price: 75 },
      { name: "Iced Mocha", price: 80 },
      { name: "Iced Spanish Latte", price: 85 },
      { name: "Iced Caramel Macchiato", price: 85 },
      { name: "Iced White Mocha", price: 85 },
    ],
  },
  {
    id: "hot", label: "Hot Drinks", emoji:ThermometerSun,
    items: [
      { name: "Classic Tea", price: 20 },
      { name: "Flavour Tea", price: 30 },
      { name: "Karak Tea", price: 45 },
      { name: "Hot Cider", price: 50 },
      { name: "Sahlab", price: 50 },
      { name: "Hot Chocolate", price: 55 },
    ],
  },
  {
    id: "juice", label: "Fresh Juice", emoji:Blender,
    items: [
      { name: "Strawberry", price: 70 },
      { name: "Mango", price: 70 },
      { name: "Banana", price: 70 },
      { name: "Kiwi", price: 70 },
      { name: "Lemon Mint", price: 70 },
      { name: "Avocado", price: 95 },
    ],
  },
  {
    id: "specials", label: "Specials", emoji:CupSoda,
    groups: [
      { name: "Smoothie", sub: "Strawberry · Mango · Berries · Peach · Kiwi · Lemon Mint · Berry Mix", price: 80 },
      { name: "Milk Shake", sub: "Vanilla · Chocolate · Oreo · Lotus · Berry · Strawberry · Caramel · Pistachio · Mango · Mixed Berries", price: 85 },
      { name: "Frappé", sub: "Caramel · Mocha · White Mocha", price: 85 },
      { name: "Mojito", sub: "Lemon Mint · Blueberry · Strawberry · Passion Fruit · Pineapple", price: 80 },
      { name: "Red Bull Mojito", sub: null, price: 100 },
    ],
  },
  {
    id: "addons", label: "Add-ons", emoji:Sparkles,
    addons: ["Hazelnut", "Vanilla", "Chocolate", "Caramel", "Topping", "Mixed Nuts", "Honey", "Pistachio", "Lotus"],
    addonPrice: 20,
  },
];

const L = {
  page:        "#EDE0C8",
  header:      "#3B2008",
  headerFg:    "#F5ECD8",
  surface:     "#FAF4E8",
  surfaceCard: "#FFFFFF",
  border:      "#D6C49A",
  borderCard:  "#EAD9B4",
  accent:      "#7C4A1E",
  accentHover: "#5C3310",
  accentFg:    "#FAF0DC",
  price:       "#5C3310",
  priceBg:     "#F0DEB8",
  text:        "#2A1506",
  textSub:     "#6B4826",
  textMuted:   "#A8845A",
  tabActive:   "#3B2008",
  tabActiveFg: "#F5ECD8",
  tabIdle:     "#E2CFA4",
  tabIdleFg:   "#6B4826",
  divider:     "#E8D8B0",
  pillBg:      "#F0E4C4",
  pillBorder:  "#D6C49A",
  rowHover:    "#F5EDD5",
  shadow:      "rgba(60,30,0,0.08)",
};

const D = {
  page:        "#130C04",
  header:      "#1E1208",
  headerFg:    "#EDD9B0",
  surface:     "#1C1208",
  surfaceCard: "#241808",
  border:      "#3A2610",
  borderCard:  "#3A2610",
  accent:      "#C8924A",
  accentHover: "#E0A85A",
  accentFg:    "#130C04",
  price:       "#E8B870",
  priceBg:     "#2A1C08",
  text:        "#EDD9B0",
  textSub:     "#9A7040",
  textMuted:   "#5A3C18",
  tabActive:   "#C8924A",
  tabActiveFg: "#130C04",
  tabIdle:     "#241808",
  tabIdleFg:   "#9A7040",
  divider:     "#2E1E0A",
  pillBg:      "#2A1C08",
  pillBorder:  "#3A2610",
  rowHover:    "#2A1C08",
  shadow:      "rgba(0,0,0,0.4)",
};

function Moon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>;
}
function Sun() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>;
}

export default function CafeMenu() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState("coffee");
  const [hovered, setHovered] = useState(null);

  const c = isDark ? D : L;
  const section = SECTIONS.find(s => s.id === activeTab);

  return (
    <div style={{ minHeight: "100vh", background: c.page, fontFamily: "'Georgia', 'Times New Roman', serif", transition: "background 0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        body { margin: 0; }
      `}</style>

      {/* ── HEADER BANNER ── */}
      <header style={{
        background: c.header,
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56,
        position: "sticky", top: 0, zIndex: 100,
        boxShadow: `0 2px 12px ${c.shadow}`,
        transition: "background 0.3s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 20 }}>☕</span>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 20, fontWeight: 600,
            color: c.headerFg,
            letterSpacing: "0.02em",
          }}>
            Café Menu
          </span>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "6px 14px", borderRadius: 99,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer", color: c.headerFg,
            fontFamily: "'Inter', sans-serif",
            fontSize: 12, fontWeight: 500,
            transition: "background 0.2s",
          }}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun /> : <Moon />}
          
        </button>
      </header>

      {/* ── HERO ── */}
      <div style={{
        background: `linear-gradient(160deg, ${c.header} 0%, ${isDark ? "#2A1A08" : "#5C3310"} 100%)`,
        padding: "44px 28px 40px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div style={{ position: "absolute", bottom: -60, right: 60, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 10, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: c.accent,
          marginBottom: 14,
        }}>
          ✦ Est. 2024 ✦
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 42, fontWeight: 700,
          color: c.headerFg,
          lineHeight: 1.12,
          letterSpacing: "-0.01em",
          marginBottom: 14,
        }}>
          What would you<br />like today?
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13, color: "rgba(255,255,255,0.45)",
          fontWeight: 400, lineHeight: 1.6,
        }}>
          Customize any drink with add-ons · +20 L.E each
        </p>
      </div>

      {/* ── TABS ── */}
      <div style={{
        background: c.surface,
        borderBottom: `1px solid ${c.border}`,
        padding: "14px 16px",
        display: "flex", gap: 8, overflowX: "auto",
        scrollbarWidth: "none",
        transition: "background 0.3s",
      }}>
        {SECTIONS.map(s => {
          const active = activeTab === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              style={{
                flexShrink: 0,
                padding: "8px 18px",
                borderRadius: 8,
                border: active ? "none" : `1px solid ${c.border}`,
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: active ? 600 : 500,
                background: active ? c.tabActive : c.tabIdle,
                color: active ? c.tabActiveFg : c.tabIdleFg,
                transition: "all 0.15s ease",
                letterSpacing: active ? "0.01em" : 0,
              }}
            >
              <div style={{
                display:"flex",
                alignItems:"center",
                
              }}>
              {<s.emoji size={15} style={{marginRight:"4px"}}/>}{s.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── MAIN CONTENT ── */}
      <main style={{ maxWidth: 660, margin: "0 auto", padding: "24px 16px 80px" }}>

        {/* Section title */}
        <div style={{ marginBottom: 18, display: "flex", alignItems: "baseline", gap: 10 }}>
        

<h2
  style={{
    display:"flex",
    alignItems:"center",
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: 26,
    fontWeight: 600,
    color: c.text,
    letterSpacing: "0.01em",
    fontStyle: "italic",
  }}
>
  <section.emoji size={24} style={{marginRight:"4px"}}/> {section.label}
</h2>
          {section.items && (
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12, color: c.textMuted,
              marginLeft: "auto", fontWeight: 500,
            }}>
              {section.items.length} items
            </span>
          )}
        </div>

        {/* ── ITEMS CARD ── */}
        {section.items && (
          <div style={{
            background: c.surfaceCard,
            borderRadius: 16,
            border: `1px solid ${c.borderCard}`,
            overflow: "hidden",
            boxShadow: `0 4px 24px ${c.shadow}`,
            transition: "background 0.3s, border-color 0.3s",
          }}>
            {section.items.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(`${activeTab}-${i}`)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: 16,
                  padding: "15px 22px",
                  borderBottom: i < section.items.length - 1 ? `1px solid ${c.divider}` : "none",
                  background: hovered === `${activeTab}-${i}` ? c.rowHover : "transparent",
                  transition: "background 0.15s ease",
                  cursor: "default",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: c.accent, opacity: 0.5, flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14.5, fontWeight: 450,
                    color: c.text, lineHeight: 1.3,
                  }}>
                    {item.name}
                  </span>
                </div>
                <div style={{
                  display: "flex", alignItems: "baseline", gap: 3,
                  background: c.priceBg,
                  padding: "5px 13px", borderRadius: 8,
                  flexShrink: 0,
                }}>
                  <span style={{
                    //fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 17, fontWeight: 700,
                    color: c.price, letterSpacing: "-0.01em",
                  }}>
                    {item.price}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 10, fontWeight: 500,
                    color: c.textMuted,
                  }}>L.E</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── GROUPS CARD ── */}
        {section.groups && (
          <div style={{
            background: c.surfaceCard,
            borderRadius: 16,
            border: `1px solid ${c.borderCard}`,
            overflow: "hidden",
            boxShadow: `0 4px 24px ${c.shadow}`,
            transition: "background 0.3s",
          }}>
            {section.groups.map((g, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(`grp-${i}`)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "16px 22px",
                  borderBottom: i < section.groups.length - 1 ? `1px solid ${c.divider}` : "none",
                  display: "flex", gap: 16, alignItems: "flex-start",
                  background: hovered === `grp-${i}` ? c.rowHover : "transparent",
                  transition: "background 0.15s ease",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14.5, fontWeight: 500,
                    color: c.text,
                    marginBottom: g.sub ? 6 : 0,
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.accent, opacity: 0.5, flexShrink: 0 }} />
                    {g.name}
                  </div>
                  {g.sub && (
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12, color: c.textSub,
                      lineHeight: 1.6, fontWeight: 400,
                      paddingLeft: 16,
                      
                    }}>
                      {g.sub}
                    </div>
                  )}
                </div>
                <div style={{
                  display: "flex", alignItems: "baseline", gap: 3,
                  background: c.priceBg, padding: "5px 13px",
                  borderRadius: 8, flexShrink: 0,
                }}>
                  <span style={{ fontSize: 17, fontWeight: 700, color: c.price }}>
                    {g.price}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500, color: c.textMuted }}>L.E</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── ADD-ONS ── */}
        {section.addons && (
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, color: c.textSub,
              marginBottom: 18, lineHeight: 1.6,
            }}>
              Add any of the following flavors to your drink for an extra charge.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
              {section.addons.map((a, i) => (
                <div key={i} style={{
                  padding: "10px 18px",
                  background: c.pillBg,
                  border: `1px solid ${c.pillBorder}`,
                  borderRadius: 10,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, fontWeight: 500,
                  color: c.text,
                  transition: "background 0.2s",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <span style={{ fontSize: 9, color: c.accent }}>✦</span>
                  {a}
                </div>
              ))}
            </div>

            <div style={{
              background: `linear-gradient(135deg, ${c.header} 0%, ${isDark ? "#2A1A08" : "#5C3310"} 100%)`,
              borderRadius: 14,
              padding: "20px 24px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              boxShadow: `0 4px 20px ${c.shadow}`,
            }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, color: c.headerFg, fontStyle: "italic" }}>
                  Per addition
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>
                  Added to any drink
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 700, color: c.accent, letterSpacing: "-0.02em" }}>
                  20
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: c.headerFg, opacity: 0.7 }}>L.E</span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer style={{
        textAlign: "center", padding: "18px 24px",
        borderTop: `1px solid ${c.border}`,
        background: c.surface,
        transition: "background 0.3s",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 10, color: c.textMuted,
          letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          All prices inclusive of taxes &nbsp;·&nbsp; Thank you for your visit
        </p>
      </footer>
    </div>
  );
}