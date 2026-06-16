Third‑party content notice

1) Satellite imagery
- This repository DOES NOT include Google, Bing, ArcGIS or other commercial satellite imagery tiles.
- Satellite imagery and orthophotos derived from Google, Bing, ArcGIS, or similar providers are owned by those providers and are subject to their Terms of Service and copyright.
- You MUST NOT redistribute those imagery tiles or include them in downloadable packages unless you have explicit written permission from the rights holder.

2) How to use satellite imagery in these plugins (recommended and safe approach)
- Do NOT bundle satellite tiles with plugin packages.
- If a plugin can display satellite imagery, configure it to fetch tiles at runtime using the end‑user's own API key/account:
  - For Google Maps / Google Maps Platform: obtain an API key and enable the appropriate Maps/Static/Tile APIs; follow Google's Terms of Service.
  - For Bing Maps: obtain a Bing Maps key and follow Microsoft's Terms of Use.
- The plugin should include configuration settings so each user enters their own API key; the plugin will then request tiles at runtime. This way you do not redistribute copyrighted imagery.

3) Alternative imagery sources
- If you want to distribute imagery with permissive re-use, use imagery that is explicitly licensed for redistribution (e.g., certain government datasets, OpenAerialMap, or other public-domain/open-licensed sources). Always verify and include the provider's attribution and license terms.

4) Repository files and notices
- LICENSE: applies only to code and assets you own (see LICENSE file).
- ASSET LICENSES: any asset (model, texture, livery) you own should include a clear license in its folder or front matter (for example: CC BY‑NC‑4.0).
- If a plugin depends on third‑party assets, list them and their licenses in the plugin folder and in this THIRD‑PARTY‑NOTICE.md.

5) Contact & legal
- This notice is for informational purposes and does not substitute legal advice. If you plan to commercialize or redistribute third‑party imagery, seek permission from the rights holder or consult a lawyer.
