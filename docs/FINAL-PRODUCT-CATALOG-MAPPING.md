# Layali 2.0 — Final Product Catalog Mapping

**Source document:** `Layali_Complete_Website_Product_Catalog.docx` (supplied by the business — the single source of truth for products).

**Status:** The catalog architecture decisions below are **APPROVED and LOCKED** by the business. This document reflects the final, locked structure. It supersedes the simplified 5+5 taxonomy previously described as "final" in `docs/CONTENT-ASSET-REQUIREMENTS.md`.

**Catalog count convention (LOCKED):** The supplied catalog contains **21 source categories and 119 actual numbered catalog entries/rows**. Source numbering extends through **#196**, but #196 is the highest source item number — it is **not** the product count. Many entries group multiple sizes, gauges, formulations, or other variants, so the final SKU count is **TBD** until verified brand/model/size/packaging data is collected.

**What this document does and does not do:**
- It reproduces every category and every item/variant from the supplied catalog (Part A), verbatim, with the source item numbers preserved for traceability.
- It maps every item into the locked website architecture (Part B), without deleting, inventing, renaming, or merging any product out of existence.
- It records the seven locked architecture decisions and their resolution (Part C), plus two smaller items that remain open (not part of the seven).
- It does **not** invent any product, brand, specification, or indication beyond what the source document states.
- It does **not** change `index.html`, CSS, or JS. No catalog pages have been built.

---

## Final Customer-Facing Top-Level Catalog Architecture (LOCKED)

```
01  Medical Consumables
02  Hemodialysis
03  Medical Equipment
04  Procedure & Surgical Supplies
05  Medications
```

**Homepage positioning remains Medical Consumables + Hemodialysis only.** Medical Equipment, Procedure & Surgical Supplies, and Medications are real catalog groups, fully represented in the full catalog/navigation once built, but do not need major homepage sections. This does not change the current homepage — no homepage code has been modified.

---

## Part A — Full Original Catalog (verbatim, by source category)

Unchanged from the original catalog document. **21 source categories, 119 actual numbered catalog entries/rows.** Source numbering extends through #196 and contains gaps; those gaps are in the original file as delivered, and nothing was lost in extraction.

