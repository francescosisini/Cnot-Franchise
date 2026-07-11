# GIS Story Authoring API

Operational guide for writing narrative GIS stories in `stories/*.html`.

The story page should call the public `GIS.*` functions. The lower-level `CNOTAtlasBridge` remains available for compatibility, but new stories should use the `GIS` API.

---

## 1. Minimal story structure

Create a new file inside `stories/`, for example:

```text
stories/nuclear_en.html
```

A minimal story can be written like this:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nuclear reactors in Europe</title>
</head>
<body>

  <h1>Nuclear reactors in Europe</h1>

  <p>
    This story uses the layer <code>nuclear_reactors_europe_all</code>.
  </p>

  <button onclick="GIS.showOnlyLayer('nuclear_reactors_europe_all', {
    keep: ['ne_10m_admin_0_countries', 'cnoteurope']
  })">
    Prepare map
  </button>

  <button onclick="GIS.showLayer('nuclear_reactors_europe_all')">
    Show all reactors
  </button>

  <button onclick="GIS.showLayer('nuclear_reactors_europe_all', \"reactor_type CONTAINS 'RBMK'\")">
    Show RBMK reactors
  </button>

  <button onclick="GIS.restoreState('nuclear-story')">
    Restore map
  </button>

</body>
</html>
```

---

## 2. Recommended story workflow

### Step 1 — Choose the GIS layer

Find the layer name in the GIS project. Use the logical layer name, not the generated qgis2web variable name.

Good:

```js
GIS.showLayer('eu_membership_timeline')
GIS.showLayer('nuclear_reactors_europe_all')
```

Avoid generated names such as:

```js
lyr_nuclear_reactors_europe_all_49
```

---

### Step 2 — Prepare the map

For most stories, start by showing only the layer used by the story plus the base/background layers.

```js
GIS.saveState('my-story')

GIS.showOnlyLayer('nuclear_reactors_europe_all', {
  keep: ['ne_10m_admin_0_countries', 'cnoteurope']
})
```

Use a unique state name for each story:

```js
GIS.saveState('europe-timeline')
GIS.saveState('nuclear-story')
GIS.saveState('ai-factories-story')
```

---

### Step 3 — Add story buttons

Each button should do two things:

1. update the story text, if needed;
2. call one `GIS.*` command.

Example:

```html
<button onclick="GIS.showLayer('eu_membership_timeline', 'accession_wave <= 1')">
  1958 · Founding members
</button>
```

Another example:

```html
<button onclick="GIS.showLayer('nuclear_reactors_europe_all', \"status CONTAINS 'operational'\")">
  Operational reactors
</button>
```

---

### Step 4 — Restore the map

At the end of the story, restore the previous layer visibility state.

```html
<button onclick="GIS.restoreState('nuclear-story')">
  Restore map
