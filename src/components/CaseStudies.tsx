import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Code2, Search, FolderTree } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerAnimations";

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

const vbaSnippet = `' VBA Macro: Segregate Villas into Folders
Sub SegregateVillaFolders()
    Dim ws As Worksheet
    Set ws = ActiveSheet
    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    Dim basePath As String
    basePath = "C:\\Project\\Villas\\"
    
    Dim i As Long
    For i = 2 To ws.Cells(Rows.Count, 1).End(xlUp).Row
        Dim villaName As String
        villaName = ws.Cells(i, 1).Value
        
        ' Create villa folder + subfolders
        Dim folders As Variant
        folders = Array("Drawings", "Submittals", "RFIs", _
                       "Correspondence", "Photos")
        
        Dim f As Variant
        For Each f In folders
            Dim fullPath As String
            fullPath = basePath & villaName & "\\" & f
            If Not fso.FolderExists(fullPath) Then
                fso.CreateFolder fullPath
            End If
        Next f
    Next i
    MsgBox "80 villa folders created successfully!"
End Sub`;

const powershellSnippet = `# PowerShell: Bulk rename & move files
$source = "C:\\Scanned_Documents"
$files = Get-ChildItem $source -Filter "*.pdf"

foreach ($file in $files) {
    $newName = $file.Name -replace '\\s+', '_'
    $newName = $newName -replace '[^a-zA-Z0-9_.]', ''
    Rename-Item $file.FullName -NewName $newName
}

Write-Host "$($files.Count) files renamed."`;

const excelFormula = `=VSTACK(
  FILTER(Log_Drawings,
    ISNUMBER(SEARCH(B2, Log_Drawings[Document Title]))
    + ISNUMBER(SEARCH(B2, Log_Drawings[Reference No]))
  ),
  FILTER(Log_Submittals,
    ISNUMBER(SEARCH(B2, Log_Submittals[Subject]))
    + ISNUMBER(SEARCH(B2, Log_Submittals[Submittal ID]))
  ),
  FILTER(Log_Correspondence,
    ISNUMBER(SEARCH(B2, Log_Correspondence[Subject]))
  )
)`;

const CodeBlock = ({ code, language, expanded, onToggle, label }: { code: string; language: string; expanded: boolean; onToggle: () => void; label: string }) => (
  <div>
    <button
      onClick={onToggle}
      className="flex items-center gap-2 text-sm text-primary font-medium hover:opacity-80 transition-opacity"
    >
      <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      {expanded ? "Hide" : "View"} {label}
    </button>
    {expanded && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="mt-3"
      >
        <div className="relative">
          <span className="absolute top-2 right-3 text-[10px] uppercase tracking-wider text-muted-foreground/50 font-mono">{language}</span>
          <pre className="bg-background border border-border rounded-lg p-4 pt-7 text-xs font-mono overflow-x-auto text-muted-foreground leading-relaxed">
            <code>{code}</code>
          </pre>
        </div>
      </motion.div>
    )}
  </div>
);

