import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Code2, Search } from "lucide-react";

const pythonSnippet = `import PyPDF2

def split_requests(input_pdf):
    reader = PyPDF2.PdfReader(input_pdf)
    request_pages = []
    current = []

    for page in reader.pages:
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)
        is_a4 = (width < 620)  # A4 ≈ 595pt

        if is_a4 and current:
            request_pages.append(current)
            current = [page]
        else:
            current.append(page)

    if current:
        request_pages.append(current)

    # Write each request to its own PDF
    for i, pages in enumerate(request_pages):
        writer = PyPDF2.PdfWriter()
        for p in pages:
            writer.add_page(p)
        with open(f"Request_{i+1:04d}.pdf", "wb") as f:
            writer.write(f)`;

const CaseStudies = () => {
  const [expandedCode, setExpandedCode] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-4" id="case-studies" ref={ref}>
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Case <span className="gradient-text">Studies</span></h2>
          <p className="section-subheading mx-auto">Real automation solutions from the field</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Case Study 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">1,000+ Requests Automation</h3>
                <p className="text-xs text-muted-foreground">Python · Batch Processing · PDF Splitting</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Challenge:</strong> The Consultant demanded submission of 1,000 requests within one week for 80 villas (10–15 requests each).
              </p>
              <p>
                <strong className="text-foreground">Solution:</strong> Designed a multi-stage automated pipeline — Excel data scaling → Bulk PDF generation → Python-based intelligent splitting of scanned documents by detecting A4 cover sheets vs A3 attachments.
              </p>
              <p>
                <strong className="text-foreground">Result:</strong> 1,000+ files generated, split, renamed, and archived automatically with 100% coding accuracy.
              </p>
            </div>

            {/* Expandable code */}
            <div>
              <button
                onClick={() => setExpandedCode(!expandedCode)}
                className="flex items-center gap-2 text-sm text-primary font-medium hover:opacity-80 transition-opacity"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${expandedCode ? "rotate-180" : ""}`} />
                {expandedCode ? "Hide" : "View"} Python Script
              </button>
              {expandedCode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3"
                >
                  <pre className="bg-background border border-border rounded-lg p-4 text-xs font-mono overflow-x-auto text-muted-foreground leading-relaxed">
                    <code>{pythonSnippet}</code>
                  </pre>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Excel Search Tool</h3>
                <p className="text-xs text-muted-foreground">Advanced Excel · Structured Indexing</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Context:</strong> Large project repository with 11,000+ documents across multiple stakeholders. Finding the right file was impacting productivity.
              </p>
              <p>
                <strong className="text-foreground">Solution:</strong> Built an Excel-based local search tool with structured indexing, consistent naming conventions, and keyword search across the entire repository.
              </p>
              <p>
                <strong className="text-foreground">Impact:</strong> Reduced average retrieval time from 3 minutes to 30 seconds. Improved site team responsiveness and faster coordination across project entities.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {["Advanced Excel", "Metadata Fields", "Naming Standards", "Dashboard Logs"].map((t) => (
                <span key={t} className="tech-badge text-xs">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
