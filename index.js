// =====================================================================
// Tab Bar UI Types - Different Variants for Tab Bar (with/without action button)
// =====================================================================
const types = [
  {
    "4 Tabs with Action Button":
      // --- Tab bar with action button (4 tabs) ---
      `
      <div class="tab-bar glassy">
        <div class="tab-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
            />
          </svg>
          <p>Home</p>
        </div>
        <div class="tab-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
          </svg>
          <p>New</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
            <path d="M4 12h16" />
            <path d="M7 12v-2" />
            <path d="M17 16v.01" />
            <path d="M13 16v.01" />
          </svg>
          <p>Radio</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M5 8h4" />
            <path d="M9 16h4" />
            <path
              d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"
            />
            <path d="M14 9l4 -1" />
            <path d="M16 16l3.923 -.98" />
          </svg>
          <p>Library</p>
        </div>
      </div>
      <div class="action-btn glassy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>`,
  }, {
    "3 Tabs with Action Button":
      // --- Tab bar with action button (3 tabs) ---
      `
      <div class="tab-bar glassy">
        <div class="tab-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
            />
          </svg>
          <p>Home</p>
        </div>
        <div class="tab-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
          </svg>
          <p>New</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
            <path d="M4 12h16" />
            <path d="M7 12v-2" />
            <path d="M17 16v.01" />
            <path d="M13 16v.01" />
          </svg>
          <p>Radio</p>
        </div>
      </div>
      <div class="action-btn glassy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>`,
  }, {
    "2 Tabs with Action Button":
      // --- Tab bar with action button (2 tabs) ---
      `
      <div class="tab-bar glassy">
        <div class="tab-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
            />
          </svg>
          <p>Home</p>
        </div>
        <div class="tab-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
          </svg>
          <p>New</p>
        </div>
      </div>
      <div class="action-btn glassy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </div>`,
  }, {
    "5 Tabs without Action Button":
      // --- Tab bar without action button (5 tabs) ---
      `      <div class="tab-bar glassy">
        <div class="tab-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
            />
          </svg>
          <p>Home</p>
        </div>
        <div class="tab-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
          </svg>
          <p>New</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
            <path d="M4 12h16" />
            <path d="M7 12v-2" />
            <path d="M17 16v.01" />
            <path d="M13 16v.01" />
          </svg>
          <p>Radio</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M5 8h4" />
            <path d="M9 16h4" />
            <path
              d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"
            />
            <path d="M14 9l4 -1" />
            <path d="M16 16l3.923 -.98" />
          </svg>
          <p>Library</p>
        </div>
        <div class="tab-item">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
            </svg>
          <p>Search</p>
        </div>
      </div>`,
  }, {
    "4 Tabs without Action Button":
      // --- Tab bar without action button (4 tabs) ---
      `      <div class="tab-bar glassy">
        <div class="tab-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
            />
          </svg>
          <p>Home</p>
        </div>
        <div class="tab-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
          </svg>
          <p>New</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
            <path d="M4 12h16" />
            <path d="M7 12v-2" />
            <path d="M17 16v.01" />
            <path d="M13 16v.01" />
          </svg>
          <p>Radio</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
            <path d="M5 8h4" />
            <path d="M9 16h4" />
            <path
              d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"
            />
            <path d="M14 9l4 -1" />
            <path d="M16 16l3.923 -.98" />
          </svg>
          <p>Library</p>
        </div>
      </div>`,
  }, {
    "3 Tabs without Action Button":
      // --- Tab bar without action button (3 tabs) ---
      `      <div class="tab-bar glassy">
        <div class="tab-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
            />
          </svg>
          <p>Home</p>
        </div>
        <div class="tab-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
          </svg>
          <p>New</p>
        </div>
        <div class="tab-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3l-9.371 3.749a1 1 0 0 0 -.629 .928v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-11a1 1 0 0 0 -1 -1h-14.5" />
            <path d="M4 12h16" />
            <path d="M7 12v-2" />
            <path d="M17 16v.01" />
            <path d="M13 16v.01" />
          </svg>
          <p>Radio</p>
        </div>
      </div>`,
  }, {
    "2 Tabs without Action Button":
      // --- Tab bar without action button (2 tabs) ---
      `      <div class="tab-bar glassy">
        <div class="tab-item selected">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"
            />
          </svg>
          <p>Home</p>
        </div>
        <div class="tab-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
            <path d="M19 13a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
          </svg>
          <p>New</p>
        </div>
      </div>`}
]