</button>
```

To restore only the features of one layer:

```js
GIS.restoreLayer('nuclear_reactors_europe_all')
```

---

## 3. Main commands

### Show one layer

Shows the layer and restores all its features.

```js
GIS.showLayer('layer_name')
```

Example:

```js
GIS.showLayer('nuclear_reactors_europe_all')
```

---

### Show one layer with a filter

Shows only the features matching the filter.

```js
GIS.showLayer('layer_name', 'field = value')
```

Examples:

```js
GIS.showLayer('eu_membership_timeline', 'accession_wave <= 1')
GIS.showLayer('eu_membership_timeline', 'is_current_member = true')
GIS.showLayer('nuclear_reactors_europe_all', "reactor_type CONTAINS 'RBMK'")
GIS.showLayer('nuclear_reactors_europe_all', "country = 'France'")
```

---

### Hide one layer

Hides the whole layer container.

```js
GIS.hideLayer('layer_name')
```

Example:

```js
GIS.hideLayer('ai_factories')
```

---

### Hide all features of one layer

Keeps the layer container visible, but hides all its features.

```js
GIS.hideFeatures('layer_name')
```

Example:

```js
GIS.hideFeatures('eu_membership_timeline')
```

Useful for timeline stories where the layer should remain available but start empty.

---

### Restore all features of one layer

Restores the normal display of the layer features.

```js
GIS.restoreLayer('layer_name')
```

Example:

```js
GIS.restoreLayer('eu_membership_timeline')
```

---

### Show only one thematic layer

Hides unrelated layers and keeps only the chosen layer plus optional base layers.

```js
GIS.showOnlyLayer('layer_name', {
  keep: ['base_layer_1', 'base_layer_2']
})
```

Example:

```js
GIS.showOnlyLayer('nuclear_reactors_europe_all', {
  keep: ['ne_10m_admin_0_countries', 'cnoteurope']
})
```

With a filter:

```js
GIS.showOnlyLayer('nuclear_reactors_europe_all', {
  keep: ['ne_10m_admin_0_countries', 'cnoteurope'],
  filter: "reactor_type CONTAINS 'RBMK'"
})
```

---

### Hide all layers

```js
GIS.hideAllLayers()
```

---

### Hide all layers except selected ones

```js
GIS.hideAllLayersExcept([
  'ne_10m_admin_0_countries',
  'cnoteurope',
  'nuclear_reactors_europe_all'
])
```

---

### Save current layer visibility

```js
GIS.saveState('state-name')
```

Example:

```js
GIS.saveState('nuclear-story')
```

---

### Restore saved layer visibility

```js
GIS.restoreState('state-name')
```

Example:

```js
GIS.restoreState('nuclear-story')
```

---

### List available layers

```js
GIS.listLayers()
```

Useful in the browser console while building a story.

---

### Describe one layer

```js
GIS.describeLayer('layer_name')
```

Useful to inspect available fields before writing filters.

---

## 4. Filter syntax

Filters are SQL-like strings. They are intended for simple story use, not for full SQL queries.

Supported forms:

```sql
field = value
field != value
field < value
field <= value
field > value
field >= value
field CONTAINS 'text'
field IN ('a', 'b', 'c')
field IS TRUE
field IS FALSE
```

Examples:

```js
GIS.showLayer('eu_membership_timeline', 'accession_wave <= 6')
GIS.showLayer('eu_membership_timeline', 'is_current_member IS TRUE')
GIS.showLayer('eu_membership_timeline', "id = 'eu_membership_gbr'")
GIS.showLayer('nuclear_reactors_europe_all', "reactor_type CONTAINS 'RBMK'")
GIS.showLayer('nuclear_reactors_europe_all', "country IN ('France', 'Germany', 'Belgium')")
```

String values should be wrapped in single quotes:

```js
GIS.showLayer('layer_name', "country = 'Italy'")
```

Numbers do not need quotes:

```js
GIS.showLayer('layer_name', 'year <= 2004')
```

Booleans can be written as:

```js
GIS.showLayer('layer_name', 'is_current_member = true')
GIS.showLayer('layer_name', 'is_current_member IS TRUE')
```

---

## 5. Updating the narrative panel

The GIS API only controls the map. Text updates can remain local to the story page.

Example:

```html
<h2 id="storyTitle">Nuclear reactors in Europe</h2>
<p id="storyText">Select a step.</p>

