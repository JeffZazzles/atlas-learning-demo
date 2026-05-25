(() => {
  const subjectNames = {
    math: "Math",
    ela: "ELA"
  };

  const subjectKey = (label) => label.trim().toLowerCase().replace(/\s+/g, "_");
  const subjectName = (key) => subjectNames[key] || key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  const text = (node) => node?.textContent?.trim() || "";

  function enhanceSetupSchedule() {
    if (document.querySelector(".subject-minute-editor")) return;
    const panels = [...document.querySelectorAll("#app .surface")];
    const panel = panels.find((item) => text(item.querySelector("h3")) === "Baseline Schedule");
    if (!panel) return;

    const labels = [...panel.querySelectorAll("label.field")];
    const subjectLabels = labels.filter((label) => /min\/wk/i.test(text(label.querySelector("span"))));
    if (!subjectLabels.length) return;

    const editor = document.createElement("div");
    editor.className = "subject-minute-editor";
    editor.innerHTML = `
      <div>
        <h4>Weekly Subject Time</h4>
        <p class="small-note">Rows are generated from selected subjects, so the scheduler can scale beyond Math and ELA.</p>
      </div>
      <div class="subject-minute-list"></div>
    `;
    const list = editor.querySelector(".subject-minute-list");

    subjectLabels.forEach((label) => {
      const raw = text(label.querySelector("span")).replace(/min\/wk/i, "").trim();
      const input = label.querySelector("input");
      if (!input) return;
      const row = document.createElement("label");
      row.className = "subject-minute-row";
      row.innerHTML = `
        <div>
          <strong>${raw}</strong>
          <span>Minutes per week</span>
        </div>
      `;
      row.append(input);
      list.append(row);
      label.remove();
    });

    const firstGrid = panel.querySelector(".field-grid");
    firstGrid?.insertAdjacentElement("afterend", editor);
  }

  function enhanceMonitorTabs() {
    if (document.querySelector(".monitor-workspace")) return;
    const heading = text(document.querySelector("#app h2"));
    if (heading !== "Teacher Dashboard") return;

    const surfaces = [...document.querySelectorAll("#app > .grid.two .surface, #app > .surface")];
    const heatmapSurface = surfaces.find((item) => text(item.querySelector("h3")) === "Skill Heatmap");
    const alertsSurface = surfaces.find((item) => text(item.querySelector("h3")) === "Alerts");
    const queueSurface = surfaces.find((item) => text(item.querySelector("h3")) === "Teacher Validation Queue");
    if (!heatmapSurface || !alertsSurface || !queueSurface) return;

    const workspace = document.createElement("section");
    workspace.className = "surface monitor-workspace";
    workspace.style.marginTop = "18px";
    workspace.innerHTML = `
      <div class="toolbar">
        <div>
          <h3>Monitor Workspace</h3>
          <p class="small-note">Switch between class patterns, urgent signals, and human-reviewed evidence.</p>
        </div>
      </div>
      <div class="secondary-tabs monitor-tabs" role="tablist" aria-label="Monitor sections">
        <button class="secondary-tab is-active" type="button" data-monitor-tab-panel="heatmap">Skill Heatmap</button>
        <button class="secondary-tab" type="button" data-monitor-tab-panel="alerts">Alerts</button>
        <button class="secondary-tab" type="button" data-monitor-tab-panel="validation">Validation Queue</button>
      </div>
    `;

    const panels = [
      ["heatmap", heatmapSurface],
      ["alerts", alertsSurface],
      ["validation", queueSurface]
    ].map(([id, surface]) => {
      const panel = document.createElement("div");
      panel.className = "monitor-panel";
      panel.dataset.monitorPanel = id;
      panel.hidden = id !== "heatmap";
      panel.append(...surface.childNodes);
      surface.remove();
      workspace.append(panel);
      return panel;
    });

    document.querySelector("#app .surface")?.insertAdjacentElement("afterend", workspace);
    const emptyGrid = document.querySelector("#app > .grid.two:empty");
    emptyGrid?.remove();

    workspace.querySelectorAll("[data-monitor-tab-panel]").forEach((button) => {
      button.addEventListener("click", () => {
        workspace.querySelectorAll("[data-monitor-tab-panel]").forEach((item) => item.classList.toggle("is-active", item === button));
        panels.forEach((panel) => {
          panel.hidden = panel.dataset.monitorPanel !== button.dataset.monitorTabPanel;
        });
      });
    });
  }

  function enhanceStudentSupport() {
    if (document.querySelector(".student-support-strip")) return;
    const layout = document.querySelector(".student-portal .mission-layout");
    const side = layout?.querySelector(".student-side-panel");
    if (!layout || !side) return;

    const badge = side.querySelector(".badge-shelf");
    const powers = [...side.querySelectorAll(".surface")].find((item) => text(item.querySelector("h3")) === "Skill Powers" || text(item.querySelector("h3")) === "Quest Signals");
    if (!badge && !powers) return;

    const strip = document.createElement("section");
    strip.className = "student-support-strip";
    strip.setAttribute("aria-label", "Student progress summaries");

    if (badge) {
      const summary = document.createElement("details");
      summary.className = "surface support-panel badge-shelf";
      const count = badge.querySelectorAll(".badge-card").length;
      summary.innerHTML = `
        <summary>
          <div>
            <h3>Badge Shelf</h3>
            <p class="small-note">${count} earned · click to see details</p>
          </div>
          <span class="tag green">${count}</span>
        </summary>
      `;
      const grid = badge.querySelector(".badge-grid");
      if (grid) summary.append(grid);
      strip.append(summary);
    }

    if (powers) {
      const status = powers.querySelector(".status-pill")?.outerHTML || "";
      const firstSkill = text(powers.querySelector(".skill-row h4")) || "Current skill";
      const progress = powers.querySelector(".progress-bar")?.outerHTML || "";
      const summary = document.createElement("details");
      summary.className = "surface support-panel";
      summary.innerHTML = `
        <summary>
          <div>
            <h3>Skill Powers</h3>
            <p class="small-note">${firstSkill} · click to see details</p>
          </div>
          ${status}
        </summary>
        <div class="support-progress">${progress}</div>
      `;
      const list = powers.querySelector(".skill-list");
      if (list) summary.append(list);
      strip.append(summary);
    }

    layout.before(strip);
    side.remove();
    layout.classList.add("is-compact");
  }

  function enhanceQuestMap() {
    const heading = [...document.querySelectorAll("#app h3")].find((item) => text(item) === "My Quest Map");
    if (!heading || document.querySelector(".subject-overview-grid")) return;
    const surface = heading.closest(".surface");
    const list = surface?.querySelector(".skill-list");
    if (!surface || !list) return;

    const rows = [...list.querySelectorAll(".skill-row")];
    const groups = rows.reduce((acc, row) => {
      const label = text(row.querySelector(".tag.math, .tag.ela, .tag"));
      const key = subjectKey(label || "subject");
      acc[key] = acc[key] || [];
      acc[key].push(row);
      return acc;
    }, {});
    const subjects = Object.keys(groups);
    if (subjects.length < 2) return;

    const overview = document.createElement("div");
    overview.className = "subject-overview-grid";
    subjects.forEach((subject, index) => {
      const scores = groups[subject].map((row) => {
        const match = text(row).match(/(\d+)% power/);
        return match ? Number(match[1]) : 0;
      });
      const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
      const button = document.createElement("button");
      button.className = `subject-progress-card ${index === 0 ? "is-active" : ""}`;
      button.type = "button";
      button.dataset.subjectFilter = subject;
      button.innerHTML = `
        <span>${subjectName(subject)}</span>
        <strong>${average}%</strong>
        <small>${groups[subject].length} quests</small>
        <span class="progress-bar"><span class="progress-fill ${average >= 76 ? "green" : average >= 58 ? "amber" : "red"}" style="width: ${average}%;"></span></span>
      `;
      overview.append(button);
    });

    const field = document.createElement("label");
    field.className = "field compact-field";
    field.innerHTML = `
      <span>Show quest details for</span>
      <select data-progress-subject-fallback>
        ${subjects.map((subject, index) => `<option value="${subject}" ${index === 0 ? "selected" : ""}>${subjectName(subject)}</option>`).join("")}
      </select>
    `;

    const showSubject = (subject) => {
      rows.forEach((row) => {
        const label = text(row.querySelector(".tag.math, .tag.ela, .tag"));
        row.hidden = subjectKey(label || "subject") !== subject;
      });
      overview.querySelectorAll("[data-subject-filter]").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.subjectFilter === subject);
      });
      field.querySelector("select").value = subject;
    };

    surface.insertBefore(overview, list);
    surface.insertBefore(field, list);
    overview.querySelectorAll("[data-subject-filter]").forEach((button) => {
      button.addEventListener("click", () => showSubject(button.dataset.subjectFilter));
    });
    field.querySelector("select").addEventListener("change", (event) => showSubject(event.target.value));
    showSubject(subjects[0]);
  }

  function applyEnhancements() {
    enhanceSetupSchedule();
    enhanceMonitorTabs();
    enhanceStudentSupport();
    enhanceQuestMap();
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyEnhancements();
    const app = document.querySelector("#app");
    if (app) {
      new MutationObserver(() => applyEnhancements()).observe(app, { childList: true, subtree: true });
    }
  });

  document.addEventListener("click", () => setTimeout(applyEnhancements, 0), true);
})();