### Intravenous - IV Solutions
| # | Item / Variant |
|---|---|
| 64 | PNSS (Plain Normal Saline Solution) |
| 67 | PLR (Plain Lactated Ringer's) |
| 68 | D5W (Dextrose 5% in Water) |
| 71 | Sterile Water for Injection |

### Consumables - Medical Consumables & Supplies
| # | Item / Variant |
|---|---|
| 72 | Surgical Masks / N95 Respirators |
| 73 | Syringes (1cc, 3cc, 5cc, 10cc, 20cc, 50cc) |
| 74 | Needles (various gauges) |
| 75 | IV Cannula / IV Tubing |
| 77 | Cotton Balls & Gauze Pads |
| 79 | Examining Gloves (Sterile / Nitrile / Latex) |
| 82 | Alcohol, Povidone-Iodine, Chlorhexidine |
| 87 | Macroset (Adult & Pedia) / Microset / Soluset |
| 88 | Nasal Cannula / Face Mask / NRM |

### Equipment - Basic Diagnostic Equipment
| # | Item / Variant |
|---|---|
| 89 | Stethoscope |
| 90 | BP Apparatus / Sphygmomanometer |
| 91 | Pulse Oximeter |
| 92 | Thermometer |
| 93 | Glucometer with Strips |
| 94 | Weighing Scale |
| 95 | Height Measuring Device |
| 96 | Penlight |
| 97 | ECG Machine |
| 98 | Nebulizing Machine |
| 99 | Oxygen Tank with Regulator |

### Procedure - Minor Surgical / Procedure Supplies
| # | Item / Variant |
|---|---|
| 100 | Suture Materials |
| 101 | Sterile Drapes |
| 102 | Lidocaine (local anesthetic) |
| 103 | Scalpel Blades |
| 104 | Forceps |
| 105 | Needle Holders |
| 106 | Mayo Scissors |

### Hemodialysis - Dialyzers / Artificial Kidneys
| # | Item / Variant |
|---|---|
| 109 | High-flux dialyzer |
| 110 | Low-flux dialyzer |
| 111 | Pediatric dialyzer |
| 112 | Surface areas: 0.6 / 0.8 / 1.0 / 1.2 / 1.5 / 1.8 / 2.0 m² |
| 113 | Steam sterilized dialyzer |
| 114 | EO sterilized dialyzer |
| 115 | HDF-compatible dialyzer |

### Hemodialysis - Bloodline Sets
| # | Item / Variant |
|---|---|
| 116 | Arterial bloodline |
| 117 | Venous bloodline |
| 118 | Adult blood tubing set |
| 119 | Pediatric tubing set |
| 120 | Online HDF tubing set |

### Hemodialysis - AV Fistula Needles
| # | Item / Variant |
|---|---|
| 121 | 15G / 16G / 17G needles |
| 122 | Arterial & venous needle |
| 123 | Buttonhole needles |
| 124 | Sharp needles & blunt needles |

### Hemodialysis - Dialysis Catheters
| # | Item / Variant |
|---|---|
| 125 | Double lumen catheter kits |
| 126 | Temporary HD catheter |
| 127 | Tunneled catheter kits |
| 128 | Catheter caps & clamps |
| 129 | Catheter dressing kits |
| 130 | Tegaderm/chlorhexidine dressings |

### Hemodialysis - Acid Concentrates & Bicarbonate
| # | Item / Variant |
|---|---|
| 131 | Ca 1.0 / 1.25 / 1.5 / 1.75 / 1.8 |
| 132 | Potassium variants: K2 / K3 / K4 |
| 133 | Liquid bicarbonate |
| 134 | Bicarbonate powder & cartridges |

### Hemodialysis - Anticoagulation & Priming Fluids
| # | Item / Variant |
|---|---|
| 135 | Heparin vial & syringes |
| 136 | Low molecular weight heparin |
| 137 | Prefilled heparin syringes |
| 138 | Citrate lock solution |
| 139 | Normal saline 0.9% 1L & 500mL |
| 140 | Sterile water / D5W |

### Hemodialysis - Syringes & Needles
| # | Item / Variant |
|---|---|
| 141 | Syringes: 1 / 3 / 5 / 10 / 20 / 50 cc |
| 142 | Needles: 18G / 20G / 21G / 23G |
| 143 | Drawing needles & filter needles |

### Hemodialysis - IV Supplies
| # | Item / Variant |
|---|---|
| 144 | IV cannula & extension tubing |
| 145 | IV set |
| 146 | Three-way stopcock |
| 147 | Pressure transducer tubing |

### Hemodialysis - Dressing Supplies
| # | Item / Variant |
|---|---|
| 148 | Sterile gauze & cotton balls |
| 149 | ABD pads |
| 150 | Micropore & silk tape |
| 151 | Elastic bandage |
| 152 | Transparent film dressing |
| 153 | Chlorhexidine & alcohol swabs |
| 154 | Povidone iodine |

### Hemodialysis - Personal Protective Equipment
| # | Item / Variant |
|---|---|
| 155 | Sterile & clean gloves |
| 156 | Surgical masks & N95 masks |
| 157 | Face shields |
| 158 | Isolation gowns & aprons |
| 159 | Shoe covers & head caps |

### Hemodialysis - Surface Disinfection
| # | Item / Variant |
|---|---|
| 160 | Dialysis machine disinfectant |
| 161 | Bleach solution |
| 162 | Surface wipes |
| 163 | Alcohol 70% |
| 164 | Hydrogen peroxide cleaner |

### Hemodialysis - Water Treatment Monitoring
| # | Item / Variant |
|---|---|
| 165 | Chlorine test strips |
| 166 | Hardness test kit |
| 167 | Conductivity test solution |
| 168 | pH strips |
| 169 | Endotoxin test kit |

### Hemodialysis - Waste Disposal
| # | Item / Variant |
|---|---|
| 170 | Sharps container |
| 171 | Infectious waste bags |
| 172 | Biohazard bins |
| 173 | Specimen bags |

### Hemodialysis - Emergency & Routine HD Medications
| # | Item / Variant |
|---|---|
| 174 | Erythropoietin (EPO) |
| 175 | Iron sucrose & Ferric carboxymaltose |
| 176 | Calcium gluconate |
| 177 | Dextrose 50% & Sodium bicarbonate |
| 178 | Hydrocortisone & Diphenhydramine |
| 179 | Epinephrine & Atropine |
| 180 | Dopamine & Norepinephrine |
| 181 | Ondansetron / Paracetamol |
| 182 | Midodrine & Mannitol |

### Hemodialysis - Catheter Lock Solutions
| # | Item / Variant |
|---|---|
| 183 | Heparin lock |
| 184 | Citrate lock |

### Hemodialysis - Specimen & Lab Supplies
| # | Item / Variant |
|---|---|
| 185 | Vacutainers (serum & EDTA tubes) |
| 186 | Blood culture bottles |
| 187 | Tourniquets & specimen labels |
| 188 | Urine containers |
| 189 | Lancets & blood glucose strips |

### Hemodialysis - Dialysis Machine Consumables
| # | Item / Variant |
|---|---|
| 190 | Dialysis fluid filters |
| 191 | RO filters & RO membranes |
| 192 | Carbon & sediment filters |
| 193 | UV lamps |
| 194 | Disinfection chemicals |
| 195 | Citric acid |
| 196 | Heat disinfectant chemicals |

---

## Part B — Locked Website Grouping

### B.1 — 01 MEDICAL CONSUMABLES

| Website subcategory | Source category → items | Notes |
|---|---|---|
| **Injection & Infusion** | Consumables & Supplies → Syringes (73), Needles (74), IV Cannula/Tubing (75), Macroset/Microset/Soluset (87) | Core injection/infusion consumables. |
| **Injection & Infusion → IV Solutions** *(recognizable sub-filter, per locked decision 1)* | IV Solutions → PNSS (64), PLR (67), D5W (68), Sterile Water for Injection (71) | Filed under Injection & Infusion as the parent subcategory, but kept as its own visible filter/tag ("IV Solutions") within it, so it stays a recognizable grouping rather than disappearing into a generic list. |
| **PPE & Infection Control** | Consumables & Supplies → Surgical Masks/N95 (72), Examining Gloves (79), Alcohol/Povidone-Iodine/Chlorhexidine (82) | |
| **Wound Care** | Consumables & Supplies → Cotton Balls & Gauze Pads (77) | Antiseptics (82) are filed under PPE & Infection Control as primary; whether they should also cross-list here is a minor open item (see "Remaining Open Items" below) — not one of the seven locked decisions. |
| **Patient Care** | Consumables & Supplies → Nasal Cannula/Face Mask/NRM (88) | Remains a thin subcategory from the general catalog alone; noted as a minor open item, not blocking. |

**Removed from Medical Consumables (locked decision 3):** Laboratory / Specimen is no longer a Medical Consumables homepage category. The general (non-Hemodialysis) catalog never had matching items for it. Hemodialysis-specific specimen/lab items (185–189) remain exactly where the source catalog places them, inside Hemodialysis (see B.2).

**Moved out of Medical Consumables into their own top-level groups (locked decisions 2 & 4):** Diagnostic Equipment and Minor Surgical/Procedure Supplies are no longer Medical Consumables subcategories — see B.3 and B.4.

### B.2 — 02 HEMODIALYSIS

All 17 original Hemodialysis source subcategories remain fully represented in the full catalog — none deleted, none merged away. Emergency & Routine HD Medications is the one exception: per locked decision 7, it moves out to its own top-level **05 Medications** group (B.5), separate from ordinary Hemodialysis disposables.

**Full-catalog subcategories (16, unchanged from source):**

| Subcategory | Source items |
|---|---|
| Dialyzers / Artificial Kidneys | 109–115 |
| Bloodline Sets | 116–120 |
| AV Fistula Needles | 121–124 |
| Dialysis Catheters | 125–130 |
| Acid Concentrates & Bicarbonate | 131–134 |
| Anticoagulation & Priming Fluids | 135–140 |
| Syringes & Needles | 141–143 |
| IV Supplies | 144–147 |
| Dressing Supplies | 148–154 |
| Personal Protective Equipment | 155–159 |
| Surface Disinfection | 160–164 |
| Water Treatment Monitoring | 165–169 |
| Waste Disposal | 170–173 |
| Catheter Lock Solutions | 183–184 |
| Specimen & Lab Supplies | 185–189 |
| Dialysis Machine Consumables | 190–196 |

**Homepage gateways (LOCKED, design concept only — no homepage code changed in this pass):**

```
Dialyzers →
Bloodline Sets →
AV Fistula Needles →
Concentrates & Bicarbonate →
Dialysis Center Essentials →
```

- **Dialyzers**, **Bloodline Sets**, **AV Fistula Needles**, and **Concentrates & Bicarbonate** map directly to the like-named full-catalog subcategories above (Concentrates & Bicarbonate = "Acid Concentrates & Bicarbonate," 131–134).
- **"Dialysis Center Essentials" is a homepage navigation/marketing gateway only** — it is not a source catalog category and does not replace one. It's a curated entry point intended to represent day-to-day HD consumables at a glance (candidates to feature under it: Dressing Supplies, IV Supplies, Syringes & Needles, PPE — to be finalized when the gateway's linked content is actually built). It must always link through to the real, complete subcategories in the full catalog, not stand in for them.
- Dialysis Catheters, Personal Protective Equipment, Surface Disinfection, Water Treatment Monitoring, Waste Disposal, Catheter Lock Solutions, and Specimen & Lab Supplies do not have their own homepage gateway tile — they remain fully browsable in the full Hemodialysis catalog.

