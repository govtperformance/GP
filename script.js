document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.querySelector(".site-header");
  const onScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 18) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const copyBtn = document.getElementById("copy-template");
  const emailBtn = document.getElementById("email-gp");
  const template = `Subject: GP Concern Submission

Name:
Email:
Location (city/county/state):
Government entity or representative involved:
Issue summary:
Why this matters to the community:
Supporting links / documents / evidence:
Your connection to the issue:
Actions already taken:
What kind of guidance or support you are seeking:
`;

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(template);
        copyBtn.textContent = "Template Copied";
        setTimeout(() => copyBtn.textContent = "Copy Submission Template", 1800);
      } catch (e) {
        alert("Copy failed on this browser. Please copy the template manually.");
      }
    });
  }

  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      const subject = encodeURIComponent("GP Concern Submission");
      const body = encodeURIComponent(template);
      window.location.href = `mailto:Inquiries@GovtPerformance.com?subject=${subject}&body=${body}`;
    });
  }
});