/* =====================================================================
   Tab Bar Type Selection Logic & Navigation
   ===================================================================== */
let currentTypeIndex = 0;
let nav = document.querySelector("nav");
const selectTypeName = document.getElementById("select-type-name");

function showCurrentType() {
  // Retrieve the current type object and its key/label
  const typeObj = types[currentTypeIndex];
  const key = Object.keys(typeObj)[0];
  const html = typeObj[key];

  nav.innerHTML = html;
  if (selectTypeName) {
    selectTypeName.textContent = key;
  }
}

// Tab bar type prev/next handlers
document.getElementById("prev-btn").addEventListener("click", () => {
  currentTypeIndex = (currentTypeIndex - 1 + types.length) % types.length;
  showCurrentType();
});
document.getElementById("next-btn").addEventListener("click", () => {
  currentTypeIndex = (currentTypeIndex + 1) % types.length;
  showCurrentType();
});

document.addEventListener("DOMContentLoaded", showCurrentType);

/* =====================================================================
   Add or remove .compact class on <nav> based on scroll direction
   ===================================================================== */
let lastScrollY = window.scrollY;
let compactNav = false;
function handleNavCompactOnScroll() {
  const newScrollY = window.scrollY;
  if (!nav) nav = document.querySelector("nav");
  if (!nav) return;
  if (newScrollY > lastScrollY + 2) {
    // Scrolled down
    if (!compactNav) {
      nav.classList.add("compact");
      compactNav = true;
    }
  } else if (newScrollY < lastScrollY - 2) {
    // Scrolled up
    if (compactNav) {
      nav.classList.remove("compact");
      compactNav = false;
    }
  }
  lastScrollY = newScrollY;
}
window.addEventListener("scroll", handleNavCompactOnScroll);

/* =====================================================================
   Floating Rectangle Animation Settings & Calculation Helpers
   ===================================================================== */
const FLOATING_RECT_COLLAPSED_HEIGHT = 56;
const FLOATING_RECT_EXPANDED_HEIGHT = 72;
const FLOATING_RECT_TRANSITION_DURATION = 0.25;
const FLOATING_RECT_TRANSITION_TYPE = "ease-in-out";

function getFloatingRectWidths(tabBar) {
  if (!tabBar) return { expanded: 88, collapsed: 72 };
  const style = window.getComputedStyle(tabBar);
  const padLeft = parseFloat(style.paddingLeft) || 0;
  const padRight = parseFloat(style.paddingRight) || 0;
  if (Math.abs(padLeft - 32) < 2 && Math.abs(padRight - 32) < 2) {
    return { expanded: 104, collapsed: 88 };
  }
  if (Math.abs(padLeft - 24) < 2 && Math.abs(padRight - 24) < 2) {
    return { expanded: 88, collapsed: 72 };
  }
  return { expanded: 88, collapsed: 72 };
}

/* =====================================================================
   Touch Interaction - Floating Rect Hover Effect for Tab Bar
   ===================================================================== */