### B.3 — 03 MEDICAL EQUIPMENT (new top-level group, locked decision 4)

| Subcategory | Source category → items |
|---|---|
| Diagnostic Equipment | Basic Diagnostic Equipment → Stethoscope (89), BP Apparatus/Sphygmomanometer (90), Pulse Oximeter (91), Thermometer (92), Glucometer with Strips (93), Weighing Scale (94), Height Measuring Device (95), Penlight (96), ECG Machine (97), Nebulizing Machine (98), Oxygen Tank with Regulator (99) |

Does not need a major homepage section — discoverable through the full catalog/navigation.

### B.4 — 04 PROCEDURE & SURGICAL SUPPLIES (new top-level group, locked decisions 2 & 5)

| Subcategory | Source items | Notes |
|---|---|---|
| Procedure Consumables | Suture Materials (100), Sterile Drapes (101), Scalpel Blades (103) | Single-use/disposable procedure items. |
| Procedure Consumables — medication | Lidocaine (102) | Filed here as in the source document (it's listed under Minor Surgical/Procedure Supplies, not Emergency & Routine HD Medications). Since it is a medication, whether it should also be cross-tagged into the Medications group is a minor open item — see "Remaining Open Items" below; it has not been moved without approval. |
| **Instruments** *(locked decision 5)* | Forceps (104), Needle Holders (105), Mayo Scissors (106) | Reusable surgical instruments, explicitly separated from disposables per the locked decision. |

### B.5 — 05 MEDICATIONS (locked decision 7)

| Source category → items | Notes |
|---|---|
| Hemodialysis - Emergency & Routine HD Medications (174–182): Erythropoietin (EPO), Iron sucrose & Ferric carboxymaltose, Calcium gluconate, Dextrose 50% & Sodium bicarbonate, Hydrocortisone & Diphenhydramine, Epinephrine & Atropine, Dopamine & Norepinephrine, Ondansetron/Paracetamol, Midodrine & Mannitol | Its own top-level catalog group, not mixed into Medical Consumables or presented like ordinary disposables, per the locked decision. No indications, dosing, or clinical claims are added beyond the item names as supplied. |

**Not moved here (still open, not part of the seven locked decisions):** Heparin vial & syringes (135), Low molecular weight heparin (136), Prefilled heparin syringes (137), Citrate lock solution (138), Heparin lock (183), Citrate lock (184), and Lidocaine (102) are all pharmacological agents filed under their original Hemodialysis/Procedure categories in the source document. They remain there pending a future decision on whether to cross-tag or move them into Medications (see "Remaining Open Items").

---

## Part C — The Seven Locked Architecture Decisions

| # | Decision | Status |
|---|---|---|
| 1 | IV Solutions → Medical Consumables → Injection & Infusion, preserved as a recognizable subcategory/filter | **RESOLVED / APPROVED** — see B.1 |
| 2 | Minor Surgical/Procedure Supplies → separate top-level group "Procedure & Surgical Supplies," not forced into Medical Consumables | **RESOLVED / APPROVED** — see B.4 |
| 3 | Laboratory/Specimen removed as a general Medical Consumables homepage category; HD-specific specimen/lab items stay in Hemodialysis | **RESOLVED / APPROVED** — see B.1, B.2 |
| 4 | Diagnostic Equipment → separate top-level group "Medical Equipment"; no major homepage section required | **RESOLVED / APPROVED** — see B.3 |
| 5 | Surgical instruments (Forceps, Needle Holders, Mayo Scissors) → Procedure & Surgical Supplies → Instruments | **RESOLVED / APPROVED** — see B.4 |
| 6 | Hemodialysis homepage keeps the approved dark interactive design; five gateways are now Dialyzers, Bloodline Sets, AV Fistula Needles, Concentrates & Bicarbonate, Dialysis Center Essentials; "Dialysis Center Essentials" is a marketing gateway only, not a replacement for the source categories; all 17 original Hemodialysis categories remain represented in the full catalog | **RESOLVED / APPROVED** — see B.2 |
| 7 | Medications → separate top-level group "Medications," not mixed into ordinary Medical Consumables; no invented indications/claims/dosing/specifications | **RESOLVED / APPROVED** — see B.5 |

All seven are locked. No homepage, CSS, or JS changes have been made to implement decision 6's renamed gateway label yet — that is future build work, tracked here as an approved specification.

### Remaining Open Items (not part of the seven — smaller, non-blocking)

These were flagged in the prior version of this document and were not addressed by the seven locked decisions. They remain open:

- **Antiseptics cross-listing:** should "Alcohol, Povidone-Iodine, Chlorhexidine" (82) also be cross-listed under Wound Care, in addition to PPE & Infection Control?
- **Patient Care depth:** Patient Care has only one general-catalog entry (Nasal Cannula/Face Mask/NRM, 88). Is there more inventory in this line, or should homepage framing be adjusted to match what's actually stocked?
- **Heparin / citrate lock / Lidocaine as Medications:** should these pharmacological items (currently filed under their original Hemodialysis/Procedure categories, per the source document) also be cross-tagged or moved into the Medications group?

---

## Part D — Reconciliation Summary (final, locked)

| Original catalog category | Final website category | # catalog entries | Status |
|---|---|---|---|
| Intravenous - IV Solutions | 01 Medical Consumables → Injection & Infusion → IV Solutions | 4 | Locked (decision 1) |
| Consumables - Medical Consumables & Supplies | 01 Medical Consumables → Injection & Infusion / PPE & Infection Control / Wound Care / Patient Care | 9 | Locked; antiseptics cross-listing still open |
| Equipment - Basic Diagnostic Equipment | 03 Medical Equipment → Diagnostic Equipment | 11 | Locked (decision 4) |
| Procedure - Minor Surgical / Procedure Supplies | 04 Procedure & Surgical Supplies → Procedure Consumables / Instruments | 7 | Locked (decisions 2, 5); Lidocaine's Medications cross-tag still open |
| Hemodialysis - Dialyzers / Artificial Kidneys | 02 Hemodialysis → Dialyzers | 7 | Locked (decision 6) |
| Hemodialysis - Bloodline Sets | 02 Hemodialysis → Bloodline Sets | 5 | Locked (decision 6) |
| Hemodialysis - AV Fistula Needles | 02 Hemodialysis → AV Fistula Needles | 4 | Locked (decision 6) |
| Hemodialysis - Dialysis Catheters | 02 Hemodialysis (full catalog only) | 6 | Locked |
| Hemodialysis - Acid Concentrates & Bicarbonate | 02 Hemodialysis → Concentrates & Bicarbonate | 4 | Locked (decision 6) |
| Hemodialysis - Anticoagulation & Priming Fluids | 02 Hemodialysis (full catalog only) | 6 | Locked; Heparin/citrate Medications cross-tag still open |
| Hemodialysis - Syringes & Needles | 02 Hemodialysis (full catalog only) | 3 | Locked |
| Hemodialysis - IV Supplies | 02 Hemodialysis (full catalog only) | 4 | Locked |
| Hemodialysis - Dressing Supplies | 02 Hemodialysis (full catalog only) | 7 | Locked |
| Hemodialysis - Personal Protective Equipment | 02 Hemodialysis (full catalog only) | 5 | Locked |
| Hemodialysis - Surface Disinfection | 02 Hemodialysis (full catalog only) | 5 | Locked |
| Hemodialysis - Water Treatment Monitoring | 02 Hemodialysis (full catalog only) | 5 | Locked |
| Hemodialysis - Waste Disposal | 02 Hemodialysis (full catalog only) | 4 | Locked |
| Hemodialysis - Emergency & Routine HD Medications | 05 Medications | 9 | Locked (decision 7) |
| Hemodialysis - Catheter Lock Solutions | 02 Hemodialysis (full catalog only) | 2 | Locked; Medications cross-tag still open |
| Hemodialysis - Specimen & Lab Supplies | 02 Hemodialysis (full catalog only) | 5 | Locked (decision 3) |
| Hemodialysis - Dialysis Machine Consumables | 02 Hemodialysis (full catalog only) | 7 | Locked |

**Totals:** 21 source categories → **119 actual numbered catalog entries/rows**, all accounted for above. Source numbering extends through **#196**. 0 deleted, 0 invented, 0 silently renamed. Final SKU count remains TBD because many entries group multiple variants.

---

## Part E — Homepage vs. Full Catalog (final)

- **Homepage (unchanged in this pass):**
  - Medical Consumables — 4 curated cards (3-Ply Earloop Masks, Alcohol Prep Pads, Wound Care Essentials, Patient Care Consumables)
  - Hemodialysis — 5 interactive gateways per decision 6: Dialyzers, Bloodline Sets, AV Fistula Needles, Concentrates & Bicarbonate, Dialysis Center Essentials
  - These are marketing/navigation gateways, not the catalog, and do not represent the complete offering in either category.
- **Full Catalog (not yet built):** all **119 source catalog entries**, organized under the five locked top-level groups (01–05) and their subcategories per Part B. Many entries contain grouped variants; the final SKU count is TBD.
- **Medical Equipment (03) and Procedure & Surgical Supplies (04):** real catalog groups, fully browsable once built, with no dedicated homepage section required.
- **Medications (05):** its own distinct catalog grouping, kept visibly separate from ordinary consumables, once the catalog experience is designed.

No page beyond the existing homepage has been built. This document remains the planning reference for that future work.
