document.addEventListener('DOMContentLoaded', () => {
    initReactRoadmap();
});

function initReactRoadmap() {
    const container = document.getElementById('roadmap-content');
    if (!container) return;

    const reactCurriculum = [
        { title: "PHASE_01: React_Fundamentals", desc: "JSX, Elements, and the Virtual DOM.", modules: [{n:"JSX Syntax", u:"https://react.dev/learn/writing-markup-with-jsx"}, {n:"Components & Props", u:"https://react.dev/learn/passing-props-to-a-component"}] },
        { title: "PHASE_02: State_&_Effect", desc: "Managing data and lifecycle with Hooks.", modules: [{n:"useState Hook", u:"https://react.dev/reference/react/useState"}, {n:"useEffect Hook", u:"https://react.dev/reference/react/useEffect"}] },
        { title: "PHASE_03: Events_&_Forms", desc: "Handling user input and interactivity.", modules: [{n:"Responding to Events", u:"https://react.dev/learn/responding-to-events"}, {n:"Controlled Components", u:"https://react.dev/learn/sharing-state-between-components"}] },
        { title: "PHASE_04: Advanced_Hooks", desc: "Optimizing and sharing logic.", modules: [{n:"useContext Hook", u:"https://react.dev/reference/react/useContext"}, {n:"useMemo & useCallback", u:"https://react.dev/reference/react/useMemo"}] },
        { title: "PHASE_05: Routing_&_Navigation", desc: "Creating Multi-page SPAs.", modules: [{n:"React Router v6", u:"https://reactrouter.com/en/main"}, {n:"Protected Routes", u:"https://www.freecodecamp.org/news/how-to-create-protected-routes-in-react/"}] },
        { title: "PHASE_06: State_Management", desc: "Scaling applications with global state.", modules: [{n:"Zustand Guide", u:"https://docs.pmnd.rs/zustand/getting-started/introduction"}, {n:"Redux Toolkit", u:"https://redux-toolkit.js.org/introduction/getting-started"}] },
        { title: "PHASE_07: Fullstack_Ecosystem", desc: "Frameworks and Data Fetching.", modules: [{n:"Next.js Fundamentals", u:"https://nextjs.org/docs"}, {n:"React Query (TanStack)", u:"https://tanstack.com/query/latest/docs/framework/react/overview"}] }
    ];

    container.innerHTML = ''; 

    reactCurriculum.forEach((phase, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const node = document.createElement('div');
        node.className = `chapter-node ${side}`;
        
        node.innerHTML = `
            <div class="node-header">
                <h3>${phase.title}</h3>
                <button class="toggle-btn" onclick="toggleReactModule(this)">+</button>
            </div>
            <div class="chapter-details">
                <p style="color:#666; font-size:0.9rem; margin-bottom:15px;">${phase.desc}</p>
                <div class="module-list">
                    ${phase.modules.map(m => `
                        <a href="${m.u}" target="_blank" class="module-link">
                            <i class="fab fa-react" style="margin-right:10px; color:var(--react-cyan);"></i> ${m.n}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(node);
    });

    gsap.from('.chapter-node', {
        scrollTrigger: { trigger: '.roadmap-wrapper', start: "top 80%" },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
    });
}

function toggleReactModule(btn) {
    const details = btn.parentElement.nextElementSibling;
    btn.classList.toggle('active');
    details.classList.toggle('open');
    btn.innerText = btn.classList.contains('active') ? '×' : '+';
}