"use client";

import { useState, useRef, DragEvent } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25MB total

export default function QuoteForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFiles = (fileList: File[]): { valid: File[]; error: string | null } => {
    const validFiles: File[] = [];
    let totalSize = 0;

    for (const file of fileList) {
      if (file.size > MAX_FILE_SIZE) {
        return {
          valid: [],
          error: `"${file.name}" exceeds 10MB limit. Please use Google Drive or Dropbox for larger files.`,
        };
      }
      totalSize += file.size;
      if (totalSize > MAX_TOTAL_SIZE) {
        return {
          valid: [],
          error: "Total file size exceeds 25MB. Please use Google Drive or Dropbox for larger files.",
        };
      }
      validFiles.push(file);
    }

    return { valid: validFiles, error: null };
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    const { valid, error } = validateFiles(droppedFiles);
    setFileError(error);
    setFiles(valid);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const { valid, error } = validateFiles(selectedFiles);
      setFileError(error);
      setFiles(valid);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    setFileError(null);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Add files to formData
      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Server error:", result);
        throw new Error(result.message || "Failed to submit");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      const message = error instanceof Error ? error.message : "Unknown error";
      alert(`There was an error: ${message}. Please try again or call us directly at (405) 546-2228.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[2rem]">
          ✓
        </div>
        <h3 className="font-serif text-[1.5rem] text-[#0f172a] mb-2">
          Quote request received!
        </h3>
        <p className="text-[#64748b] text-[0.95rem]">
          We&apos;ll get back to you within one business day — usually much
          sooner.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Peter"
            required
            className="w-full px-4 py-3 border-[1.5px] border-[#e2e8f0] rounded-[10px] text-[0.92rem] text-[#1e293b] placeholder:text-[#94a3b8] outline-none transition-all duration-200 focus:border-[#36a5ff] focus:shadow-[0_0_0_3px_#f0f7ff]"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Smith"
            required
            className="w-full px-4 py-3 border-[1.5px] border-[#e2e8f0] rounded-[10px] text-[0.92rem] text-[#1e293b] placeholder:text-[#94a3b8] outline-none transition-all duration-200 focus:border-[#36a5ff] focus:shadow-[0_0_0_3px_#f0f7ff]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            required
            className="w-full px-4 py-3 border-[1.5px] border-[#e2e8f0] rounded-[10px] text-[0.92rem] text-[#1e293b] placeholder:text-[#94a3b8] outline-none transition-all duration-200 focus:border-[#36a5ff] focus:shadow-[0_0_0_3px_#f0f7ff]"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5"
          >
            Phone <span className="font-normal text-[#94a3b8]">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(405) 555-0000"
            className="w-full px-4 py-3 border-[1.5px] border-[#e2e8f0] rounded-[10px] text-[0.92rem] text-[#1e293b] placeholder:text-[#94a3b8] outline-none transition-all duration-200 focus:border-[#36a5ff] focus:shadow-[0_0_0_3px_#f0f7ff]"
          />
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label
            htmlFor="service"
            className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5"
          >
            What do you need?
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full px-4 py-3 border-[1.5px] border-[#e2e8f0] rounded-[10px] text-[0.92rem] text-[#1e293b] bg-white outline-none transition-all duration-200 focus:border-[#36a5ff] focus:shadow-[0_0_0_3px_#f0f7ff] appearance-none cursor-pointer pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
            }}
          >
            <option value="" disabled>
              Select a service...
            </option>
            <option value="printing">3D Printing</option>
            <option value="modeling">3D Modeling / Design</option>
            <option value="scanning">3D Scanning</option>
            <option value="reverse">Reverse Engineering</option>
            <option value="batch">Batch Production Run</option>
            <option value="unsure">Not sure yet — need guidance</option>
          </select>
        </div>

        {/* Material */}
        <div className="sm:col-span-2">
          <label
            htmlFor="material"
            className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5"
          >
            Preferred Material{" "}
            <span className="font-normal text-[#94a3b8]">(optional)</span>
          </label>
          <select
            id="material"
            name="material"
            defaultValue=""
            className="w-full px-4 py-3 border-[1.5px] border-[#e2e8f0] rounded-[10px] text-[0.92rem] text-[#1e293b] bg-white outline-none transition-all duration-200 focus:border-[#36a5ff] focus:shadow-[0_0_0_3px_#f0f7ff] appearance-none cursor-pointer pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
            }}
          >
            <option value="">Not sure / let me know what&apos;s best</option>
            <option value="pla">PLA — Prototypes & display</option>
            <option value="petg">PETG — Functional parts</option>
            <option value="abs">ABS — Heat & impact resistant</option>
            <option value="tpu">TPU — Flexible parts</option>
            <option value="other">Other / need advice</option>
          </select>
        </div>

        {/* Project Details */}
        <div className="sm:col-span-2">
          <label
            htmlFor="details"
            className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5"
          >
            Project Details
          </label>
          <textarea
            id="details"
            name="details"
            required
            rows={5}
            placeholder="Tell us about your project. What are you trying to solve? Include dimensions, quantity, or anything else that helps us understand what you need."
            className="w-full px-4 py-3 border-[1.5px] border-[#e2e8f0] rounded-[10px] text-[0.92rem] text-[#1e293b] placeholder:text-[#94a3b8] outline-none transition-all duration-200 focus:border-[#36a5ff] focus:shadow-[0_0_0_3px_#f0f7ff] resize-y min-h-[120px]"
          />
        </div>

        {/* File Upload */}
        <div className="sm:col-span-2">
          <label className="block text-[0.82rem] font-semibold text-[#334155] mb-1.5">
            Upload Files{" "}
            <span className="font-normal text-[#94a3b8]">(optional)</span>
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
              isDragging
                ? "border-[#fb923c] bg-[#fff7ed]"
                : fileError
                ? "border-[#ef4444] bg-[#fef2f2]"
                : "border-[#e2e8f0] bg-[#f8fafc] hover:border-[#36a5ff] hover:bg-[#f0f7ff]"
            }`}
          >
            <div className="text-[2rem] mb-2">📎</div>
            <div className="text-[0.88rem] text-[#64748b]">
              <strong className="text-[#0c8ce9]">Click to upload</strong> or drag and drop
            </div>
            <div className="text-[0.75rem] text-[#94a3b8] mt-1">
              STL, OBJ, STEP, PDF, JPG, PNG — max 10MB per file, 25MB total
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".stl,.obj,.step,.stp,.pdf,.jpg,.jpeg,.png"
              multiple
              onChange={handleFileChange}
            />
          </div>

          {/* File Error */}
          {fileError && (
            <div className="mt-2 p-3 bg-[#fef2f2] border border-[#fecaca] rounded-lg text-[0.82rem] text-[#dc2626]">
              {fileError}
            </div>
          )}

          {/* Selected Files List */}
          {files.length > 0 && (
            <div className="mt-3 space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#f0f7ff] border border-[#e0f2fe] rounded-lg"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[#0c8ce9]">📄</span>
                    <span className="text-[0.85rem] text-[#334155] truncate">
                      {file.name}
                    </span>
                    <span className="text-[0.75rem] text-[#94a3b8] whitespace-nowrap">
                      ({formatFileSize(file.size)})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                    className="text-[#94a3b8] hover:text-[#ef4444] transition-colors p-1"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Large File Note */}
          <p className="mt-3 text-[0.75rem] text-[#64748b]">
            <strong>Have larger files?</strong> Email them directly to{" "}
            <a href="mailto:Connect@3dlabsokc.com" className="text-[#f97316] hover:underline">
              Connect@3dlabsokc.com
            </a>{" "}
            or share a Google Drive / Dropbox link in the project details above.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#f97316] text-white font-bold text-[1rem] rounded-xl transition-all duration-300 hover:bg-[#ea580c] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Submit Quote Request
            <svg
              className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-[3px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-[0.78rem] text-[#94a3b8] mt-4">
        Free — no obligation. We typically respond within a few hours.
      </p>
    </form>
  );
}