function attachTabBarTouchListeners() {
  const tabBar = document.querySelector('.tab-bar');
  if (!tabBar) return;
  if (tabBar._touchListenersAttached) return;
  tabBar._touchListenersAttached = true;

  tabBar.addEventListener('touchstart', function (event) {
    if (!nav) nav = document.querySelector("nav");
    if (nav && nav.classList.contains("compact")) {
      nav.classList.remove("compact");
      compactNav = false;
      event.preventDefault();
      return;
    }
  }, { passive: false });

  let isTouchActive = false;
  let floatingRect = null;
  let allowTouchMove = false;
  let floatingRectCenter = { x: null, y: null };
  let touchStartSelectedIdx = -1;
  let lastFloatingRectState = null;

  function getWidths() {
    return getFloatingRectWidths(tabBar);
  }

  function getRectCenter(rect) {
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  function shouldEnableFloatingRect() {
    if (!nav) nav = document.querySelector("nav");
    if (!nav) return true;
    return !nav.classList.contains("compact");
  }

  function updateFloatingRect(event) {
    if (!isTouchActive || !floatingRect) return;
    if (!(event && event.touches && event.touches.length > 0)) return;
    if (!shouldEnableFloatingRect()) {
      floatingRect.style.display = "none";
      return;
    }

    const touch = event.touches[0];
    const tabBarRect = tabBar.getBoundingClientRect();
    const { expanded: expandedWidth } = getWidths();

    let centerX = touch.clientX;
    const minX = tabBarRect.left + expandedWidth / 2 - 4;
    const maxX = tabBarRect.right - expandedWidth / 2 + 4;
    centerX = Math.max(minX, Math.min(centerX, maxX));
    const x = centerX - expandedWidth / 2;
    const y = tabBarRect.top + (tabBarRect.height - FLOATING_RECT_EXPANDED_HEIGHT) / 2;

    let squishX = 0, squishY = 0, offsetX = 0, offsetY = 0;

    if (touch.clientY < tabBarRect.top) {
      const dist = tabBarRect.top - touch.clientY;
      squishY = dist <= 32 ? dist / 32 : 1;
      offsetY = -Math.min(dist / 2, 16);
    } else if (touch.clientY > tabBarRect.bottom) {
      const dist = touch.clientY - tabBarRect.bottom;
      squishY = dist <= 32 ? dist / 32 : 1;
      offsetY = Math.min(dist / 2, 16);
    }

    if (touch.clientX < minX - expandedWidth / 2 + 4) {
      const dist = (minX - expandedWidth / 2 + 4) - touch.clientX;
      squishX = dist <= 32 ? dist / 32 : 1;
      offsetX = -Math.min(dist / 2, 16);
    } else if (touch.clientX > maxX + expandedWidth / 2 - 4) {
      const dist = touch.clientX - (maxX + expandedWidth / 2 - 4);
      squishX = dist <= 32 ? dist / 32 : 1;
      offsetX = Math.min(dist / 2, 16);
    }

    const minSquish = 0.7;
    const scaleX = 1 - (1 - minSquish) * squishX;
    const scaleY = 1 - (1 - minSquish) * squishY;

    floatingRect.style.left = `${x}px`;
    floatingRect.style.top = `${y}px`;
    floatingRect.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scaleX}, ${scaleY})`;
    floatingRect.style.display = "block";

    floatingRectCenter.x = x + expandedWidth / 2 + offsetX;
    floatingRectCenter.y = y + FLOATING_RECT_EXPANDED_HEIGHT / 2 + offsetY;

    lastFloatingRectState = {
      x, y, offsetX, offsetY,
      scaleX, scaleY,
      width: expandedWidth,
      height: FLOATING_RECT_EXPANDED_HEIGHT
    };
  }

  function hideFloatingRectAndSlideToSelected(selectedEl) {
    if (!floatingRect) return;

    const { expanded: expandedWidth, collapsed: collapsedWidth } = getWidths();
    let width = expandedWidth, height = FLOATING_RECT_EXPANDED_HEIGHT;
    let left, top;
    let start = lastFloatingRectState || {};

    if (selectedEl) {
      const rect = selectedEl.getBoundingClientRect();
      width = collapsedWidth;
      height = FLOATING_RECT_COLLAPSED_HEIGHT;
      left = rect.left + (rect.width - width) / 2;
      top = rect.top + (rect.height - height) / 2;
    } else if (floatingRectCenter.x !== null && floatingRectCenter.y !== null) {
      left = floatingRectCenter.x - width / 2;
      top = floatingRectCenter.y - height / 2;
    } else {
      floatingRect.style.display = "none";
      isTouchActive = false;
      return;
    }

    if (
      start &&
      typeof start === "object" &&
      typeof start.x === "number" &&
      typeof start.scaleX === "number"
    ) {
      floatingRect.style.transition = "none";
      floatingRect.style.left = `${start.x}px`;
      floatingRect.style.top = `${start.y}px`;
      floatingRect.style.width = `${start.width}px`;
      floatingRect.style.height = `${start.height}px`;
      floatingRect.style.transform = `translate(${start.offsetX || 0}px, ${start.offsetY || 0}px) scale(${start.scaleX}, ${start.scaleY})`;
    }

    requestAnimationFrame(() => {
      floatingRect.style.transition =
        `left ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
        `top ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
        `width ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
        `height ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
        `transform ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}`;
      floatingRect.style.width = `${width}px`;
      floatingRect.style.height = `${height}px`;
      floatingRect.style.left = `${left}px`;
      floatingRect.style.top = `${top}px`;
      floatingRect.style.transform = "";
    });

    function handleTransitionEnd(e) {
      if (
        e &&
        (e.propertyName === "left" ||
          e.propertyName === "top" ||
          e.propertyName === "width" ||
          e.propertyName === "height")
      ) {
        floatingRect.style.display = "none";
        floatingRect.removeEventListener("transitionend", handleTransitionEnd);
        floatingRect.style.transition = "";
        floatingRect.style.width = `${expandedWidth}px`;
        floatingRect.style.height = `${FLOATING_RECT_EXPANDED_HEIGHT}px`;
        floatingRect.style.transform = "";
        lastFloatingRectState = null;
      }
    }
    floatingRect.addEventListener("transitionend", handleTransitionEnd);

    isTouchActive = false;
    lastFloatingRectState = null;
  }

  tabBar.addEventListener("touchstart", function (event) {
    if (!shouldEnableFloatingRect()) {
      // If nav is compact, don't activate floating div or interactive effect
      isTouchActive = false;
      allowTouchMove = false;
      floatingRectCenter = { x: null, y: null };
      touchStartSelectedIdx = -1;
      lastFloatingRectState = null;
      // If a floating-rect exists, hide it if visible
      const fr = document.querySelector(".floating-rect");
      if (fr) fr.style.display = "none";
      return;
    }

    isTouchActive = false;
    allowTouchMove = false;
    floatingRectCenter = { x: null, y: null };
    touchStartSelectedIdx = -1;
    lastFloatingRectState = null;

    tabBar.querySelectorAll(".tab-item.selected").forEach(el => el.classList.remove("selected"));

    let selectedRect = null,
      selectedEl = null,
      tabItems = [...tabBar.querySelectorAll(".tab-item")];
    tabItems.forEach((el, i) => {
      if (el.classList.contains("selected")) {
        selectedRect = el.getBoundingClientRect();
        selectedEl = el;
        touchStartSelectedIdx = i;
      }
    });

    floatingRect = document.querySelector(".floating-rect");
    const { expanded: expandedWidth } = getWidths();

    if (!floatingRect) {
      floatingRect = document.createElement("div");
      floatingRect.className = "floating-rect";
      Object.assign(floatingRect.style, {
        position: "fixed",
        transform: "translateZ(0)",
        willChange: "left, top, width, height",
        left: "0px",
        top: "0px",
        width: `${expandedWidth}px`,
        height: `${FLOATING_RECT_EXPANDED_HEIGHT}px`,
        background: "rgba(255,255,255,0.25)",
        borderRadius: "36px",
        pointerEvents: "none",
        zIndex: 1000,
        display: "none"
      });
      document.body.appendChild(floatingRect);
    } else {
      floatingRect.style.transition = "";
    }
    floatingRect.style.width = `${expandedWidth}px`;
    floatingRect.style.height = `${FLOATING_RECT_EXPANDED_HEIGHT}px`;

    if (event.target.closest(".tab-bar")) {
      isTouchActive = true;
      event.preventDefault();

      if (selectedRect) {
        const left =
          selectedRect.left + (selectedRect.width - expandedWidth) / 2;
        const top =
          selectedRect.top +
          (selectedRect.height - FLOATING_RECT_EXPANDED_HEIGHT) / 2;
        floatingRect.style.transition = "none";
        floatingRect.style.left = `${left}px`;
        floatingRect.style.top = `${top}px`;
        floatingRect.style.display = "block";
        allowTouchMove = true;
        requestAnimationFrame(() => {
          floatingRect.style.transition =
            `left ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
            `top ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
            `width ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
            `height ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE},` +
            `transform ${FLOATING_RECT_TRANSITION_DURATION}s ${FLOATING_RECT_TRANSITION_TYPE}`;
        });
      } else {
        floatingRect.style.display = "block";
        allowTouchMove = true;
      }
      updateFloatingRect(event);
    }
  }, { passive: false });

  tabBar.addEventListener("touchmove", function (event) {
    if (!isTouchActive || !allowTouchMove) return;
    if (!shouldEnableFloatingRect()) {
      if (floatingRect) floatingRect.style.display = "none";
      return;
    }
    event.preventDefault();
    if (floatingRect && floatingRect.style.transition !== "") {
      floatingRect.style.transition = "";
    }
    updateFloatingRect(event);
  }, { passive: false });

  tabBar.addEventListener("touchend", function (event) {
    if (!isTouchActive) return;
    if (!shouldEnableFloatingRect()) {
      if (floatingRect) floatingRect.style.display = "none";
      isTouchActive = false;
      allowTouchMove = false;
      return;
    }
    event.preventDefault();
    if (
      floatingRect &&
      floatingRect.style.transform &&
      !/^ *$/.test(floatingRect.style.transform)
    ) {
      const currTransform = floatingRect.style.transform;
      const match = currTransform.match(
        /translate\(([-\d.]+)px,\s*([-\d.]+)px\)\s*scale\(([\d.]+),\s*([\d.]+)\)/
      );
      if (match) {
        const dx = parseFloat(match[1]);
        const dy = parseFloat(match[2]);
        const scaleX = parseFloat(match[3]);
        const scaleY = parseFloat(match[4]);
        const currentLeft = parseFloat(floatingRect.style.left) || 0;
        const currentTop = parseFloat(floatingRect.style.top) || 0;
        const currentWidth = parseFloat(floatingRect.style.width) || 0;
        const currentHeight = parseFloat(floatingRect.style.height) || 0;
        lastFloatingRectState = {
          x: currentLeft,
          y: currentTop,
          offsetX: dx,
          offsetY: dy,
          scaleX,
          scaleY,
          width: currentWidth,
          height: currentHeight
        };
      }
    }

    let selectedOrNearestEl = null;
    const tabItems = [...tabBar.querySelectorAll(".tab-item")];
    if (event?.changedTouches?.length > 0) {
      const touch = event.changedTouches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      for (let el of tabItems) {
        const rect = el.getBoundingClientRect();
        if (
          x >= rect.left &&
          x <= rect.right &&
          y >= rect.top &&
          y <= rect.bottom
        ) {
          setTimeout(() => {
            // tabItems.forEach(tab => tab.classList.remove("selected"));
            el.classList.add("selected");
          }, FLOATING_RECT_TRANSITION_DURATION * 1000);
          selectedOrNearestEl = el;
          break;
        }
      }
      if (!selectedOrNearestEl && tabItems.length > 0) {
        let minDistance = Infinity,
          nearestEl = null;
        for (let el of tabItems) {
          const rect = el.getBoundingClientRect();
          const dx =
            x < rect.left ? rect.left - x : x > rect.right ? x - rect.right : 0;
          const dy =
            y < rect.top ? rect.top - y : y > rect.bottom ? y - rect.bottom : 0;
          const dist = Math.hypot(dx, dy);
          if (dist < minDistance) {
            minDistance = dist;
            nearestEl = el;
          }
        }
        if (nearestEl) {
          setTimeout(() => {
            // tabItems.forEach(tab => tab.classList.remove("selected"));
            nearestEl.classList.add("selected");
          }, FLOATING_RECT_TRANSITION_DURATION * 1000);
          selectedOrNearestEl = nearestEl;
        }
      }
    }

    hideFloatingRectAndSlideToSelected(selectedOrNearestEl);
  }, { passive: false });

  tabBar.addEventListener("touchcancel", function (event) {
    if (!isTouchActive) return;
    if (!shouldEnableFloatingRect()) {
      if (floatingRect) floatingRect.style.display = "none";
      isTouchActive = false;
      allowTouchMove = false;
      return;
    }
    event.preventDefault();
    hideFloatingRectAndSlideToSelected(null);
  }, { passive: false });
}

/* =====================================================================
   On DOM load, setup touch listeners & MutationObserver for tab bar UI
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  attachTabBarTouchListeners();
  nav = document.querySelector("nav");
  if (nav) {
    new MutationObserver(attachTabBarTouchListeners).observe(nav, {
      childList: true,
      subtree: true,
    });
  }
});