const CaseStudies = () => {
  const [expandedPython, setExpandedPython] = useState(false);
  const [expandedVBA, setExpandedVBA] = useState(false);
  const [expandedPS, setExpandedPS] = useState(false);

  return (
    <section className="py-20 px-4" id="case-studies">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Case <span className="gradient-text">Studies</span></h2>
          <p className="section-subheading mx-auto">Real automation solutions from the field</p>
        </div>

        <StaggerContainer className="space-y-6">
          {/* Row 1: Two cards */}
          <StaggerItem>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Case Study 1 */}
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">End-to-End Automation</h3>
                    <p className="text-xs text-muted-foreground">Python · Batch Processing · 1,000+ Requests</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p><strong className="text-foreground">Challenge:</strong> The Consultant demanded submission of 1,000 requests within one week for 80 villas (10–15 requests each).</p>
                  <p><strong className="text-foreground">Solution:</strong> Designed a multi-stage automated pipeline — Excel data scaling → Bulk PDF generation → Python-based intelligent splitting of scanned documents by detecting A4 cover sheets vs A3 attachments.</p>
                  <p><strong className="text-foreground">Result:</strong> 1,000+ files generated, split, renamed, and archived automatically with 100% coding accuracy.</p>
                </div>

                <div className="flex gap-3 items-center justify-center py-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-16 rounded border-2 border-primary/60 bg-primary/5 flex items-center justify-center text-[10px] font-mono text-primary">A4</div>
                    <span className="text-[10px] text-muted-foreground">Cover Sheet</span>
                  </div>
                  <span className="text-primary font-bold text-lg">→</span>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-16 h-12 rounded border-2 border-accent/60 bg-accent/5 flex items-center justify-center text-[10px] font-mono text-accent-foreground">A3</div>
                    <span className="text-[10px] text-muted-foreground">Attachment</span>
                  </div>
                  <span className="text-primary font-bold text-lg">→</span>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-12 rounded border-2 border-primary bg-primary/10 flex items-center justify-center text-[10px] font-mono text-primary">📄</div>
                    <span className="text-[10px] text-muted-foreground">Split PDF</span>
                  </div>
                </div>

                <CodeBlock code={pythonSnippet} language="Python" expanded={expandedPython} onToggle={() => setExpandedPython(!expandedPython)} label="Python Script" />
              </div>

              {/* Case Study 2 */}
              <div className="glass-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <FolderTree className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Villa Folder Segregation</h3>
                    <p className="text-xs text-muted-foreground">VBA Macro · PowerShell · File Automation</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p><strong className="text-foreground">Challenge:</strong> 80 villas required individual folder structures with consistent subfolders for Drawings, Submittals, RFIs, Correspondence, and Photos.</p>
                  <p><strong className="text-foreground">Solution:</strong> Built a VBA Macro to auto-generate all 80 villa folder trees from a master list, then used PowerShell to bulk-rename and sort scanned documents into the correct locations.</p>
                  <p><strong className="text-foreground">Result:</strong> 400+ folders created instantly; file sorting reduced from hours of manual work to under 2 minutes.</p>
                </div>

                <div className="space-y-2">
                  <CodeBlock code={vbaSnippet} language="VBA" expanded={expandedVBA} onToggle={() => setExpandedVBA(!expandedVBA)} label="VBA Macro" />
                  <CodeBlock code={powershellSnippet} language="PowerShell" expanded={expandedPS} onToggle={() => setExpandedPS(!expandedPS)} label="PowerShell Script" />
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Case Study 3 - Full width */}
          <StaggerItem>
            <div className="glass-card p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Excel Search Engine</h3>
                  <p className="text-xs text-muted-foreground">VSTACK/FILTER · Structured Indexing · 11,000+ Records</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p><strong className="text-foreground">Context:</strong> Large project repository with 11,000+ documents across multiple stakeholders. Finding the right file was impacting productivity.</p>
                  <p><strong className="text-foreground">Solution:</strong> Built an Excel-based local search tool using a VSTACK/FILTER formula that queries across Drawings, Submittals, and Correspondence logs simultaneously — with keyword matching on document titles, reference numbers, and subjects.</p>
                  <p><strong className="text-foreground">Impact:</strong> Reduced average retrieval time from <span className="text-foreground font-semibold">3 minutes → 30 seconds</span>. Improved site team responsiveness and faster coordination across project entities.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {["Drawings Log", "Submittals Log", "Correspondence Log"].map((log) => (
                      <span key={log} className="tech-badge text-xs">{log}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                    <span className="text-primary font-mono">fx</span> VSTACK + FILTER Formula:
                  </div>
                  <pre className="bg-background border border-border rounded-lg p-4 text-xs font-mono overflow-x-auto text-muted-foreground leading-relaxed">
                    <code>{excelFormula}</code>
                  </pre>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Advanced Excel", "Metadata Fields", "Naming Standards", "Dashboard Logs"].map((t) => (
                      <span key={t} className="tech-badge text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CaseStudies;
