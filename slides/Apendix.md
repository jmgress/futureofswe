---
marp: true
theme: custom-default
footer: 'James Gress | AI Director @ Accenture | https://jmgress.github.io/futureofswe/'
---
# Future of Software Engineering

![bg right:40%](img/00-jamesgress.png)

## James Gress

_AI Director_
_Emerging Technology AI Lead_
_Accenture_


<i class="fa-brands fa-linkedin"></i> LinkedIn: - [jamesgress](https://linkedin.com/in/jamesgress/)  
<i class="fa-brands fa-github"></i> GitHub: [jmgress](https://github.com/jmgress)  
<i class="fa-brands fa-x-twitter"></i> X.com: [@jmgress](https://x.com/jmgress)  
<i class="fa-brands fa-meetup"></i> [Tampa Bay Generative AI Meetup](https://www.meetup.com/tampa-bay-generative-ai-meetup/)  

<!-- 
Done 100's of Prototypes
Taken 10 applications to Production ranging from simple RAG to more complex Agentic systems

What a great time to be in Tech in Tampa Bay
-->

---

# The Evolution of Software Engineering in the Age of AI

![w:500 center](img/qrtalktrack.png)

---

# <!--fit--> Apendix

---

# The Evolution of Software Engineering with AI

<div class="mermaid">
timeline
    2022 Nov 30 : ChatGPT Launches
    2023 : AI-Powered Code Completion Becomes Mainstream
    2024 : Conversational Coding Interfaces Emerge
    2025 : Agentic AI Systems Transform Development Workflows

</div>

---

# Jensen Huang – CEO, NVIDIA

> "The days of every line of code being written by software engineers are completely over."

> "Everyone in the world is now a programmer. This is the miracle of artificial intelligence."

> "It is our job to create computing technology such that nobody has to program. And that the programming language is human."

> "Generative AI is closing the technology divide. You don't have to be a C++ programmer to be successful."

— **Various speeches, 2023–2024**

---

# Vibe Coding Requires Vigilance

- Vibe coding may introduce shortcuts  
- AI might pull in PII or misuse data to “get the job done”  
- Code that looks good isn’t always code that’s safe  
- Review, guardrails, and governance are non-negotiable  

> *“Just because AI *can* solve it, doesn’t mean it *should* solve it that way.”*

---
# AI-Written Software Flow

<div class="mermaid">
flowchart LR
    subgraph Flow
        direction LR
        User[User]
        Software[Software]
        Database[Database]
        User --> Software --> Database
    end

    AI[AI]
    AI --> Software
</div>

---

# Not All Code Is Created Equal

**🎯 Mission-Critical Systems**  
_Defense, Aerospace, Healthcare_  
- Requires formal verification  
- Zero tolerance for failure  
- Governed by strict regulations (e.g., DO-178C, FDA)

**📦 Production Applications**  
_Internal tools, customer-facing software_  
- Must be stable, secure, and maintainable  
- Requires testing and code reviews  
- Breakage impacts real users or business ops

**🛠️ Developer Utilities**  
_Local scripts, test automation_  
- Built for speed and convenience  
- Often disposable or single-use  
- Lower risk — but can still spread bugs if reused

<!--

**Speaker Notes:**

We often talk about AI writing code — but the kind of code matters a lot.

- At the bottom are quick-and-dirty developer utilities.
- In the middle, business-critical software where QA matters.
- At the top are systems where failure is not an option.

The higher the risk, the greater the need for **rigor, review, and responsibility** — AI should support, not shortcut, those needs.

-->

<!--

**Speaker Notes:**

This diagram shows the hierarchy of software in terms of **risk and responsibility**.

- At the base, scripts are simple and usually only affect the developer.
- In the middle, shared programs must meet standards for other users.
- At the top, mission-critical systems can’t afford failures — lives or national security might be at stake.

So when we say “AI is writing code,” we need to ask: *which kind?*  
Because the stakes — and the consequences — are not the same.

-->
