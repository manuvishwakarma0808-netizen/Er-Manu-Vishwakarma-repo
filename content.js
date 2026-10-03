/* =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE YOUR WEBSITE.

   How to edit:
   - Change only the text between the "quote marks".
   - Do NOT delete the quote marks, commas, or { } [ ] brackets.
   - To add a new item (job, project, drawing), copy one whole
     { ... }, block, paste it right below, and change the text.
   - To remove an item, delete its whole { ... }, block.
   ===================================================================== */

const SITE = {

  /* ---------- Top of the page ---------- */
  name: "Manu Vishwakarma",
  title: "Civil Engineer",
  subtitle: "Construction Technology & Management",
  summary:
    "Detail-oriented civil engineer with hands-on experience in site execution, " +
    "structural analysis and project coordination. I focus on quality control, " +
    "safety compliance and efficient project delivery.",

  /* ---------- Contact (shown at the bottom and in the menu) ---------- */
  email: "manuvishwakarma03@gmail.com",
  phone: "7415320200",
  location: "Chhindwara / Bhopal, Madhya Pradesh",
  cvFile: "downloads/Manu_Vishwakarma_CV.pdf",   // your CV download button

  /* ---------- Quick numbers under the intro ---------- */
  highlights: [
    { number: "6 months", label: "Site engineer experience" },
    { number: "3",        label: "Construction internships" },
    { number: "8.1",      label: "M.Tech CGPA (1st year)" },
    { number: "1",        label: "Published research paper" }
  ],

  /* ---------- Work experience ---------- */
  experience: [
    {
      role: "Site Engineer",
      company: "IES Group, Bhopal",
      dates: "Aug 2025 – Jan 2026",
      points: [
        "Supervised building construction on site, from reinforcement and shuttering to concreting and finishing.",
        "Managed materials and labour to keep work on schedule.",
        "Applied structural knowledge and quality and safety checks to project execution."
      ]
    },
    {
      role: "Civil Engineering Intern",
      company: "M/S Patel Construction",
      dates: "Internship",
      points: [
        "Worked on construction of an office building at Sharda Open Mine, Junnardeo."
      ]
    },
    {
      role: "Civil Engineering Intern",
      company: "Siddique Construction, Chhindwara",
      dates: "Internship",
      points: [
        "Worked on construction of a cement concrete (CC) road for a housing society."
      ]
    }
  ],

  /* ---------- Education (newest first) ---------- */
  education: [
    { degree: "M.Tech, Construction Technology & Management", school: "RGPV Bhopal", year: "2024 – Pursuing", score: "CGPA 8.1 (1st year)" },
    { degree: "B.Tech, Civil Engineering",                    school: "RGPV Bhopal", year: "2023", score: "CGPA 7.74" },
    { degree: "DCA, Computer Applications",                   school: "MCU Bhopal",  year: "2019", score: "65.71%" },
    { degree: "ITI, Surveyor",                                school: "NCVT",        year: "2018", score: "76.1%" },
    { degree: "12th",                                         school: "MP Board",    year: "2017", score: "63.4%" },
    { degree: "10th",                                         school: "MP Board",    year: "2015", score: "71.16%" }
  ],

  /* ---------- Projects ---------- */
  projects: [
    {
      name: "Soil Stabilization Using Waste Materials",
      tag: "Published research",
      description:
        "Research paper published in IJRAR (International Journal of Research and Analytical Reviews) " +
        "on stabilizing soil with waste fibre and crushed waste tyre rubber."
    },
    {
      name: "AutoCAD Drawing Portfolio",
      tag: "Design work",
      description:
        "18 plates covering 2D drafting, isometric and orthographic views, and house floor plans " +
        "with elevations and sections. See the gallery below.",
      link: "#drawings"
    }
  ],

  /* ---------- Skills (grouped) ---------- */
  skills: [
    { group: "Site & Construction", items: ["Site Execution & Supervision", "Concreting", "Reinforcement", "Shuttering", "Finishing Works", "Labour & Material Management"] },
    { group: "Planning & Analysis", items: ["Structural Analysis & Design", "Project Planning & Coordination", "Quantity Estimation", "Cost Analysis", "BOQ Analysis"] },
    { group: "Software & Documentation", items: ["AutoCAD", "Technical Drawing Interpretation", "MS Excel", "MS Word", "MS PowerPoint", "Site Reports"] },
    { group: "Compliance", items: ["Quality Control", "Safety Compliance"] }
  ],

  /* ---------- Drawing gallery ----------
     file:    picture name inside the  images/drawings  folder
     title:   short heading under the picture
     caption: one-line description                                   */
  drawingsIntro: "AutoCAD plates from my coursework and practice. Tap any drawing to enlarge it.",

  drawings: [
    { file: "01.webp", title: "2D Profiles & Octagonal Plate",   caption: "Dimensioned stepped profile, lugged plate and large octagon." },
    { file: "02.webp", title: "Structural Sections",             caption: "T, I and L-shaped sections with square base plates and bolt holes." },
    { file: "03.webp", title: "Panelled Door & Window",          caption: "Double door elevation and window frame with section details." },
    { file: "04.webp", title: "Radial Plate & Cam Link",         caption: "Symmetric plate with centre lines and a curved link with tangent arcs." },
    { file: "05.webp", title: "Ornamental Railing & Panel",      caption: "Repeating railing pattern and a decorative inlay panel." },
    { file: "06.webp", title: "Arch Bridge Elevation",           caption: "Truss arch bridge with magnified detail callouts." },
    { file: "07.webp", title: "House: Isometric & Elevations",   caption: "Hip-roof house shown in isometric, front and side orthographic views." },
    { file: "08.webp", title: "Shaded 3D Blocks",                caption: "Solid machine blocks with shading and cut-outs." },
    { file: "09.webp", title: "Isometric Brackets",              caption: "Wireframe brackets with slots, ribs and bored holes." },
    { file: "10.webp", title: "Garden Gateway",                  caption: "Arched gateway with lamp pillars on a stepped octagonal base." },
    { file: "11.webp", title: "Classical Entrance Door",         caption: "Pediment, columns and panelled door, fully dimensioned." },
    { file: "12.webp", title: "Residential Floor Plan",          caption: "Room layout with arched living area, staircase and door schedule." },
    { file: "13.webp", title: "House Plans & Section",           caption: "Ground and first floor plans, front elevation and section A-A." },
    { file: "14.webp", title: "Lobed Plate & Chamfered Block",   caption: "Scalloped disc and chamfered plate with hexagon and circle cut-outs." },
    { file: "15.webp", title: "Ornamental Oval & Angled Plate",  caption: "Star-and-diamond oval motif and a plate with angled edge." },
    { file: "16.webp", title: "Kettle Profile",                  caption: "Profile built from arcs, fillets and angled spout." },
    { file: "17.webp", title: "Link Plate",                      caption: "Link with tangent arcs and a bolt-circle hub." },
    { file: "18.webp", title: "Slotted Circular Plate",          caption: "Round plate with arc slots and a central cross cut-out." }
  ],

  /* Optional: original AutoCAD files visitors can download.
     Remove the lines you do not want to share. */
  cadFiles: [
    { file: "downloads/plan1.dwg",           label: "Floor plan (.dwg)" },
    { file: "downloads/front_demo.dwg",      label: "Front elevation demo (.dwg)" },
    { file: "downloads/practice_Drawing.dwg", label: "Practice drawings (.dwg)" }
  ]
};
