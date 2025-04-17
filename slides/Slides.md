---
marp: true
theme: custom-default
footer: '(draft presentation) James Gress | jamesgress.com | Director, Accenture'
---
<!-- My Speaker Notes Header -->
# Future of Software Engineering (Draft Presentation)

![bg right:40%](img/jamesgress.png)

## James Gress

_AI Director_
_Emerging Technology AI Lead_
_Accenture_


<i class="fa-brands fa-linkedin"></i> LinkedIn: - [jamesgress](https://linkedin.com/in/jamesgress/)  
<i class="fa-brands fa-github"></i> GitHub: [jmgress](https://github.com/jmgress)  
<i class="fa-brands fa-twitter"></i> X.com: [@jmgress](https://x.com/jmgress)  

<!-- My Speaker Notes Footer -->

---

<!-- slide: title -->
# The Evolution of Software Engineering in the Age of AI

---

## I. Opening: A World Transformed by AI

> "Everyone in the world is now a programmer. This is the miracle of artificial intelligence." — Jensen Huang

- Generative AI is reshaping every industry  
- Software engineering is both the catalyst and the canvas  
- From code-centric to context-centric  

---
<!-- In the interview December 2024, Nadella elaborated on how AI agents are poised to revolutionize the traditional software model: Esentially he said Agents will replace Software​ 

https://www.youtube.com/watch?v=9NtsnzRFJ_o&t=1122s
-->

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 0 auto;">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    src="https://www.youtube.com/embed/9NtsnzRFJ_o?start=1122" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

> *Satya Nadella: "AI is the runtime that will shape all of what we do"*

---

## II. Then: Traditional Software Engineering

- Waterfall → Agile  
- Developers as deep specialists  
- Manual testing, static IDEs  
- Engineering as craft: precision over speed  

---

## III. Now: The AI-Augmented Engineer

- Tools: Copilot, Cody, Tabnine  
- Prompting over scripting  
- Engineers become editors, validators, and context managers  

---

## IV. Rethinking the Engineering Lifecycle

- Prompt-driven pipelines  
- AI + DevOps: new quality gates and CI/CD patterns  
- Agentic workflows: LangGraph, Swarm, etc.  
- Challenges: testing, security, shifting model behaviors  

---

## V. Role Reimagined: Who Is a Software Engineer Now?

- Builders → Translators  
- Hybrid roles emerge (prompt engineers, system orchestrators)  
- Low-code doesn’t eliminate engineers — it elevates them  
- Critical thinking > Code memorization  

---

## VI. The End of \"Tech for Tech’s Sake\"

- Old mentality: \"I just code, not business\"  
- AI needs business context to generate useful output  
- Engineers must understand goals, not just syntax  

> *“In the future, the best engineers won’t just know how to code — they’ll know why the code matters.”*

---

## VII. Real-World Stories & Demos

### Before & After
- Manual setup vs. AI scaffolding  
- Senior-led vs. Copilot-enhanced collaboration  

---

## VII. Real-World Stories (cont'd)

### Case Study: GenAI-Enhanced Team

- Dashboard project  
- Used Copilot for backend + frontend generation  
- Result: 40% faster delivery, better morale, more throughput  

---

## VII. Your Story: Vibe Coding in the Enterprise

- Adapted a version of \"Vibe Coding\" using Copilot Workspaces  
- Prompting structured around business context and enterprise standards  
- Junior devs contributed to architecture with confidence  

> *“By guiding Copilot with business intent, I was co-designing, not just coding.”*

---

## VIII. Preparing for the Future

- Learn prompting, system thinking, and architecture  
- Embrace cultural change: experimentation and transparency  
- Grow internal champions for AI adoption  

---

## IX. Closing: A Call to Lead

> \"AI is the runtime that is going to shape all of what we do…\" — Satya Nadella

- Will you be a passenger — or help engineer the future?  
- Start learning. Start prompting. Start leading.  

> *“The next chapter of software engineering is being written now — and we’re all holding the pen.”*

---

## The Evolution of Software Engineering

<!-- Needed for mermaid, can be anywhere in file except frontmatter -->
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true });
</script>


<div class="mermaid">
flowchart TB
    subgraph "Evolution of Software Engineering"
        direction TB
        
        subgraph "TRADITIONAL ERA"
            direction LR
            A[Waterfall] --> B[Agile]
            B --> C[DevOps]
            C --> D[Cloud Native]
            
            style A fill:#f9d5e5,stroke:#333
            style B fill:#f9d5e5,stroke:#333
            style C fill:#f9d5e5,stroke:#333
            style D fill:#f9d5e5,stroke:#333
        end
        
        subgraph "AI-AUGMENTED ERA"
            direction LR
            E[Generative AI Tools] --> F[AI-Assisted Development]
            F --> G[Prompt Engineering]
            G --> H[Autonomous AI Agents]
            
            style E fill:#d5f9e5,stroke:#333
            style F fill:#d5f9e5,stroke:#333
            style G fill:#d5f9e5,stroke:#333
            style H fill:#d5f9e5,stroke:#333
        end
        
        TRADITIONAL --> AI-AUGMENTED
        
        subgraph "Engineer Focus Shift"
            direction TB
            TECH["🔧 Technology-Centric<br>- Code Knowledge<br>- Tool Mastery<br>- Implementation Skills"] --> CONTEXT["🧠 Context-Centric<br>- Business Understanding<br>- Prompt Design<br>- System Orchestration"]
            
            style TECH fill:#eeeeee,stroke:#333
            style CONTEXT fill:#eeeeee,stroke:#333
        end
    end
</div>

---

# <!--fit--> Questions?