<button onclick="
  document.getElementById('storyTitle').textContent = 'RBMK reactors';
  document.getElementById('storyText').textContent = 'This step highlights RBMK reactors.';
  GIS.showLayer('nuclear_reactors_europe_all', \"reactor_type CONTAINS 'RBMK'\");
">
  RBMK reactors
</button>
```

For longer stories, use a small helper function:

```html
<script>
function setStory(title, text) {
  document.getElementById('storyTitle').textContent = title;
  document.getElementById('storyText').textContent = text;
}
</script>
```

Then buttons stay readable:

```html
<button onclick="
  setStory('RBMK reactors', 'This step highlights RBMK reactors.');
  GIS.showLayer('nuclear_reactors_europe_all', \"reactor_type CONTAINS 'RBMK'\");
">
  RBMK reactors
</button>
```

---

## 6. Complete example: Europe timeline

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Europe timeline</title>
</head>
<body>

<h1>Europe timeline</h1>

<h2 id="storyTitle">European integration</h2>
<p id="storyText">Select a phase.</p>

<button onclick="
  GIS.saveState('europe-timeline');
  GIS.hideFeatures('eu_membership_timeline');
  setStory('Map prepared', 'The timeline layer is ready.');
">
  Prepare map
</button>

<button onclick="
  GIS.showLayer('eu_membership_timeline', 'accession_wave <= 1');
  setStory('1958 · Founding members', 'The six founding members become visible.');
">
  1958 · Founding members
</button>

<button onclick="
  GIS.showLayer('eu_membership_timeline', 'accession_wave <= 6');
  setStory('2004 · Great enlargement', 'The enlargement toward Central and Eastern Europe becomes visible.');
">
  2004 · Great enlargement
</button>

<button onclick="
  GIS.showLayer('eu_membership_timeline', 'is_current_member IS TRUE');
  setStory('EU at 27', 'The current members are visible.');
">
  EU at 27
</button>

<button onclick="
  GIS.showLayer('eu_membership_timeline', \"id = 'eu_membership_gbr'\");
  setStory('United Kingdom', 'The United Kingdom is shown as a historical member.');
">
  United Kingdom
</button>

<button onclick="
  GIS.restoreLayer('eu_membership_timeline');
  GIS.restoreState('europe-timeline');
  setStory('Layer restored', 'The map has been restored.');
">
  Restore map
</button>

<script>
function setStory(title, text) {
  document.getElementById('storyTitle').textContent = title;
  document.getElementById('storyText').textContent = text;
}
</script>

</body>
</html>
```

---

## 7. Complete example: nuclear story

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nuclear reactors in Europe</title>
</head>
<body>

<h1>Nuclear reactors in Europe</h1>

<h2 id="storyTitle">European nuclear infrastructure</h2>
<p id="storyText">Select a step.</p>

<button onclick="
  GIS.saveState('nuclear-story');
  GIS.showOnlyLayer('nuclear_reactors_europe_all', {
    keep: ['ne_10m_admin_0_countries', 'cnoteurope']
  });
  setStory('Map prepared', 'Only the nuclear reactor layer and the base map are visible.');
">
  Prepare map
</button>

<button onclick="
  GIS.showLayer('nuclear_reactors_europe_all');
  setStory('All reactors', 'All reactor points are visible.');
">
  All reactors
</button>

<button onclick="
  GIS.showLayer('nuclear_reactors_europe_all', \"reactor_type CONTAINS 'RBMK'\");
  setStory('RBMK reactors', 'The map highlights RBMK reactors.');
">
  RBMK reactors
</button>

<button onclick="
  GIS.showLayer('nuclear_reactors_europe_all', \"status CONTAINS 'decommission'\");
  setStory('Decommissioning', 'The map highlights reactors related to decommissioning.');
">
  Decommissioning
</button>

<button onclick="
  GIS.restoreLayer('nuclear_reactors_europe_all');
  GIS.restoreState('nuclear-story');
  setStory('Map restored', 'The previous layer visibility has been restored.');
">
  Restore map
</button>

<script>
function setStory(title, text) {
  document.getElementById('storyTitle').textContent = title;
  document.getElementById('storyText').textContent = text;
}
</script>

</body>
</html>
```

---

## 8. Registering the story in `index.json`

After creating the HTML file, add it to `stories/index.json`.

Example:

```json
{
  "id": "nuclear_en",
  "title": "Nuclear reactors in Europe",
  "file": "nuclear_en.html",
  "language": "en",
  "category": "Energy",
  "description": "A narrative map story about nuclear reactors in Europe."
}
```

Keep the path relative to the `stories/` directory.

---

## 9. Browser console checks

Open the browser console and run:

```js
GIS.version
GIS.listLayers()
```

Check a specific layer:

```js
GIS.describeLayer('eu_membership_timeline')
GIS.describeLayer('nuclear_reactors_europe_all')
```

Test a command manually:

```js
GIS.showLayer('eu_membership_timeline', 'accession_wave <= 1')
```

Restore:

```js
GIS.restoreLayer('eu_membership_timeline')
```

---

## 10. Compatibility

Existing stories that use the old bridge command system still work:

```js
CNOTAtlasBridge.execute('showMembershipUpToWave', {
  wave: 1,
  includeFormer: true,
  fit: false
})
```

The older HTML attribute pattern also remains supported:

```html
<button
  data-cnot-action="showMembershipUpToWave"
  data-cnot-args='{"wave":1,"includeFormer":true,"fit":false}'>
  1958 · Founding members
</button>
```

New stories should use `GIS.*` commands.

