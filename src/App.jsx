import { useState } from "react";
import {
  Snowflake,
  Coffee,
  CupSoda,
  Blender,
  ThermometerSun,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import logo from "./assets/logo.png";
import darkLogo from "./assets/darkLogo.png";

// ─── Translations ───────────────────────────────────────────────────────────
const T = {
  en: {
    heroTitle: ["What would you", "like today?"],
    heroSub: "Customize any drink with add-ons · +20 L.E each",
    est: "Est. 2024",
    perAddition: "Per addition",
    addedTo: "Added to any drink",
    addFlavors:
      "Add any of the following flavors to your drink for an extra charge.",
    items: "items",
    allPrices: "All prices inclusive of taxes · Thank you for your visit",
    address:
      "Next to Toshka Gate · Last university wall, opposite the university bridge",
    sections: {
      coffee: "Coffee",
      iced: "Iced",
      hot: "Hot Drinks",
      juice: "Fresh Juice",
      specials: "Specials",
      addons: "Add-ons",
    },
    drinks: {
      Espresso: "Espresso",
      "Turkish Coffee": "Turkish Coffee",
      "French Coffee": "French Coffee",
      Macchiato: "Macchiato",
      "Hazelnut Coffee": "Hazelnut Coffee",
      Americano: "Americano",
      Cortado: "Cortado",
      "Flat White": "Flat White",
      Cappuccino: "Cappuccino",
      Latte: "Latte",
      "Spanish Latte": "Spanish Latte",
      Mocha: "Mocha",
      "Caramel Macchiato": "Caramel Macchiato",
      "Iced Americano": "Iced Americano",
      "Iced Tea": "Iced Tea",
      "Iced Latte": "Iced Latte",
      "Iced Cappuccino": "Iced Cappuccino",
      "Iced Chocolate": "Iced Chocolate",
      "Iced Mocha": "Iced Mocha",
      "Iced Spanish Latte": "Iced Spanish Latte",
      "Iced Caramel Macchiato": "Iced Caramel Macchiato",
      "Iced White Mocha": "Iced White Mocha",
      "Classic Tea": "Classic Tea",
      "Flavour Tea": "Flavour Tea",
      "Karak Tea": "Karak Tea",
      "Hot Cider": "Hot Cider",
      Sahlab: "Sahlab",
      "Hot Chocolate": "Hot Chocolate",
      Strawberry: "Strawberry",
      Mango: "Mango",
      Banana: "Banana",
      Kiwi: "Kiwi",
      "Lemon Mint": "Lemon Mint",
      Avocado: "Avocado",
      Smoothie: "Smoothie",
      "Milk Shake": "Milk Shake",
      Frappé: "Frappé",
      Mojito: "Mojito",
      "Red Bull Mojito": "Red Bull Mojito",
    },
    subs: {
      Smoothie:
        "Strawberry · Mango · Berries · Peach · Kiwi · Lemon Mint · Berry Mix",
      "Milk Shake":
        "Vanilla · Chocolate · Oreo · Lotus · Berry · Strawberry · Caramel · Pistachio · Mango · Mixed Berries",
      Frappé: "Caramel · Mocha · White Mocha",
      Mojito: "Lemon Mint · Blueberry · Strawberry · Passion Fruit · Pineapple",
    },
    addons: [
      "Hazelnut",
      "Vanilla",
      "Chocolate",
      "Caramel",
      "Topping",
      "Mixed Nuts",
      "Honey",
      "Pistachio",
      "Lotus",
    ],
  },
  ar: {
    heroTitle: ["ماذا تريد", "اليوم ؟"],
    heroSub: "خصّص مشروبك بالإضافات · 20+ جنيه لكل إضافة",
    est: "تأسست ٢٠٢٤",
    perAddition: "لكل إضافة",
    addedTo: "تُضاف لأي مشروب",
    addFlavors: "أضف أيًا من النكهات التالية لمشروبك بتكلفة إضافية.",
    items: "عنصر",
    allPrices: "جميع الأسعار شاملة الضرائب · شكراً لزيارتكم",
    address: "امتداد بوابة توشكى · آخر سور الجامعة ـ أمام كوبري الجامعة",
    sections: {
      coffee: "القهوة",
      iced: "المشروبات المثلجة",
      hot: "المشروبات الساخنة",
      juice: "العصائر الطازجة",
      specials: "المميزات",
      addons: "الإضافات",
    },
    drinks: {
      Espresso: "إسبريسو",
      "Turkish Coffee": "قهوة تركية",
      "French Coffee": "قهوة فرنسية",
      Macchiato: "ماكياتو",
      "Hazelnut Coffee": "قهوة بالبندق",
      Americano: "أمريكانو",
      Cortado: "كورتادو",
      "Flat White": "فلات وايت",
      Cappuccino: "كابتشينو",
      Latte: "لاتيه",
      "Spanish Latte": "لاتيه إسباني",
      Mocha: "موكا",
      "Caramel Macchiato": "ماكياتو كراميل",
      "Iced Americano": "أمريكانو بارد",
      "Iced Tea": "شاي مثلج",
      "Iced Latte": "لاتيه بارد",
      "Iced Cappuccino": "كابتشينو بارد",
      "Iced Chocolate": "شوكولاتة باردة",
      "Iced Mocha": "موكا باردة",
      "Iced Spanish Latte": "لاتيه إسباني بارد",
      "Iced Caramel Macchiato": "ماكياتو كراميل بارد",
      "Iced White Mocha": "موكا بيضاء باردة",
      "Classic Tea": "شاي كلاسيك",
      "Flavour Tea": "شاي بالنكهات",
      "Karak Tea": "شاي كرك",
      "Hot Cider": "سيدر ساخن",
      Sahlab: "سحلب",
      "Hot Chocolate": "شوكولاتة ساخنة",
      Strawberry: "فراولة",
      Mango: "مانجو",
      Banana: "موز",
      Kiwi: "كيوي",
      "Lemon Mint": "ليمون بالنعناع",
      Avocado: "أفوكادو",
      Smoothie: "سموذي",
      "Milk Shake": "ميلك شيك",
      Frappé: "فرابيه",
      Mojito: "موهيتو",
      "Red Bull Mojito": "موهيتو ريد بول",
    },
    subs: {
      Smoothie:
        "فراولة · مانجو · توت · خوخ · كيوي · ليمون بالنعناع · خلطة التوت",
      "Milk Shake":
        "فانيلا · شوكولاتة · أوريو · لوتس · توت · فراولة · كراميل · فستق · مانجو · توت مشكل",
      Frappé: "كراميل · موكا · موكا بيضاء",
      Mojito: "ليمون بالنعناع · توت أزرق · فراولة · فاكهة العاطفة · أناناس",
    },
    addons: [
      "بندق",
      "فانيلا",
      "شوكولاتة",
      "كراميل",
      "توبينج",
      "مكسرات مشكلة",
      "عسل",
      "فستق",
      "لوتس",
    ],
  },
};

// ─── Menu Data ──────
const SECTIONS = [
  {
    id: "coffee",
    label: "Coffee",
    emoji: Coffee,
    items: [
      { name: "Espresso", price: 40 },
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
    id: "iced",
    label: "Iced",
    emoji: Snowflake,
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
    id: "hot",
    label: "Hot Drinks",
    emoji: ThermometerSun,
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
    id: "juice",
    label: "Fresh Juice",
    emoji: Blender,
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
    id: "specials",
    label: "Specials",
    emoji: CupSoda,
    groups: [
      {
        name: "Smoothie",
        sub: "Strawberry · Mango · Berries · Peach · Kiwi · Lemon Mint · Berry Mix",
        price: 80,
      },
      {
        name: "Milk Shake",
        sub: "Vanilla · Chocolate · Oreo · Lotus · Berry · Strawberry · Caramel · Pistachio · Mango · Mixed Berries",
        price: 85,
      },
      { name: "Frappé", sub: "Caramel · Mocha · White Mocha", price: 85 },
      {
        name: "Mojito",
        sub: "Lemon Mint · Blueberry · Strawberry · Passion Fruit · Pineapple",
        price: 80,
      },
      { name: "Red Bull Mojito", sub: null, price: 100 },
    ],
  },
  {
    id: "addons",
    label: "Add-ons",
    emoji: Sparkles,
    addons: [
      "Hazelnut",
      "Vanilla",
      "Chocolate",
      "Caramel",
      "Topping",
      "Mixed Nuts",
      "Honey",
      "Pistachio",
      "Lotus",
    ],
    addonPrice: 20,
  },
];
// function ZoneSpotLogo({ size = 56, brown = "#5C3018" }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
//       {/* Outer dotted ring */}
//       <circle cx="50" cy="50" r="44" stroke={brown} strokeWidth="2"
//         strokeDasharray="4 3.2" strokeLinecap="round" fill="none" />
//       {/* Inner solid ring */}
//       <circle cx="50" cy="50" r="38" stroke={brown} strokeWidth="1" fill="none" opacity="0.3" />
//       {/* Cup body */}
//       <path d="M34 42 L36 68 Q36 72 40 72 L60 72 Q64 72 64 68 L66 42 Z"
//         fill={brown} />
//       {/* Cup rim */}
//       <rect x="31" y="38" width="38" height="6" rx="3" fill={brown} />
//       {/* Straw */}
//       <rect x="54" y="24" width="4" height="22" rx="2" fill={brown} transform="rotate(-8 56 35)" />
//       {/* Whipped cream dome */}
//       <ellipse cx="50" cy="40" rx="14" ry="7" fill="#F5E6CC" opacity="0.85" />
//       <path d="M38 40 Q44 33 50 38 Q56 33 62 40" stroke={brown} strokeWidth="1.5" fill="none" />
//     </svg>
//   );
// }
const L = {
  page: "#EDE0C8",
  header: "#3B2008",
  headerFg: "#F5ECD8",
  surface: "#FAF4E8",
  surfaceCard: "#FFFFFF",
  border: "#D6C49A",
  borderCard: "#EAD9B4",
  accent: "#7C4A1E",
  accentHover: "#5C3310",
  accentFg: "#FAF0DC",
  price: "#5C3310",
  priceBg: "#F0DEB8",
  text: "#2A1506",
  textSub: "#6B4826",
  textMuted: "#A8845A",
  tabActive: "#3B2008",
  tabActiveFg: "#F5ECD8",
  tabIdle: "#E2CFA4",
  tabIdleFg: "#6B4826",
  divider: "#E8D8B0",
  pillBg: "#F0E4C4",
  pillBorder: "#D6C49A",
  rowHover: "#F5EDD5",
  shadow: "rgba(60,30,0,0.08)",
};

const D = {
  page: "#130C04",
  header: "#1E1208",
  headerFg: "#EDD9B0",
  surface: "#1C1208",
  surfaceCard: "#241808",
  border: "#3A2610",
  borderCard: "#3A2610",
  accent: "#C8924A",
  accentHover: "#E0A85A",
  accentFg: "#130C04",
  price: "#E8B870",
  priceBg: "#2A1C08",
  text: "#EDD9B0",
  textSub: "#9A7040",
  textMuted: "#5A3C18",
  tabActive: "#C8924A",
  tabActiveFg: "#130C04",
  tabIdle: "#241808",
  tabIdleFg: "#9A7040",
  divider: "#2E1E0A",
  pillBg: "#2A1C08",
  pillBorder: "#3A2610",
  rowHover: "#2A1C08",
  shadow: "rgba(0,0,0,0.4)",
};

export default function CafeMenu() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const [activeTab, setActiveTab] = useState("coffee");
  const [hovered, setHovered] = useState(null);

  const c = isDark ? D : L;
  const section = SECTIONS.find((s) => s.id === activeTab);

  return (
    <div
      dir={dir}
      style={{
        minHeight: "100vh",
        background: c.page,
        fontFamily: isAr
          ? "'Cairo', 'Segoe UI', sans-serif"
          : "'Georgia', 'Times New Roman', serif",
        transition: "background 0.3s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        body { margin: 0; }
      `}</style>

      {/* ── HEADER BANNER ── */}
      <header
        style={{
          background: c.header,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: `0 2px 12px ${c.shadow}`,
          transition: "background 0.3s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={isDark ? darkLogo : logo} alt="logo" width={50} />
          {/* <span style={{ fontSize: 20 }}>☕</span> */}
          <span
            style={{
              fontFamily: isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond'",
              fontSize: 20,
              fontWeight: 600,
              color: c.headerFg,
              letterSpacing: "0.02em",
              marginTop: isAr ? "-2px" : " 4px",
            }}
          >
            {isAr ? "زون سبوت" : "Zone Spot"}{" "}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "6px",
          }}
        >
          <button
            onClick={() => setLang(isAr ? "en" : "ar")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 13px",
              borderRadius: 99,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              color: c.headerFg,
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              transition: "background 0.2s",
            }}
          >
            {/* <Languages size={13} strokeWidth={2} /> */}
            {isAr ? "EN" : "AR"}
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 99,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              color: c.headerFg,
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              transition: "background 0.2s",
            }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <div
        style={{
          background: `linear-gradient(160deg, ${c.header} 0%, ${isDark ? "#2A1A08" : "#5C3310"} 100%)`,
          padding: "44px 28px 40px",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.3s",
        }}
      >
       
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: 60,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        /> 

        
        <img src={isDark ? darkLogo : logo} alt="logo" width={150} />
        {/* </p> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <div style={{ width: 28, height: 1, background: c.textMuted }} />
          <span
            style={{
              fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: isAr ? 0 : "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            {t.est}
          </span>
          <div style={{ width: 28, height: 1, background: c.textMuted }} />
        </div>
        <h1
          style={{
            fontFamily: isAr
              ? "'Cairo', sans-serif"
              : "'Cormorant Garamond', serif",
            fontSize: isAr ? 34 : 42,
            fontWeight: 700,
            color: c.headerFg,
            lineHeight: 1.15,
            letterSpacing: isAr ? 0 : "-0.01em",
          }}
        >
          {t.heroTitle[0]}
        { !isAr ?  <br /> : null}
          {t.heroTitle[1]}
        </h1>
        <p
          style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          {t.heroSub}
        </p>
      </div>

      {/* ── TABS ── */}
      <div
        style={{
          background: c.surface,
          borderBottom: `1px solid ${c.border}`,
          padding: "14px 16px",
          display: "flex",
          gap: 8,
          overflowX: "auto",
          scrollbarWidth: "none",
          transition: "background 0.3s",
        }}
      >
        {SECTIONS.map((s) => {
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
                fontFamily: isAr
                  ? "'Cairo', sans-serif"
                  : "'Inter', sans-serif",
                fontSize: isAr ? 12 : 12,
                fontWeight: active ? 600 : 500,
                background: active ? c.tabActive : c.tabIdle,
                color: active ? c.tabActiveFg : c.tabIdleFg,
                transition: "all 0.15s ease",
                letterSpacing: active ? "0.01em" : 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {
                  <s.emoji
                    size={15}
                    style={{ marginLeft: "4px", marginRight: "4px" }}
                  />
                }{" "}
                {t.sections[s.id]}
              </div>
            </button>
          );
        })}
      </div>

      {/* ── MAIN CONTENT ── */}
      <main
        style={{ maxWidth: 660, margin: "0 auto", padding: "24px 16px 80px" }}
      >
        {/* Section title */}
        <div
          style={{
            marginBottom: 18,
            display: "flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: isAr
                ? "'Cairo', sans-serif"
                : "'Cormorant Garamond', serif",
              fontSize: isAr ? 20 : 24,
              fontWeight: 700,
              fontStyle: isAr ? "normal" : "italic",

              color: c.text,
              letterSpacing: "0.01em",
            }}
          >
            <section.emoji
              size={24}
              style={{ marginRight: "4px", marginLeft: "4px" }}
            />{" "}
            {t.sections[section.id]}
          </h2>

          {section.items && (
            <span
              style={{
                fontFamily: isAr
                  ? "'Cairo', sans-serif"
                  : "'Inter', sans-serif",
                fontSize: 12,
                color: c.textMuted,
                marginLeft: "auto",
                fontWeight: 500,
              }}
            >
              {!isAr ? `${section.items.length} ${t.items} ` : null}
            </span>
          )}
        </div>

        {/* ── ITEMS CARD ── */}
        {section.items && (
          <div
            style={{
              background: c.surfaceCard,
              borderRadius: 16,
              border: `1px solid ${c.borderCard}`,
              overflow: "hidden",
              boxShadow: `0 4px 24px ${c.shadow}`,
              transition: "background 0.3s, border-color 0.3s",
            }}
          >
            {section.items.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(`${activeTab}-${i}`)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "15px 22px",
                  borderBottom:
                    i < section.items.length - 1
                      ? `1px solid ${c.divider}`
                      : "none",
                  background:
                    hovered === `${activeTab}-${i}`
                      ? c.rowHover
                      : "transparent",
                  transition: "background 0.15s ease",
                  cursor: "default",
                  //   flexDirection: isAr ? "row-reverse" : "row",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: c.accent,
                      opacity: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: isAr
                        ? "'Cairo', sans-serif"
                        : "'Inter', sans-serif",
                      fontSize: 14.5,
                      fontWeight: 450,
                      color: c.text,
                      lineHeight: 1.3,
                    }}
                  >
                    {t.drinks[item.name] || item.name}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 3,
                    background: c.priceBg,
                    padding: "5px 13px",
                    borderRadius: 8,
                    flexShrink: 0,
                    flexDirection: isAr ? "row-reverse" : null,
                  }}
                >
                  <span
                    style={{
                      fontFamily: isAr
                        ? "'Cairo', sans-serif"
                        : "'Cairo', sans-serif', serif",
                      fontSize: 17,
                      fontWeight: 700,
                      color: c.price,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      color: c.textMuted,
                    }}
                  >
                    L.E
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── GROUPS CARD ── */}
        {section.groups && (
          <div
            style={{
              background: c.surfaceCard,
              borderRadius: 16,
              border: `1px solid ${c.borderCard}`,
              overflow: "hidden",
              boxShadow: `0 4px 24px ${c.shadow}`,
              transition: "background 0.3s",
            }}
          >
            {section.groups.map((g, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(`grp-${i}`)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "16px 22px",
                  borderBottom:
                    i < section.groups.length - 1
                      ? `1px solid ${c.divider}`
                      : "none",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  background:
                    hovered === `grp-${i}` ? c.rowHover : "transparent",
                  transition: "background 0.15s ease",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: isAr
                        ? "'Cairo', sans-serif"
                        : "'Inter', sans-serif",
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: c.text,
                      marginBottom: g.sub ? 6 : 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: c.accent,
                        opacity: 0.5,
                        flexShrink: 0,
                      }}
                    />
                    {t.drinks[g.name] || g.name}
                  </div>
                  {g.sub && (
                    <div
                      style={{
                        fontFamily: isAr
                          ? "'Cairo', sans-serif"
                          : "'Inter', sans",
                        fontSize: 12,
                        color: c.textSub,
                        lineHeight: 1.6,
                        fontWeight: 400,
                        paddingLeft: 16,
                        textAlign: "start",
                      }}
                    >
                      {t.subs[g.name] || g.name}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 3,
                    background: c.priceBg,
                    padding: "5px 13px",
                    borderRadius: 8,
                    flexShrink: 0,
                    flexDirection: "row-reverse",
                  }}
                >
                  <span
                    style={{ fontSize: 17, fontWeight: 700, color: c.price }}
                  >
                    {g.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10,
                      fontWeight: 500,
                      color: c.textMuted,
                    }}
                  >
                    L.E
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── ADD-ONS ── */}
        {section.addons && (
          <div>
            <p
              style={{
                fontFamily: isAr
                  ? "'Cairo', sans-serif"
                  : "'Inter', sans-serif",
                fontSize: 13,
                color: c.textSub,
                marginBottom: 18,
                lineHeight: 1.6,
              }}
            >
              {t.addFlavors}{" "}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 24,
                justifyContent: isAr ? "flex-start" : "flex-start",
              }}
            >
              {section.addons.map((a, i) => (
                <div
                  key={i}
                  style={{
                    padding: "10px 18px",
                    background: c.pillBg,
                    border: `1px solid ${c.pillBorder}`,
                    borderRadius: 10,
                    fontFamily: isAr
                      ? "'Cairo', sans-serif"
                      : "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: c.text,
                    transition: "background 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 9, color: c.accent }}>✦</span>
                  {t.addons[i]}
                </div>
              ))}
            </div>

            <div
              style={{
                background: `linear-gradient(135deg, ${c.header} 0%, ${isDark ? "#2A1A08" : "#5C3310"} 100%)`,
                borderRadius: 14,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: `0 4px 20px ${c.shadow}`,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: isAr
                      ? "'Cairo', sans-serif"
                      : "'Cormorant Garamond'",
                    fontSize: 18,
                    fontWeight: 600,
                    color: c.headerFg,
                    fontStyle: "italic",
                  }}
                >
                  {t.perAddition}{" "}
                </div>
                <div
                  style={{
                    fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter'",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 3,
                  }}
                >
                  {t.addedTo}{" "}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                  flexDirection: isAr ? "row-reverse" : null,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 36,
                    fontWeight: 700,
                    color: c.accent,
                    letterSpacing: "-0.02em",
                  }}
                >
                  20
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: c.headerFg,
                    opacity: 0.7,
                  }}
                >
                  L.E
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          textAlign: "center",
          padding: "18px 24px",
          borderTop: `1px solid ${c.border}`,
          background: isDark ? c.surface : "#3B2008",
          transition: "background 0.3s",
        }}
      >
        <div
          style={{
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={isDark ? darkLogo : logo}
            alt="logo"
            wdith={50}
            height={50}
            color="#C89040"
          />
          {/* <ZoneSpotLogo size={36} brown={isDark?"#C89040":"#C8A060"} /> */}
        </div>
        <div
          style={{
            fontFamily: isAr
              ? "'Cairo', sans-serif"
              : "'Cormorant Garamond', serif",
            fontSize: 16,
            fontStyle: "italic",
            color: "white",
            marginBottom: 6,
          }}
        >
          {isAr ? "زون سبوت" : "Zone Spot"}{" "}
        </div>
        <div
          style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif",
            fontSize: 9,
            letterSpacing: "0.14em",
            color: c.textMuted,
            textTransform: "uppercase",
          }}
        >
          {t.address}{" "}
        </div>
        <p
          style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif",
            fontSize: 10,
            color: c.textMuted,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {t.allPrices}{" "}
        </p>
      </footer>
    </div>
  );
}
// import { useState } from "react";
// import {
//   Snowflake, Coffee, CupSoda, Blender,
//   ThermometerSun, Sparkles, Sun, Moon, ChevronLeft, ChevronRight
// } from "lucide-react";
// import logo from "./assets/logo.png";
// import darkLogo from "./assets/darkLogo.png";

// // ── Translations ──────────────────────────────────────────────────────────
// const T = {
//   en: {
//     tagline: "Specialty drinks · Est. 2024",
//     heroSub: "Add-ons available for any drink · +20 L.E",
//     perAddition: "Per add-on",
//     addedTo: "Customize any drink on the menu",
//     addFlavors: "Choose any flavor or topping to add to your drink.",
//     allPrices: "All prices inclusive of taxes",
//     thanks: "Thank you for visiting Zone Spot",
//     address: "Next to Toshka Gate · Opposite the university bridge",
//     le: "L.E",
//     leEach: "L.E / each",
//     sections: {
//       coffee: "Coffee", iced: "Iced Drinks", hot: "Hot Drinks",
//       juice: "Fresh Juice", specials: "Specials", addons: "Add-ons",
//     },
//     drinks: {
//       "Espresso":"Espresso","Turkish Coffee":"Turkish Coffee","French Coffee":"French Coffee",
//       "Macchiato":"Macchiato","Hazelnut Coffee":"Hazelnut Coffee","Americano":"Americano",
//       "Cortado":"Cortado","Flat White":"Flat White","Cappuccino":"Cappuccino","Latte":"Latte",
//       "Spanish Latte":"Spanish Latte","Mocha":"Mocha","Caramel Macchiato":"Caramel Macchiato",
//       "Iced Americano":"Iced Americano","Iced Tea":"Iced Tea","Iced Latte":"Iced Latte",
//       "Iced Cappuccino":"Iced Cappuccino","Iced Chocolate":"Iced Chocolate","Iced Mocha":"Iced Mocha",
//       "Iced Spanish Latte":"Iced Spanish Latte","Iced Caramel Macchiato":"Iced Caramel Macchiato",
//       "Iced White Mocha":"Iced White Mocha","Classic Tea":"Classic Tea","Flavour Tea":"Flavour Tea",
//       "Karak Tea":"Karak Tea","Hot Cider":"Hot Cider","Sahlab":"Sahlab","Hot Chocolate":"Hot Chocolate",
//       "Strawberry":"Strawberry","Mango":"Mango","Banana":"Banana","Kiwi":"Kiwi",
//       "Lemon Mint":"Lemon Mint","Avocado":"Avocado","Smoothie":"Smoothie","Milk Shake":"Milk Shake",
//       "Frappé":"Frappé","Mojito":"Mojito","Red Bull Mojito":"Red Bull Mojito",
//     },
//     subs: {
//       "Smoothie":"Strawberry · Mango · Berries · Peach · Kiwi · Lemon Mint · Berry Mix",
//       "Milk Shake":"Vanilla · Chocolate · Oreo · Lotus · Berry · Strawberry · Caramel · Pistachio · Mango · Mixed Berries",
//       "Frappé":"Caramel · Mocha · White Mocha",
//       "Mojito":"Lemon Mint · Blueberry · Strawberry · Passion Fruit · Pineapple",
//     },
//     addons:["Hazelnut","Vanilla","Chocolate","Caramel","Topping","Mixed Nuts","Honey","Pistachio","Lotus"],
//   },
//   ar: {
//     tagline: "مشروبات مميزة · تأسست ٢٠٢٤",
//     heroSub: "الإضافات متاحة لأي مشروب · +٢٠ جنيه",
//     perAddition: "لكل إضافة",
//     addedTo: "خصّص أي مشروب في القائمة",
//     addFlavors: "اختر أي نكهة أو توبينج لإضافته لمشروبك.",
//     allPrices: "جميع الأسعار شاملة الضرائب",
//     thanks: "شكراً لزيارة زون سبوت",
//     address: "امتداد بوابة توشكى · أمام كوبري الجامعة",
//     le: "جنيه",
//     leEach: "جنيه / للإضافة",
//     sections: {
//       coffee:"القهوة", iced:"مشروبات مثلجة", hot:"مشروبات ساخنة",
//       juice:"عصائر طازجة", specials:"مميزات", addons:"إضافات",
//     },
//     drinks: {
//       "Espresso":"إسبريسو","Turkish Coffee":"قهوة تركية","French Coffee":"قهوة فرنسية",
//       "Macchiato":"ماكياتو","Hazelnut Coffee":"قهوة بالبندق","Americano":"أمريكانو",
//       "Cortado":"كورتادو","Flat White":"فلات وايت","Cappuccino":"كابتشينو","Latte":"لاتيه",
//       "Spanish Latte":"لاتيه إسباني","Mocha":"موكا","Caramel Macchiato":"ماكياتو كراميل",
//       "Iced Americano":"أمريكانو بارد","Iced Tea":"شاي مثلج","Iced Latte":"لاتيه بارد",
//       "Iced Cappuccino":"كابتشينو بارد","Iced Chocolate":"شوكولاتة باردة","Iced Mocha":"موكا باردة",
//       "Iced Spanish Latte":"لاتيه إسباني بارد","Iced Caramel Macchiato":"ماكياتو كراميل بارد",
//       "Iced White Mocha":"موكا بيضاء باردة","Classic Tea":"شاي كلاسيك","Flavour Tea":"شاي بالنكهات",
//       "Karak Tea":"شاي كرك","Hot Cider":"سيدر ساخن","Sahlab":"سحلب","Hot Chocolate":"شوكولاتة ساخنة",
//       "Strawberry":"فراولة","Mango":"مانجو","Banana":"موز","Kiwi":"كيوي",
//       "Lemon Mint":"ليمون بالنعناع","Avocado":"أفوكادو","Smoothie":"سموذي","Milk Shake":"ميلك شيك",
//       "Frappé":"فرابيه","Mojito":"موهيتو","Red Bull Mojito":"موهيتو ريد بول",
//     },
//     subs: {
//       "Smoothie":"فراولة · مانجو · توت · خوخ · كيوي · ليمون بالنعناع · خلطة التوت",
//       "Milk Shake":"فانيلا · شوكولاتة · أوريو · لوتس · توت · فراولة · كراميل · فستق · مانجو · توت مشكل",
//       "Frappé":"كراميل · موكا · موكا بيضاء",
//       "Mojito":"ليمون بالنعناع · توت أزرق · فراولة · فاكهة العاطفة · أناناس",
//     },
//     addons:["بندق","فانيلا","شوكولاتة","كراميل","توبينج","مكسرات مشكلة","عسل","فستق","لوتس"],
//   },
// };

// // ── Data ──────────────────────────────────────────────────────────────────
// const SECTIONS = [
//   { id:"coffee", Icon:Coffee, items:[
//     {name:"Espresso",price:40},{name:"Turkish Coffee",price:35},{name:"French Coffee",price:45},
//     {name:"Macchiato",price:50},{name:"Hazelnut Coffee",price:50},{name:"Americano",price:50},
//     {name:"Cortado",price:55},{name:"Flat White",price:70},{name:"Cappuccino",price:70},
//     {name:"Latte",price:70},{name:"Spanish Latte",price:80},{name:"Mocha",price:80},
//     {name:"Caramel Macchiato",price:80},
//   ]},
//   { id:"iced", Icon:Snowflake, items:[
//     {name:"Iced Americano",price:60},{name:"Iced Tea",price:65},{name:"Iced Latte",price:75},
//     {name:"Iced Cappuccino",price:75},{name:"Iced Chocolate",price:75},{name:"Iced Mocha",price:80},
//     {name:"Iced Spanish Latte",price:85},{name:"Iced Caramel Macchiato",price:85},{name:"Iced White Mocha",price:85},
//   ]},
//   { id:"hot", Icon:ThermometerSun, items:[
//     {name:"Classic Tea",price:20},{name:"Flavour Tea",price:30},{name:"Karak Tea",price:45},
//     {name:"Hot Cider",price:50},{name:"Sahlab",price:50},{name:"Hot Chocolate",price:55},
//   ]},
//   { id:"juice", Icon:Blender, items:[
//     {name:"Strawberry",price:70},{name:"Mango",price:70},{name:"Banana",price:70},
//     {name:"Kiwi",price:70},{name:"Lemon Mint",price:70},{name:"Avocado",price:95},
//   ]},
//   { id:"specials", Icon:CupSoda, groups:[
//     {name:"Smoothie",price:80},{name:"Milk Shake",price:85},
//     {name:"Frappé",price:85},{name:"Mojito",price:80},{name:"Red Bull Mojito",price:100},
//   ]},
//   { id:"addons", Icon:Sparkles, addonPrice:20 },
// ];

// // ── Theme tokens ──────────────────────────────────────────────────────────
// const LIGHT = {
//   bg:          "#F0E6D2",
//   surface:     "#E8D9C0",
//   card:        "#FAF5EC",
//   cardHover:   "#FDF9F3",
//   border:      "rgba(120,75,30,0.14)",
//   borderStrong:"rgba(120,75,30,0.28)",
//   // Sidebar
//   sidebar:     "#2A1A0A",
//   sidebarActive:"#C8883A",
//   sidebarActiveBg:"rgba(200,136,58,0.15)",
//   sidebarText: "rgba(240,220,190,0.55)",
//   sidebarLogo: "#F0E0C0",
//   // Accent gold
//   gold:        "#B8782A",
//   goldBright:  "#D4993A",
//   goldBg:      "rgba(184,120,42,0.1)",
//   // Text
//   text:        "#1E0E04",
//   textSub:     "#6A4020",
//   textMuted:   "#9A7048",
//   // Price
//   priceColor:  "#7A3A10",
//   // Divider
//   divider:     "rgba(120,75,30,0.1)",
//   // Shadow
//   shadow:      "rgba(80,40,10,0.1)",
//   shadowMd:    "rgba(80,40,10,0.16)",
//   // Pill
//   pillBg:      "#EEE0C4",
//   pillBorder:  "rgba(120,75,30,0.2)",
//   pillHover:   "#E4D2AE",
// };

// const DARK = {
//   bg:          "#080604",
//   surface:     "#0E0A06",
//   card:        "#161008",
//   cardHover:   "#1C1408",
//   border:      "rgba(200,150,60,0.1)",
//   borderStrong:"rgba(200,150,60,0.22)",
//   sidebar:     "#0A0804",
//   sidebarActive:"#D4993A",
//   sidebarActiveBg:"rgba(212,153,58,0.12)",
//   sidebarText: "rgba(220,180,110,0.4)",
//   sidebarLogo: "#D4993A",
//   gold:        "#D4993A",
//   goldBright:  "#E8B050",
//   goldBg:      "rgba(212,153,58,0.1)",
//   text:        "#EDD8A8",
//   textSub:     "#9A7040",
//   textMuted:   "#5A3C18",
//   priceColor:  "#E8B870",
//   divider:     "rgba(200,150,60,0.08)",
//   shadow:      "rgba(0,0,0,0.5)",
//   shadowMd:    "rgba(0,0,0,0.7)",
//   pillBg:      "#1C1408",
//   pillBorder:  "rgba(200,150,60,0.15)",
//   pillHover:   "#241808",
// };

// export default function ZoneSpotMenu() {
//   const [isDark, setIsDark] = useState(false);
//   const [lang, setLang]     = useState("en");
//   const [active, setActive] = useState("coffee");

//   const c    = isDark ? DARK : LIGHT;
//   const t    = T[lang];
//   const isAr = lang === "ar";
//   const dir  = isAr ? "rtl" : "ltr";
//   const sec  = SECTIONS.find(s => s.id === active);
//   const sans = isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif";
//   const disp = isAr ? "'Cairo', sans-serif" : "'DM Serif Display', Georgia, serif";

//   const SIDEBAR_W = 220;

//   return (
//     <div dir={dir} style={{ minHeight:"100vh", background:c.bg, display:"flex", flexDirection:"column", fontFamily:sans, transition:"background 0.25s" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;500;600;700;800&display=swap');
//         *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
//         html { -webkit-font-smoothing:antialiased; }
//         ::-webkit-scrollbar { width:0; height:0; }
//         body { margin:0; }
//         .drink-row { transition: background 0.12s ease; cursor:default; }
//         .drink-row:hover { background: ${c.cardHover} !important; }
//         .nav-item { transition: all 0.15s ease; cursor:pointer; }
//         .pill-item { transition: background 0.12s ease; }
//         .pill-item:hover { background: ${c.pillHover} !important; }
//         @media (max-width: 640px) {
//           .layout-shell { flex-direction: column !important; }
//           .sidebar { width:100% !important; height:auto !important; position:relative !important; top:auto !important; flex-direction:row !important; overflow-x:auto !important; padding:10px 12px !important; border-right:none !important; border-bottom: 1px solid ${c.borderStrong} !important; }
//           .sidebar-brand { display:none !important; }
//           .sidebar-controls { display:none !important; }
//           .nav-item { flex-direction:column !important; gap:4px !important; padding:8px 14px !important; border-radius:10px !important; font-size:11px !important; }
//           .content-area { padding:20px 14px 40px !important; }
//           .top-bar { display:flex !important; }
//         }
//         @media (min-width: 641px) {
//           .top-bar { display:none !important; }
//         }
//       `}</style>

//       {/* ── MOBILE TOP BAR ── */}
//       <div className="top-bar" style={{
//         display:"none",
//         background:c.sidebar, height:54,
//         alignItems:"center", justifyContent:"space-between",
//         padding:"0 16px", flexShrink:0,
//         position:"sticky", top:0, zIndex:200,
//         borderBottom:`1px solid rgba(200,150,60,0.12)`,
//       }}>
//         <img src={isDark ? darkLogo : logo} alt="Zone Spot" height={34} style={{objectFit:"contain"}}/>
//         <div style={{display:"flex", gap:8}}>
//           <button onClick={()=>setLang(isAr?"en":"ar")} style={{
//             padding:"5px 11px", borderRadius:99, border:"1px solid rgba(255,255,255,0.15)",
//             background:"rgba(255,255,255,0.08)", color:"rgba(240,220,190,0.9)",
//             fontFamily:"'Inter', sans-serif", fontSize:11, fontWeight:700, cursor:"pointer",
//           }}>{isAr?"EN":"عربي"}</button>
//           <button onClick={()=>setIsDark(!isDark)} style={{
//             width:30, height:30, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.15)",
//             background:"rgba(255,255,255,0.08)", color:"rgba(240,220,190,0.9)",
//             display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer",
//           }}>{isDark?<Sun size={13}/>:<Moon size={13}/>}</button>
//         </div>
//       </div>

//       {/* ── MAIN LAYOUT ── */}
//       <div className="layout-shell" style={{ display:"flex", flex:1, minHeight:0 }}>

//         {/* ════ SIDEBAR ════ */}
//         <aside className="sidebar" style={{
//           width:SIDEBAR_W, flexShrink:0,
//           background:c.sidebar,
//           display:"flex", flexDirection:"column",
//           position:"sticky", top:0, height:"100vh",
//           overflowY:"auto",
//           borderRight: isAr ? "none" : `1px solid rgba(200,150,60,0.1)`,
//           borderLeft:  isAr ? `1px solid rgba(200,150,60,0.1)` : "none",
//           transition:"background 0.25s",
//           zIndex:100,
//         }}>
//           {/* Brand */}
//           <div className="sidebar-brand" style={{ padding:"28px 20px 24px", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
//             <img src={isDark ? darkLogo : logo} alt="Zone Spot"
//               style={{ height:80, objectFit:"contain", display:"block", marginBottom:12 }}/>
//             <div style={{
//               fontFamily:disp, fontSize:15, fontWeight:isAr?700:400,
//               fontStyle: isAr?"normal":"italic",
//               color:"rgba(240,220,190,0.9)", letterSpacing:"0.02em",
//             }}>
//               {isAr ? "زون سبوت" : "Zone Spot"}
//             </div>
//             <div style={{
//               fontFamily:"'Inter', sans-serif", fontSize:9,
//               letterSpacing:"0.18em", textTransform:"uppercase",
//               color:c.sidebarActive, marginTop:4,
//             }}>
//               {t.tagline}
//             </div>
//           </div>

//           {/* Nav items */}
//           <nav style={{ flex:1, padding:"12px 10px", display:"flex", flexDirection:"column", gap:2 }}>
//             {SECTIONS.map(s => {
//               const isActive = active === s.id;
//               const Icon = s.Icon;
//               return (
//                 <div
//                   key={s.id}
//                   className="nav-item"
//                   onClick={() => setActive(s.id)}
//                   style={{
//                     display:"flex", alignItems:"center",
//                     gap:12, padding:"11px 14px", borderRadius:10,
//                     background: isActive ? c.sidebarActiveBg : "transparent",
//                     borderLeft: !isAr && isActive ? `3px solid ${c.sidebarActive}` : "3px solid transparent",
//                     borderRight: isAr && isActive ? `3px solid ${c.sidebarActive}` : "3px solid transparent",
//                     flexDirection: isAr ? "row-reverse" : "row",
//                   }}
//                 >
//                   <Icon size={16} strokeWidth={isActive?2.5:1.8}
//                     color={isActive ? c.sidebarActive : "rgba(220,180,110,0.4)"}/>
//                   <span style={{
//                     fontFamily:sans, fontSize:13, fontWeight:isActive?700:500,
//                     color: isActive ? c.sidebarActive : c.sidebarText,
//                     letterSpacing:"0.01em",
//                   }}>
//                     {t.sections[s.id]}
//                   </span>
//                 </div>
//               );
//             })}
//           </nav>

//           {/* Controls */}
//           <div className="sidebar-controls" style={{ padding:"16px 14px 24px", borderTop:"1px solid rgba(255,255,255,0.05)", display:"flex", gap:8 }}>
//             <button onClick={()=>setLang(isAr?"en":"ar")} style={{
//               flex:1, padding:"8px 0", borderRadius:8,
//               border:"1px solid rgba(255,255,255,0.12)",
//               background:"rgba(255,255,255,0.07)",
//               color:"rgba(240,220,190,0.7)",
//               fontFamily:"'Inter', sans-serif", fontSize:12, fontWeight:700,
//               cursor:"pointer", transition:"background 0.15s",
//             }}>{isAr?"EN":"عربي"}</button>
//             <button onClick={()=>setIsDark(!isDark)} style={{
//               width:38, height:38, borderRadius:8, flexShrink:0,
//               border:"1px solid rgba(255,255,255,0.12)",
//               background:"rgba(255,255,255,0.07)",
//               color:"rgba(240,220,190,0.7)",
//               display:"flex", alignItems:"center", justifyContent:"center",
//               cursor:"pointer", transition:"background 0.15s",
//             }}>{isDark?<Sun size={14}/>:<Moon size={14}/>}</button>
//           </div>
//         </aside>

//         {/* ════ CONTENT ════ */}
//         <div style={{ flex:1, minWidth:0, overflowY:"auto" }}>
//           {/* Section header */}
//           <div style={{
//             padding:"36px 32px 0",
//             borderBottom:`1px solid ${c.divider}`,
//             marginBottom:0,
//           }}>
//             <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8, flexDirection:isAr?"row-reverse":"row" }}>
//               {(() => { const Icon = sec.Icon; return <Icon size={20} color={c.gold} strokeWidth={1.8}/>; })()}
//               <h1 style={{
//                 fontFamily:disp,
//                 fontSize: isAr ? 28 : 34,
//                 fontWeight: isAr ? 800 : 400,
//                 fontStyle: isAr ? "normal" : "italic",
//                 color:c.text, lineHeight:1.1,
//                 letterSpacing: isAr ? 0 : "-0.01em",
//               }}>
//                 {t.sections[sec.id]}
//               </h1>
//             </div>
//             {sec.items && (
//               <p style={{ fontFamily:sans, fontSize:12, color:c.textMuted, paddingBottom:20, textAlign:isAr?"right":"left" }}>
//                 {sec.items.length} {isAr ? "مشروب" : "drinks"}
//               </p>
//             )}
//             {!sec.items && !sec.groups && (
//               <p style={{ fontFamily:sans, fontSize:12, color:c.textMuted, paddingBottom:20, textAlign:isAr?"right":"left" }}>
//                 {t.addFlavors}
//               </p>
//             )}
//             {sec.groups && (
//               <p style={{ fontFamily:sans, fontSize:12, color:c.textMuted, paddingBottom:20, textAlign:isAr?"right":"left" }}>
//                 {sec.groups.length} {isAr ? "اختيارات" : "choices"}
//               </p>
//             )}
//           </div>

//           <div className="content-area" style={{ padding:"24px 32px 60px" }}>

//             {/* ── Items ── */}
//             {sec.items && (
//               <div style={{
//                 background:c.card,
//                 borderRadius:16,
//                 border:`1px solid ${c.border}`,
//                 overflow:"hidden",
//                 boxShadow:`0 2px 16px ${c.shadow}`,
//               }}>
//                 {sec.items.map((item, i) => (
//                   <div key={i} className="drink-row" style={{
//                     display:"flex", alignItems:"center",
//                     justifyContent:"space-between",
//                     padding:"16px 24px",
//                     borderBottom: i < sec.items.length-1 ? `1px solid ${c.divider}` : "none",
//                     flexDirection: isAr ? "row-reverse" : "row",
//                     gap:16,
//                   }}>
//                     <div style={{ display:"flex", alignItems:"center", gap:14, flexDirection:isAr?"row-reverse":"row", flex:1, minWidth:0 }}>
//                       <div style={{ width:3, height:28, borderRadius:2, background:c.gold, flexShrink:0, opacity:0.5 }}/>
//                       <span style={{ fontFamily:sans, fontSize:15, fontWeight:500, color:c.text, lineHeight:1.3 }}>
//                         {t.drinks[item.name] || item.name}
//                       </span>
//                     </div>
//                     <div style={{ display:"flex", alignItems:"baseline", gap:4, flexShrink:0, flexDirection:isAr?"row-reverse":"row" }}>
//                       <span style={{
//                         fontFamily:disp,
//                         fontSize: isAr ? 20 : 22,
//                         fontWeight: isAr ? 800 : 400,
//                         color:c.priceColor,
//                         letterSpacing: isAr ? 0 : "-0.02em",
//                         lineHeight:1,
//                       }}>{item.price}</span>
//                       <span style={{ fontFamily:"'Inter', sans-serif", fontSize:10, fontWeight:600, color:c.textMuted, textTransform:"uppercase", letterSpacing:"0.08em" }}>
//                         {t.le}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* ── Groups ── */}
//             {sec.groups && (
//               <div style={{
//                 background:c.card, borderRadius:16,
//                 border:`1px solid ${c.border}`, overflow:"hidden",
//                 boxShadow:`0 2px 16px ${c.shadow}`,
//               }}>
//                 {sec.groups.map((g, i) => {
//                   const sub = t.subs[g.name];
//                   return (
//                     <div key={i} className="drink-row" style={{
//                       display:"flex", alignItems:"center", gap:16,
//                       padding:"16px 24px",
//                       borderBottom: i < sec.groups.length-1 ? `1px solid ${c.divider}` : "none",
//                       flexDirection: isAr ? "row-reverse" : "row",
//                     }}>
//                       <div style={{ flex:1, minWidth:0 }}>
//                         <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:sub?6:0, flexDirection:isAr?"row-reverse":"row" }}>
//                           <div style={{ width:3, height:28, borderRadius:2, background:c.gold, flexShrink:0, opacity:0.5 }}/>
//                           <span style={{ fontFamily:sans, fontSize:15, fontWeight:600, color:c.text }}>
//                             {t.drinks[g.name] || g.name}
//                           </span>
//                         </div>
//                         {sub && (
//                           <p style={{
//                             fontFamily:sans, fontSize:12, color:c.textSub,
//                             lineHeight:1.7,
//                             paddingLeft: isAr ? 0 : 17,
//                             paddingRight: isAr ? 17 : 0,
//                             textAlign: isAr ? "right" : "left",
//                           }}>{sub}</p>
//                         )}
//                       </div>
//                       <div style={{ display:"flex", alignItems:"baseline", gap:4, flexShrink:0, flexDirection:isAr?"row-reverse":"row" }}>
//                         <span style={{
//                           fontFamily:disp, fontSize:isAr?20:22,
//                           fontWeight:isAr?800:400,
//                           color:c.priceColor, letterSpacing:isAr?0:"-0.02em", lineHeight:1,
//                         }}>{g.price}</span>
//                         <span style={{ fontFamily:"'Inter', sans-serif", fontSize:10, fontWeight:600, color:c.textMuted, textTransform:"uppercase" }}>
//                           {t.le}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}

//             {/* ── Add-ons ── */}
//             {sec.id === "addons" && (
//               <div>
//                 <div style={{
//                   display:"grid",
//                   gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",
//                   gap:10, marginBottom:32,
//                 }}>
//                   {t.addons.map((a, i) => (
//                     <div key={i} className="pill-item" style={{
//                       padding:"13px 16px",
//                       background:c.pillBg,
//                       border:`1px solid ${c.pillBorder}`,
//                       borderRadius:12,
//                       fontFamily:sans, fontSize:13, fontWeight:500,
//                       color:c.text,
//                       display:"flex", alignItems:"center", justifyContent:"center",
//                       gap:8, textAlign:"center", lineHeight:1.3,
//                     }}>
//                       <span style={{ width:4, height:4, borderRadius:"50%", background:c.gold, flexShrink:0, display:"inline-block" }}/>
//                       {a}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Price card */}
//                 <div style={{
//                   background: isDark
//                     ? "linear-gradient(135deg, #1A1008 0%, #2C1A08 100%)"
//                     : "linear-gradient(135deg, #2A1A08 0%, #5A3015 100%)",
//                   borderRadius:16, padding:"28px 32px",
//                   display:"flex", alignItems:"center", justifyContent:"space-between",
//                   flexDirection:isAr?"row-reverse":"row",
//                   boxShadow:`0 8px 32px ${c.shadowMd}`,
//                   position:"relative", overflow:"hidden",
//                 }}>
//                   <div style={{ position:"absolute", top:-40, right:-40, width:160, height:160, borderRadius:"50%", border:"1px solid rgba(255,255,255,0.04)", pointerEvents:"none" }}/>
//                   <div style={{ textAlign:isAr?"right":"left" }}>
//                     <p style={{ fontFamily:sans, fontSize:11, fontWeight:600, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(240,200,140,0.45)", marginBottom:8 }}>
//                       {isAr ? "السعر" : "PRICE"}
//                     </p>
//                     <div style={{ fontFamily:disp, fontSize:isAr?22:26, fontStyle:isAr?"normal":"italic", fontWeight:isAr?800:400, color:"rgba(240,220,190,0.95)", marginBottom:4 }}>
//                       {t.perAddition}
//                     </div>
//                     <div style={{ fontFamily:sans, fontSize:12, color:"rgba(240,200,140,0.4)" }}>
//                       {t.addedTo}
//                     </div>
//                   </div>
//                   <div style={{ display:"flex", alignItems:"flex-end", gap:6, flexDirection:isAr?"row-reverse":"row" }}>
//                     <span style={{ fontFamily:disp, fontSize:isAr?52:60, fontWeight:isAr?800:400, color:c.goldBright, letterSpacing:"-0.03em", lineHeight:1 }}>
//                       20
//                     </span>
//                     <span style={{ fontFamily:sans, fontSize:13, color:"rgba(240,200,140,0.5)", fontWeight:500, paddingBottom:8 }}>
//                       {t.leEach}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Footer */}
//           <footer style={{
//             padding:"24px 32px",
//             borderTop:`1px solid ${c.divider}`,
//             background:c.surface,
//           }}>
//             <div style={{ display:"flex", justifyContent:"center", marginBottom:12 }}>
//               <img src={darkLogo} alt="Zone Spot" height={40} style={{objectFit:"contain", opacity:0.6}}/>
//             </div>
//             <p style={{ fontFamily:sans, fontSize:11, color:c.textMuted, textAlign:"center", lineHeight:1.8, letterSpacing:"0.04em" }}>
//               {t.address}
//             </p>
//             <p style={{ fontFamily:"'Inter', sans-serif", fontSize:9, color:c.textMuted, textAlign:"center", letterSpacing:"0.1em", textTransform:"uppercase", marginTop:8, opacity:0.6 }}>
//               {t.allPrices} · {t.thanks}
//             </p>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// }
